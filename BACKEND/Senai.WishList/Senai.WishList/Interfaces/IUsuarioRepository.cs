using Senai.WishList.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.WishList.Interfaces
{
    interface IUsuarioRepository
    {

        List<Usuarios> Listar();
        void Cadastrar(Usuarios Usuarios);
        Usuarios BuscarPorEmailSenha(string Email, string Senha);
    }
}
