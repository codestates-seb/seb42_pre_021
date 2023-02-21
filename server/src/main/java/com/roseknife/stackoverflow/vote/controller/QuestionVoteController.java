package com.roseknife.stackoverflow.vote.controller;

import com.roseknife.stackoverflow.dto.SingleResponseDto;
import com.roseknife.stackoverflow.utils.UriCreator;
import com.roseknife.stackoverflow.vote.dto.QuestionVoteDto;
import com.roseknife.stackoverflow.vote.entity.QuestionVote;
import com.roseknife.stackoverflow.vote.mapper.QuestionVoteMapper;
import com.roseknife.stackoverflow.vote.service.QuestionVoteService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.Positive;
import java.net.URI;

@RestController
@RequestMapping("/votes/questions")
@RequiredArgsConstructor
@Validated
public class QuestionVoteController {
	private static final String QUESTION_VOTE_DEFAULT_URL = "/votes/questions";
	private final QuestionVoteService questionVoteService;
	private final QuestionVoteMapper mapper;

	@PostMapping
	public ResponseEntity postQuestionVote(@Valid @RequestBody QuestionVoteDto.Post questionVotePostDto) {
		QuestionVote questionVote
				= questionVoteService.createQuestionVote(mapper.questionVotePostDtoToQuestionVote(questionVotePostDto));
		URI location = UriCreator.createUri(QUESTION_VOTE_DEFAULT_URL, questionVote.getQuestionVoteId());

		return ResponseEntity.created(location).build();
	}

	@PatchMapping("/{question-vote-id}")
	public ResponseEntity patchQuestionVote(@PathVariable("question-vote-id") @Positive Long questionVoteId,
	                                        @RequestBody QuestionVoteDto.Patch questionVotePatchDto) {
		questionVotePatchDto.setQuestionVoteId(questionVoteId);
		QuestionVote questionVote
				= questionVoteService.updateQuestionVote(mapper.questionVotePatchDtoToQuestionVote(questionVotePatchDto));

		return ResponseEntity.ok(new SingleResponseDto<>(mapper.questionVoteToQuestionVoteResponseDto(questionVote)));
	}
}
