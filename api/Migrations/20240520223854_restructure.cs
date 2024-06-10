using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class restructure : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5192699f-51ac-4f49-bb42-079d47ae46c9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "7f233964-4a77-4fc7-ad35-fc42f97a86fc");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "39330c29-8a02-469a-aa07-6f7e47fe69d5", null, "User", "USER" },
                    { "70775c6f-5132-4185-aca4-f1f2ef81fa58", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "39330c29-8a02-469a-aa07-6f7e47fe69d5");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "70775c6f-5132-4185-aca4-f1f2ef81fa58");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "5192699f-51ac-4f49-bb42-079d47ae46c9", null, "User", "USER" },
                    { "7f233964-4a77-4fc7-ad35-fc42f97a86fc", null, "Admin", "ADMIN" }
                });
        }
    }
}
