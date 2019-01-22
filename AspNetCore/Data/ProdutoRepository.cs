using System.Collections.Generic;
using System.Linq;
using AspNetCore.Model;

namespace AspNetCore.Data
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly Contexto _contexto;

        public ProdutoRepository(Contexto contexto)
        {
            _contexto = contexto;
        }

        public bool InserirProduto(Produto produto)
        {

            _contexto.Produtos.Add(produto);
            return _contexto.SaveChanges();

        }

        public List<Produto> ListarProdutos()
        {
            return _contexto.Produtos.ToList();
        }

        public Produto ObterProdutoId(int id)
        {
            return _contexto.Produtos.FirstOrDefault(p => p.Id == id);

        }
    }
}
