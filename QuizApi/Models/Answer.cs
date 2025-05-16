using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
namespace QuizApi.Models;

public class Answer
{
    public int Id { get; set; }
    [Column("Answer")]
    public string Text { get; set; } = string.Empty;
    public int QuestionId { get; set; }
    public bool IsCorrect { get; set; }
    [JsonIgnore]
    public Question? Question { get; set; }
}
