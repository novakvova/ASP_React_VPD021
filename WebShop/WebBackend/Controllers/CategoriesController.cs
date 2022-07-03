using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Drawing.Imaging;
using WebBackend.Data.Entities;
using WebBackend.Helpers;
using WebBackend.Models;

namespace WebBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CategoriesController : ControllerBase
    {
        private readonly IMapper _mapper;

        public CategoriesController(IMapper mapper)
        {
            _mapper = mapper;
        }

        [HttpPost("create")]
        public IActionResult Create([FromBody]CategoryCreateVM model)
        {
            string base64= model.ImageBase64;
            if (base64.Contains(","))
                base64 = base64.Split(',')[1];

            var img = base64.FromBase64StringToImage();

            string fileName = Path.GetRandomFileName()+".jpg";
            string dirSave = Path.Combine(Directory.GetCurrentDirectory(), "images", fileName);
            img.Save(dirSave, ImageFormat.Jpeg);

            var category = _mapper.Map<CategoryEntity>(model);

            return Ok();
        }
    }
}
