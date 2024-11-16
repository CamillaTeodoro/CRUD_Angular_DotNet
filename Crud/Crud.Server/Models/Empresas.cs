using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Crud.Server.Models
{
    [Index(nameof(Cnpj), IsUnique = true)]
    public class Empresas
    {
        [Key]
        public int EmpresaId { get; set; }

        [Column(TypeName ="char(14)")]
        public string Cnpj { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string Nome { get; set; } = "";

        [Column(TypeName = "char(8)")]
        public string Cep { get; set; } = "";

        public List<Fornecedores> Fornecedor { get; } = [];
    }
}
