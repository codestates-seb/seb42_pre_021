package com.roseknife.stackoverflow.comment.repository;

import com.roseknife.stackoverflow.comment.entity.QuestionComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface QuestionCommentRepository extends JpaRepository<QuestionComment, Long> {
}
