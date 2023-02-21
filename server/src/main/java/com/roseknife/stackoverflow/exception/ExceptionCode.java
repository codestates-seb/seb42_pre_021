package com.roseknife.stackoverflow.exception;

import lombok.Getter;

public enum ExceptionCode {
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    EMAIL_EXISTS(409, "Email Already Exists"),
    NICKNAME_EXIST(409, "Nickname Already Exists"),

    QUESTION_NOT_FOUND(404, "Question Not Found"),
    QUESTION_SORT_ERROR(500,"Question Sort Error"),

    ANSWER_NOT_FOUND(404, "Answer Not Found"),

    QUESTION_SORT_ERROR(500,"Question sort error");

    @Getter
    private int status;

    @Getter
    private String message;

    ExceptionCode(int code, String message) {
        this.status = code;
        this.message = message;
    }
}