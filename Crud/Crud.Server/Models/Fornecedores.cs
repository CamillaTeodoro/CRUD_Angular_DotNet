using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;
using System;
using Microsoft.EntityFrameworkCore;

namespace Crud.Server.Models
{
    [Index(nameof(Identificador), IsUnique = true)]
    public class Fornecedores
    {

        [Key]
        public int FornecedorId { get; set; }

        [Column(TypeName = "varchar(14)")]
        public string Identificador { get; set; } = "";

        [Column(TypeName = "varchar(4)")]
        public string Tipo { get; set; } = "";

        [Column(TypeName = "nvarchar(100)")]
        public string Nome { get; set; } = "";

        [Column(TypeName = "nvarchar(50)")]
        public string Email { get; set; } = "";

        [Column(TypeName = "char(8)")]
        public string Cep { get; set; } = "";

        [Column(TypeName = "varchar(12)")]
        public string Rg { get; set; } = "";

        [Column]
        public DateTime DataNascimento { get; set; }

        public List<Empresas> Empresa { get; } = [];
    }
}
