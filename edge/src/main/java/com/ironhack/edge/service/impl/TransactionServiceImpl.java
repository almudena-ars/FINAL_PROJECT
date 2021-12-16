package com.ironhack.edge.service.impl;

import com.ironhack.edge.client.TransactionClient;
import com.ironhack.edge.dto.TransactionDTO;
import com.ironhack.edge.model.Transaction;
import com.ironhack.edge.service.interfaces.TransactionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TransactionServiceImpl implements TransactionService{
    @Autowired
    private TransactionClient transactionClient;


    public void saveTransaction(TransactionDTO transactionDTO) {
        transactionClient.saveTransaction(transactionDTO);
    }

    public List<Transaction> getByUser(Long userId) {
        return transactionClient.getAllByUser(userId);
    }
}
