package com.ironhack.edge.service.interfaces;

import com.ironhack.edge.dto.TransactionDTO;
import com.ironhack.edge.model.Transaction;

import java.util.List;

public interface TransactionService {
    void saveTransaction(TransactionDTO transactionDTO);
    List<Transaction> getByUser(Long userId);
}
