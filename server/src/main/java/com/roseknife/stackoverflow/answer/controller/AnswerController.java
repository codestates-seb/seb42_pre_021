package com.roseknife.stackoverflow.answer.controller;

import com.roseknife.stackoverflow.answer.dto.AnswerDto;
import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.answer.mapper.AnswerMapper;
import com.roseknife.stackoverflow.answer.service.AnswerService;
import com.roseknife.stackoverflow.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.validation.Valid;
import java.net.URI;


@RestController
@RequestMapping("/answers")
@RequiredArgsConstructor
@Validated
public class AnswerController {
	private final static String ANSWER_DEFAULT_URL = "/answers";
	private final AnswerService answerService;
	private final AnswerMapper mapper;

	@PostMapping
	public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post answerPostDto) {
		Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

		URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, answer.getAnswerId());

		return ResponseEntity.created(location).build();
	}

//	@PatchMapping("/{answer-id}")
//	public ResponseEntity patchAnswer() {
//
//	}
//
//	@DeleteMapping("/{answer-id}")
//	public ResponseEntity deleteAnswer() {
//
//	}
}
