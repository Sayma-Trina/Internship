using CourierApp.Common.Responses;
using CourierApp.Models;
using CourierApp.Repositories;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace CourierApp.Services
{
    public class AuthService
    {
        private readonly IUserRepository _repo;
        private readonly IConfiguration _configuration;

        public AuthService(IUserRepository repo, IConfiguration configuration)
        {
            _repo = repo;
            _configuration = configuration;
        }

        public object Login(User user)
        {
            var existingUser = _repo.GetUserByEmailAndPassword(user.Email, user.Password);

            if (existingUser == null)
                return null;

            var claims = new[]
            {
                new Claim(ClaimTypes.Name, existingUser.Email),
                new Claim(ClaimTypes.Role, existingUser.Role),
                new Claim("userId", existingUser.Id.ToString())
            };

            var key = new SymmetricSecurityKey(
                Encoding.UTF8.GetBytes(_configuration["Jwt:Key"])
            );

            var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

            var token = new JwtSecurityToken(
                issuer: _configuration["Jwt:Issuer"],
                audience: _configuration["Jwt:Audience"],
                claims: claims,
                expires: DateTime.Now.AddHours(2),
                signingCredentials: creds
            );

            var jwt = new JwtSecurityTokenHandler().WriteToken(token);

            return new
            {
                token = jwt,
                user = new
                {
                    existingUser.Id,
                    existingUser.Email,
                    existingUser.Role
                }
            };
        }

        public bool Register(User user)
        {
            if (_repo.GetUserByEmail(user.Email) != null)
                return false;

            _repo.AddUser(user);
            _repo.Save();

            return true;
        }
    }
}