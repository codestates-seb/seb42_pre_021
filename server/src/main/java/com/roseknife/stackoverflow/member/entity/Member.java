package com.roseknife.stackoverflow.member.entity;

import com.roseknife.stackoverflow.audit.Auditable;
import com.roseknife.stackoverflow.question.entity.Question;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.data.annotation.CreatedDate;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@Setter
@NoArgsConstructor
public class Member extends Auditable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long memberId;

    @Column(length = 100, nullable = false, unique = true)
    private String nickname;

    @Column(nullable = false, updatable = false, unique = true)
    private String email;

    @Column(length = 100, nullable = false)
    private String password;

    private String profile;

    @Column(nullable = false)
    private LocalDateTime lastLoginAt = LocalDateTime.now();

    @Embedded
    private Introduce introduce;

    @Enumerated(value = EnumType.STRING)
    private MemberStatus memberStatus = MemberStatus.MEMBER_ACTIVE;

    public enum MemberStatus{
        MEMBER_ACTIVE("활동중"),
        MEMBER_SLEEP("휴면 상태"),
        MEMBER_QUIT("탈퇴 상태");

        @Getter
        private String status;

        MemberStatus(String status) {
            this.status = status;
        }
    }


//    @OneToMany(mappedBy = "member")
//    private List<Question> questions = new ArrayList<>();


}
