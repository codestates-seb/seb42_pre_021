package com.roseknife.stackoverflow.answer.controller;

import com.roseknife.stackoverflow.answer.dto.AnswerDto;
import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.answer.mapper.AnswerMapper;
import com.roseknife.stackoverflow.answer.service.AnswerService;
import com.roseknife.stackoverflow.dto.SingleResponseDto;
import com.roseknife.stackoverflow.utils.UriCreator;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;


@RestController
@RequestMapping("/answers")
@RequiredArgsConstructor
@Validated
public class AnswerController {
	private static final String ANSWER_DEFAULT_URL = "/answers";
	private final AnswerService answerService;
	private final AnswerMapper mapper;

	@PostMapping
	public ResponseEntity postAnswer(@Valid @RequestBody AnswerDto.Post answerPostDto) {
		Answer answer = answerService.createAnswer(mapper.answerPostDtoToAnswer(answerPostDto));

		URI location = UriCreator.createUri(ANSWER_DEFAULT_URL, answer.getAnswerId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/{answer-id}")
	public ResponseEntity patchAnswer(@PathVariable("answer-id") @Positive Long answerId,
	                                  @Valid @RequestBody AnswerDto.Patch answerPatchDto) {
		answerPatchDto.setAnswerId(answerId);
		Answer answer = answerService.updateAnswer(mapper.answerPatchDtoToAnswer(answerPatchDto));

		return ResponseEntity.ok(new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer)));
	}

	@DeleteMapping("/{answer-id}")
	public ResponseEntity deleteAnswer(@PathVariable("answer-id") @Positive Long answerId) {
		answerService.deleteAnswer(answerId);

		return ResponseEntity.noContent().build();
	}

	//테스트용 (엔티티 직접 리스폰시 List 적용안되는것 - 추후 시간날때 확인)
//	@GetMapping("/{answer-id}")
//	public ResponseEntity getAnswer(@PathVariable("answer-id") Long answerId) {
//		Answer answer = answerService.findAnswer(answerId);
//
//		return ResponseEntity.ok(
//				new SingleResponseDto<>(mapper.answerToAnswerResponseDto(answer))
//		);
//	}
}
