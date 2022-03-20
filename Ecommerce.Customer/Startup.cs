using Ecommerce.Business;
using Ecommerce.Identity;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.DependencyInjection.Extensions;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ecommerce.Customer
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {

            services.AddSession();
            services.AddRazorPages();
            services.AddBusinessLayer(Configuration);
            services.AddIdentityLayer(Configuration);
            services.AddRazorPages().AddRazorRuntimeCompilation();
            services.AddMvc().AddRazorPagesOptions(option =>
            {
                option.Conventions.AddPageRoute("/Home/Index", "");
                option.Conventions.AddPageRoute("/Home/Contact", "Contact");
                
            });

            services.TryAddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddAuthentication(options =>
            {
                options.DefaultScheme = "Cookies";
                options.DefaultChallengeScheme = "oidc";
            })
               .AddCookie("Cookies", options =>
               {
                   options.AccessDeniedPath = "/Errors/Error403";
               })
               .AddOpenIdConnect("oidc", options =>
               {
                   options.Authority = "https://localhost:5003";

                   options.ClientId = "mvc";
                   options.ClientSecret = "secret";
                   options.ResponseType = "code";
                   options.UsePkce = true;

                   options.Scope.Add("profile");
                   options.Scope.Add("offline_access");

                   options.Scope.Add("roles");
                   options.ClaimActions.MapJsonKey("role", "role", "role");
                   options.TokenValidationParameters.RoleClaimType = "role";
                   options.GetClaimsFromUserInfoEndpoint = true;
                   options.SaveTokens = true;
               })
               ;
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }


            app.UseSession();
            app.UseHttpsRedirection();
            app.UseStaticFiles();
            app.UseRouting();
            app.UseAuthentication();
            app.UseAuthorization();
            

            //Use status to create error page
            app.UseStatusCodePages();
            app.UseStatusCodePagesWithRedirects("/Errors/Error{0}");

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapRazorPages();
            });
        }
    }
}
