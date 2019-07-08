using Microsoft.EntityFrameworkCore;
using System;

namespace Challange1.Dal
{
    public class ChallangeDbContext : DbContext
    {
        private static bool _created = false;
        public ChallangeDbContext()
        {
            if (!_created)
            {
                _created = true;
                //Database.EnsureDeleted();
                Database.EnsureCreated();
            }
        }
        protected override void OnConfiguring(DbContextOptionsBuilder optionbuilder)
        {
            optionbuilder.UseSqlite(@"Data Source=..\Challange1.DB\Challange.db");
        }

        public DbSet<Product> Products { get; set; }
    }

}
