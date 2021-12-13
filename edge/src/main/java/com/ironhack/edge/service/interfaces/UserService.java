package com.ironhack.edge.service.interfaces;

import com.ironhack.edge.dto.SignInDto;
import com.ironhack.edge.dto.SignInResponseDto;
import com.ironhack.edge.dto.SignUpResponseDto;
import com.ironhack.edge.dto.SignupDto;
import com.ironhack.edge.exceptions.CustomException;

public interface UserService {

    SignInResponseDto signIn(SignInDto signInDto);
    SignUpResponseDto signUp(SignupDto signupDto) throws CustomException;
    SignUpResponseDto addAdmin(SignupDto signupDto) throws CustomException;
}
