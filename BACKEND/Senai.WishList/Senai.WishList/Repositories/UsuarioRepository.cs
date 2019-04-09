using Senai.WishList.Domains;
using Senai.WishList.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using System.Data.Entity;

namespace Senai.WishList.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {


        WishListContext ctx = new WishListContext();

        public Usuarios BuscarPorEmailSenha(string Email, string Senha)
        {
            Usuarios usuarioProcurado = new Usuarios();
            usuarioProcurado = ctx.Usuarios.ToList().Find(c => c.Email == Email && c.Senha == Senha);

            if (usuarioProcurado == null)
            {
                
                return (null);
            }
            
            return (usuarioProcurado);
        }

        public void Cadastrar(Usuarios Usuarios)
        {
            ctx.Usuarios.Add(Usuarios);
            ctx.SaveChanges();
        }

        public List<Usuarios> Listar()
        {
                
               return( ctx.Usuarios.Include(c => c.Desejos).ToList());
            
        }
    }
}
