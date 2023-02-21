package com.roseknife.stackoverflow.vote.service;

import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import com.roseknife.stackoverflow.member.service.MemberService;
import com.roseknife.stackoverflow.question.service.RealQuestionService;
import com.roseknife.stackoverflow.vote.entity.QuestionVote;
import com.roseknife.stackoverflow.vote.repository.QuestionVoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionVoteService {
	private final QuestionVoteRepository questionVoteRepository;
	private final RealQuestionService realQuestionService;
	private final MemberService memberService;

	public QuestionVote createQuestionVote(QuestionVote questionVote) {
		realQuestionService.findQuestion(questionVote.getQuestion().getQuestionId());
		memberService.findMember(questionVote.getMember().getMemberId());
		verifyExistQuestionVote(questionVote);

		return questionVoteRepository.save(questionVote);
	}

	public QuestionVote updateQuestionVote(QuestionVote questionVote) {
		QuestionVote findQuestionVote = findVerifiedQuestionVoteById(questionVote.getQuestionVoteId());

		if (findQuestionVote.isQuestionVoteFlag() != (questionVote.isQuestionVoteFlag())
				&& Objects.equals(findQuestionVote.getMember().getMemberId(), questionVote.getMember().getMemberId())) {
			findQuestionVote.setQuestionVoteFlag(questionVote.isQuestionVoteFlag());
		}
		return findQuestionVote;
	}

	private void verifyExistQuestionVote(QuestionVote questionVote) {
		Optional<QuestionVote> optionalQuestionVote
				= questionVoteRepository.findByQuestionQuestionIdAndMemberMemberId(
						questionVote.getQuestion().getQuestionId(), questionVote.getMember().getMemberId());
		if (optionalQuestionVote.isPresent()) {
			throw new BusinessLogicException(ExceptionCode.QUESTION_VOTE_EXISTS);
		}
	}

	private QuestionVote findVerifiedQuestionVoteById(Long questionVoteId) {
		Optional<QuestionVote> optionalQuestionVote = questionVoteRepository.findById(questionVoteId);
		QuestionVote questionVote
			= optionalQuestionVote.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_VOTE_NOT_FOUND));

		return questionVote;
	}
}
