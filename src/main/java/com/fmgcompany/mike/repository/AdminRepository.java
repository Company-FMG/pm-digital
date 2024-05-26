package com.fmgcompany.mike.repository;

import com.fmgcompany.mike.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, String > {
}
