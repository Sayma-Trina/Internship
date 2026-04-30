using System.ComponentModel.DataAnnotations;

namespace CourierApp.Models
{
    public class Order
    {
        [Key]
        public int Id { get; set; }

        
        public required string TrackingNumber { get; set; }

        public required string FromCity { get; set; }
        public required string ToCity { get; set; }
        public required string DeliveryType { get; set; }
        public required string ProductType { get; set; }
        public double Weight { get; set; }
        public double Price { get; set; }
        public required string Status { get; set; }
    }
}