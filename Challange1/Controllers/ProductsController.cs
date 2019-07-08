using Challange1.Models;
using Challange1.Services;
using Microsoft.AspNetCore.Mvc;

namespace Challange1.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        private IProductService _productService;

        public ProductController(IProductService productService)
        {
            _productService = productService;
        }

        [Route("list")]
        [HttpGet]
        public ProductsModel GetProducts()
        {
            return _productService.GetProducts();
        }

        [Route("{id}")]
        [HttpGet]
        public ProductModel GetProduct(int id)
        {
            return _productService.GetProduct(id);
        }

        [Route("create")]
        [HttpPost]
        public bool CreateProduct ([FromBody]ProductModel model)
        {
            return _productService.Create(model);
        }

        [Route("update")]
        [HttpPut]
        public bool UpdateProduct([FromBody]ProductModel model)
        {
            return _productService.Update(model);
        }

        [Route("delete/{id}")]
        [HttpDelete]
        public bool DeleteProduct(int id)
        {
            return _productService.Delete(id);
        }
    }
}