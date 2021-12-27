package com.ironhack.edge.controller.imple;

import com.ironhack.edge.dto.*;
import com.ironhack.edge.exceptions.CustomException;
import com.ironhack.edge.service.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "*")
public class UserControllerImpl {
    @Autowired
    private UserService userService;

    @PostMapping("/signin")
    @ResponseStatus(HttpStatus.OK)
    public SignInResponseDto signIn(@RequestBody SignInDto signInDto){
        return userService.signIn(signInDto);
    }

    @PostMapping("/signup")
    @ResponseStatus(HttpStatus.OK)
    public SignUpResponseDto signUp(@RequestBody SignupDto signupDto) throws CustomException {
        return userService.signUp(signupDto);
    }

    @PostMapping("/addadmin")
    @ResponseStatus(HttpStatus.OK)
    public SignUpResponseDto addAdmin(@RequestBody SignupDto signupDto) throws CustomException {
        return userService.addAdmin(signupDto);
    }

    @DeleteMapping("/deleteuser")
    @ResponseStatus(HttpStatus.OK)
    public void deleteUser(@RequestParam int id){
        userService.deleteUser(id);
    }

    @PatchMapping("/updateuser")
    @ResponseStatus(HttpStatus.OK)
    public void updateUser(@RequestBody UpdateUserDto updateUserDto){
        userService.updateUser(updateUserDto);
    }
}
