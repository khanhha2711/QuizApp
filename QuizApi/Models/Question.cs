using System.ComponentModel.DataAnnotations.Schema;
namespace QuizApi.Models;

public class Question
{
    public int Id { get; set; }
    [Column("Question")]
    public string Text { get; set; } = string.Empty;

    public ICollection<Answer> Answers { get; set; } = new List<Answer>();
}
