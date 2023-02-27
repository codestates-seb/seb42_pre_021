package com.roseknife.stackoverflow.answer.service;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.answer.repository.AnswerRepository;
import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import com.roseknife.stackoverflow.question.entity.FindStatus;
import com.roseknife.stackoverflow.question.entity.Question;
import com.roseknife.stackoverflow.question.service.QuestionService;
import com.roseknife.stackoverflow.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {
	private final AnswerRepository answerRepository;
	private final QuestionService questionService;

	private final CustomBeanUtils<Answer> beanUtils;
	public Answer createAnswer(Answer answer) {

		questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId(), FindStatus.ANSWER);

		return answerRepository.save(answer);
	}

	public Answer updateAnswer(Answer answer) {
		Answer findAnswer = findVerifiedAnswerById(answer.getAnswerId());

		Answer updateAnswer = beanUtils.copyNonNullProperties(answer, findAnswer);

		return answerRepository.save(findAnswer);
	}

	public Answer findAnswer(Long answerId) {
			return findVerifiedAnswerById(answerId);
	}

	public void deleteAnswer(Long answerId) {
		//Answer count 감소 추가
		Answer answer = findVerifiedAnswerById(answerId);
		questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId(), FindStatus.ANSWER_DEL);
		answerRepository.deleteById(answerId);
	}

	private Answer findVerifiedAnswerById(Long answerId) {
		Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
		//에러로 인해 ExceptionCode 추가
		Answer findAnswer = optionalAnswer.orElseThrow(() ->
				new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

		return findAnswer;
	}
}
