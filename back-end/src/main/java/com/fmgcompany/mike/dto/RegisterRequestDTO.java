package com.fmgcompany.mike.dto;

import lombok.Data;

@Data
public class RegisterRequestDTO {
    private String nome;
    private String matricula;
    private String email;
    private String senha;
}
