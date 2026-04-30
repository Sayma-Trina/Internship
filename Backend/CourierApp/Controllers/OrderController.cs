using CourierApp.Services;
using Microsoft.AspNetCore.Mvc;

namespace CourierApp.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class OrdersController : ControllerBase
    {
        private readonly OrderService _orderService;

        public OrdersController(OrderService orderService)
        {
            _orderService = orderService;
        }

        [HttpGet("{trackingNumber}")]
        public IActionResult GetOrder(string trackingNumber)
        {
            var result = _orderService.GetOrderByTrackingNumber(trackingNumber);

            if (result == null)
            {
                return NotFound("Tracking Number is not Found");
            }

            return Ok(result);
        }
    }
}