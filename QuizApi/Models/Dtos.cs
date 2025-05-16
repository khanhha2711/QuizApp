namespace QuizApi.Models
{
    public class UserAnswerDto
    {
        public int QuestionId { get; set; }
        public int AnswerId { get; set; }
        public DateTime AnswerAt { get; set; }
    }
}
