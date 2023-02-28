package com.roseknife.stackoverflow.question.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.roseknife.stackoverflow.answer.entity.Answer;
import com.roseknife.stackoverflow.audit.Auditable;
import com.roseknife.stackoverflow.comment.entity.QuestionComment;
import com.roseknife.stackoverflow.bookmark.entity.QuestionBookmark;
import com.roseknife.stackoverflow.member.entity.Member;
import com.roseknife.stackoverflow.tag.entity.QuestionTag;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;

@NoArgsConstructor
@Getter
@Setter
@Entity
public class Question extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long questionId;

    @Column(length = 100, nullable = false)
    private String title;

    @Column(length = 1_000_000_000)
    private String html;

    @Column(length = 1_000_000_000)
    private String markdown;

    private Integer viewCount;    //초기화 = 0
    private Integer answerCount;  //초기화 = 0
    private Integer voteCount;
//    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

    @JsonIgnore //목록으로 가져오는 쪽 에서만 적용해도 가능
    @OneToMany(mappedBy = "question",cascade = CascadeType.REMOVE)    //
    private List<Answer> answers = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "question",cascade = CascadeType.REMOVE)
    private List<QuestionComment> questionComments = new ArrayList<>();

    @JsonIgnore
    @OneToMany(mappedBy = "question", cascade = {CascadeType.PERSIST,CascadeType.REMOVE})
    private List<QuestionTag> questionTags = new ArrayList<>();

//    @OneToMany(mappedBy = "question")
//    private List<QuestionVote> questionVotes; //voteCount 로 대체

    // modified 55-63
    @JsonIgnore //1대1 무한루프로 적용 - 이쪽에서만 적용 (추후 알아볼것)
    @OneToOne(mappedBy = "question",cascade = CascadeType.REMOVE)
    private QuestionBookmark questionBookmark;

    public void setQuestionBookmark(QuestionBookmark questionBookmark) {
        this.questionBookmark = questionBookmark;
        if (questionBookmark.getQuestion() != this) {
            questionBookmark.setQuestion(this);
        }
    }
}
