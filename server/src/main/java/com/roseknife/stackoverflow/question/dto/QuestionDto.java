package com.roseknife.stackoverflow.question.dto;

import com.roseknife.stackoverflow.dto.PageInfo;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Positive;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
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
    @Getter
    public static class QuestionAnswer {
        private String createdAt;
        private String modifiedAt;
        private String content;
        private QuestionDto.QuestionMember questionMember;

        public QuestionAnswer(LocalDateTime createdAt, LocalDateTime modifiedAt, String content, QuestionMember questionMember) {
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.content = content;
            this.questionMember = questionMember;
        }
    }
    @AllArgsConstructor
    @Getter
    public static class Response {
        private Long questionId;
        private String title;
        private String content;
        private String createdAt;
        private String modifiedAt;
        private Integer viewCount;
        private Integer answerCount;
        //        private Member member;
        //Question-MemberDto
        private QuestionDto.QuestionMember questionMember;
        //        private List<Answer> answers;
        private List<QuestionDto.QuestionAnswer> questionAnswers = new ArrayList<>();
        private PageInfo answerPageInfo;
//        private Page<Answer> pageAnwser;

        public Response(Long questionId, String title, String content, LocalDateTime createdAt, LocalDateTime modifiedAt, Integer viewCount,
                        Integer answerCount, QuestionMember questionMember,
                        List<QuestionDto.QuestionAnswer> questionAnswers,PageInfo answerPageInfo) {
            this.questionId = questionId;
            this.title = title;
            this.content = content;
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.viewCount = viewCount;
            this.answerCount = answerCount;
            this.questionMember = questionMember;
            this.questionAnswers = questionAnswers;
            this.answerPageInfo = answerPageInfo;
//            this.answers = answers;
        }

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


    @Getter
    public static class ResponseAll {
        private Long questionId;
        private String title;
        private String content;
        private String createdAt;
        private String modifiedAt;
        private Integer viewCount;
        private Integer answerCount;
        private QuestionDto.QuestionMember questionMember;

        public ResponseAll(Long questionId, String title, String content, LocalDateTime createdAt, LocalDateTime modifiedAt, Integer viewCount, Integer answerCount, QuestionMember questionMember) {
            this.questionId = questionId;
            this.title = title;
            this.content = content;
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.viewCount = viewCount;
            this.answerCount = answerCount;
            this.questionMember = questionMember;
        }


        //        private List<Tag> Tags;

    }
//    @AllArgsConstructor
//    @Getter
//    public static class QuestionAnswer {
//
//    }
}
