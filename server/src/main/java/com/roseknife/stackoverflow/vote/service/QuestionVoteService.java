package com.roseknife.stackoverflow.vote.service;

import com.roseknife.stackoverflow.member.service.MemberService;
import com.roseknife.stackoverflow.question.service.RealQuestionService;
import com.roseknife.stackoverflow.vote.entity.QuestionVote;
import com.roseknife.stackoverflow.vote.repository.QuestionVoteRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

	private void verifyExistQuestionVote(QuestionVote questionVote) {
		Optional<QuestionVote> optionalQuestionVote = questionVoteRepository.findByQuestionQuestionIdAndMemberMemberId(
				questionVote.getQuestion().getQuestionId(), questionVote.getMember().getMemberId());
		if (optionalQuestionVote.isPresent()) {
			throw new RuntimeException("QuestionVote Is Already Exist.");
		}
	}

}
