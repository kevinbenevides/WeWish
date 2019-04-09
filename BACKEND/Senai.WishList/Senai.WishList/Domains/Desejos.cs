using System;
using System.Collections.Generic;

namespace Senai.WishList.Domains
{
    public partial class Desejos
    {
        public int Id { get; set; }
        public int? Idusuario { get; set; }
        public DateTime Datacriacao { get; set; }
        public string Descricao { get; set; }

        public Usuarios IdusuarioNavigation { get; set; }
    }
}
