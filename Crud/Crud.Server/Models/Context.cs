using Microsoft.EntityFrameworkCore;

namespace Crud.Server.Models
{
    public class Context : DbContext
    {
        public Context(DbContextOptions options) : base(options)
        {
        }

        public DbSet<Empresas> Empresas { get; set; }
        public DbSet<Fornecedores> Fornecedores { get; set; }
        public DbSet<Empresas> EmpresasFornecedores { get; set; }
    }
}
