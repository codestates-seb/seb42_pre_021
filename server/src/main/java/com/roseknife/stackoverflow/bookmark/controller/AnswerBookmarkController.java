package com.roseknife.stackoverflow.bookmark.controller;

import com.roseknife.stackoverflow.bookmark.dto.AnswerBookmarkDto;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.bookmark.mapper.AnswerBookmarkMapper;
import com.roseknife.stackoverflow.bookmark.service.AnswerBookmarkService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@CrossOrigin
@RestController
@RequestMapping("/bookmarks/answers")
@Validated
@RequiredArgsConstructor
public class AnswerBookmarkController {
	private final AnswerBookmarkService answerBookmarkService;
	private final AnswerBookmarkMapper mapper;

	@PostMapping
	public ResponseEntity postAnswerBookmark(@Valid @RequestBody AnswerBookmarkDto.Post answerBookmarkPostDto) {
		AnswerBookmark answerBookmark
				= answerBookmarkService.createAnswerBookmark(mapper.answerBookmarkPostDtoToAnswerBookmark(answerBookmarkPostDto));

		return ResponseEntity.ok(mapper.answerBookmarkToAnswerBookmarkResponseDto(answerBookmark));
	}
}
