package com.roseknife.stackoverflow.bookmark.mapper;

import com.roseknife.stackoverflow.bookmark.dto.AnswerBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerBookmarkMapper {
	@Mapping(source = "memberId", target = "member.memberId")
	@Mapping(source = "answerId", target = "answer.answerId")
	AnswerBookmark answerBookmarkPostDtoToAnswerBookmark(AnswerBookmarkDto.Post answerBookmarkPostDto);

	@Mapping(source = "memberId", target = "member.memberId")
	AnswerBookmark answerBookmarkPatchDtoToAnswerBookmark(AnswerBookmarkDto.Patch answerBookmarkPatchDto);

	@Mapping(source = "member.memberId", target = "memberId")
	AnswerBookmarkDto.Response answerBookmarkToAnswerBookmarkResponseDto(AnswerBookmark answerBookmark);
}
