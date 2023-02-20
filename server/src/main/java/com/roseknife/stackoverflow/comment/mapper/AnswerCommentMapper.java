package com.roseknife.stackoverflow.comment.mapper;

import com.roseknife.stackoverflow.comment.dto.AnswerCommentDto;
import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerCommentMapper {
	@Mapping(source = "memberId", target = "member.memberId")
	@Mapping(source = "answerId", target = "answer.answerId")
	AnswerComment answerCommentPostDtoToAnswerComment(AnswerCommentDto.Post answerCommentPostDto);

}