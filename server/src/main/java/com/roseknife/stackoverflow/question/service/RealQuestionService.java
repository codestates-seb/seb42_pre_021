package com.roseknife.stackoverflow.question.service;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.answer.repository.AnswerRepository;
import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import com.roseknife.stackoverflow.question.dto.QuestionDto;
import com.roseknife.stackoverflow.question.entity.Question;
import com.roseknife.stackoverflow.question.entity.FindStatus;
import com.roseknife.stackoverflow.question.mapper.QuestionMapper;
import com.roseknife.stackoverflow.question.repository.QuestionRepository;
import com.roseknife.stackoverflow.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Isolation;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class RealQuestionService implements QuestionService{
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;

    private final CustomBeanUtils<Question> beanUtils;


    public Question createQuestion(Question question) {
        Question savedQuestion = questionRepository.save(question);
        return savedQuestion;
    }

    public Question updateQuestion(Question Question) {
        Question findQuestion = findVerifiedQuestion(Question.getQuestionId(),FindStatus.NONE);

        Question updateQuestion = beanUtils.copyNonNullProperties(Question, findQuestion);

        return questionRepository.save(updateQuestion);
    }
    @Transactional(readOnly = true)
    public Question findVerifiedQuestion(Long questionId, FindStatus option) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        Question findQuestion =
                optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        switch(option){
            case FIND:
                findQuestion.setViewCount(findQuestion.getViewCount()+1);   //단건 조회시 조회수 증가
                questionRepository.save(findQuestion);  //업데이트
                break;
            case ANSWER:
                findQuestion.setAnswerCount(findQuestion.getAnswerCount()+1);
                questionRepository.save(findQuestion);  //업데이트
                break;
            case ANSWER_DEL:
                findQuestion.setAnswerCount(findQuestion.getAnswerCount()-1);
                questionRepository.save(findQuestion);  //업데이트
                break;
        }


        return findQuestion;
    }
    @Transactional(readOnly = true)
    public Question findQuestion(Long questionId) {
        return findVerifiedQuestion(questionId,FindStatus.FIND);
    }

    public Page<Question> findQuestions(int page, int size, String sortDir, String sortBy) {
        //리팩토링 여부?
        PageRequest request;

        request = PageRequest.of(page, size, Sort.Direction.valueOf(sortDir), sortBy);

        return questionRepository.findAll(request);
    }

    public Page<Question> searchQuestions(int page, int size, String sortDir, String sortBy, String keyword) {
        PageRequest request;

        request = PageRequest.of(page, size, Sort.Direction.valueOf(sortDir), sortBy);
        return questionRepository.findByTitleContainsOrContentContains(keyword,keyword,request);
    }

    public void deleteQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId, FindStatus.NONE);
        questionRepository.delete(findQuestion);
    }

    public Page<Answer> findQuestionAnswers(Long questionId,int page, int size, String sortDir, String sortBy) {
        //리팩토링 여부?
        PageRequest request;

        request = PageRequest.of(page, size, Sort.Direction.valueOf(sortDir), sortBy);

        return answerRepository.findByQuestionQuestionId(questionId,request);
    }


}
