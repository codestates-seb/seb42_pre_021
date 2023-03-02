package com.roseknife.stackoverflow.bookmark.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;

public class QuestionBookmarkDto {
	@Getter
	public static class Post {
		@Positive
		private Long memberId;

		@Positive
		private Long questionId;
	}

	@Getter
	@Setter
	public static class Response {
		private Long questionBookmarkId;

		private boolean questionBookmarkFlag;

		private Long memberId;
	}
}
