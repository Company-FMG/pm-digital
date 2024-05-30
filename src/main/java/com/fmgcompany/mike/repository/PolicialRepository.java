package com.fmgcompany.mike.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.fmgcompany.mike.model.Policial;
import java.util.UUID;

public interface PolicialRepository extends JpaRepository<Policial, UUID>{
    //sem métodos adicionais
}
