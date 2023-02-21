package com.roseknife.stackoverflow.question.dto;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.comment.dto.AnswerCommentDto;
import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import com.roseknife.stackoverflow.dto.PageInfo;
import lombok.*;

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
    @Builder
    @Getter
    @AllArgsConstructor
    public static class QuestionAnswer {
        private String createdAt;
        private String modifiedAt;
        private String content;
        private QuestionDto.QuestionMember questionMember;
        private List<AnswerCommentDto.Response> answerComments;
        public QuestionAnswer(LocalDateTime createdAt, LocalDateTime modifiedAt, String content, QuestionMember questionMember,List<AnswerCommentDto.Response> answerComments) {
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.content = content;
            this.questionMember = questionMember;
            this.answerComments = answerComments;
        }
    }

    @Builder
    @Getter
    @AllArgsConstructor
    public static class QuestionCommentResponse {
        private String createdAt;
        private String modifiedAt;
        private String content;
        private String nickname;
        private String profile;

        public QuestionCommentResponse(LocalDateTime createdAt, LocalDateTime modifiedAt, String content, QuestionMember questionMember,String nickname,String profile) {
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.content = content;
            this.nickname = nickname;
            this.profile = profile;
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
        //질문 안 멤버 DTO
        private QuestionDto.QuestionMember questionMember;
        //질문 답변 DTO
        private List<QuestionDto.QuestionAnswer> questionAnswers;
        //질문 답변 페이지 정보
        private PageInfo answerPageInfo;
        //질문 댓글 DTO
        private List<QuestionDto.QuestionCommentResponse> questionComments;

        public Response(Long questionId, String title, String content, LocalDateTime createdAt, LocalDateTime modifiedAt, Integer viewCount,
                        Integer answerCount, QuestionMember questionMember,
                        List<QuestionDto.QuestionAnswer> questionAnswers,PageInfo answerPageInfo,List<QuestionDto.QuestionCommentResponse> questionComments) {
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
            this.questionComments = questionComments;
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


    @AllArgsConstructor
    @Getter
    @Builder
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
}
