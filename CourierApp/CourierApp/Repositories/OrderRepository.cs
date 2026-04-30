using CourierApp.Data;
using CourierApp.Models;
using System.Linq;

namespace CourierApp.Repositories
{
    public class OrderRepository : IOrderRepository
    {
        private readonly AppDbContext _context;

        public OrderRepository(AppDbContext context)
        {
            _context = context;
        }

        public Order? GetByTrackingNumber(string trackingNumber)
        {
            return _context.Orders
                .FirstOrDefault(o => o.TrackingNumber == trackingNumber);
        }
    }
}