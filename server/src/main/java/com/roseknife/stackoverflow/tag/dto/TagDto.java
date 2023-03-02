package com.roseknife.stackoverflow.tag.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.NotBlank;

public class TagDto {
    @Getter
    public static class Post {
        @NotBlank
        private String name;
        private String content;
    }

    @Getter
    @AllArgsConstructor
    public static class Response {
        private long tagId;
        private String name;
        private String content;
    }
}
