using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
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
    public class DesejoController : ControllerBase
    {
        private IDesejoRepository DesejoRepository { get; set; }

        public DesejoController()
        {
            DesejoRepository = new DesejoRepository();

        }

        [Authorize]
        [HttpGet("/Desejo/ExibirMeusDesejos")]
        public IActionResult GetMeusDejeso(int id)
        {
            id = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);



            try
            {
                return Ok(DesejoRepository.ListarDesejos(id));
            }

            catch
            {
                return BadRequest();
            }
        }




        [HttpGet] // Função criada para listar os desejos de todos usuários
        public IActionResult Get()
        {
            try
            {

                return Ok(DesejoRepository.Listar());
            }

            catch
            {
                return BadRequest();
            }
        }


        //[Authorize]
        [HttpPost]
        public IActionResult Post(Desejos Desejo)
        {
            int id = Convert.ToInt32(HttpContext.User.Claims.First(c => c.Type == JwtRegisteredClaimNames.Jti).Value);
            Desejo.Idusuario = id;
            try
            {
                DesejoRepository.Cadastrar(Desejo);
                return Ok();
            }
            catch (System.Exception ex)
            {
                return BadRequest();
            }
        }

    }
}