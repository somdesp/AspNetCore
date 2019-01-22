using System.Collections.Generic;
using AspNetCore.Model;

namespace AspNetCore.Data
{
    public interface IProdutoRepository
    {
        List<Produto> ListarProdutos();
        Produto ObterProdutoId(int id);
        bool InserirProduto(Produto produto);
    }
}