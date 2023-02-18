package com.roseknife.stackoverflow.question.dto;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.member.dto.MemberDto;
import com.roseknife.stackoverflow.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.util.List;

public class QuestionDto {
    @Getter
    @AllArgsConstructor
    public static class Post {
        @Positive
        private Long memberId;

        @NotBlank
        private String title;

        private String content;

    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        @Positive
        @Setter
        private Long questionId;

        private String title;

        private String content;
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private Long questionId;
        private String title;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private Integer viewCount;
        private Integer answerCount;
        //        private Member member;
        //Question-MemberDto
        private QuestionDto.QuestionMember questionMember;

        private List<Answer> answers;
        //Question-AnswerDto
//        private
        //        private List<Tag> Tags;
    }

    @AllArgsConstructor
    @Getter
    public static class QuestionMember {
        private String nickname;
        private String profile;
    }

    @AllArgsConstructor
    @Getter
    public static class ResponseAll {
        private Long questionId;
        private String title;
        private String content;
        private LocalDateTime createdAt;
        private LocalDateTime modifiedAt;
        private Integer viewCount;
        private Integer answerCount;
        private QuestionDto.QuestionMember questionMember;

        //        private List<Tag> Tags;

    }
//    @AllArgsConstructor
//    @Getter
//    public static class QuestionAnswer {
//
//    }
}
