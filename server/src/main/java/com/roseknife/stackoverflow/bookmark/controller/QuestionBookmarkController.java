package com.roseknife.stackoverflow.bookmark.controller;

import com.roseknife.stackoverflow.bookmark.dto.QuestionBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import com.roseknife.stackoverflow.bookmark.mapper.QuestionBookmarkMapper;
import com.roseknife.stackoverflow.bookmark.service.QuestionBookmarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/bookmarks/questions")
@RequiredArgsConstructor
@Validated
public class QuestionBookmarkController {
	private final QuestionBookmarkService questionBookmarkService;
	private final QuestionBookmarkMapper mapper;

	@PostMapping
	public ResponseEntity postQuestionBookmark(@Valid @RequestBody QuestionBookmarkDto.Post questionBookmarkPostDto) {
		QuestionBookmark questionBookmark
				= questionBookmarkService.createQuestionBookmark(mapper.questionBookmarkPostDtoToQuestionBookmark(questionBookmarkPostDto));

		return ResponseEntity.ok(mapper.questionBookmarkToQuestionBookmarkResponseDto(questionBookmark));
	}
}
