using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Senai.WishList.Domains;
using Senai.WishList.Interfaces;
using Senai.WishList.Repositories;

namespace Senai.WishList.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    [ApiController]
    public class UsuarioController : ControllerBase

    {

        private IUsuarioRepository UsuarioRepository { get; set; }

        public UsuarioController()
        {
            UsuarioRepository = new UsuarioRepository();
        }







        [HttpGet] // Função criada para listar os usuários
        public IActionResult Get()
        {
            try
            {

                return Ok(UsuarioRepository.Listar());
            }

            catch
            {
                return BadRequest();
            }
        }



        [HttpPost]
        public IActionResult Post(Usuarios Usuario)
        {
            try
            {
                UsuarioRepository.Cadastrar(Usuario);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest();
            }
        }



    }
}