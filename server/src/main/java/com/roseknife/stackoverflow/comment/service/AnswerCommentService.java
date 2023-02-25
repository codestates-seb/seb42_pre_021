package com.roseknife.stackoverflow.comment.service;

import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import com.roseknife.stackoverflow.comment.repository.AnswerCommentRepository;
import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class AnswerCommentService {
	private final AnswerCommentRepository answerCommentRepository;

	public AnswerComment createAnswerComment(AnswerComment answerComment) {
		return answerCommentRepository.save(answerComment);
	}

	public AnswerComment updateAnswerComment(AnswerComment answerComment) {
		AnswerComment findAnswerComment = findVerifiedAnswerComment(answerComment.getAnswerCommentId());
		Optional.ofNullable(answerComment.getHtml()).ifPresent(findAnswerComment::setHtml);
		Optional.ofNullable(answerComment.getMarkdown()).ifPresent(findAnswerComment::setMarkdown);

		return answerCommentRepository.save(findAnswerComment);
	}

	public void deleteAnswerComment(Long answerCommentId) {
		answerCommentRepository.deleteById(answerCommentId);
	}

	private AnswerComment findVerifiedAnswerComment(Long answerCommentId) {
		Optional<AnswerComment> optionalAnswerComment = answerCommentRepository.findById(answerCommentId);
		AnswerComment answerComment
			= optionalAnswerComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.ANSWER_COMMENT_NOT_FOUND));
		return answerComment;
	}
}