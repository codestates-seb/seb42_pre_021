package com.roseknife.stackoverflow.comment.controller;

import com.roseknife.stackoverflow.comment.dto.AnswerCommentDto;
import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import com.roseknife.stackoverflow.comment.mapper.AnswerCommentMapper;
import com.roseknife.stackoverflow.comment.service.AnswerCommentService;
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
@RequestMapping("/comments/answers")
@Validated
@RequiredArgsConstructor
public class AnswerCommentController {
	private static final String ANSWER_COMMENT_DEFAULT_URL = "/comments/answers";
	private final AnswerCommentMapper mapper;
	private final AnswerCommentService answerCommentService;

	@PostMapping
	public ResponseEntity postAnswerComment(@Valid @RequestBody AnswerCommentDto.Post answerCommentPostDto) {
		AnswerComment answerComment
				= answerCommentService.createAnswerComment(mapper.answerCommentPostDtoToAnswerComment(answerCommentPostDto));
		URI location = UriCreator.createUri(ANSWER_COMMENT_DEFAULT_URL, answerComment.getAnswerCommentId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/{answer-comment-id}")
	public ResponseEntity patchAnswerComment(@PathVariable("answer-comment-id") @Positive Long answerCommentId,
	                                         @Valid @RequestBody AnswerCommentDto.Patch answerCommentPatchDto) {
		answerCommentPatchDto.setAnswerCommentId(answerCommentId);
		AnswerComment answerComment
				= answerCommentService.updateAnswerComment(mapper.answerCommentPatchDtoToAnswerComment(answerCommentPatchDto));

		return ResponseEntity.ok(new SingleResponseDto<>(mapper.answerCommentToAnswerCommentResponseDto(answerComment)));
	}
}
