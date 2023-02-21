package com.roseknife.stackoverflow.vote.mapper;

import com.roseknife.stackoverflow.vote.dto.AnswerVoteDto;
import com.roseknife.stackoverflow.vote.entity.AnswerVote;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerVoteMapper {
	@Mapping(source = "memberId", target = "member.memberId")
	@Mapping(source = "answerId", target = "answer.answerId")
	AnswerVote answerVotePostDtoToAnswerVote(AnswerVoteDto.Post answerVotePostDto);

	@Mapping(source = "memberId", target = "member.memberId")
	AnswerVote answerVotePatchDtoToAnswerVote(AnswerVoteDto.Patch answerVotePatchDto);

	AnswerVoteDto.Response answerVoteToAnswerVoteResponseDto(AnswerVote answerVote);
}
