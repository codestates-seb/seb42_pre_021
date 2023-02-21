package com.roseknife.stackoverflow.vote.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Positive;

public class AnswerVoteDto {
	@Getter
	public static class Post {
		private boolean answerVoteFlag;

		@Positive
		private Long memberId;

		@Positive
		private Long answerId;
	}

	@Getter
	@Setter
	public static class Patch {
		private Long answerVoteId;

		private boolean answerVoteFlag;

		private Long memberId;
	}

	@Getter
	@Setter
	public static class Response {
		private Long answerVoteId;

		private boolean answerVoteFlag;
	}
}
