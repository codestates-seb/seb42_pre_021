package com.roseknife.stackoverflow.question.service;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.question.entity.FindStatus;
import com.roseknife.stackoverflow.question.entity.Question;
import org.springframework.data.domain.Page;

public interface QuestionService {
    public Question createQuestion(Question question);
    public Question findVerifiedQuestion(Long questionId, FindStatus findStatus);
    public Question updateQuestion(Question Question);
    public Question findQuestion(Long questionId);
    public Page<Question> findQuestions(int page, int size, String sortDir, String sortBy);

    public Page<Question> searchQuestions(int page, int size, String sortDir, String sortBy, String keyword);

//    public Page<Answer> findQuestionAnswers(Long questionId, int page, int size, String sortDir, String sortBy);
}
