package com.roseknife.stackoverflow.bookmark.controller;

import com.roseknife.stackoverflow.bookmark.dto.AnswerBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.bookmark.mapper.AnswerBookmarkMapper;
import com.roseknife.stackoverflow.bookmark.service.AnswerBookmarkService;
import com.roseknife.stackoverflow.dto.SingleResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;

@CrossOrigin
@RestController
@RequestMapping("/bookmarks/answers")
@Validated
@RequiredArgsConstructor
public class AnswerBookmarkController {
	private final AnswerBookmarkService answerBookmarkService;
	private final AnswerBookmarkMapper mapper;

	@PatchMapping("{answer-bookmark-id}")
	public ResponseEntity patchAnswerBookmark(@PathVariable("answer-bookmark-id") @Positive Long answerBookmarkId,
	                                          @Valid @RequestBody AnswerBookmarkDto.Patch answerBookmarkPatchDto) {
		answerBookmarkPatchDto.setAnswerBookmarkId(answerBookmarkId);
		AnswerBookmark answerBookmark
				= answerBookmarkService.updateAnswerBookmark(mapper.answerBookmarkPatchDtoToAnswerBookmark(answerBookmarkPatchDto));

		return ResponseEntity.ok(new SingleResponseDto<>(mapper.answerBookmarkToAnswerBookmarkResponseDto(answerBookmark)));
	}
}
