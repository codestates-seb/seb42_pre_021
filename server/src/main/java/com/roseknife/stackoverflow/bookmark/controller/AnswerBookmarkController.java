package com.roseknife.stackoverflow.bookmark.controller;

import com.roseknife.stackoverflow.bookmark.dto.AnswerBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.bookmark.mapper.AnswerBookmarkMapper;
import com.roseknife.stackoverflow.bookmark.service.AnswerBookmarkService;
import com.roseknife.stackoverflow.dto.SingleResponseDto;
import com.roseknife.stackoverflow.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@CrossOrigin
@RestController
@RequestMapping("/bookmarks/answers")
@Validated
@RequiredArgsConstructor
public class AnswerBookmarkController {
	private static final String ANSWER_BOOKMARK_DEFAULT_URL = "/bookmarks/answers";
	private final AnswerBookmarkService answerBookmarkService;
	private final AnswerBookmarkMapper mapper;

	@PostMapping
	public ResponseEntity postAnswerBookmark(@Valid @RequestBody AnswerBookmarkDto.Post answerBookmarkPostDto) {
		AnswerBookmark answerBookmark
				= answerBookmarkService.createAnswerBookmark(mapper.answerBookmarkPostDtoToAnswerBookmark(answerBookmarkPostDto));
		URI location = UriCreator.createUri(ANSWER_BOOKMARK_DEFAULT_URL, answerBookmark.getMember().getMemberId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("{answer-bookmark-id}")
	public ResponseEntity patchAnswerBookmark(@PathVariable("answer-bookmark-id") @Positive Long answerBookmarkId,
	                                          @Valid @RequestBody AnswerBookmarkDto.Patch answerBookmarkPatchDto) {
		answerBookmarkPatchDto.setAnswerBookmarkId(answerBookmarkId);
		AnswerBookmark answerBookmark
				= answerBookmarkService.updateAnswerBookmark(mapper.answerBookmarkPatchDtoToAnswerBookmark(answerBookmarkPatchDto));

		return ResponseEntity.ok(new SingleResponseDto<>(mapper.answerBookmarkToAnswerBookmarkResponseDto(answerBookmark)));
	}
}
