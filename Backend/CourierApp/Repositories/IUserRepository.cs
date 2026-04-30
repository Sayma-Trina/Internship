using CourierApp.Models;

namespace CourierApp.Repositories
{
    public interface IUserRepository
    {
        User GetUserByEmailAndPassword(string email, string password);
        User GetUserByEmail(string email);
        void AddUser(User user);
        void Save();
    }
}