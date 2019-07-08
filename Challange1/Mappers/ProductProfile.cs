using AutoMapper;
using Challange1.Dal;
using System;

namespace Challange1.Models
{
    public class ProductProfile: Profile
    {
        public ProductProfile()
        {
            CreateMap<Product, ProductModel>().ReverseMap();
        }
    }
}