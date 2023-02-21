package com.roseknife.stackoverflow.answer.dto;

import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.List;

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

	@Getter
	@Setter
	public static class Patch {
		private Long answerId;

		@NotBlank
		private String content;
	}

	@Getter
	public static class Response {
		private Long answerId;

		private String content;

		private String nickname;

		private String profile;

		private String createdAt;

		private String modifiedAt;

		private List<AnswerComment> answerComments;

		public Response(Long answerId, String content, String nickname, String profile, LocalDateTime createdAt, LocalDateTime modifiedAt, List<AnswerComment> answerComments) {
			this.answerId = answerId;
			this.content = content;
			this.nickname = nickname;
			this.profile = profile;
			this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
			this.modifiedAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
			this.answerComments = answerComments;
		}
	}
}
