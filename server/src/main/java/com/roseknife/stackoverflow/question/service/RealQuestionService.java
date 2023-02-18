package com.roseknife.stackoverflow.question.service;

import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import com.roseknife.stackoverflow.question.dto.QuestionDto;
import com.roseknife.stackoverflow.question.entity.Question;
import com.roseknife.stackoverflow.question.repository.QuestionRepository;
import com.roseknife.stackoverflow.utils.CustomBeanUtils;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
public class RealQuestionService implements QuestionService{
    private final QuestionRepository questionRepository;

    private final CustomBeanUtils<Question> beanUtils;

    public RealQuestionService(QuestionRepository questionRepository, CustomBeanUtils beanUtils) {
        this.questionRepository = questionRepository;
        this.beanUtils = beanUtils;
    }

    public Question createQuestion(Question question) {
        Question savedQuestion = questionRepository.save(question);
        return savedQuestion;
    }

    public Question updateQuestion(Question Question) {
        Question findQuestion = findVerifiedQuestion(Question.getQuestionId());

        Question updateQuestion = beanUtils.copyNonNullProperties(Question, findQuestion);

        return questionRepository.save(updateQuestion);
    }

    private Question findVerifiedQuestion(Long questionId) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        Question findQuestion =
                optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        return findQuestion;
    }

    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId);
    }

}
