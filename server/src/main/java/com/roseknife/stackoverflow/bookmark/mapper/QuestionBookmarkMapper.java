package com.roseknife.stackoverflow.bookmark.mapper;

import com.roseknife.stackoverflow.bookmark.dto.QuestionBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface QuestionBookmarkMapper {
	@Mapping(source = "memberId", target = "member.memberId")
	QuestionBookmark questionBookmarkPatchDtoToQuestionBookmark(QuestionBookmarkDto.Patch questionBookmarkPatchDto);

	QuestionBookmarkDto.Response questionBookmarkToQuestionBookmarkResponseDto(QuestionBookmark questionBookmark);
}
