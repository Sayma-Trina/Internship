using System;
using System.Linq;
using CourierApp.Data;
using CourierApp.Repositories;

namespace CourierApp.Services
{
    public class OrderService
    {
        private readonly IOrderRepository _repo;

        public OrderService(IOrderRepository repo)
        {
            _repo = repo;
        }

        public object GetOrderByTrackingNumber(string trackingNumber)
        {
            var order = _repo.GetByTrackingNumber(trackingNumber);

            if (order == null) return null;

            return new
            {
                trackingNumber = order.TrackingNumber,
                status = order.Status,
                sender = order.FromCity,
                receiver = order.ToCity,
                deliveryType = order.DeliveryType,
                productType = order.ProductType,
                weight = order.Weight,
                price = order.Price,
                estimatedDelivery = "2-3 days",
                history = new[]
                {
                new
                {
                    date = DateTime.Now.ToString("yyyy-MM-dd HH:mm"),
                    status = order.Status,
                    location = order.FromCity
                }
            }
            };
        }
    
}
}