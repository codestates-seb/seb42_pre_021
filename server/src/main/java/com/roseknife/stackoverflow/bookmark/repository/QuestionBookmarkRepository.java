package com.roseknife.stackoverflow.bookmark.repository;

import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import org.mapstruct.Mapping;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface QuestionBookmarkRepository extends JpaRepository<QuestionBookmark, Long> {
	Optional<QuestionBookmark> findByQuestionQuestionIdAndMemberMemberId(Long questionId, Long memberId);
}
