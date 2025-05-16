using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using QuizApi.Data;
using QuizApi.Models;

namespace QuizApi.Controllers;

[ApiController]
[Route("api/[controller]")]
public class QuizController : ControllerBase
{
    private readonly QuizDbContext _context;

    public QuizController(QuizDbContext context)
    {
        _context = context;
    }

    [HttpGet("questions")]
    public async Task<IActionResult> GetQuestions()
    {
        var questions = await _context.Questions
            .Include(q => q.Answers)
            .ToListAsync();

        return Ok(questions);
    }
}

