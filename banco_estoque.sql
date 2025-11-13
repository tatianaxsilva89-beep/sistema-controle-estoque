CREATE DATABASE IF NOT EXISTS estoque;
USE estoque;

CREATE TABLE produtos (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nome VARCHAR(100),
  quantidade INT,
  valor DECIMAL(10,2)
);
