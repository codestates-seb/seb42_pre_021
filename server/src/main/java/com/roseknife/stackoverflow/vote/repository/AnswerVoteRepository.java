package com.roseknife.stackoverflow.vote.repository;

import com.roseknife.stackoverflow.vote.entity.AnswerVote;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerVoteRepository extends JpaRepository<AnswerVote, Long> {
	Optional<AnswerVote> findByAnswerAnswerIdAndMemberMemberId(Long answerId, Long memberId);
}
