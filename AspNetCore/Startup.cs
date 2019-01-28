using AspNetCore.Data;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Cors.Internal;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace AspNetCore
{
  public class Startup
  {
    private IConfiguration _configuration;

    public Startup(IHostingEnvironment env)
    {
      var builder = new ConfigurationBuilder()
          .SetBasePath(env.ContentRootPath)
          .AddJsonFile("appsetting.json", optional: true, reloadOnChange: true)
          .AddJsonFile("config.json", optional: true, reloadOnChange: true);

      _configuration = builder.Build();
    }

    // This method gets called by the runtime. Use this method to add services to the container.
    // For more information on how to configure your application, visit https://go.microsoft.com/fwlink/?LinkID=398940
    public void ConfigureServices(IServiceCollection services)
    {
      // Add Cors
      services.AddCors(o => o.AddPolicy("MyPolicy", builder =>
      {
        builder.WithOrigins("http://localhost:4200")
          .AllowAnyMethod()
          .AllowAnyHeader();
      }));

      var sqlConnection = _configuration.GetConnectionString("dbConnection");
      services.AddDbContext<Contexto>(options =>
          options.UseSqlServer(sqlConnection, b => b.MigrationsAssembly("AspNetCore")));

      services.AddMvc();
      services.AddScoped<IProdutoRepository, ProdutoRepository>();
      services.AddScoped<IUsuarioRepository, UsuarioRepository>();
 


    }

    // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
    public void Configure(IApplicationBuilder app, IHostingEnvironment env)
    {
      app.UseStaticFiles();
      app.UseMvcWithDefaultRoute();

      // Enable Cors
      app.UseCors("MyPolicy");
    }
  }
}
