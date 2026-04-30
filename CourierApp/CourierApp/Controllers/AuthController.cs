using CourierApp.Common.Responses;
using CourierApp.Models;
using CourierApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace CourierApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class AuthController : ControllerBase
    {
        private readonly AuthService _authService;

        public AuthController(AuthService authService)
        {
            _authService = authService;
        }

        [HttpPost("login")]
        public IActionResult Login([FromBody] User user)
        {
            var result = _authService.Login(user);

            if (result == null)
                return Unauthorized(ResponseFactory.Fail<object>("Invalid email or password"));

            return Ok(ResponseFactory.Success(result, "Login successful"));
        }

        [HttpPost("register")]
        public IActionResult Register([FromBody] User user)
        {
            var success = _authService.Register(user);

            if (!success)
                return BadRequest(ResponseFactory.Fail<object>("User already exists"));

            return Ok(ResponseFactory.Success(user, "Registration successful"));
        }
    }
}