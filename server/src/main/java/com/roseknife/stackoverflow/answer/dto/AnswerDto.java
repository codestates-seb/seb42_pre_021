package com.roseknife.stackoverflow.answer.dto;

import lombok.Getter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;

public class AnswerDto {
	@Getter
	public static class Post {
		@NotBlank
		private String content;

		@Positive
		private Long memberId;

		@Positive
		private Long questionId;
	}

//	@Getter
//	public static class Patch {
//
//	}
//
//	@Getter
//	public static class Delete {
//
//	}

}
