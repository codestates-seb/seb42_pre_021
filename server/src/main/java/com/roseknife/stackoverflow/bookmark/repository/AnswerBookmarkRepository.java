package com.roseknife.stackoverflow.bookmark.repository;

import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerBookmarkRepository extends JpaRepository<AnswerBookmark, Long> {
}
