package com.roseknife.stackoverflow.member.dto;

import lombok.Getter;
import lombok.Setter;

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
        @Setter
        private Long memberId;
        private String profile;
        private String location;
        private String title;
        private String html;
        private String markdown;
    }

    @Getter
    public static class Login {
        @Email
        private String email;
        private String password;
    }


    @Getter
    public static class Response {
        private Long memberId;
        private String nickname;
        private String email;
        private String profile;
        private String createdAt;
        private String modifiedAt;
        private String lastLoginAt;
        private String location;
        private String title;
        private String html;
        private String markdown;
        private String memberStatus;

        public Response(Long memberId, String nickname, String email, String profile, LocalDateTime createdAt, LocalDateTime modifiedAt, LocalDateTime lastLoginAt, String location, String title, String html, String markdown, String memberStatus) {
            this.memberId = memberId;
            this.nickname = nickname;
            this.email = email;
            this.profile = profile;
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.lastLoginAt = lastLoginAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.location = location;
            this.title = title;
            this.html = html;
            this.markdown = markdown;
            this.memberStatus = memberStatus;
        }
    }

    @Getter
    public static class ResponseLogin {
        private Long memberId;
        private String nickname;
        private String email;
        private String profile;
        private String memberStatus;
        private String authorization;
        private String refresh;

        public ResponseLogin(Long memberId, String nickname, String email, String profile, String memberStatus,
                             String authorization, String refresh) {
            this.memberId = memberId;
            this.nickname = nickname;
            this.email = email;
            this.profile = profile;
            this.memberStatus = memberStatus;
            this.authorization = authorization;
            this.refresh = refresh;
        }
    }
}
