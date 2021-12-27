package com.ironhack.edge.client;

import com.ironhack.edge.dto.*;
import com.ironhack.edge.exceptions.CustomException;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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

    @DeleteMapping("/deleteuser")
    @ResponseStatus(HttpStatus.OK)
    void deleteUser(@RequestParam int id);

    @PatchMapping("/updateuser")
    @ResponseStatus(HttpStatus.OK)
    void updateUser(@RequestBody UpdateUserDto updateUserDto);
}
