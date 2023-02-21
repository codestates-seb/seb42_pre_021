package com.roseknife.stackoverflow.vote.service;

import com.roseknife.stackoverflow.answer.service.AnswerService;
import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import com.roseknife.stackoverflow.member.service.MemberService;
import com.roseknife.stackoverflow.vote.entity.AnswerVote;
import com.roseknife.stackoverflow.vote.repository.AnswerVoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerVoteService {
	private final AnswerVoteRepository answerVoteRepository;
	private final AnswerService answerService;
	private final MemberService memberService;

	public AnswerVote createAnswerVote(AnswerVote answerVote) {
		answerService.findAnswer(answerVote.getAnswer().getAnswerId());
		memberService.findMember(answerVote.getMember().getMemberId());
		verifyExistAnswerVote(answerVote);

		return answerVoteRepository.save(answerVote);
	}

	public AnswerVote updateAnswerVote(AnswerVote answerVote) {
		AnswerVote findAnswerVote = findVerifiedAnswerVoteById(answerVote.getAnswerVoteId());

		if (findAnswerVote.isAnswerVoteFlag() != answerVote.isAnswerVoteFlag()
				&& Objects.equals(findAnswerVote.getMember().getMemberId(), answerVote.getMember().getMemberId())) {
			findAnswerVote.setAnswerVoteFlag(answerVote.isAnswerVoteFlag());
		}
		return findAnswerVote;
	}

	private void verifyExistAnswerVote(AnswerVote answerVote) {
		Optional<AnswerVote> optionalAnswerVote
				= answerVoteRepository.findByAnswerAnswerIdAndMemberMemberId(
						answerVote.getAnswer().getAnswerId(), answerVote.getMember().getMemberId());
		if (optionalAnswerVote.isPresent()) {
			throw new BusinessLogicException(ExceptionCode.ANSWER_VOTE_EXISTS);
		}
	}

	private AnswerVote findVerifiedAnswerVoteById(Long answerVoteId) {
		Optional<AnswerVote> optionalAnswerVote = answerVoteRepository.findById(answerVoteId);
		AnswerVote answerVote
			= optionalAnswerVote.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_VOTE_NOT_FOUND));

		return answerVote;
	}
}
