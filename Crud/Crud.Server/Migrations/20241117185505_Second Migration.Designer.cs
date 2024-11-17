﻿// <auto-generated />
using System;
using Crud.Server.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace Crud.Server.Migrations
{
    [DbContext(typeof(Context))]
    [Migration("20241117185505_Second Migration")]
    partial class SecondMigration
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "9.0.0")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder);

            modelBuilder.Entity("Crud.Server.Models.Empresas", b =>
                {
                    b.Property<int>("EmpresaId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("EmpresaId"));

                    b.Property<string>("Cep")
                        .IsRequired()
                        .HasColumnType("char(8)");

                    b.Property<string>("Cnpj")
                        .IsRequired()
                        .HasColumnType("char(14)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.HasKey("EmpresaId");

                    b.HasIndex("Cnpj")
                        .IsUnique();

                    b.ToTable("Empresas");
                });

            modelBuilder.Entity("Crud.Server.Models.Fornecedores", b =>
                {
                    b.Property<int>("FornecedorId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("FornecedorId"));

                    b.Property<string>("Cep")
                        .IsRequired()
                        .HasColumnType("char(8)");

                    b.Property<DateOnly>("DataNascimento")
                        .HasColumnType("date");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Identificador")
                        .IsRequired()
                        .HasColumnType("varchar(14)");

                    b.Property<string>("Nome")
                        .IsRequired()
                        .HasColumnType("nvarchar(100)");

                    b.Property<string>("Rg")
                        .IsRequired()
                        .HasColumnType("varchar(12)");

                    b.Property<string>("Tipo")
                        .IsRequired()
                        .HasColumnType("varchar(4)");

                    b.HasKey("FornecedorId");

                    b.HasIndex("Identificador")
                        .IsUnique();

                    b.ToTable("Fornecedores");
                });

            modelBuilder.Entity("EmpresasFornecedores", b =>
                {
                    b.Property<int>("EmpresaId")
                        .HasColumnType("int");

                    b.Property<int>("FornecedorId")
                        .HasColumnType("int");

                    b.HasKey("EmpresaId", "FornecedorId");

                    b.HasIndex("FornecedorId");

                    b.ToTable("EmpresasFornecedores");
                });

            modelBuilder.Entity("EmpresasFornecedores", b =>
                {
                    b.HasOne("Crud.Server.Models.Empresas", null)
                        .WithMany()
                        .HasForeignKey("EmpresaId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.HasOne("Crud.Server.Models.Fornecedores", null)
                        .WithMany()
                        .HasForeignKey("FornecedorId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();
                });
#pragma warning restore 612, 618
        }
    }
}
