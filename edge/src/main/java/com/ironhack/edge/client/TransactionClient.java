package com.ironhack.edge.client;

import com.ironhack.edge.dto.TransactionDTO;
import com.ironhack.edge.model.Transaction;
import org.springframework.cloud.openfeign.FeignClient;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@FeignClient("transaction-service")
public interface TransactionClient {

    @PostMapping("/save")
    void saveTransaction(@RequestBody TransactionDTO transactionDTO);

    @GetMapping("/allbyuser")
    List<Transaction> getAllByUser(@RequestParam Long userId);
}
