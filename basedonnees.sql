DROP DATABASE IF EXISTS `of`;

CREATE DATABASE `of`;

USE `of`;

CREATE TABLE client(
        cli_num          INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
        cli_nom          NOT NULL,
        cli_adresse      NOT NULL,
        cli_tel          NOT NULL UNIQUE CHECK (sta_matricule RLIKE '^[A-Z]{2}[0-9]{6}[a-z]{2}$'),
        PRIMARY key (cli_num),       
);
CREATE TABLE commande(
        com_num          INT NOT NULL
        cli_num          INT NOT NULL,PRIMARY KEY AUTO_INCREMENT,
        com_date         VARCHAR(50) NOT NULL,
        com_obs          VARCHAR(50)
      FOREIGN key (cli_num) REFERENCES client (cli_num)
);
CREATE TABLE detail(
        com_num          INT NOT NULL,PRIMARY key AUTO_INCREMENT
        pro_num          INT NOT NULL,
        det_qte          DATE NOT NULL,
        FOREIGN KEY (com_num) REFERENCES commande(com_num),
        PRIMARY KEY (sta_id, form_id)
);
CREATE TABLE produit(
        pro_num         INT NOT NULL,PRIMARY key AUTO_INCREMENT
        pro_libelle         INT NOT NULL,
        pro_description      DATE NOT NULL,
        FOREIGN KEY (pro_num) REFERENCES detail (pro_num),
        PRIMARY KEY (cli_num, com_num)
);
