using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using DutchTreat.Data.Entities;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Newtonsoft.Json;
using Microsoft.AspNetCore.Identity;
namespace DutchTreat.Data
{
    public class DutchSeeder
    {
        private readonly DutchContext _ctx;
        private readonly IHostingEnvironment _hosting;
        private readonly UserManager<User> _userManager;
        private readonly RoleManager<IdentityRole> _roleManager;

        public DutchSeeder(DutchContext ctx,
      IHostingEnvironment hosting,
                RoleManager<IdentityRole> roleManager,
      UserManager<User> userManager)
        {
            _ctx = ctx;
            _hosting = hosting;
            _roleManager = roleManager;
            _userManager = userManager;
        }

        public async Task Seed()
        {
            _ctx.Database.EnsureCreated();

            var user = await _userManager.FindByNameAsync("gpan");

            if (user == null)
            {
                user = new User()
                {
                    FirstName = "george",
                    LastName = "pan",
                    UserName = "gpan",
                    Email = "gpan@yahoo.com",
                    avator = "svg-2",
                    bio = "GP is happy",
                    birthDate = new DateTime(1954, 9, 9)
                };

                var result = await _userManager.CreateAsync(user, "Jeff!113");
                if (result != IdentityResult.Success)
                {
                    throw new InvalidOperationException("Failed to create default user");
                }
                if (!await _roleManager.RoleExistsAsync("Administrator"))
                    await _roleManager.CreateAsync(new IdentityRole { Name = "Administrator" });
                if (!await _roleManager.RoleExistsAsync("Supporter"))
                    await _roleManager.CreateAsync(new IdentityRole { Name = "Supporter" });
                if (!await _roleManager.RoleExistsAsync("Patient"))
                    await _roleManager.CreateAsync(new IdentityRole { Name = "Patient" });

                await _roleManager.CreateAsync(new IdentityRole { Name = "Administrator" });
                await _userManager.AddToRoleAsync(user, "Administrator");
                await _userManager.AddToRoleAsync(user, "Supporter");
                await _userManager.AddToRoleAsync(user, "Patient");
            }

            if (!_ctx.Products.Any())
            {
                // Need to create sample data
                var filepath = Path.Combine(_hosting.ContentRootPath, "Data/art.json");
                var json = File.ReadAllText(filepath);
                var products = JsonConvert.DeserializeObject<IEnumerable<Product>>(json);
                _ctx.Products.AddRange(products);

                var order = new Order()
                {
                    OrderDate = DateTime.Now,
                    OrderNumber = "12345",
                    User = user,
                    Items = new List<OrderItem>()
          {
            new OrderItem()
            {
              Product = products.First(),
              Quantity = 5,
              UnitPrice = products.First().Price
            }
          }
                };

                _ctx.Orders.Add(order);

                _ctx.SaveChanges();

            }
        }
    }
}
