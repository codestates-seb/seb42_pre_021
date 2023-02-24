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
		private String html;

		@NotBlank
		private String markdown;

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
		private String html;

		@NotBlank
		private String markdown;
	}

	@Getter
	@AllArgsConstructor
	@Builder
	public static class Response {
		private Long answerCommentId;

		private String html;

		private String markdown;

		private String memberId;
		private String nickname;
		private String profile;

		private String createdAt;

		private String modifiedAt;

		public Response(Long answerCommentId, String html, String markdown, String nickname, String profile, LocalDateTime createdAt, LocalDateTime modifiedAt) {
			this.answerCommentId = answerCommentId;
			this.html = html;
			this.markdown = markdown;
			this.nickname = nickname;
			this.profile = profile;
			this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
			this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
		}
	}
}
