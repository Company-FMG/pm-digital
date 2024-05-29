package com.fmgcompany.mike.service;

import com.fmgcompany.mike.model.Admin;
import com.fmgcompany.mike.repository.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AdminService {
    @Autowired
    private AdminRepository adminRepository;

    //get all admins
    public List<Admin> listarAdmins () {
        return this.adminRepository.findAll();
    }

    //get admin by ID
    public Optional<Admin> buscarAdminPorID (String id) {
        return this.adminRepository.findById(id);
    }

    //post
    public Admin criarAdmin(Admin admin) {
        return this.adminRepository.save(admin);
    }

    //delete
    public void deletarAdminPorId(String id){
        this.adminRepository.deleteById(id);
    }

    //exists
    public boolean existePorId(String id) {
        return this.adminRepository.existsById(id);
    }

}
