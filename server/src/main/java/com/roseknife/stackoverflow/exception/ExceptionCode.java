package com.roseknife.stackoverflow.exception;

import lombok.Getter;

public enum ExceptionCode {
    QUESTION_NOT_FOUND(404, "Question not found"),
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