package com.fmgcompany.mike.controller;

import com.fmgcompany.mike.model.Admin;
import com.fmgcompany.mike.model.Policial;
import com.fmgcompany.mike.model.Viatura;
import com.fmgcompany.mike.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/admin")
public class AdminController {
    @Autowired
    private AdminService adminService;

    @GetMapping
    public List<Admin> buscarTodosAdmins(){
        return this.adminService.listarAdmins();
    }

    @GetMapping("/{id}")
    public Optional<Admin> buscarAdmin(@PathVariable String id){
        return this.adminService.buscarAdminPorID(id);
    }

    @PostMapping
    public Admin criarAdmin(@RequestBody Admin admin){
        return this.adminService.criarAdmin(admin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Admin> updateAdmin(@PathVariable String id, @RequestBody Admin adminDetails) {
        Optional<Admin> admin = adminService.buscarAdminPorID(id);
        if (admin.isPresent()) {
            Admin updatedAdmin = admin.get();
            updatedAdmin.setNome(adminDetails.getNome());
            updatedAdmin.setIdade(adminDetails.getIdade());
            updatedAdmin.setEmail(adminDetails.getEmail());
            updatedAdmin.setSexo(adminDetails.getSexo());
            return ResponseEntity.ok(adminService.criarAdmin(updatedAdmin));
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public void deletarAdmin(@PathVariable String id){
        this.adminService.deletarAdminPorId(id);
    }
}
