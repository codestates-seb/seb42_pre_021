package com.roseknife.stackoverflow.question.mapper;

import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.question.dto.QuestionDto;
import com.roseknife.stackoverflow.question.entity.Question;
import org.mapstruct.*;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    @Mapping(source = "memberId",target = "member.memberId")
    Question questionPostToQuestion(QuestionDto.Post requestBody);

    //맵핑 커스텀 작업
    //01.
    @Mapping(source = "member.nickname",target = "questionMember.nickname")
    @Mapping(source = "member.profile",target = "questionMember.profile")
    QuestionDto.Response questionToQuestionResponse(Question requestBody);



    Question questionPatchToQuestion(QuestionDto.Patch requestBody);

    @Named("Q2R")
    @Mapping(source = "member.nickname",target = "questionMember.nickname")
    @Mapping(source = "member.profile",target = "questionMember.profile")
    QuestionDto.ResponseAll questionToQuestionResponseAll(Question requestBody);
    @IterableMapping(qualifiedByName = "Q2R")
    List<QuestionDto.ResponseAll> questionsToQuestionResponses(List<Question> questions);

}
