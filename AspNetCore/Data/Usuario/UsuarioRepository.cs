using System.Collections.Generic;
using System.Linq;
using AspNetCore.Model;

namespace AspNetCore.Data
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly Contexto _contexto;

        public UsuarioRepository(Contexto contexto)
        {
            _contexto = contexto;
        }

        public bool InserirUsuario(Usuario usuario)
        {

            _contexto.Usuario.Add(usuario);
            return _contexto.SaveChanges();

        }


        public List<Usuario> ListarUsuarios()
        {
            return _contexto.Usuario.ToList();
        }

        public Usuario ObterUsuarioId(int id)
        {
            return _contexto.Usuario.FirstOrDefault(p => p.Id == id);

        }
    }
}
