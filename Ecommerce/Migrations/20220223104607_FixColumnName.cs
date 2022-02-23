using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Ecommerce.DataAccessor.Migrations
{
    public partial class FixColumnName : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Pubished",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "Pubished",
                table: "Categories");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "Product",
                newName: "Updated_at");

            migrationBuilder.RenameColumn(
                name: "CreatorId",
                table: "Product",
                newName: "Created_by");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Product",
                newName: "Created_at");

            migrationBuilder.RenameColumn(
                name: "UpdatedDate",
                table: "Categories",
                newName: "Updated_at");

            migrationBuilder.RenameColumn(
                name: "CreatorId",
                table: "Categories",
                newName: "Created_by");

            migrationBuilder.RenameColumn(
                name: "CreatedDate",
                table: "Categories",
                newName: "Created_at");

            migrationBuilder.AddColumn<Guid>(
                name: "Updated_by",
                table: "Product",
                type: "uniqueidentifier",
                nullable: true);

            migrationBuilder.AddColumn<Guid>(
                name: "Updated_by",
                table: "Categories",
                type: "uniqueidentifier",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Updated_by",
                table: "Product");

            migrationBuilder.DropColumn(
                name: "Updated_by",
                table: "Categories");

            migrationBuilder.RenameColumn(
                name: "Updated_at",
                table: "Product",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created_by",
                table: "Product",
                newName: "CreatorId");

            migrationBuilder.RenameColumn(
                name: "Created_at",
                table: "Product",
                newName: "CreatedDate");

            migrationBuilder.RenameColumn(
                name: "Updated_at",
                table: "Categories",
                newName: "UpdatedDate");

            migrationBuilder.RenameColumn(
                name: "Created_by",
                table: "Categories",
                newName: "CreatorId");

            migrationBuilder.RenameColumn(
                name: "Created_at",
                table: "Categories",
                newName: "CreatedDate");

            migrationBuilder.AddColumn<bool>(
                name: "Pubished",
                table: "Product",
                type: "bit",
                nullable: false,
                defaultValue: false);

            migrationBuilder.AddColumn<bool>(
                name: "Pubished",
                table: "Categories",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }
    }
}
