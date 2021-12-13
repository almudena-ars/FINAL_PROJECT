package com.ironhack.edge.client;

import com.ironhack.edge.dto.SignInDto;
import com.ironhack.edge.dto.SignInResponseDto;
import com.ironhack.edge.dto.SignUpResponseDto;
import com.ironhack.edge.dto.SignupDto;
import com.ironhack.edge.exceptions.CustomException;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;

@FeignClient("users-service")
public interface UserClient {

    @PostMapping("/signin")
    @ResponseStatus(HttpStatus.OK)
    SignInResponseDto signIn(@RequestBody SignInDto signInDto);

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.OK)
    SignUpResponseDto signUp(@RequestBody SignupDto signupDto) throws CustomException;

    @PostMapping("/addadmin")
    @ResponseStatus(HttpStatus.OK)
    SignUpResponseDto addAdmin(@RequestBody SignupDto signupDto) throws CustomException;


}
