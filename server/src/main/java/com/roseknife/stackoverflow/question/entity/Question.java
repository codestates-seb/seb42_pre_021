package com.roseknife.stackoverflow.question.entity;

import com.roseknife.stackoverflow.audit.Auditable;
import com.roseknife.stackoverflow.member.entity.Member;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
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

    private String content;

    private Integer viewCount=0;

    @ManyToOne
    @JoinColumn(name = "MEMBER_ID")
    private Member member;

//    @OneToMany(mappedBy = "question")
//    private List<Answer> answers;

//    @OneToMany(mappedBy = "question")
//    private List<QuestionImage> questionImages;
//
//    @OneToMany(mappedBy = "question")
//    private List<QuestionTag> questionTags;
//
//    @OneToMany(mappedBy = "question")
//    private List<QuestionComment> questionComments;

//    @OneToMany(mappedBy = "question")
//    private List<QuestionVote> questionVotes;
}
