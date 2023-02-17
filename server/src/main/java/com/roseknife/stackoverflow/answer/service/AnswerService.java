package com.roseknife.stackoverflow.answer.service;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.answer.repository.AnswerRepository;
import com.roseknife.stackoverflow.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class AnswerService {
	private final AnswerRepository answerRepository;
	private final MemberService memberService;

	// TODO: 답변 등록
	public Answer createAnswer(Answer answer) {

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
