package com.ironhack.edge.controller.imple;

import com.ironhack.edge.controller.interfaces.TransactionController;
import com.ironhack.edge.dto.TransactionDTO;
import com.ironhack.edge.model.Transaction;
import com.ironhack.edge.service.interfaces.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "*")
public class TransactionControllerImpl implements TransactionController {

    @Autowired
    private TransactionService transactionService;

    @PostMapping("/save")
    @ResponseStatus(HttpStatus.OK)
    public void saveTransaction(@RequestBody TransactionDTO transactionDTO){
        transactionService.saveTransaction(transactionDTO);
    }

    @GetMapping("/allbyemail")
    @ResponseStatus(HttpStatus.OK)
    public List<Transaction> getAllByUser(@RequestParam Long userId){
        return transactionService.getByUser(userId);
    }
}
