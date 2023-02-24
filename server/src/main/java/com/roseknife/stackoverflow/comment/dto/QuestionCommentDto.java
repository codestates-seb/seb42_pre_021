package com.roseknife.stackoverflow.comment.dto;

import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class QuestionCommentDto {
	@Getter
	public static class Post {
		@NotBlank
		private String html;

		@NotBlank
		private String markdown;

		@Positive
		private Long memberId;

		@Positive
		private Long questionId;
	}

	@Getter
	@Setter
	public static class Patch {
		private Long questionCommentId;

		@NotBlank
		private String html;

		@NotBlank
		private String markdown;
	}

	@Getter
	@Setter
	public static class Response {
		private Long questionCommentId;

		private String html;

		private String markdown;

		private String nickname;

		private String profile;

		private String createdAt;

		private String modifiedAt;

		public Response(Long questionCommentId, String html, String markdown, String nickname, String profile, LocalDateTime createdAt, LocalDateTime modifiedAt) {
			this.questionCommentId = questionCommentId;
			this.html = html;
			this.markdown = markdown;
			this.nickname = nickname;
			this.profile = profile;
			this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
			this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
		}
	}
}
