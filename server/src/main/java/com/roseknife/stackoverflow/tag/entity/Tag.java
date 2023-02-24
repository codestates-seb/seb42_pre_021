package com.roseknife.stackoverflow.tag.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;
    @Column(nullable = false, unique = true)
    private String name;
    private String content;

    @JsonIgnore
    @OneToMany(mappedBy = "tag") // cascade 관게? 학습예제에선 만드는쪽(질문)에서 CascadeType.PERSIST로 작성 되어있음)
    private List<QuestionTag> questionTags = new ArrayList<>();
}
