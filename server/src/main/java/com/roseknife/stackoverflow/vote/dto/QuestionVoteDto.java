package com.roseknife.stackoverflow.vote.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Positive;

@NoArgsConstructor
public class QuestionVoteDto {

	@Getter
	public static class Post {
		private Boolean questionVoteFlag;

		@Positive
		private Long memberId;

		@Positive
		private Long questionId;
	}

	@Getter
	@Setter
	public static class Patch {
		private Long questionVoteId;

		private Boolean questionVoteFlag;

		private Long memberId;
	}

	@Getter
	@Setter
	public static class Response {
		private Long questionVoteId;

		private Boolean questionVoteFlag;
	}
}
