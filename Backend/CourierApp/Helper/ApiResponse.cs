namespace CourierApp.Helper
{
    public class ApiResponse<Trina>
    {
        public bool Success { get; set; }
        public string Message { get; set; }
        public Trina? Data { get; set; }
        public int StatusCode { get; set; }
    }
}