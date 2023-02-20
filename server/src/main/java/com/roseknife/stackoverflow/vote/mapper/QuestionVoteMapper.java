package com.roseknife.stackoverflow.vote.mapper;

import com.roseknife.stackoverflow.vote.dto.QuestionVoteDto;
import com.roseknife.stackoverflow.vote.entity.QuestionVote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuestionVoteMapper {
	@Mapping(source = "memberId", target = "member.memberId")
	@Mapping(source = "questionId", target = "question.questionId")
	QuestionVote questionVotePostDtoToQuestionVote(QuestionVoteDto.Post questionVotePostDto);

}
