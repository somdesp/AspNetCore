﻿namespace AspNetCore.Model
{
    public class ItemPedido
    {
        public int Id { get; set; }
        public Produto Produto { get; set; }
        public int Quantidade { get; set; }
    }
}
