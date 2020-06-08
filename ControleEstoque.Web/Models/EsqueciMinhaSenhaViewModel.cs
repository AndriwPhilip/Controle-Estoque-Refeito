using System.ComponentModel.DataAnnotations;

namespace ControleEstoque.Web.Models
{
    public class EsqueciMinhaSenhaViewModel
    {
        [Required(ErrorMessage = "Informe o Login")]
        public string Login { get; set; }
    }
}