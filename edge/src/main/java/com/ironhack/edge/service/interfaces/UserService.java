package com.ironhack.edge.service.interfaces;

import com.ironhack.edge.dto.*;
import com.ironhack.edge.exceptions.CustomException;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

public interface UserService {

    SignInResponseDto signIn(SignInDto signInDto);
    SignUpResponseDto signUp(SignupDto signupDto) throws CustomException;
    SignUpResponseDto addAdmin(SignupDto signupDto) throws CustomException;
    void deleteUser(int id);
    void updateUser(UpdateUserDto updateUserDto);
}
