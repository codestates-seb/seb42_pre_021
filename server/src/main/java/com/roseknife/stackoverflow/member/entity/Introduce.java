package com.roseknife.stackoverflow.member.entity;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;

@Embeddable
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
public class Introduce {
    private String location;

    private String title;

    @Column(length = 1000000000)
    private String html;

    @Column(length = 1000000000)
    private String markdown;
}
