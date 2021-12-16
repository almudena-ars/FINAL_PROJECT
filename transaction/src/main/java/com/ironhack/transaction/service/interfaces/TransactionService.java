package com.ironhack.transaction.service.interfaces;

import com.ironhack.transaction.dto.TransactionDTO;
import com.ironhack.transaction.model.Transaction;

import java.util.List;

public interface TransactionService {
    void saveTransaction(TransactionDTO transactionDTO);
    List<Transaction> getByUser(Long id);
}
