using Challange1.Models;

namespace Challange1.Services
{
    public interface IProductService
    {
        ProductModel GetProduct(int id);
        ProductsModel GetProducts();
        bool Create(ProductModel model);
        bool Update(ProductModel model);
        bool Delete(int id);
    }
}