package com.roseknife.stackoverflow.comment.mapper;

import com.roseknife.stackoverflow.comment.dto.QuestionCommentDto;
import com.roseknife.stackoverflow.comment.entity.QuestionComment;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuestionCommentMapper {
	@Mapping(source = "memberId", target = "member.memberId")
	@Mapping(source = "questionId", target = "question.questionId")
	QuestionComment questionCommentPostDtoToQuestionComment(QuestionCommentDto.Post questionCommentPostDto);
}
