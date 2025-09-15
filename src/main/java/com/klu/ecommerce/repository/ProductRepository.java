package com.klu.ecommerce.repository;
import com.klu.ecommerce.entity.Product;


import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ProductRepository extends JpaRepository<Product, Long> {
    List<Product> findByCategory(String category);
}
