package com.ironhack.transaction.service.impl;

import com.ironhack.transaction.dto.TransactionDTO;
import com.ironhack.transaction.model.Transaction;
import com.ironhack.transaction.repository.TransactionRepository;
import com.ironhack.transaction.service.interfaces.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService {

    @Autowired
    private TransactionRepository transactionRepository;


    public void saveTransaction(TransactionDTO transactionDTO) {
        Transaction transaction = new Transaction(transactionDTO.getUserId(), transactionDTO.getProductId());
        transactionRepository.save(transaction);
    }

    public List<Transaction> getByUser(Long userId) {
        return transactionRepository.findByUserId(userId);
    }
}
