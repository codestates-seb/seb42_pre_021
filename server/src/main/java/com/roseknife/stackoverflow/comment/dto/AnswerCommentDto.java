package com.roseknife.stackoverflow.comment.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

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

	@Getter
	@Setter
	public static class Patch {
		private Long answerCommentId;

		@NotBlank
		private String content;
	}

	@Getter
//	@Setter
	@AllArgsConstructor
	@Builder
	public static class Response {
		private Long answerCommentId;

		private String content;

		private String memberId;
		private String nickname;
		private String profile;

		private String createdAt;

		private String modifiedAt;

		public Response(Long answerCommentId, String content, String nickname, String profile, LocalDateTime createdAt, LocalDateTime modifiedAt) {
			this.answerCommentId = answerCommentId;
			this.content = content;
			this.nickname = nickname;
			this.profile = profile;
			this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
			this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
		}
	}
}
