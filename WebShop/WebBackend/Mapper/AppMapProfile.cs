using AutoMapper;
using WebBackend.Data.Entities;
using WebBackend.Models;

namespace WebBackend.Mapper
{
    public class AppMapProfile : Profile
    {
        public AppMapProfile()
        {
            CreateMap<CategoryCreateVM, CategoryEntity>()
                .ForMember(x => x.Image, opt => opt.Ignore());
        }
    }
}
