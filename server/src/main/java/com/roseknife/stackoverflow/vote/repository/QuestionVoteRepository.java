package com.roseknife.stackoverflow.vote.repository;

import com.roseknife.stackoverflow.vote.entity.QuestionVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionVoteRepository extends JpaRepository<QuestionVote, Long> {
	Optional<QuestionVote> findByQuestionQuestionIdAndMemberMemberId(Long questionId, Long memberId);
}
