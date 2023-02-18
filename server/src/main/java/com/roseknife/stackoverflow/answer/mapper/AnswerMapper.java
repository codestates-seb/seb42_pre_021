package com.roseknife.stackoverflow.answer.mapper;

import com.roseknife.stackoverflow.answer.dto.AnswerDto;
import com.roseknife.stackoverflow.answer.entity.Answer;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerMapper {

	@Mapping(source = "memberId", target = "member.memberId")
	@Mapping(source = "questionId", target = "question.questionId")
	Answer answerPostDtoToAnswer(AnswerDto.Post answerPostDto);

	Answer answerPatchDtoToAnswer(AnswerDto.Patch answerPatchDto);

	@Mapping(source = "member.memberId", target = "memberId")
	AnswerDto.Response answerToAnswerResponseDto(Answer answer);
}
