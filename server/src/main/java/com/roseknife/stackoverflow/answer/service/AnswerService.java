package com.roseknife.stackoverflow.answer.service;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.answer.repository.AnswerRepository;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@RequiredArgsConstructor
@Transactional
public class AnswerService {
	private final AnswerRepository answerRepository;

	public Answer createAnswer(Answer answer) {
		answer.setAnswerBookmark(new AnswerBookmark());
		return answerRepository.save(answer);
	}

	public Answer updateAnswer(Answer answer) {
		Answer findAnswer = findVerifiedAnswer(answer.getAnswerId());
		Optional.ofNullable(answer.getContent()).ifPresent(findAnswer::setContent);

		return answerRepository.save(findAnswer);
	}

	public void deleteAnswer(Long answerId) {
		answerRepository.deleteById(answerId);
	}

	private Answer findVerifiedAnswer(Long answerId) {
		Optional<Answer> optionalAnswer = answerRepository.findById(answerId);
		Answer findAnswer = optionalAnswer.orElseThrow();

		return findAnswer;
	}
}
