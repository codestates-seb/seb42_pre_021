package com.roseknife.stackoverflow.comment.service;

import com.roseknife.stackoverflow.comment.entity.QuestionComment;
import com.roseknife.stackoverflow.comment.repository.QuestionCommentRepository;
import com.roseknife.stackoverflow.exception.BusinessLogicException;
import com.roseknife.stackoverflow.exception.ExceptionCode;
import com.roseknife.stackoverflow.utils.CustomBeanUtils;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class QuestionCommentService {
	private final QuestionCommentRepository questionCommentRepository;
	private final CustomBeanUtils<QuestionComment> beanUtils;

	public QuestionComment createQuestionComment(QuestionComment questionComment) {
		return questionCommentRepository.save(questionComment);
	}

	public QuestionComment updateQuestionComment(QuestionComment questionComment) {
		QuestionComment findQuestionComment = findVerifiedQuestionComment(questionComment.getQuestionCommentId());

		return beanUtils.copyNonNullProperties(questionComment, findQuestionComment);
	}

	public void deleteQuestionComment(Long questionCommentId) {
		questionCommentRepository.deleteById(questionCommentId);
	}

	private QuestionComment findVerifiedQuestionComment(Long questionCommentId) {
		Optional<QuestionComment> optionalAnswerComment = questionCommentRepository.findById(questionCommentId);
		QuestionComment questionComment
			= optionalAnswerComment.orElseThrow(() -> new BusinessLogicException(ExceptionCode.QUESTION_COMMENT_NOT_FOUND));
		return questionComment;
	}
}
