using System;
using Microsoft.AspNetCore.Mvc;
using AspNetCore.Data;
using AspNetCore.Model;

namespace Udemy.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly IProdutoRepository _produtoRepository;
        public ProdutoController(IProdutoRepository produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }

        [HttpGet]
        public IActionResult ListarProdutos()
        {
            try
            {
                return Ok(_produtoRepository.ListarProdutos());
            }
            catch (Exception e)
            {
                return BadRequest("Error " + e.Message);

            }
             
        }

        [HttpGet]
        public IActionResult ObterProdutoId(int id)
        {
            try
            {
                return Ok(_produtoRepository.ObterProdutoId(id));
            }
            catch (Exception e)
            {
                return BadRequest("Error " + e.Message);

            }

        }

        [HttpPost]
        public IActionResult InserirProduto(Produto produto)
        {
            try
            {
               _produtoRepository.InserirProduto(produto);
                return Created("/api/produto/", produto);
            }
            catch (Exception e)
            {
                return BadRequest("Error " + e.Message);

            }

        }
    }
}