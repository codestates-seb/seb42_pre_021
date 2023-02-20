package com.roseknife.stackoverflow.comment.service;

import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import com.roseknife.stackoverflow.comment.repository.AnswerCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerCommentService {
	private final AnswerCommentRepository answerCommentRepository;

	public AnswerComment createAnswerComment(AnswerComment answerComment) {
		return answerCommentRepository.save(answerComment);
	}
}