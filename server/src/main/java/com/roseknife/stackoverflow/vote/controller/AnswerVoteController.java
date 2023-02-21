package com.roseknife.stackoverflow.vote.controller;

import com.roseknife.stackoverflow.dto.SingleResponseDto;
import com.roseknife.stackoverflow.utils.UriCreator;
import com.roseknife.stackoverflow.vote.dto.AnswerVoteDto;
import com.roseknife.stackoverflow.vote.entity.AnswerVote;
import com.roseknife.stackoverflow.vote.mapper.AnswerVoteMapper;
import com.roseknife.stackoverflow.vote.service.AnswerVoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/votes/answers")
@RequiredArgsConstructor
@Validated
public class AnswerVoteController {
	private static final String ANSWER_VOTE_DEFAULT_URL = "/votes/answers";
	private final AnswerVoteService answerVoteService;
	private final AnswerVoteMapper mapper;

	@PostMapping
	public ResponseEntity postAnswerVote(@Valid @RequestBody AnswerVoteDto.Post answerVotePostDto) {
		AnswerVote answerVote
				= answerVoteService.createAnswerVote(mapper.answerVotePostDtoToAnswerVote(answerVotePostDto));
		URI location = UriCreator.createUri(ANSWER_VOTE_DEFAULT_URL, answerVote.getAnswerVoteId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/{answer-vote-id}")
	public ResponseEntity patchAnswerVote(@PathVariable("answer-vote-id") @Positive Long answerVoteId,
	                                      @Valid @RequestBody AnswerVoteDto.Patch answerVotePatchDto) {
		answerVotePatchDto.setAnswerVoteId(answerVoteId);
		AnswerVote answerVote
				= answerVoteService.updateAnswerVote(mapper.answerVotePatchDtoToAnswerVote(answerVotePatchDto));

		return ResponseEntity.ok(new SingleResponseDto<>(mapper.answerVoteToAnswerVoteResponseDto(answerVote)));
	}
}
