using Senai.WishList.Domains;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Senai.WishList.Interfaces
{
    interface IDesejoRepository
    {
        List<Desejos> Listar();
        void Cadastrar(Desejos Desejo);
        List<Desejos> ListarDesejos(int id);

    }
}
