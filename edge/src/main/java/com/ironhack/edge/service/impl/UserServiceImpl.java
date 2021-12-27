package com.ironhack.edge.service.impl;

import com.ironhack.edge.client.UserClient;
import com.ironhack.edge.dto.*;
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

    public void deleteUser(int id) {
        userClient.deleteUser(id);
    }

    public void updateUser(UpdateUserDto updateUserDto) {
        userClient.updateUser(updateUserDto);
    }
}
