package com.roseknife.stackoverflow.bookmark.repository;

import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface AnswerBookmarkRepository extends JpaRepository<AnswerBookmark, Long> {
	Optional<AnswerBookmark> findByAnswerAnswerIdAndMemberMemberId(Long answerId, Long memberId);
}
