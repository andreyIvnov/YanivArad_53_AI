// Write a function that returns an array of Product objects with at least  5 properrties.
// A product must has a price key and must not has a color key
// c#

using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Lesson2._2___Pormpts_Engineering
{
    public class Product
    {
        public string Name { get; set; }
        public decimal Price { get; set; }
        public string Category { get; set; }
        public string Description { get; set; }
        public int Stock { get; set; }
    }

    public class ProductRepository
    {
        public List<Product> GetProducts()
        {
            return new List<Product>
            {
                new Product { Name = "Laptop", Price = 999.99m, Category = "Electronics", Description = "High performance laptop", Stock = 50 },
                new Product { Name = "Smartphone", Price = 499.99m, Category = "Electronics", Description = "Latest model smartphone", Stock = 100 },
                new Product { Name = "Headphones", Price = 199.99m, Category = "Accessories", Description = "Noise-cancelling headphones", Stock = 200 },
                new Product { Name = "Smartwatch", Price = 299.99m, Category = "Wearables", Description = "Feature-rich smartwatch", Stock = 75 },
                new Product { Name = "Tablet", Price = 399.99m, Category = "Electronics", Description = "Portable tablet with high resolution display", Stock = 30 }
            };
        }
    }
}


