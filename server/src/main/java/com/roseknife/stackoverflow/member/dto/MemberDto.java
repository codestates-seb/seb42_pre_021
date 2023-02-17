package com.roseknife.stackoverflow.member.dto;

import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.Pattern;

public class MemberDto {
    @Getter
    public static class Post {
        @Email
        private String email;
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
}
