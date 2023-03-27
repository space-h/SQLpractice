CREATE TABLE IF NOT EXISTS `cities`(
    `id` int(11) NOT NULL AUTO_INCREMENT, 
    `city` varchar(60) NOT NULL, 
    `country` varchar(60) NOT NULL,
    `created` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    PRIMARY KEY (`id`)


) ENGINE = InnoDB DEFAULT CHARSET = latin1;

INSERT INTO `cities` (`city`, `country`) 
VALUES ("Oslo", "Norway");
INSERT INTO `cities` (`city`, `country`) 
VALUES ("Pretoria", "South Africa");
INSERT INTO `cities` (`city`, `country`) 
VALUES ("Helsinki", "Finland");



