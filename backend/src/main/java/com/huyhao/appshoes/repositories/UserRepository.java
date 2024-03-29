package com.huyhao.appshoes.repositories;

import com.huyhao.appshoes.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<Users, Long> {

    Users findByEmailAndActiveTrueAndRoleCode(String email, String role);
    Optional<Users> findByEmail(String email);
    Optional<Users> findByEmailAndActiveTrue(String email);
    List<Users> findAllByRoleCodeAndActiveTrue(String role);

    Optional<Users> findByIdAndActiveTrue(Long id);

    boolean existsByIdAndActiveTrue(Long id);

    Optional<Users> findByVerificationCode(String code);

}
