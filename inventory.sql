CREATE TABLE `user_inventory2` (
	`id` INT(11) NOT NULL AUTO_INCREMENT,
	`item_id` VARCHAR(255) NULL DEFAULT NULL COLLATE 'utf8mb3_general_ci',
	`name` VARCHAR(255) NOT NULL DEFAULT '0' COLLATE 'utf8mb3_general_ci',
	`information` VARCHAR(255) NOT NULL DEFAULT '0' COLLATE 'utf8mb3_general_ci',
	`slot` INT(11) NOT NULL,
	`dropped` TINYINT(4) NOT NULL DEFAULT '0',
	`creationDate` BIGINT(20) NOT NULL DEFAULT '0',
	`quality` INT(11) NULL DEFAULT '100',
	PRIMARY KEY (`id`) USING BTREE
)
COLLATE='latin1_swedish_ci'
ENGINE=InnoDB
AUTO_INCREMENT=1153510
;
