package com.roseknife.stackoverflow.comment.service;

import com.roseknife.stackoverflow.comment.entity.QuestionComment;
import com.roseknife.stackoverflow.comment.repository.QuestionCommentRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionCommentService {
	private final QuestionCommentRepository questionCommentRepository;

	public QuestionComment createQuestionComment(QuestionComment questionComment) {
		return questionCommentRepository.save(questionComment);
	}

	public QuestionComment updateQuestionComment(QuestionComment questionComment) {
		QuestionComment findQuestionComment = findVerifiedQuestionComment(questionComment.getQuestionCommentId());
		Optional.ofNullable(questionComment.getContent()).ifPresent(findQuestionComment::setContent);

		return questionCommentRepository.save(findQuestionComment);
	}

	private QuestionComment findVerifiedQuestionComment(Long questionCommentId) {
		Optional<QuestionComment> optionalAnswerComment = questionCommentRepository.findById(questionCommentId);
		QuestionComment questionComment = optionalAnswerComment.orElseThrow();
		return questionComment;
	}
}
