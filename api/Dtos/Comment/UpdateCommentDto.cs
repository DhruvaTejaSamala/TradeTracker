using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace api.Dtos.Comment
{
    public class UpdateCommentDto
    {
        [Required]
        [MinLength(5, ErrorMessage = "Title must be atleast 5 characters")]
        [MaxLength(250, ErrorMessage = "Title Cannot be over 250 characters")]
        public string Title { get; set; } = string.Empty;
                [Required]
        [MinLength(5, ErrorMessage = "Content must be atleast 5 characters")]
        [MaxLength(250, ErrorMessage = "Content cannot be over 250 characters")]
        public string Content { get; set; } = string.Empty;
    }
}