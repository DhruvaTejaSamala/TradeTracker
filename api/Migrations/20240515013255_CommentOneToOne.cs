using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class CommentOneToOne : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "126d72ef-2a9b-40aa-beda-295c02755b33");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "516419b2-7232-4f8d-858a-08c63e4fe94f");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "1727f0ce-d743-499e-b4fb-25c62cd23d01", null, "Admin", "ADMIN" },
                    { "5ca43d51-c633-4ae6-9b0b-e5eddf850d7c", null, "User", "USER" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "1727f0ce-d743-499e-b4fb-25c62cd23d01");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "5ca43d51-c633-4ae6-9b0b-e5eddf850d7c");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "126d72ef-2a9b-40aa-beda-295c02755b33", null, "Admin", "ADMIN" },
                    { "516419b2-7232-4f8d-858a-08c63e4fe94f", null, "User", "USER" }
                });
        }
    }
}
