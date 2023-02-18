package com.roseknife.stackoverflow.member.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class MemberDto {
    @Getter
    public static class Post {
        @Email
        private String email;

        @NotBlank
        private String nickname;

        @Pattern(regexp = "^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$",
        message = "Passwords must contain at least eight characters, including at least 1 letter and 1 number.")
        private String password;
    }

    @Getter
    public static class Patch {
        private String password;
        private String company;
        private String title;
        private String content;
    }

    @Getter
    public static class Response {
        private Long memberId;
        private String email;
        private String profile;
        private String createdAt;
        private String modifiedAt;
        private String lastLoginAt;
        private String company;
        private String title;
        private String content;
        private String memberStatus;

        public Response(Long memberId, String email, String profile, LocalDateTime createdAt, LocalDateTime modifiedAt, LocalDateTime lastLoginAt, String company, String title, String content, String memberStatus) {
            this.memberId = memberId;
            this.email = email;
            this.profile = profile;
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.lastLoginAt = lastLoginAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.company = company;
            this.title = title;
            this.content = content;
            this.memberStatus = memberStatus;
        }
    }
}
