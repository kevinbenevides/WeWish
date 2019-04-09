using Senai.WishList.Domains;
using Senai.WishList.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.WishList.Repositories
{
    public class DesejoRepository : IDesejoRepository
    {


        WishListContext ctx = new WishListContext();

        


        public void Cadastrar(Desejos Desejo)
        {
            ctx.Desejos.Add(Desejo);
            ctx.SaveChanges();
        }

        public List<Desejos> Listar()
        {
            return (ctx.Desejos.ToList());
        }

        public List<Desejos> ListarDesejos(int id)
        {
            return (ctx.Desejos.ToList().FindAll(c => c.Idusuario == id));
        }
    }
}
