package com.roseknife.stackoverflow.bookmark.mapper;

import com.roseknife.stackoverflow.bookmark.dto.AnswerBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface AnswerBookmarkMapper {
	@Mapping(source = "memberId", target = "member.memberId")
	AnswerBookmark answerBookmarkPatchDtoToAnswerBookmark(AnswerBookmarkDto.Patch answerBookmarkPatchDto);

	AnswerBookmarkDto.Response answerBookmarkToAnswerBookmarkResponseDto(AnswerBookmark answerBookmark);
}
