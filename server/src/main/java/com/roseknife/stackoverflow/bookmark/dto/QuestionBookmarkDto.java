package com.roseknife.stackoverflow.bookmark.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;

public class QuestionBookmarkDto {
	@Getter
	@Setter
	public static class Patch {
		private Long questionBookmarkId;

		@Positive
		private Long memberId;
	}

	@Getter
	@Setter
	public static class Response {
		private Long questionBookmarkId;

		private boolean questionBookmarkFlag;
	}
}
