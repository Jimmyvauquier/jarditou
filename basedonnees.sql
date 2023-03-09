DROP DATABASE IF EXISTS `of`;

CREATE DATABASE `of`;

USE `of`;

CREATE TABLE client(
        cli_num          INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        cli_nom          VARCHAR(50),
        cli_adresse      VARCHAR(50),
        cli_tel          int(10)
              
       );
CREATE TABLE commande(
        com_num          INT NOT NULL
        cli_num          INT NOT NULL,PRIMARY KEY AUTO_INCREMENT,
        com_date         VARCHAR(50),
        com_obs          VARCHAR(50),
      FOREIGN key (cli_num) REFERENCES client (cli_num)
       );
CREATE TABLE produit(
        pro_num           INT NOT NULL,PRIMARY key AUTO_INCREMENT,
        pro_libelle       INT NOT NULL,
        pro_description   DATE NOT NULL,
        FOREIGN KEY (pro_num) REFERENCES detail (pro_num)
       );
CREATE TABLE detail(
        com_num          INT NOT NULL,PRIMARY key AUTO_INCREMENT,
        pro_num          INT NOT NULL,
        det_qte          DATE NOT NULL,
        FOREIGN KEY (com_num) REFERENCES commande(com_num)
);
