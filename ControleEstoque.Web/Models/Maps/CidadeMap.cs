﻿using System.ComponentModel.DataAnnotations.Schema;
using System.Data.Entity.ModelConfiguration;

namespace ControleEstoque.Web.Models
{
    public class CidadeMap : EntityTypeConfiguration<CidadeModel>
    {
        public CidadeMap()
        {
            ToTable("cidade"); //Nome tabela

            HasKey(x => x.Id); //Chave primaria
            Property(x => x.Id).HasColumnName("id").HasDatabaseGeneratedOption(DatabaseGeneratedOption.Identity); //autoincremento

            Property(x => x.Nome).HasColumnName("nome").HasMaxLength(30).IsRequired();
            Property(x => x.Ativo).HasColumnName("ativo").IsRequired();

            Property(x => x.IdEstado).HasColumnName("id_estado").IsRequired();
            HasRequired(x => x.Estado).WithMany().HasForeignKey(x => x.IdEstado).WillCascadeOnDelete(false);
        }
    }
}