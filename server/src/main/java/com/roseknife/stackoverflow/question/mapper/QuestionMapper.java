package com.roseknife.stackoverflow.question.mapper;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.dto.PageInfo;
import com.roseknife.stackoverflow.question.dto.QuestionDto;
import com.roseknife.stackoverflow.question.entity.Question;
import org.mapstruct.*;
import org.springframework.data.domain.Page;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    @Mapping(source = "memberId",target = "member.memberId")
    Question questionPostToQuestion(QuestionDto.Post requestBody);

    //맵핑 커스텀 작업
    //01.
//    @Mapping(source = "member.nickname",target = "questionMember.nickname")
//    @Mapping(source = "member.profile",target = "questionMember.profile")
//    @Mapping(source = "answers",target = "questionAnswers")
//    QuestionDto.Response questionToQuestionResponse(Question requestBody);

    @Named("Q2R2")
    @Mapping(source = "member.nickname",target = "questionMember.nickname")
    @Mapping(source = "member.profile",target = "questionMember.profile")
    QuestionDto.QuestionAnswer answerToQuestionAnswer(Answer requestBody);
    @IterableMapping(qualifiedByName = "Q2R2")
    List<QuestionDto.QuestionAnswer> answersToQuestionAnswers(List<Answer> requestBody);

    Question questionPatchToQuestion(QuestionDto.Patch requestBody);

    @Named("Q2R")
    @Mapping(source = "member.nickname",target = "questionMember.nickname")
    @Mapping(source = "member.profile",target = "questionMember.profile")
    QuestionDto.ResponseAll questionToQuestionResponseAll(Question requestBody);
    @IterableMapping(qualifiedByName = "Q2R")
    List<QuestionDto.ResponseAll> questionsToQuestionResponses(List<Question> questions);

    default QuestionDto.Response questionsToQuestionAnswer(Question question, Page<Answer> pageAnswers) {
        if ( question == null ) {
            return null;
        }

        QuestionDto.QuestionMember questionMember = new QuestionDto.QuestionMember(question.getMember().getNickname(),question.getMember().getProfile());
        List<QuestionDto.QuestionAnswer> questionAnswers = null;
        Long questionId = null;
        String title = null;
        String content = null;
        LocalDateTime createdAt = null;
        LocalDateTime modifiedAt = null;
        Integer viewCount = null;
        Integer answerCount = null;
        List<Answer> answers = pageAnswers.getContent();
        PageInfo pageInfo = new PageInfo(pageAnswers.getNumber() + 1,
                pageAnswers.getSize(), pageAnswers.getTotalElements(), pageAnswers.getTotalPages());

        questionAnswers = answersToQuestionAnswers(answers);

        questionId = question.getQuestionId();
        title = question.getTitle();
        content = question.getContent();
        createdAt = question.getCreatedAt();
        modifiedAt = question.getModifiedAt();
        viewCount = question.getViewCount();
        answerCount = question.getAnswerCount();

        QuestionDto.Response response = new QuestionDto.Response(questionId, title, content, createdAt, modifiedAt, viewCount, answerCount, questionMember, questionAnswers, pageInfo);

        return response;
    }
}
