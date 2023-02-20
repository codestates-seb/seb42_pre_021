package com.roseknife.stackoverflow.vote.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;

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
}
