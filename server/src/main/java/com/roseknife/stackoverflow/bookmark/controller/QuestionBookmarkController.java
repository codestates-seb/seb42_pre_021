package com.roseknife.stackoverflow.bookmark.controller;

import com.roseknife.stackoverflow.bookmark.dto.QuestionBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import com.roseknife.stackoverflow.bookmark.mapper.QuestionBookmarkMapper;
import com.roseknife.stackoverflow.bookmark.service.QuestionBookmarkService;
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
@RequestMapping("/bookmarks/questions")
@RequiredArgsConstructor
@Validated
public class QuestionBookmarkController {
	private static final String QUESTION_BOOKMARK_DEFAULT_URL = "/bookmarks/questions";
	private final QuestionBookmarkService questionBookmarkService;
	private final QuestionBookmarkMapper mapper;

	@PostMapping
	public ResponseEntity postQuestionBookmark(@Valid @RequestBody QuestionBookmarkDto.Post questionBookmarkPostDto) {
		QuestionBookmark questionBookmark
				= questionBookmarkService.createQuestionBookmark(mapper.questionBookmarkPostDtoToQuestionBookmark(questionBookmarkPostDto));
		URI location = UriCreator.createUri(QUESTION_BOOKMARK_DEFAULT_URL, questionBookmark.getQuestionBookmarkId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/{question-bookmark-id}")
	public ResponseEntity patchQuestionBookmark(@PathVariable("question-bookmark-id") @Positive Long questionBookmarkId,
	                                            @Valid @RequestBody QuestionBookmarkDto.Patch questionBookmarkPatchDto) {
		questionBookmarkPatchDto.setQuestionBookmarkId(questionBookmarkId);
		QuestionBookmark questionBookmark
				= questionBookmarkService.updateQuestionBookmark(mapper.questionBookmarkPatchDtoToQuestionBookmark(questionBookmarkPatchDto));

		return ResponseEntity.ok(new SingleResponseDto<>(mapper.questionBookmarkToQuestionBookmarkResponseDto(questionBookmark)));
	}
}
