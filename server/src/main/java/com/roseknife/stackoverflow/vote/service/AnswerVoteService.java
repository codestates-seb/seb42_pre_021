package com.roseknife.stackoverflow.vote.service;

import com.roseknife.stackoverflow.answer.service.AnswerService;
import com.roseknife.stackoverflow.member.service.MemberService;
import com.roseknife.stackoverflow.vote.entity.AnswerVote;
import com.roseknife.stackoverflow.vote.repository.AnswerVoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerVoteService {
	private final AnswerVoteRepository answerVoteRepository;
	private final AnswerService answerService;
	private final MemberService memberService;

	public AnswerVote createAnswerVote(AnswerVote answerVote) {
		// find question 필요 -> 국선님 answer.find() 구현하셨는지 여쭤보기
		memberService.findMember(answerVote.getMember().getMemberId());
		verifyExistAnswerVote(answerVote);
		return answerVoteRepository.save(answerVote);
	}

	private void verifyExistAnswerVote(AnswerVote answerVote) {
		Optional<AnswerVote> optionalAnswerVote = answerVoteRepository.findByAnswerAnswerIdAndMemberMemberId(
				answerVote.getAnswer().getAnswerId(), answerVote.getMember().getMemberId());
		if (optionalAnswerVote.isPresent()) {
			throw new RuntimeException("AnswerVote Is Already Exist.");
		}
	}
}
