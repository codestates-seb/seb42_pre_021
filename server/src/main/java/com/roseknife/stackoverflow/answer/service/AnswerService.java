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
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AnswerService {
	private final AnswerRepository answerRepository;
	private final QuestionService questionService;

	// TODO: 답변 등록
	public Answer createAnswer(Answer answer) {

		//답변 갯수 증가 추후 리팩토링 예정.
		questionService.findVerifiedQuestion(answer.getQuestion().getQuestionId(), FindStatus.ANSWER);

		return answerRepository.save(answer);
	}


//	// TODO: 답변 수정
//	public Answer updateAnswer() {
//
//	}
//
//	// TODO: 답변 삭제
//	public void deleteAnswer() {
//
//	}
}
