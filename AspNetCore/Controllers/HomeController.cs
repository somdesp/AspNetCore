using Microsoft.AspNetCore.Mvc;
using AspNetCore.Data;

namespace Udemy.Controllers
{
    public class HomeController : Controller
    {
        private readonly IProdutoRepository _repository;

        public HomeController(IProdutoRepository repository)
        {
            _repository = repository;
        }
        public IActionResult Index()
        {
            return View();
        }



        public string Obter()
        {
           return "Ola";
        }
    }
}