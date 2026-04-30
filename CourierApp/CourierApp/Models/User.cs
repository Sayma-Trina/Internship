using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;

namespace CourierApp.Models
{
    public class User 
    {
        [Key]
        public int Id { get; set; }

        public required string Email { get; set; }

        public required string Password { get; set; }

        public required string Role { get; set; }
    }
}