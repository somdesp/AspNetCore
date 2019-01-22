using System;
using Microsoft.EntityFrameworkCore;
using AspNetCore.Model;

namespace AspNetCore.Data
{
    public class Contexto : DbContext
    {
        public DbSet<Produto> Produtos { get; set; }
        public DbSet<ItemPedido> ItemPedidos { get; set; }
        public DbSet<Pedido> Pedidos { get; set; }

        public Contexto(DbContextOptions<Contexto> options) : base(options)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Produto>().HasKey(p => p.Id);
            modelBuilder.Entity<ItemPedido>().HasKey(p => p.Id);
            modelBuilder.Entity<Pedido>().HasKey(p => p.Id);

            base.OnModelCreating(modelBuilder);
        }

        public bool SaveChanges()
        {
            bool retorno = false;
            try
            {
                ChangeTracker.DetectChanges();
                base.SaveChanges();
                retorno = true;
            }
            catch (Exception e)
            {
               
            }
            return retorno;
        }
    }
}
