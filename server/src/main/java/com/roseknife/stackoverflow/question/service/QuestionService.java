package com.roseknife.stackoverflow.question.service;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.answer.repository.AnswerRepository;
import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import com.roseknife.stackoverflow.question.entity.Question;
import com.roseknife.stackoverflow.question.entity.FindStatus;
import com.roseknife.stackoverflow.question.repository.QuestionRepository;
import com.roseknife.stackoverflow.tag.entity.QuestionTag;
import com.roseknife.stackoverflow.tag.repository.QuestionTagRepository;
import com.roseknife.stackoverflow.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Transactional
@Service
@RequiredArgsConstructor
public class QuestionService {
    private final QuestionRepository questionRepository;
    private final AnswerRepository answerRepository;

    private final QuestionTagRepository questionTagRepository;
    private final CustomBeanUtils<Question> beanUtils;

    public Question createQuestion(Question question) {
        question.setVoteCount(0);
        question.setViewCount(0);
        question.setAnswerCount(0);

        Question savedQuestion = questionRepository.save(question);
        return savedQuestion;
    }

    public Question updateQuestion(Question question) {
        Question findQuestion = findVerifiedQuestion(question.getQuestionId(),FindStatus.NONE);

        for (QuestionTag questionTag : question.getQuestionTags()) {
            System.out.println(questionTag.getTag().getName());
        }

        Optional.ofNullable(question.getQuestionTags()).ifPresent(questionTags -> {
            questionTagRepository.deleteByQuestionQuestionId(findQuestion.getQuestionId());
            findQuestion.setQuestionTags(questionTags);
        });
        Question updatedQuestion = beanUtils.copyNonNullProperties(question, findQuestion);

        return updatedQuestion;
    }
    public Question findVerifiedQuestion(Long questionId, FindStatus option) {
        Optional<Question> optionalQuestion = questionRepository.findById(questionId);

        Question findQuestion =
                optionalQuestion.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_NOT_FOUND));

        switch(option){
            case FIND:
                findQuestion.setViewCount(findQuestion.getViewCount()+1);   //단건 조회시 조회수 증가
                break;
            case ANSWER:
                findQuestion.setAnswerCount(findQuestion.getAnswerCount()+1);
                break;
            case ANSWER_DEL:
                findQuestion.setAnswerCount(findQuestion.getAnswerCount()-1);
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
        return questionRepository.findByTitleContainsOrHtmlContains(keyword,keyword,request);
    }

    public void deleteQuestion(Long questionId) {
        Question findQuestion = findVerifiedQuestion(questionId, FindStatus.NONE);
        questionRepository.delete(findQuestion);
    }

    public Page<Answer> findQuestionAnswers(Long questionId,int page, int size, String sortDir, String sortBy) {
        PageRequest request;

        request = PageRequest.of(page, size, Sort.Direction.valueOf(sortDir), sortBy);

        return answerRepository.findByQuestionQuestionId(questionId,request);
    }
}
