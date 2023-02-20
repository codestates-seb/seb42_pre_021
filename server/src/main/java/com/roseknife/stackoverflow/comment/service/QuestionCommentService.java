package com.roseknife.stackoverflow.comment.service;

import com.roseknife.stackoverflow.comment.entity.QuestionComment;
import com.roseknife.stackoverflow.comment.repository.QuestionCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionCommentService {
	private final QuestionCommentRepository questionCommentRepository;

	public QuestionComment createQuestionComment(QuestionComment questionComment) {
		return questionCommentRepository.save(questionComment);
	}
}
