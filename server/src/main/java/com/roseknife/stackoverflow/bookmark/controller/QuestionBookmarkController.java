package com.roseknife.stackoverflow.bookmark.controller;

import com.roseknife.stackoverflow.bookmark.dto.QuestionBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import com.roseknife.stackoverflow.bookmark.mapper.QuestionBookmarkMapper;
import com.roseknife.stackoverflow.bookmark.service.QuestionBookmarkService;
import com.roseknife.stackoverflow.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@RestController
@RequestMapping("/bookmarks/questions")
@RequiredArgsConstructor
@Validated
public class QuestionBookmarkController {
	private final QuestionBookmarkService questionBookmarkService;
	private final QuestionBookmarkMapper mapper;

	@PatchMapping("/{question-bookmark-id}")
	public ResponseEntity patchQuestionBookmark(@PathVariable("question-bookmark-id") @Positive Long questionBookmarkId,
	                                            @Valid @RequestBody QuestionBookmarkDto.Patch questionBookmarkPatchDto) {
		questionBookmarkPatchDto.setQuestionBookmarkId(questionBookmarkId);
		QuestionBookmark questionBookmark
				= questionBookmarkService.updateQuestionBookmark(mapper.questionBookmarkPatchDtoToQuestionBookmark(questionBookmarkPatchDto));

		return ResponseEntity.ok(new SingleResponseDto<>(mapper.questionBookmarkToQuestionBookmarkResponseDto(questionBookmark)));
	}
}
