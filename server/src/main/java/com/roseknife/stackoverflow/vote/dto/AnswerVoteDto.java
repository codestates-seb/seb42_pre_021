package com.roseknife.stackoverflow.vote.dto;

import lombok.Getter;

public class AnswerVoteDto {
	@Getter
	public static class Post {
		private Boolean answerVoteFlag;

		private Long memberId;

		private Long answerId;
	}
}
