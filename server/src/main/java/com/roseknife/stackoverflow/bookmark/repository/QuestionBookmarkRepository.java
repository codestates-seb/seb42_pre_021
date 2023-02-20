package com.roseknife.stackoverflow.bookmark.repository;

import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionBookmarkRepository extends JpaRepository<QuestionBookmark, Long> {
}
