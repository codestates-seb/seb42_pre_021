package com.roseknife.stackoverflow.comment.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class AnswerCommentDto {
	@Getter
	public static class Post {
		@NotBlank
		private String content;

		@Positive
		private Long memberId;

		@Positive
		private Long answerId;
	}
}
