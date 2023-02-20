package com.roseknife.stackoverflow.comment.controller;

import com.roseknife.stackoverflow.comment.dto.QuestionCommentDto;
import com.roseknife.stackoverflow.comment.entity.QuestionComment;
import com.roseknife.stackoverflow.comment.mapper.QuestionCommentMapper;
import com.roseknife.stackoverflow.comment.service.QuestionCommentService;
import com.roseknife.stackoverflow.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
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
}
