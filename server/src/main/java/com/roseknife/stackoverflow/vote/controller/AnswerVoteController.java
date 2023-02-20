package com.roseknife.stackoverflow.vote.controller;

import com.roseknife.stackoverflow.utils.UriCreator;
import com.roseknife.stackoverflow.vote.dto.AnswerVoteDto;
import com.roseknife.stackoverflow.vote.entity.AnswerVote;
import com.roseknife.stackoverflow.vote.mapper.AnswerVoteMapper;
import com.roseknife.stackoverflow.vote.service.AnswerVoteService;
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

}
