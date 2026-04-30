using CourierApp.Models;

namespace CourierApp.Repositories
{
    public interface IOrderRepository
    {
        Order GetByTrackingNumber(string trackingNumber);
    }
}