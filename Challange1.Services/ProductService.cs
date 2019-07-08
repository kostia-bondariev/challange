using AutoMapper;
using Challange1.Dal;
using Challange1.Models;
using System.Collections.Generic;
using System.Linq;

namespace Challange1.Services
{
    public class ProductService : IProductService
    {
        private readonly IMapper _mapper;
        private readonly ChallangeDbContext _context;

        public ProductService(IMapper mapper, ChallangeDbContext context)
        {
            _mapper = mapper;
            _context = context;
        }

        public ProductsModel GetProducts()
        {
            var count = _context.Products.Count();
            var products = _context.Products.ToList();

            return new ProductsModel()
            {
                Count = count,
                Data = _mapper.Map<List<Product>, List<ProductModel>>(products)
            };
        }

        public ProductModel GetProduct(int id)
        {
            var product = _context.Products.SingleOrDefault(x => x.Id == id);

            return _mapper.Map<ProductModel>(product);
        }

        public bool Create(ProductModel model)
        {
            var entity = _mapper.Map<Product>(model);
            _context.Products.Add(entity);

            _context.SaveChanges();
            return true;
        }

        public bool Update(ProductModel model)
        {
            var entity = _mapper.Map<Product>(model);
            _context.Products.Update(entity);

            _context.SaveChanges();
            return true;
        }

        public bool Delete(int id)
        {
            var product = _context.Products.SingleOrDefault(x => x.Id == id);
            _context.Products.Remove(product);

            _context.SaveChanges();
            return true;
        }

    }
}
