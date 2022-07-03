using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Drawing.Imaging;
using WebBackend.Data;
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
        private readonly AppEFContext _context;
        public CategoriesController(IMapper mapper, AppEFContext context)
        {
            _mapper = mapper;
            _context = context;
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
            category.Image = fileName;
            _context.Categories.Add(category);
            _context.SaveChanges();
            return Ok();
        }

        [HttpGet("list")]
        public IActionResult List()
        {
            var list = _context.Categories
                .Select(x => _mapper.Map<CategoryItemVM>(x)).ToList();
            return Ok(list);
        }
    }
}
