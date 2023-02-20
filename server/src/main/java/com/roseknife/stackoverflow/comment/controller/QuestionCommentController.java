package com.roseknife.stackoverflow.comment.controller;

import com.roseknife.stackoverflow.comment.dto.QuestionCommentDto;
import com.roseknife.stackoverflow.comment.entity.QuestionComment;
import com.roseknife.stackoverflow.comment.mapper.QuestionCommentMapper;
import com.roseknife.stackoverflow.comment.service.QuestionCommentService;
import com.roseknife.stackoverflow.dto.SingleResponseDto;
import com.roseknife.stackoverflow.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/comments/questions")
@Validated
@RequiredArgsConstructor
public class QuestionCommentController {
	private final static String QUESTION_COMMENT_DEFAULT_URL = "/comments/questions";
	private final QuestionCommentService questionCommentService;
	private final QuestionCommentMapper mapper;

	@PostMapping
	public ResponseEntity postQuestionComment(@Valid @RequestBody QuestionCommentDto.Post questionCommentPostDto) {
		QuestionComment questionComment
				= questionCommentService.createQuestionComment(mapper.questionCommentPostDtoToQuestionComment(questionCommentPostDto));
		URI location = UriCreator.createUri(QUESTION_COMMENT_DEFAULT_URL, questionComment.getQuestionCommentId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/{question-comment-id}")
	public ResponseEntity patchQuestionComment(@PathVariable("question-comment-id") @Positive Long questionCommentId,
	                                           @Valid @RequestBody QuestionCommentDto.Patch questionCommentPatchDto) {
		questionCommentPatchDto.setQuestionCommentId(questionCommentId);
		QuestionComment questionComment
				= questionCommentService.updateQuestionComment(mapper.questionCommentPatchDtoToQuestionComment(questionCommentPatchDto));

		return ResponseEntity.ok(new SingleResponseDto<>(mapper.questionCommentToQuestionCommentResponseDto(questionComment)));
	}

	@DeleteMapping("/{question-comment-id}")
	public ResponseEntity deleteQuestionComment(@PathVariable("question-comment-id") @Positive Long questionCommentId) {
		questionCommentService.deleteQuestionComment(questionCommentId);

		return ResponseEntity.noContent().build();
	}
}
