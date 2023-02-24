package com.roseknife.stackoverflow.answer.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.roseknife.stackoverflow.audit.Auditable;
import com.roseknife.stackoverflow.bookmark.entity.AnswerBookmark;
import com.roseknife.stackoverflow.comment.entity.AnswerComment;
import com.roseknife.stackoverflow.comment.entity.QuestionComment;
import com.roseknife.stackoverflow.member.entity.Member;
import com.roseknife.stackoverflow.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.web.bind.annotation.CrossOrigin;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@Entity
@Getter
@Setter
@NoArgsConstructor
public class Answer extends Auditable {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long answerId;

	@Column(nullable = false)
	private String content;

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "MEMBER_ID")
	private Member member;

	//JsonIgnore 제거(Many에선 필요 X)
	@ManyToOne
	@JoinColumn(name = "QUESTION_ID")
	private Question question;

	//답변-댓글 맵핑 추가
	@JsonIgnore //목록으로 가져오는 쪽 에서만 적용해도 가능
	@OneToMany(mappedBy = "answer",cascade = CascadeType.REMOVE)    //
	private List<AnswerComment> answerComments = new ArrayList<>();

	// modified 36-44
	@JsonIgnore //1대1 무한루프로 적용 - 이쪽에서만 적용 (추후 알아볼것)
	@OneToOne(mappedBy = "answer", cascade = {CascadeType.PERSIST, CascadeType.REMOVE})
	private AnswerBookmark answerBookmark;

	public void setAnswerBookmark(AnswerBookmark answerBookmark) {
		this.answerBookmark = answerBookmark;
		if (answerBookmark.getAnswer() != this) {
			answerBookmark.setAnswer(this);
		}
	}
}
