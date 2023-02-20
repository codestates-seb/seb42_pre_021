package com.roseknife.stackoverflow.answer.service;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.answer.repository.AnswerRepository;
import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import com.roseknife.stackoverflow.member.service.MemberService;
import com.roseknife.stackoverflow.question.entity.FindStatus;
import com.roseknife.stackoverflow.question.entity.Question;
import com.roseknife.stackoverflow.question.repository.QuestionRepository;
import com.roseknife.stackoverflow.question.service.QuestionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {
	private final AnswerRepository answerRepository;
	private final QuestionService questionService;
	private final MemberService memberService;

	// TODO: 답변 등록
	public Answer createAnswer(Answer answer) {

		//Answer count 증가 추가
		questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId(), FindStatus.ANSWER);

		return answerRepository.save(answer);
	}


	public Answer updateAnswer(Answer answer) {
		Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
		Optional.ofNullable(answer.getContent()).ifPresent(findAnswer::setContent);

		return answerRepository.save(findAnswer);
	}

	public void deleteAnswer(Long answerId) {
		//Answer count 감소 추가
		Answer answer = findVerifiedAnswer(answerId);
		questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId(), FindStatus.ANSWER_DEL);
		answerRepository.deleteById(answerId);
	}

	private Answer findVerifiedAnswer(Long answerId) {
		Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
		//에러로 인해 ExceptionCode 추가
		Answer findAnswer = optionalAnswer.orElseThrow(() ->
				new BusinessLogicException(ExceptionCode.ANSWER_NOT_FOUND));

		return findAnswer;
	}

}
