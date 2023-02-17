package com.roseknife.stackoverflow.question.mapper;

import com.roseknife.stackoverflow.question.dto.QuestionDto;
import com.roseknife.stackoverflow.question.entity.Question;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface QuestionMapper {
    @Mapping(source = "memberId",target = "member.memberId")
    Question questionPostToQuestion(QuestionDto.Post requestBody);

    @Mapping(source = "member.memberId",target = "memberId")
    QuestionDto.Response questionToQuestionResponse(Question requestBody);
}
