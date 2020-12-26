﻿using System.ComponentModel.DataAnnotations;

namespace ControleEstoque.Web.Models
{
    public class MarcaProdutoViewModel
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Preencha o nome.")]
        public string Nome { get; set; }

        public bool Ativo { get; set; }
    }
}
