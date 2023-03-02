package com.roseknife.stackoverflow.comment.repository;

import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AnswerCommentRepository extends JpaRepository<AnswerComment, Long> {
}