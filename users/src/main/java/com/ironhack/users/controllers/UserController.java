package com.ironhack.users.controllers;

import com.ironhack.users.dto.SignInDto;
import com.ironhack.users.dto.SignInResponseDto;
import com.ironhack.users.dto.SignUpResponseDto;
import com.ironhack.users.dto.SignupDto;
import com.ironhack.users.exceptions.AuthenticationFailException;
import com.ironhack.users.exceptions.CustomException;
import com.ironhack.users.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;


@RestController
@CrossOrigin(origins = "*")
public class UserController {

    @Autowired
    UserService userService;

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.OK)
    public SignUpResponseDto Signup(@RequestBody SignupDto signupDto) throws CustomException {
        return userService.signUp(signupDto);
    }

    @PostMapping("/signin")
    @ResponseStatus(HttpStatus.OK)
    public SignInResponseDto SignIn(@RequestBody SignInDto signInDto) throws CustomException, AuthenticationFailException {
        return userService.signIn(signInDto);
    }

    @PostMapping("/addadmin")
    @ResponseStatus(HttpStatus.OK)
    public SignUpResponseDto addAdmin(@RequestBody SignupDto signupDto) throws CustomException {
        return userService.addAdmin(signupDto);
    }
}
