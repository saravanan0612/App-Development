package com.example.demo.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.service.MusicService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping
@RequiredArgsConstructor

public class MusicController {
	
	@PostMapping("/save")
    public ResponseEntity<String> saveProduct(@RequestBody MusicRequest request) {
        boolean isSaved = MusicService.saveMusic(request);
        return isSaved ? ResponseEntity.status(201).body("Product added successfully!")
                : ResponseEntity.badRequest().build();
    }

}
