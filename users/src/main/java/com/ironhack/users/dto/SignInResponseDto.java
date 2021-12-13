package com.ironhack.users.dto;

import com.ironhack.users.model.User;

public class SignInResponseDto {
    private String token;
    private User user;

    public SignInResponseDto() {
    }

    public SignInResponseDto(String token, User user) {
        this.token = token;
        this.user = user;
    }

    public String getToken() {
        return token;
    }

    public void setToken(String token) {
        this.token = token;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }




}
