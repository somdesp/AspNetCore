using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AspNetCore.Data;
using AspNetCore.Model;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AspNetCore.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [EnableCors("MyPolicy")]
  public class UsuarioController : ControllerBase
    {
      private readonly IUsuarioRepository _usuarioRepository;
      public UsuarioController(IUsuarioRepository usuarioRepository)
      {
      _usuarioRepository = usuarioRepository;
      }

      [HttpGet]
      public IActionResult ListarUsuarios()
      {
        try
        {
          return Ok(_usuarioRepository.ListarUsuarios());
        }
        catch (Exception e)
        {
          return BadRequest("Error " + e.Message);

        }

      }

      [HttpGet]
      public IActionResult ObterUsuarioId(int id)
      {
        try
        {
          return Ok(_usuarioRepository.ObterUsuarioId(id));
        }
        catch (Exception e)
        {
          return BadRequest("Error " + e.Message);

        }

      }

      [HttpPost]
      public IActionResult InserirUsuario(Usuario usuario)
      {
        try
        {
        _usuarioRepository.InserirUsuario(usuario);
          return Created("/api/usuario/ObterUsuarioId", usuario);
        }
        catch (Exception e)
        {
          return BadRequest("Error " + e.Message);

        }

      }
  }
}
