package com.ironhack.edge.service.impl;

import com.ironhack.edge.client.UserClient;
import com.ironhack.edge.dto.SignInDto;
import com.ironhack.edge.dto.SignInResponseDto;
import com.ironhack.edge.dto.SignUpResponseDto;
import com.ironhack.edge.dto.SignupDto;
import com.ironhack.edge.exceptions.CustomException;
import com.ironhack.edge.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserClient userClient;


    public SignInResponseDto signIn(SignInDto signInDto) {
        return userClient.signIn(signInDto);
    }

    public SignUpResponseDto signUp(SignupDto signupDto) throws CustomException {
        return userClient.signUp(signupDto);
    }

    public SignUpResponseDto addAdmin(SignupDto signupDto) throws CustomException {
        return userClient.addAdmin(signupDto);
    }
}
