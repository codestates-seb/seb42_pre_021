package com.roseknife.stackoverflow.question.dto;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.bookmark.dto.AnswerBookmarkDto;
import com.roseknife.stackoverflow.bookmark.dto.QuestionBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import com.roseknife.stackoverflow.comment.dto.AnswerCommentDto;
import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import com.roseknife.stackoverflow.dto.PageInfo;
import com.roseknife.stackoverflow.tag.entity.QuestionTag;
import lombok.*;

import javax.persistence.Column;
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

        private String html;

        private String markdown;

        private List<String> tagNames; //

    }

    @Getter
    @AllArgsConstructor
    public static class Patch {
        @Positive
        @Setter
        private Long questionId;

        private String title;

        private String html;

        private String markdown;
    }
    @Builder
    @Getter
    @AllArgsConstructor
    public static class QuestionAnswer {
        @Positive
        private Long answerId;
        private String createdAt;
        private String modifiedAt;

        @Column(length = 1000000)
        private String html;
        @Column(length = 1000000)
        private String markdown;

        private Integer voteCount;
        private QuestionDto.QuestionMember questionMember;
        private List<AnswerCommentDto.Response> answerComments;

//        private AnswerBookmark answerBookmark;
        private AnswerBookmarkDto.Response answerBookmark;
        public QuestionAnswer(Long answerId,LocalDateTime createdAt, LocalDateTime modifiedAt, String html,String markdown, QuestionMember questionMember,List<AnswerCommentDto.Response> answerComments,
                              AnswerBookmarkDto.Response answerBookmark,Integer voteCount) {
            this.answerId = answerId;
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.html = html;
            this.markdown = markdown;
            this.voteCount = voteCount;
            this.questionMember = questionMember;
            this.answerComments = answerComments;
            this.answerBookmark = answerBookmark;
        }
    }

    @Builder
    @Getter
    @AllArgsConstructor
    public static class QuestionCommentResponse {
        private String createdAt;
        private String modifiedAt;

        private String html;

        private String markdown;

        private String memberId;
        private String nickname;
        private String profile;

        public QuestionCommentResponse(LocalDateTime createdAt, LocalDateTime modifiedAt, String html, String markdown, QuestionMember questionMember, String nickname, String profile) {
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.html = html;
            this.markdown = markdown;
            this.nickname = nickname;
            this.profile = profile;
        }
    }

    @AllArgsConstructor
    @Getter
    public static class Response {
        private Long questionId;
        private String title;

        private String html;

        private String markdown;
        private String createdAt;
        private String modifiedAt;
        private Integer viewCount;
        private Integer answerCount;

        private Integer voteCount;
        //질문 안 멤버 DTO
        private QuestionDto.QuestionMember questionMember;

//        private List<QuestionTag> questionTags;
        private List<String> questionTags;
        //질문 답변 DTO
        private List<QuestionDto.QuestionAnswer> questionAnswers;
        //질문 답변 페이지 정보
        private PageInfo answerPageInfo;
        //질문 댓글 DTO
        private List<QuestionDto.QuestionCommentResponse> questionComments;

//        private QuestionBookmark questionBookmark;
        private QuestionBookmarkDto.Response questionBookmark;

        public Response(Long questionId, String title, String html, String markdown, LocalDateTime createdAt, LocalDateTime modifiedAt, Integer viewCount,
                        Integer answerCount, QuestionMember questionMember,
                        List<QuestionDto.QuestionAnswer> questionAnswers, PageInfo answerPageInfo, List<QuestionDto.QuestionCommentResponse> questionComments,
                        List<String> questionTags, QuestionBookmarkDto.Response questionBookmark,Integer voteCount) {

            this.questionId = questionId;
            this.title = title;
            this.html = html;
            this.markdown = markdown;
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.viewCount = viewCount;
            this.answerCount = answerCount;
            this.questionMember = questionMember;
            this.questionAnswers = questionAnswers;
            this.answerPageInfo = answerPageInfo;
            this.questionComments = questionComments;
            this.questionTags = questionTags;
            this.questionBookmark = questionBookmark;
            this.voteCount = voteCount;
        }

        //Question-AnswerDto
//        private
        //        private List<Tag> Tags;
    }

    @AllArgsConstructor
    @Getter
    public static class QuestionMember {
        private Long memberId;
        private String nickname;
        private String profile;
    }


    @AllArgsConstructor
    @Getter
    @Builder
    public static class ResponseAll {
        private Long questionId;
        private String title;
        private String html;
        private String markdown;
        private String createdAt;
        private String modifiedAt;
        private Integer viewCount;
        private Integer answerCount;

        private Integer voteCount;

        private List<String> questionTags;
        private QuestionDto.QuestionMember questionMember;

        public ResponseAll(Long questionId, String title, String html, String markdown, LocalDateTime createdAt,
                           LocalDateTime modifiedAt, Integer viewCount, Integer answerCount,
                           QuestionMember questionMember,Integer voteCount, List<String> questionTags) {
            this.questionId = questionId;
            this.title = title;
            this.html = html;
            this.markdown = markdown;
            this.createdAt = createdAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.modifiedAt = modifiedAt.format(DateTimeFormatter.ISO_LOCAL_DATE);
            this.viewCount = viewCount;
            this.answerCount = answerCount;
            this.questionMember = questionMember;
            this.voteCount = voteCount;
            this.questionTags = questionTags;
        }

    }
}
