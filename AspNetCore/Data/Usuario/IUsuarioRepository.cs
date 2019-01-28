using System.Collections.Generic;
using AspNetCore.Model;

namespace AspNetCore.Data
{
    public interface IUsuarioRepository
    {
        List<Usuario> ListarUsuarios();
        Usuario ObterUsuarioId(int id);
        bool InserirUsuario(Usuario usuario);
    }
}
