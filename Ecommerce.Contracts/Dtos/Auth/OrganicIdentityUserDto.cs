﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Ecommerce.Contracts.Dtos.Auth
{
    public class OrganicIdentityUserDto
    {
        public Guid Id { get; set; }

        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string UserName { get; set; }

        public string Email { get; set; }

        public string PhoneNumber { get; set; }


        public string Line1 { get; set; }

        public string Province { get; set; }

        public string Country { get; set; }

        public List<string>? Roles { get; set; }
    }
}
