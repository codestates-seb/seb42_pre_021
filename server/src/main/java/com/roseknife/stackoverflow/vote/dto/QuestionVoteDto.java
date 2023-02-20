package com.roseknife.stackoverflow.vote.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;

public class QuestionVoteDto {

	@Getter
	public static class Post {
		private boolean questionVoteFlag;

		@Positive
		private Long memberId;

		@Positive
		private Long questionId;
	}

	@Getter
	@Setter
	public static class Patch {
		private Long questionVoteId;

		private boolean questionVoteFlag;

		private Long memberId;
	}

	@Getter
	@Setter
	public static class Response {
		private Long questionVoteId;

		private boolean questionVoteFlag;
	}
}
