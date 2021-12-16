package com.ironhack.transaction.controller.impl;

import com.ironhack.transaction.controller.interfaces.TransactionController;
import com.ironhack.transaction.dto.TransactionDTO;
import com.ironhack.transaction.model.Transaction;
import com.ironhack.transaction.service.interfaces.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class TransactionControllerImpl implements TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.OK)
    public void saveTransaction(@RequestBody TransactionDTO transactionDTO){
        transactionService.saveTransaction(transactionDTO);
    }

    @GetMapping("/allbyuser")
    @ResponseStatus(HttpStatus.OK)
    public List<Transaction> getAllByUser(@RequestParam Long userId){
        return transactionService.getByUser(userId);
    }
}
