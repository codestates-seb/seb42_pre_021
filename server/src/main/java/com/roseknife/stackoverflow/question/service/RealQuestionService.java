package com.roseknife.stackoverflow.question.service;

import com.roseknife.stackoverflow.question.entity.Question;
import com.roseknife.stackoverflow.question.repository.QuestionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class RealQuestionService implements QuestionService{
    private final QuestionRepository questionRepository;

    public RealQuestionService(QuestionRepository questionRepository) {
        this.questionRepository = questionRepository;
    }

    public Question createQuestion(Question question) {
        Question savedQuestion = questionRepository.save(question);
        return savedQuestion;
    }
}
