CREATE DATABASE  IF NOT EXISTS `ecosustainabilityefforts` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `ecosustainabilityefforts`;
-- MySQL dump 10.13  Distrib 5.6.17, for osx10.6 (i386)
--
-- Host: localhost    Database: ecosustainabilityefforts
-- ------------------------------------------------------
-- Server version	5.6.20

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Temporary table structure for view `accept_user_groups_view`
--

DROP TABLE IF EXISTS `accept_user_groups_view`;
/*!50001 DROP VIEW IF EXISTS `accept_user_groups_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `accept_user_groups_view` (
  `groupID` tinyint NOT NULL,
  `groupName` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `address1` tinyint NOT NULL,
  `address2` tinyint NOT NULL,
  `city` tinyint NOT NULL,
  `stateID` tinyint NOT NULL,
  `countryID` tinyint NOT NULL,
  `zipcode` tinyint NOT NULL,
  `roleName` tinyint NOT NULL,
  `userID` tinyint NOT NULL,
  `firstName` tinyint NOT NULL,
  `lastName` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `accept_user_users_view`
--

DROP TABLE IF EXISTS `accept_user_users_view`;
/*!50001 DROP VIEW IF EXISTS `accept_user_users_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `accept_user_users_view` (
  `userID` tinyint NOT NULL,
  `firstName` tinyint NOT NULL,
  `lastName` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `groupID` tinyint NOT NULL,
  `status` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `action_to_contest`
--

DROP TABLE IF EXISTS `action_to_contest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `action_to_contest` (
  `recActionContestID` int(11) NOT NULL AUTO_INCREMENT,
  `recyclingActionID` int(11) DEFAULT NULL,
  `contestID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `quantity` int(11) DEFAULT NULL,
  PRIMARY KEY (`recActionContestID`)
) ENGINE=InnoDB AUTO_INCREMENT=50 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Temporary table structure for view `action_to_contest_view`
--

DROP TABLE IF EXISTS `action_to_contest_view`;
/*!50001 DROP VIEW IF EXISTS `action_to_contest_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `action_to_contest_view` (
  `contestID` tinyint NOT NULL,
  `contestName` tinyint NOT NULL,
  `contestPrize` tinyint NOT NULL,
  `active` tinyint NOT NULL,
  `userID` tinyint NOT NULL,
  `userName` tinyint NOT NULL,
  `firstName` tinyint NOT NULL,
  `lastName` tinyint NOT NULL,
  `quantity` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `contest`
--

DROP TABLE IF EXISTS `contest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contest` (
  `contestID` int(11) NOT NULL AUTO_INCREMENT,
  `contestName` varchar(45) NOT NULL,
  `contestPrize` varchar(45) DEFAULT NULL,
  `threshold` varchar(45) DEFAULT NULL,
  `contestEnds` varchar(45) DEFAULT NULL,
  `materialType` int(11) DEFAULT NULL,
  `boundaryType` int(11) DEFAULT NULL,
  `radius` int(11) DEFAULT NULL,
  `dateStart` date DEFAULT NULL,
  `dateEnd` date DEFAULT NULL,
  `createdByUserID` int(11) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  PRIMARY KEY (`contestID`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `contest_boundary`
--

DROP TABLE IF EXISTS `contest_boundary`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contest_boundary` (
  `boundaryID` int(11) NOT NULL AUTO_INCREMENT,
  `boundaryName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`boundaryID`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contest_boundary`
--

LOCK TABLES `contest_boundary` WRITE;
/*!40000 ALTER TABLE `contest_boundary` DISABLE KEYS */;
INSERT INTO `contest_boundary` VALUES (1,'None'),(2,'Location');
/*!40000 ALTER TABLE `contest_boundary` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `contest_config_view`
--

DROP TABLE IF EXISTS `contest_config_view`;
/*!50001 DROP VIEW IF EXISTS `contest_config_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `contest_config_view` (
  `contestID` tinyint NOT NULL,
  `contestName` tinyint NOT NULL,
  `contestPrize` tinyint NOT NULL,
  `threshold` tinyint NOT NULL,
  `contestEndsID` tinyint NOT NULL,
  `contestEndsName` tinyint NOT NULL,
  `materialID` tinyint NOT NULL,
  `materialName` tinyint NOT NULL,
  `measure` tinyint NOT NULL,
  `boundaryTypeID` tinyint NOT NULL,
  `radius` tinyint NOT NULL,
  `dateStart` tinyint NOT NULL,
  `dateEnd` tinyint NOT NULL,
  `userID` tinyint NOT NULL,
  `active` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `contest_ending_criteria`
--

DROP TABLE IF EXISTS `contest_ending_criteria`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contest_ending_criteria` (
  `contestEndsID` int(11) NOT NULL,
  `contestEndsName` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`contestEndsID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contest_ending_criteria`
--

LOCK TABLES `contest_ending_criteria` WRITE;
/*!40000 ALTER TABLE `contest_ending_criteria` DISABLE KEYS */;
INSERT INTO `contest_ending_criteria` VALUES (1,'First User Reaches Threshold');
/*!40000 ALTER TABLE `contest_ending_criteria` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contest_to_group`
--

DROP TABLE IF EXISTS `contest_to_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contest_to_group` (
  `contestToGroupID` int(11) NOT NULL AUTO_INCREMENT,
  `contestID` int(11) DEFAULT NULL,
  `groupID` int(11) DEFAULT NULL,
  PRIMARY KEY (`contestToGroupID`)
) ENGINE=InnoDB AUTO_INCREMENT=83 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `countries`
--

DROP TABLE IF EXISTS `countries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `countries` (
  `countries_id` int(11) NOT NULL AUTO_INCREMENT,
  `countries_name` varchar(64) NOT NULL,
  `countries_iso_code_2` char(2) NOT NULL,
  `countries_iso_code_3` char(3) NOT NULL,
  `address_format_id` int(11) NOT NULL,
  PRIMARY KEY (`countries_id`),
  KEY `IDX_COUNTRIES_NAME` (`countries_name`)
) ENGINE=MyISAM AUTO_INCREMENT=240 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `countries`
--

LOCK TABLES `countries` WRITE;
/*!40000 ALTER TABLE `countries` DISABLE KEYS */;
INSERT INTO `countries` VALUES (1,'Afghanistan','AF','AFG',1),(2,'Albania','AL','ALB',1),(3,'Algeria','DZ','DZA',1),(4,'American Samoa','AS','ASM',1),(5,'Andorra','AD','AND',1),(6,'Angola','AO','AGO',1),(7,'Anguilla','AI','AIA',1),(8,'Antarctica','AQ','ATA',1),(9,'Antigua and Barbuda','AG','ATG',1),(10,'Argentina','AR','ARG',1),(11,'Armenia','AM','ARM',1),(12,'Aruba','AW','ABW',1),(13,'Australia','AU','AUS',1),(14,'Austria','AT','AUT',5),(15,'Azerbaijan','AZ','AZE',1),(16,'Bahamas','BS','BHS',1),(17,'Bahrain','BH','BHR',1),(18,'Bangladesh','BD','BGD',1),(19,'Barbados','BB','BRB',1),(20,'Belarus','BY','BLR',1),(21,'Belgium','BE','BEL',1),(22,'Belize','BZ','BLZ',1),(23,'Benin','BJ','BEN',1),(24,'Bermuda','BM','BMU',1),(25,'Bhutan','BT','BTN',1),(26,'Bolivia','BO','BOL',1),(27,'Bosnia and Herzegowina','BA','BIH',1),(28,'Botswana','BW','BWA',1),(29,'Bouvet Island','BV','BVT',1),(30,'Brazil','BR','BRA',1),(31,'British Indian Ocean Territory','IO','IOT',1),(32,'Brunei Darussalam','BN','BRN',1),(33,'Bulgaria','BG','BGR',1),(34,'Burkina Faso','BF','BFA',1),(35,'Burundi','BI','BDI',1),(36,'Cambodia','KH','KHM',1),(37,'Cameroon','CM','CMR',1),(38,'Canada','CA','CAN',1),(39,'Cape Verde','CV','CPV',1),(40,'Cayman Islands','KY','CYM',1),(41,'Central African Republic','CF','CAF',1),(42,'Chad','TD','TCD',1),(43,'Chile','CL','CHL',1),(44,'China','CN','CHN',1),(45,'Christmas Island','CX','CXR',1),(46,'Cocos (Keeling) Islands','CC','CCK',1),(47,'Colombia','CO','COL',1),(48,'Comoros','KM','COM',1),(49,'Congo','CG','COG',1),(50,'Cook Islands','CK','COK',1),(51,'Costa Rica','CR','CRI',1),(52,'Cote D\'Ivoire','CI','CIV',1),(53,'Croatia','HR','HRV',1),(54,'Cuba','CU','CUB',1),(55,'Cyprus','CY','CYP',1),(56,'Czech Republic','CZ','CZE',1),(57,'Denmark','DK','DNK',1),(58,'Djibouti','DJ','DJI',1),(59,'Dominica','DM','DMA',1),(60,'Dominican Republic','DO','DOM',1),(61,'East Timor','TP','TMP',1),(62,'Ecuador','EC','ECU',1),(63,'Egypt','EG','EGY',1),(64,'El Salvador','SV','SLV',1),(65,'Equatorial Guinea','GQ','GNQ',1),(66,'Eritrea','ER','ERI',1),(67,'Estonia','EE','EST',1),(68,'Ethiopia','ET','ETH',1),(69,'Falkland Islands (Malvinas)','FK','FLK',1),(70,'Faroe Islands','FO','FRO',1),(71,'Fiji','FJ','FJI',1),(72,'Finland','FI','FIN',1),(73,'France','FR','FRA',1),(74,'France, Metropolitan','FX','FXX',1),(75,'French Guiana','GF','GUF',1),(76,'French Polynesia','PF','PYF',1),(77,'French Southern Territories','TF','ATF',1),(78,'Gabon','GA','GAB',1),(79,'Gambia','GM','GMB',1),(80,'Georgia','GE','GEO',1),(81,'Germany','DE','DEU',5),(82,'Ghana','GH','GHA',1),(83,'Gibraltar','GI','GIB',1),(84,'Greece','GR','GRC',1),(85,'Greenland','GL','GRL',1),(86,'Grenada','GD','GRD',1),(87,'Guadeloupe','GP','GLP',1),(88,'Guam','GU','GUM',1),(89,'Guatemala','GT','GTM',1),(90,'Guinea','GN','GIN',1),(91,'Guinea-bissau','GW','GNB',1),(92,'Guyana','GY','GUY',1),(93,'Haiti','HT','HTI',1),(94,'Heard and Mc Donald Islands','HM','HMD',1),(95,'Honduras','HN','HND',1),(96,'Hong Kong','HK','HKG',1),(97,'Hungary','HU','HUN',1),(98,'Iceland','IS','ISL',1),(99,'India','IN','IND',1),(100,'Indonesia','ID','IDN',1),(101,'Iran (Islamic Republic of)','IR','IRN',1),(102,'Iraq','IQ','IRQ',1),(103,'Ireland','IE','IRL',1),(104,'Israel','IL','ISR',1),(105,'Italy','IT','ITA',1),(106,'Jamaica','JM','JAM',1),(107,'Japan','JP','JPN',1),(108,'Jordan','JO','JOR',1),(109,'Kazakhstan','KZ','KAZ',1),(110,'Kenya','KE','KEN',1),(111,'Kiribati','KI','KIR',1),(112,'Korea, Democratic People\'s Republic of','KP','PRK',1),(113,'Korea, Republic of','KR','KOR',1),(114,'Kuwait','KW','KWT',1),(115,'Kyrgyzstan','KG','KGZ',1),(116,'Lao People\'s Democratic Republic','LA','LAO',1),(117,'Latvia','LV','LVA',1),(118,'Lebanon','LB','LBN',1),(119,'Lesotho','LS','LSO',1),(120,'Liberia','LR','LBR',1),(121,'Libyan Arab Jamahiriya','LY','LBY',1),(122,'Liechtenstein','LI','LIE',1),(123,'Lithuania','LT','LTU',1),(124,'Luxembourg','LU','LUX',1),(125,'Macau','MO','MAC',1),(126,'Macedonia, The Former Yugoslav Republic of','MK','MKD',1),(127,'Madagascar','MG','MDG',1),(128,'Malawi','MW','MWI',1),(129,'Malaysia','MY','MYS',1),(130,'Maldives','MV','MDV',1),(131,'Mali','ML','MLI',1),(132,'Malta','MT','MLT',1),(133,'Marshall Islands','MH','MHL',1),(134,'Martinique','MQ','MTQ',1),(135,'Mauritania','MR','MRT',1),(136,'Mauritius','MU','MUS',1),(137,'Mayotte','YT','MYT',1),(138,'Mexico','MX','MEX',1),(139,'Micronesia, Federated states of','FM','FSM',1),(140,'Moldova, Republic of','MD','MDA',1),(141,'Monaco','MC','MCO',1),(142,'Mongolia','MN','MNG',1),(143,'Montserrat','MS','MSR',1),(144,'Morocco','MA','MAR',1),(145,'Mozambique','MZ','MOZ',1),(146,'Myanmar','MM','MMR',1),(147,'Namibia','NA','NAM',1),(148,'Nauru','NR','NRU',1),(149,'Nepal','NP','NPL',1),(150,'Netherlands','NL','NLD',1),(151,'Netherlands Antilles','AN','ANT',1),(152,'New Caledonia','NC','NCL',1),(153,'New Zealand','NZ','NZL',1),(154,'Nicaragua','NI','NIC',1),(155,'Niger','NE','NER',1),(156,'Nigeria','NG','NGA',1),(157,'Niue','NU','NIU',1),(158,'Norfolk Island','NF','NFK',1),(159,'Northern Mariana Islands','MP','MNP',1),(160,'Norway','NO','NOR',1),(161,'Oman','OM','OMN',1),(162,'Pakistan','PK','PAK',1),(163,'Palau','PW','PLW',1),(164,'Panama','PA','PAN',1),(165,'Papua New Guinea','PG','PNG',1),(166,'Paraguay','PY','PRY',1),(167,'Peru','PE','PER',1),(168,'Philippines','PH','PHL',1),(169,'Pitcairn','PN','PCN',1),(170,'Poland','PL','POL',1),(171,'Portugal','PT','PRT',1),(172,'Puerto Rico','PR','PRI',1),(173,'Qatar','QA','QAT',1),(174,'Reunion','RE','REU',1),(175,'Romania','RO','ROM',1),(176,'Russian Federation','RU','RUS',1),(177,'Rwanda','RW','RWA',1),(178,'Saint Kitts and Nevis','KN','KNA',1),(179,'Saint Lucia','LC','LCA',1),(180,'Saint Vincent and the Grenadines','VC','VCT',1),(181,'Samoa','WS','WSM',1),(182,'San Marino','SM','SMR',1),(183,'Sao Tome and Principe','ST','STP',1),(184,'Saudi Arabia','SA','SAU',1),(185,'Senegal','SN','SEN',1),(186,'Seychelles','SC','SYC',1),(187,'Sierra Leone','SL','SLE',1),(188,'Singapore','SG','SGP',4),(189,'Slovakia (Slovak Republic)','SK','SVK',1),(190,'Slovenia','SI','SVN',1),(191,'Solomon Islands','SB','SLB',1),(192,'Somalia','SO','SOM',1),(193,'South Africa','ZA','ZAF',1),(194,'South Georgia and the South Sandwich Islands','GS','SGS',1),(195,'Spain','ES','ESP',3),(196,'Sri Lanka','LK','LKA',1),(197,'St. Helena','SH','SHN',1),(198,'St. Pierre and Miquelon','PM','SPM',1),(199,'Sudan','SD','SDN',1),(200,'Suriname','SR','SUR',1),(201,'Svalbard and Jan Mayen Islands','SJ','SJM',1),(202,'Swaziland','SZ','SWZ',1),(203,'Sweden','SE','SWE',1),(204,'Switzerland','CH','CHE',1),(205,'Syrian Arab Republic','SY','SYR',1),(206,'Taiwan','TW','TWN',1),(207,'Tajikistan','TJ','TJK',1),(208,'Tanzania, United Republic of','TZ','TZA',1),(209,'Thailand','TH','THA',1),(210,'Togo','TG','TGO',1),(211,'Tokelau','TK','TKL',1),(212,'Tonga','TO','TON',1),(213,'Trinidad and Tobago','TT','TTO',1),(214,'Tunisia','TN','TUN',1),(215,'Turkey','TR','TUR',1),(216,'Turkmenistan','TM','TKM',1),(217,'Turks and Caicos Islands','TC','TCA',1),(218,'Tuvalu','TV','TUV',1),(219,'Uganda','UG','UGA',1),(220,'Ukraine','UA','UKR',1),(221,'United Arab Emirates','AE','ARE',1),(222,'United Kingdom','GB','GBR',1),(223,'United states','US','USA',2),(224,'United states Minor Outlying Islands','UM','UMI',1),(225,'Uruguay','UY','URY',1),(226,'Uzbekistan','UZ','UZB',1),(227,'Vanuatu','VU','VUT',1),(228,'Vatican City State (Holy See)','VA','VAT',1),(229,'Venezuela','VE','VEN',1),(230,'Viet Nam','VN','VNM',1),(231,'Virgin Islands (British)','VG','VGB',1),(232,'Virgin Islands (U.S.)','VI','VIR',1),(233,'Wallis and Futuna Islands','WF','WLF',1),(234,'Western Sahara','EH','ESH',1),(235,'Yemen','YE','YEM',1),(236,'Yugoslavia','YU','YUG',1),(237,'Zaire','ZR','ZAR',1),(238,'Zambia','ZM','ZMB',1),(239,'Zimbabwe','ZW','ZWE',1);
/*!40000 ALTER TABLE `countries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `group`
--

DROP TABLE IF EXISTS `group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group` (
  `groupID` int(11) NOT NULL AUTO_INCREMENT,
  `groupName` varchar(45) NOT NULL,
  `userID` int(11) NOT NULL,
  `email` varchar(45) NOT NULL,
  `address1` varchar(100) DEFAULT NULL,
  `address2` varchar(100) DEFAULT NULL,
  `city` varchar(30) DEFAULT NULL,
  `stateID` int(11) DEFAULT NULL,
  `countryID` int(11) DEFAULT NULL,
  `zipCode` varchar(45) DEFAULT NULL,
  `lat` decimal(10,8) DEFAULT NULL,
  `lng` decimal(10,8) DEFAULT NULL,
  PRIMARY KEY (`groupID`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `group_configuration`
--

DROP TABLE IF EXISTS `group_configuration`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_configuration` (
  `groupID` int(11) NOT NULL DEFAULT '0',
  `geoTag` tinyint(1) NOT NULL,
  `geoTagRadius` int(11) DEFAULT NULL,
  PRIMARY KEY (`groupID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `group_role`
--

DROP TABLE IF EXISTS `group_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `group_role` (
  `groupRoleID` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createContest` bit(1) NOT NULL DEFAULT b'0',
  `acceptUsers` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`groupRoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `group_role`
--

LOCK TABLES `group_role` WRITE;
/*!40000 ALTER TABLE `group_role` DISABLE KEYS */;
INSERT INTO `group_role` VALUES (1,'regular group member','regular group member','\0','\0'),(2,'group owner','group owner','','');
/*!40000 ALTER TABLE `group_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary table structure for view `group_role_view`
--

DROP TABLE IF EXISTS `group_role_view`;
/*!50001 DROP VIEW IF EXISTS `group_role_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `group_role_view` (
  `groupID` tinyint NOT NULL,
  `groupName` tinyint NOT NULL,
  `userID` tinyint NOT NULL,
  `userName` tinyint NOT NULL,
  `firstname` tinyint NOT NULL,
  `lastname` tinyint NOT NULL,
  `groupRoleID` tinyint NOT NULL,
  `name` tinyint NOT NULL,
  `description` tinyint NOT NULL,
  `createContest` tinyint NOT NULL,
  `acceptUsers` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `group_users_view`
--

DROP TABLE IF EXISTS `group_users_view`;
/*!50001 DROP VIEW IF EXISTS `group_users_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `group_users_view` (
  `userID` tinyint NOT NULL,
  `userName` tinyint NOT NULL,
  `firstName` tinyint NOT NULL,
  `lastName` tinyint NOT NULL,
  `password` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `userGuid` tinyint NOT NULL,
  `userRoleID` tinyint NOT NULL,
  `groupID` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `group_view`
--

DROP TABLE IF EXISTS `group_view`;
/*!50001 DROP VIEW IF EXISTS `group_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `group_view` (
  `groupID` tinyint NOT NULL,
  `groupName` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `address1` tinyint NOT NULL,
  `address2` tinyint NOT NULL,
  `city` tinyint NOT NULL,
  `stateID` tinyint NOT NULL,
  `countryID` tinyint NOT NULL,
  `zipcode` tinyint NOT NULL,
  `lat` tinyint NOT NULL,
  `lng` tinyint NOT NULL,
  `geoTag` tinyint NOT NULL,
  `geoTagRadius` tinyint NOT NULL,
  `userID` tinyint NOT NULL,
  `userName` tinyint NOT NULL,
  `firstName` tinyint NOT NULL,
  `lastName` tinyint NOT NULL,
  `password` tinyint NOT NULL,
  `ownerEmail` tinyint NOT NULL,
  `userGuid` tinyint NOT NULL,
  `userRoleID` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `groups_member_of_view`
--

DROP TABLE IF EXISTS `groups_member_of_view`;
/*!50001 DROP VIEW IF EXISTS `groups_member_of_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `groups_member_of_view` (
  `groupID` tinyint NOT NULL,
  `groupName` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `address1` tinyint NOT NULL,
  `address2` tinyint NOT NULL,
  `city` tinyint NOT NULL,
  `zipCode` tinyint NOT NULL,
  `state_name` tinyint NOT NULL,
  `countries_name` tinyint NOT NULL,
  `ownerUserID` tinyint NOT NULL,
  `ownerFirstName` tinyint NOT NULL,
  `ownerLastName` tinyint NOT NULL,
  `ownerEmail` tinyint NOT NULL,
  `memberUserID` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Temporary table structure for view `groups_not_member_of_view`
--

DROP TABLE IF EXISTS `groups_not_member_of_view`;
/*!50001 DROP VIEW IF EXISTS `groups_not_member_of_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `groups_not_member_of_view` (
  `groupID` tinyint NOT NULL,
  `groupName` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `address1` tinyint NOT NULL,
  `address2` tinyint NOT NULL,
  `city` tinyint NOT NULL,
  `zipCode` tinyint NOT NULL,
  `state_name` tinyint NOT NULL,
  `countries_name` tinyint NOT NULL,
  `ownerUserID` tinyint NOT NULL,
  `ownerFirstName` tinyint NOT NULL,
  `ownerLastName` tinyint NOT NULL,
  `ownerEmail` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `item`
--

DROP TABLE IF EXISTS `item`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item` (
  `itemID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) NOT NULL,
  `barcode` varchar(36) NOT NULL,
  PRIMARY KEY (`itemID`)
) ENGINE=InnoDB AUTO_INCREMENT=43 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `item_to_material_makeup`
--

DROP TABLE IF EXISTS `item_to_material_makeup`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `item_to_material_makeup` (
  `itemToMaterialMakeupID` int(11) NOT NULL AUTO_INCREMENT,
  `itemID` int(11) NOT NULL,
  `materialID` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`itemToMaterialMakeupID`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Temporary table structure for view `joined_group_users_view`
--

DROP TABLE IF EXISTS `joined_group_users_view`;
/*!50001 DROP VIEW IF EXISTS `joined_group_users_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `joined_group_users_view` (
  `userID` tinyint NOT NULL,
  `userName` tinyint NOT NULL,
  `firstName` tinyint NOT NULL,
  `lastName` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `userGuid` tinyint NOT NULL,
  `userRoleID` tinyint NOT NULL,
  `groupID` tinyint NOT NULL,
  `groupRoleID` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `material`
--

DROP TABLE IF EXISTS `material`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `material` (
  `materialID` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `measure` varchar(45) NOT NULL,
  PRIMARY KEY (`materialID`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `recycling_action`
--

DROP TABLE IF EXISTS `recycling_action`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recycling_action` (
  `recyclingActionID` int(11) NOT NULL AUTO_INCREMENT,
  `itemID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `groupID` int(11) NOT NULL,
  `lat` decimal(10,8) DEFAULT NULL,
  `lng` decimal(11,8) DEFAULT NULL,
  `dateAdded` datetime NOT NULL,
  `quantity` int(11) NOT NULL,
  PRIMARY KEY (`recyclingActionID`)
) ENGINE=InnoDB AUTO_INCREMENT=382 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary table structure for view `recycling_action_view`
--

DROP TABLE IF EXISTS `recycling_action_view`;
/*!50001 DROP VIEW IF EXISTS `recycling_action_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `recycling_action_view` (
  `recyclingActionID` tinyint NOT NULL,
  `itemID` tinyint NOT NULL,
  `itemName` tinyint NOT NULL,
  `itemDescription` tinyint NOT NULL,
  `itemBarcode` tinyint NOT NULL,
  `userID` tinyint NOT NULL,
  `userName` tinyint NOT NULL,
  `firstName` tinyint NOT NULL,
  `lastName` tinyint NOT NULL,
  `email` tinyint NOT NULL,
  `groupID` tinyint NOT NULL,
  `groupName` tinyint NOT NULL,
  `date` tinyint NOT NULL,
  `quantity` tinyint NOT NULL,
  `lat` tinyint NOT NULL,
  `lng` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `states`
--

DROP TABLE IF EXISTS `states`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `states` (
  `state_id` int(11) NOT NULL AUTO_INCREMENT,
  `state_country_id` int(11) NOT NULL,
  `state_code` varchar(32) NOT NULL,
  `state_name` varchar(32) NOT NULL,
  PRIMARY KEY (`state_id`)
) ENGINE=MyISAM AUTO_INCREMENT=848 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `states`
--

LOCK TABLES `states` WRITE;
/*!40000 ALTER TABLE `states` DISABLE KEYS */;
INSERT INTO `states` VALUES (1,223,'AL','Alabama'),(2,223,'AK','Alaska'),(3,223,'AS','American Samoa'),(4,223,'AZ','Arizona'),(5,223,'AR','Arkansas'),(6,223,'AF','Armed Forces Africa'),(7,223,'AA','Armed Forces Americas'),(8,223,'AC','Armed Forces Canada'),(9,223,'AE','Armed Forces Europe'),(10,223,'AM','Armed Forces Middle East'),(11,223,'AP','Armed Forces Pacific'),(12,223,'CA','California'),(13,223,'CO','Colorado'),(14,223,'CT','Connecticut'),(15,223,'DE','Delaware'),(16,223,'DC','District of Columbia'),(17,223,'FM','Federated states Of Micronesia'),(18,223,'FL','Florida'),(19,223,'GA','Georgia'),(20,223,'GU','Guam'),(21,223,'HI','Hawaii'),(22,223,'ID','Idaho'),(23,223,'IL','Illinois'),(24,223,'IN','Indiana'),(25,223,'IA','Iowa'),(26,223,'KS','Kansas'),(27,223,'KY','Kentucky'),(28,223,'LA','Louisiana'),(29,223,'ME','Maine'),(30,223,'MH','Marshall Islands'),(31,223,'MD','Maryland'),(32,223,'MA','Massachusetts'),(33,223,'MI','Michigan'),(34,223,'MN','Minnesota'),(35,223,'MS','Mississippi'),(36,223,'MO','Missouri'),(37,223,'MT','Montana'),(38,223,'NE','Nebraska'),(39,223,'NV','Nevada'),(40,223,'NH','New Hampshire'),(41,223,'NJ','New Jersey'),(42,223,'NM','New Mexico'),(43,223,'NY','New York'),(44,223,'NC','North Carolina'),(45,223,'ND','North Dakota'),(46,223,'MP','Northern Mariana Islands'),(47,223,'OH','Ohio'),(48,223,'OK','Oklahoma'),(49,223,'OR','Oregon'),(50,223,'PW','Palau'),(51,223,'PA','Pennsylvania'),(52,223,'PR','Puerto Rico'),(53,223,'RI','Rhode Island'),(54,223,'SC','South Carolina'),(55,223,'SD','South Dakota'),(56,223,'TN','Tennessee'),(57,223,'TX','Texas'),(58,223,'UT','Utah'),(59,223,'VT','Vermont'),(60,223,'VI','Virgin Islands'),(61,223,'VA','Virginia'),(62,223,'WA','Washington'),(63,223,'WV','West Virginia'),(64,223,'WI','Wisconsin'),(65,223,'WY','Wyoming'),(66,38,'AB','Alberta'),(67,38,'BC','British Columbia'),(68,38,'MB','Manitoba'),(69,38,'NF','Newfoundland'),(70,38,'NB','New Brunswick'),(71,38,'NS','Nova Scotia'),(72,38,'NT','Northwest Territories'),(73,38,'NU','Nunavut'),(74,38,'ON','Ontario'),(75,38,'PE','Prince Edward Island'),(76,38,'QC','Quebec'),(77,38,'SK','Saskatchewan'),(78,38,'YT','Yukon Territory'),(79,81,'NDS','Niedersachsen'),(80,81,'BAW','Baden-Württemberg'),(81,81,'BAY','Bayern'),(82,81,'BER','Berlin'),(83,81,'BRG','Brandenburg'),(84,81,'BRE','Bremen'),(85,81,'HAM','Hamburg'),(86,81,'HES','Hessen'),(87,81,'MEC','Mecklenburg-Vorpommern'),(88,81,'NRW','Nordrhein-Westfalen'),(89,81,'RHE','Rheinland-Pfalz'),(90,81,'SAR','Saarland'),(91,81,'SAS','Sachsen'),(92,81,'SAC','Sachsen-Anhalt'),(93,81,'SCN','Schleswig-Holstein'),(94,81,'THE','Thüringen'),(95,14,'WI','Wien'),(96,14,'NO','Niederösterreich'),(97,14,'OO','Oberösterreich'),(98,14,'SB','Salzburg'),(99,14,'KN','Kärnten'),(100,14,'ST','Steiermark'),(101,14,'TI','Tirol'),(102,14,'BL','Burgenland'),(103,14,'VB','Voralberg'),(104,204,'AG','Aargau'),(105,204,'AI','Appenzell Innerrhoden'),(106,204,'AR','Appenzell Ausserrhoden'),(107,204,'BE','Bern'),(108,204,'BL','Basel-Landschaft'),(109,204,'BS','Basel-Stadt'),(110,204,'FR','Freiburg'),(111,204,'GE','Genf'),(112,204,'GL','Glarus'),(113,204,'JU','Graubünden'),(114,204,'JU','Jura'),(115,204,'LU','Luzern'),(116,204,'NE','Neuenburg'),(117,204,'NW','Nidwalden'),(118,204,'OW','Obwalden'),(119,204,'SG','St. Gallen'),(120,204,'SH','Schaffhausen'),(121,204,'SO','Solothurn'),(122,204,'SZ','Schwyz'),(123,204,'TG','Thurgau'),(124,204,'TI','Tessin'),(125,204,'UR','Uri'),(126,204,'VD','Waadt'),(127,204,'VS','Wallis'),(128,204,'ZG','Zug'),(129,204,'ZH','Zürich'),(130,195,'A Coruña','A Coruña'),(131,195,'Alava','Alava'),(132,195,'Albacete','Albacete'),(133,195,'Alicante','Alicante'),(134,195,'Almeria','Almeria'),(135,195,'Asturias','Asturias'),(136,195,'Avila','Avila'),(137,195,'Badajoz','Badajoz'),(138,195,'Baleares','Baleares'),(139,195,'Barcelona','Barcelona'),(140,195,'Burgos','Burgos'),(141,195,'Caceres','Caceres'),(142,195,'Cadiz','Cadiz'),(143,195,'Cantabria','Cantabria'),(144,195,'Castellon','Castellon'),(145,195,'Ceuta','Ceuta'),(146,195,'Ciudad Real','Ciudad Real'),(147,195,'Cordoba','Cordoba'),(148,195,'Cuenca','Cuenca'),(149,195,'Girona','Girona'),(150,195,'Granada','Granada'),(151,195,'Guadalajara','Guadalajara'),(152,195,'Guipuzcoa','Guipuzcoa'),(153,195,'Huelva','Huelva'),(154,195,'Huesca','Huesca'),(155,195,'Jaen','Jaen'),(156,195,'La Rioja','La Rioja'),(157,195,'Las Palmas','Las Palmas'),(158,195,'Leon','Leon'),(159,195,'Lleida','Lleida'),(160,195,'Lugo','Lugo'),(161,195,'Madrid','Madrid'),(162,195,'Malaga','Malaga'),(163,195,'Melilla','Melilla'),(164,195,'Murcia','Murcia'),(165,195,'Navarra','Navarra'),(166,195,'Ourense','Ourense'),(167,195,'Palencia','Palencia'),(168,195,'Pontevedra','Pontevedra'),(169,195,'Salamanca','Salamanca'),(170,195,'Santa Cruz de Tenerife','Santa Cruz de Tenerife'),(171,195,'Segovia','Segovia'),(172,195,'Sevilla','Sevilla'),(173,195,'Soria','Soria'),(174,195,'Tarragona','Tarragona'),(175,195,'Teruel','Teruel'),(176,195,'Toledo','Toledo'),(177,195,'Valencia','Valencia'),(178,195,'Valladolid','Valladolid'),(179,195,'Vizcaya','Vizcaya'),(180,195,'Zamora','Zamora'),(181,195,'Zaragoza','Zaragoza'),(182,13,'NSW','New South Wales'),(183,13,'VIC','Victoria'),(184,13,'QLD','Queensland'),(185,13,'NT','Northern Territory'),(186,13,'WA','Western Australia'),(187,13,'SA','South Australia'),(188,13,'TAS','Tasmania'),(189,13,'ACT','Australian Capital Territory'),(190,153,'Northland','Northland'),(191,153,'Auckland','Auckland'),(192,153,'Waikato','Waikato'),(193,153,'Bay of Plenty','Bay of Plenty'),(194,153,'Gisborne','Gisborne'),(195,153,'Hawkes Bay','Hawkes Bay'),(196,153,'Taranaki','Taranaki'),(197,153,'Manawatu-Wanganui','Manawatu-Wanganui'),(198,153,'Wellington','Wellington'),(199,153,'West Coast','West Coast'),(200,153,'Canterbury','Canterbury'),(201,153,'Otago','Otago'),(202,153,'Southland','Southland'),(203,153,'Tasman','Tasman'),(204,153,'Nelson','Nelson'),(205,153,'Marlborough','Marlborough'),(206,30,'SP','São Paulo'),(207,30,'RJ','Rio de Janeiro'),(208,30,'PE','Pernanbuco'),(209,30,'BA','Bahia'),(210,30,'AM','Amazonas'),(211,30,'MG','Minas Gerais'),(212,30,'ES','Espirito Santo'),(213,30,'RS','Rio Grande do Sul'),(214,30,'PR','Paraná'),(215,30,'SC','Santa Catarina'),(216,30,'RG','Rio Grande do Norte'),(217,30,'MS','Mato Grosso do Sul'),(218,30,'MT','Mato Grosso'),(219,30,'GO','Goias'),(220,30,'TO','Tocantins'),(221,30,'DF','Distrito Federal'),(222,30,'RO','Rondonia'),(223,30,'AC','Acre'),(224,30,'AP','Amapa'),(225,30,'RO','Roraima'),(226,30,'AL','Alagoas'),(227,30,'CE','Ceará'),(228,30,'MA','Maranhão'),(229,30,'PA','Pará'),(230,30,'PB','Paraíba'),(231,30,'PI','Piauí'),(232,30,'SE','Sergipe'),(233,43,'I','I Región de Tarapacá'),(234,43,'II','II Región de Antofagasta'),(235,43,'III','III Región de Atacama'),(236,43,'IV','IV Región de Coquimbo'),(237,43,'V','V Región de Valaparaíso'),(238,43,'RM','Región Metropolitana'),(239,43,'VI','VI Región de L. B. O´higgins'),(240,43,'VII','VII Región del Maule'),(241,43,'VIII','VIII Región del Bío Bío'),(242,43,'IX','IX Región de la Araucanía'),(243,43,'X','X Región de los Lagos'),(244,43,'XI','XI Región de Aysén'),(245,43,'XII','XII Región de Magallanes'),(246,47,'AMA','Amazonas'),(247,47,'ANT','Antioquia'),(248,47,'ARA','Arauca'),(249,47,'ATL','Atlantico'),(250,47,'BOL','Bolivar'),(251,47,'BOY','Boyaca'),(252,47,'CAL','Caldas'),(253,47,'CAQ','Caqueta'),(254,47,'CAS','Casanare'),(255,47,'CAU','Cauca'),(256,47,'CES','Cesar'),(257,47,'CHO','Choco'),(258,47,'COR','Cordoba'),(259,47,'CUN','Cundinamarca'),(260,47,'HUI','Huila'),(261,47,'GUA','Guainia'),(262,47,'GUA','Guajira'),(263,47,'GUV','Guaviare'),(264,47,'MAG','Magdalena'),(265,47,'MET','Meta'),(266,47,'NAR','Narino'),(267,47,'NDS','Norte de Santander'),(268,47,'PUT','Putumayo'),(269,47,'QUI','Quindio'),(270,47,'RIS','Risaralda'),(271,47,'SAI','San Andres Islas'),(272,47,'SAN','Santander'),(273,47,'SUC','Sucre'),(274,47,'TOL','Tolima'),(275,47,'VAL','Valle'),(276,47,'VAU','Vaupes'),(277,47,'VIC','Vichada'),(278,73,'Et','Etranger'),(279,73,'01','Ain'),(280,73,'02','Aisne'),(281,73,'03','Allier'),(282,73,'04','Alpes de Haute Provence'),(283,73,'05','Hautes-Alpes'),(284,73,'06','Alpes Maritimes'),(285,73,'07','Ardche'),(286,73,'08','Ardennes'),(287,73,'09','Arige'),(288,73,'10','Aube'),(289,73,'11','Aude'),(290,73,'12','Aveyron'),(291,73,'13','Bouches du Rh™ne'),(292,73,'14','Calvados'),(293,73,'15','Cantal'),(294,73,'16','Charente'),(295,73,'17','Charente Maritime'),(296,73,'18','Cher'),(297,73,'19','Corrze'),(298,73,'2A','Corse du Sud'),(299,73,'2B','Haute Corse'),(300,73,'21','C™te d\'or'),(301,73,'22','C™tes d\'Armor'),(302,73,'23','Creuse'),(303,73,'24','Dordogne'),(304,73,'25','Doubs'),(305,73,'26','Dr™me'),(306,73,'27','Eure'),(307,73,'28','Eure et Loir'),(308,73,'29','Finistre'),(309,73,'30','Gard'),(310,73,'31','Haute Garonne'),(311,73,'32','Gers'),(312,73,'33','Gironde'),(313,73,'34','HŽrault'),(314,73,'35','Ille et Vilaine'),(315,73,'36','Indre'),(316,73,'37','Indre et Loire'),(317,73,'38','Isre'),(318,73,'39','Jura'),(319,73,'40','Landes'),(320,73,'41','Loir et Cher'),(321,73,'42','Loire'),(322,73,'43','Haute Loire'),(323,73,'44','Loire Atlantique'),(324,73,'45','Loiret'),(325,73,'46','Lot'),(326,73,'47','Lot et Garonne'),(327,73,'48','Lozre'),(328,73,'49','Maine et Loire'),(329,73,'50','Manche'),(330,73,'51','Marne'),(331,73,'52','Haute Marne'),(332,73,'53','Mayenne'),(333,73,'54','Meurthe et Moselle'),(334,73,'55','Meuse'),(335,73,'56','Morbihan'),(336,73,'57','Moselle'),(337,73,'58','Nivre'),(338,73,'59','Nord'),(339,73,'60','Oise'),(340,73,'61','Orne'),(341,73,'62','Pas de Calais'),(342,73,'63','Puy de D™me'),(343,73,'64','PyrŽnŽes Atlantiques'),(344,73,'65','Hautes PyrŽnŽes'),(345,73,'66','PyrŽnŽes Orientales'),(346,73,'67','Bas Rhin'),(347,73,'68','Haut Rhin'),(348,73,'69','Rh™ne'),(349,73,'70','Haute Sa™ne'),(350,73,'71','Sa™ne et Loire'),(351,73,'72','Sarthe'),(352,73,'73','Savoie'),(353,73,'74','Haute Savoie'),(354,73,'75','Paris'),(355,73,'76','Seine Maritime'),(356,73,'77','Seine et Marne'),(357,73,'78','Yvelines'),(358,73,'79','Deux Svres'),(359,73,'80','Somme'),(360,73,'81','Tarn'),(361,73,'82','Tarn et Garonne'),(362,73,'83','Var'),(363,73,'84','Vaucluse'),(364,73,'85','VendŽe'),(365,73,'86','Vienne'),(366,73,'87','Haute Vienne'),(367,73,'88','Vosges'),(368,73,'89','Yonne'),(369,73,'90','Territoire de Belfort'),(370,73,'91','Essonne'),(371,73,'92','Hauts de Seine'),(372,73,'93','Seine St-Denis'),(373,73,'94','Val de Marne'),(374,73,'95','Val d\'Oise'),(375,73,'971 (DOM)','Guadeloupe'),(376,73,'972 (DOM)','Martinique'),(377,73,'973 (DOM)','Guyane'),(378,73,'974 (DOM)','Saint Denis'),(379,73,'975 (DOM)','St-Pierre de Miquelon'),(380,73,'976 (TOM)','Mayotte'),(381,73,'984 (TOM)','Terres australes et Antartiques '),(382,73,'985 (TOM)','Nouvelle CalŽdonie'),(383,73,'986 (TOM)','Wallis et Futuna'),(384,73,'987 (TOM)','PolynŽsie franaise'),(385,99,'DL','Delhi'),(386,99,'MH','Maharashtra'),(387,99,'TN','Tamil Nadu'),(388,99,'KL','Kerala'),(389,99,'AP','Andhra Pradesh'),(390,99,'KA','Karnataka'),(391,99,'GA','Goa'),(392,99,'MP','Madhya Pradesh'),(393,99,'PY','Pondicherry'),(394,99,'GJ','Gujarat'),(395,99,'OR','Orrisa'),(396,99,'CA','Chhatisgarh'),(397,99,'JH','Jharkhand'),(398,99,'BR','Bihar'),(399,99,'WB','West Bengal'),(400,99,'UP','Uttar Pradesh'),(401,99,'RJ','Rajasthan'),(402,99,'PB','Punjab'),(403,99,'HR','Haryana'),(404,99,'CH','Chandigarh'),(405,99,'JK','Jammu & Kashmir'),(406,99,'HP','Himachal Pradesh'),(407,99,'UA','Uttaranchal'),(408,99,'LK','Lakshadweep'),(409,99,'AN','Andaman & Nicobar'),(410,99,'MG','Meghalaya'),(411,99,'AS','Assam'),(412,99,'DR','Dadra & Nagar Haveli'),(413,99,'DN','Daman & Diu'),(414,99,'SK','Sikkim'),(415,99,'TR','Tripura'),(416,99,'MZ','Mizoram'),(417,99,'MN','Manipur'),(418,99,'NL','Nagaland'),(419,99,'AR','Arunachal Pradesh'),(420,105,'AG','Agrigento'),(421,105,'AL','Alessandria'),(422,105,'AN','Ancona'),(423,105,'AO','Aosta'),(424,105,'AR','Arezzo'),(425,105,'AP','Ascoli Piceno'),(426,105,'AT','Asti'),(427,105,'AV','Avellino'),(428,105,'BA','Bari'),(429,105,'BL','Belluno'),(430,105,'BN','Benevento'),(431,105,'BG','Bergamo'),(432,105,'BI','Biella'),(433,105,'BO','Bologna'),(434,105,'BZ','Bolzano'),(435,105,'BS','Brescia'),(436,105,'BR','Brindisi'),(437,105,'CA','Cagliari'),(438,105,'CL','Caltanissetta'),(439,105,'CB','Campobasso'),(440,105,'CE','Caserta'),(441,105,'CT','Catania'),(442,105,'CZ','Catanzaro'),(443,105,'CH','Chieti'),(444,105,'CO','Como'),(445,105,'CS','Cosenza'),(446,105,'CR','Cremona'),(447,105,'KR','Crotone'),(448,105,'CN','Cuneo'),(449,105,'EN','Enna'),(450,105,'FE','Ferrara'),(451,105,'FI','Firenze'),(452,105,'FG','Foggia'),(453,105,'FO','Forlì'),(454,105,'FR','Frosinone'),(455,105,'GE','Genova'),(456,105,'GO','Gorizia'),(457,105,'GR','Grosseto'),(458,105,'IM','Imperia'),(459,105,'IS','Isernia'),(460,105,'AQ','Aquila'),(461,105,'SP','La Spezia'),(462,105,'LT','Latina'),(463,105,'LE','Lecce'),(464,105,'LC','Lecco'),(465,105,'LI','Livorno'),(466,105,'LO','Lodi'),(467,105,'LU','Lucca'),(468,105,'MC','Macerata'),(469,105,'MN','Mantova'),(470,105,'MS','Massa-Carrara'),(471,105,'MT','Matera'),(472,105,'ME','Messina'),(473,105,'MI','Milano'),(474,105,'MO','Modena'),(475,105,'NA','Napoli'),(476,105,'NO','Novara'),(477,105,'NU','Nuoro'),(478,105,'OR','Oristano'),(479,105,'PD','Padova'),(480,105,'PA','Palermo'),(481,105,'PR','Parma'),(482,105,'PG','Perugia'),(483,105,'PV','Pavia'),(484,105,'PS','Pesaro e Urbino'),(485,105,'PE','Pescara'),(486,105,'PC','Piacenza'),(487,105,'PI','Pisa'),(488,105,'PT','Pistoia'),(489,105,'PN','Pordenone'),(490,105,'PZ','Potenza'),(491,105,'PO','Prato'),(492,105,'RG','Ragusa'),(493,105,'RA','Ravenna'),(494,105,'RC','Reggio di Calabria'),(495,105,'RE','Reggio Emilia'),(496,105,'RI','Rieti'),(497,105,'RN','Rimini'),(498,105,'RM','Roma'),(499,105,'RO','Rovigo'),(500,105,'SA','Salerno'),(501,105,'SS','Sassari'),(502,105,'SV','Savona'),(503,105,'SI','Siena'),(504,105,'SR','Siracusa'),(505,105,'SO','Sondrio'),(506,105,'TA','Taranto'),(507,105,'TE','Teramo'),(508,105,'TR','Terni'),(509,105,'TO','Torino'),(510,105,'TP','Trapani'),(511,105,'TN','Trento'),(512,105,'TV','Treviso'),(513,105,'TS','Trieste'),(514,105,'UD','Udine'),(515,105,'VA','Varese'),(516,105,'VE','Venezia'),(517,105,'VB','Verbania'),(518,105,'VC','Vercelli'),(519,105,'VR','Verona'),(520,105,'VV','Vibo Valentia'),(521,105,'VI','Vicenza'),(522,105,'VT','Viterbo'),(523,107,'Niigata','Niigata'),(524,107,'Toyama','Toyama'),(525,107,'Ishikawa','Ishikawa'),(526,107,'Fukui','Fukui'),(527,107,'Yamanashi','Yamanashi'),(528,107,'Nagano','Nagano'),(529,107,'Gifu','Gifu'),(530,107,'Shizuoka','Shizuoka'),(531,107,'Aichi','Aichi'),(532,107,'Mie','Mie'),(533,107,'Shiga','Shiga'),(534,107,'Kyoto','Kyoto'),(535,107,'Osaka','Osaka'),(536,107,'Hyogo','Hyogo'),(537,107,'Nara','Nara'),(538,107,'Wakayama','Wakayama'),(539,107,'Tottori','Tottori'),(540,107,'Shimane','Shimane'),(541,107,'Okayama','Okayama'),(542,107,'Hiroshima','Hiroshima'),(543,107,'Yamaguchi','Yamaguchi'),(544,107,'Tokushima','Tokushima'),(545,107,'Kagawa','Kagawa'),(546,107,'Ehime','Ehime'),(547,107,'Kochi','Kochi'),(548,107,'Fukuoka','Fukuoka'),(549,107,'Saga','Saga'),(550,107,'Nagasaki','Nagasaki'),(551,107,'Kumamoto','Kumamoto'),(552,107,'Oita','Oita'),(553,107,'Miyazaki','Miyazaki'),(554,107,'Kagoshima','Kagoshima'),(555,129,'JOH','Johor'),(556,129,'KDH','Kedah'),(557,129,'KEL','Kelantan'),(558,129,'KL','Kuala Lumpur'),(559,129,'MEL','Melaka'),(560,129,'NS','Negeri Sembilan'),(561,129,'PAH','Pahang'),(562,129,'PRK','Perak'),(563,129,'PER','Perlis'),(564,129,'PP','Pulau Pinang'),(565,129,'SAB','Sabah'),(566,129,'SWK','Sarawak'),(567,129,'SEL','Selangor'),(568,129,'TER','Terengganu'),(569,129,'LAB','W.P.Labuan'),(570,138,'AGS','Aguascalientes'),(571,138,'BC','Baja California'),(572,138,'BCS','Baja California Sur'),(573,138,'CAM','Campeche'),(574,138,'COA','Coahuila'),(575,138,'COL','Colima'),(576,138,'CHI','Chiapas'),(577,138,'CHIH','Chihuahua'),(578,138,'DF','Distrito Federal'),(579,138,'DGO','Durango'),(580,138,'MEX','Estado de Mexico'),(581,138,'GTO','Guanajuato'),(582,138,'GRO','Guerrero'),(583,138,'HGO','Hidalgo'),(584,138,'JAL','Jalisco'),(585,138,'MCH','Michoacan'),(586,138,'MOR','Morelos'),(587,138,'NAY','Nayarit'),(588,138,'NL','Nuevo Leon'),(589,138,'OAX','Oaxaca'),(590,138,'PUE','Puebla'),(591,138,'QRO','Queretaro'),(592,138,'QR','Quintana Roo'),(593,138,'SLP','San Luis Potosi'),(594,138,'SIN','Sinaloa'),(595,138,'SON','Sonora'),(596,138,'TAB','Tabasco'),(597,138,'TMPS','Tamaulipas'),(598,138,'TLAX','Tlaxcala'),(599,138,'VER','Veracruz'),(600,138,'YUC','Yucatan'),(601,138,'ZAC','Zacatecas'),(602,160,'OSL','Oslo'),(603,160,'AKE','Akershus'),(604,160,'AUA','Aust-Agder'),(605,160,'BUS','Buskerud'),(606,160,'FIN','Finnmark'),(607,160,'HED','Hedmark'),(608,160,'HOR','Hordaland'),(609,160,'MOR','Møre og Romsdal'),(610,160,'NOR','Nordland'),(611,160,'NTR','Nord-Trøndelag'),(612,160,'OPP','Oppland'),(613,160,'ROG','Rogaland'),(614,160,'SOF','Sogn og Fjordane'),(615,160,'STR','Sør-Trøndelag'),(616,160,'TEL','Telemark'),(617,160,'TRO','Troms'),(618,160,'VEA','Vest-Agder'),(619,160,'OST','Østfold'),(620,160,'SVA','Svalbard'),(621,99,'KHI','Karachi'),(622,99,'LH','Lahore'),(623,99,'ISB','Islamabad'),(624,99,'QUE','Quetta'),(625,99,'PSH','Peshawar'),(626,99,'GUJ','Gujrat'),(627,99,'SAH','Sahiwal'),(628,99,'FSB','Faisalabad'),(629,99,'RIP','Rawal Pindi'),(630,175,'AB','Alba'),(631,175,'AR','Arad'),(632,175,'AG','Arges'),(633,175,'BC','Bacau'),(634,175,'BH','Bihor'),(635,175,'BN','Bistrita-Nasaud'),(636,175,'BT','Botosani'),(637,175,'BV','Brasov'),(638,175,'BR','Braila'),(639,175,'B','Bucuresti'),(640,175,'BZ','Buzau'),(641,175,'CS','Caras-Severin'),(642,175,'CL','Calarasi'),(643,175,'CJ','Cluj'),(644,175,'CT','Constanta'),(645,175,'CV','Covasna'),(646,175,'DB','Dimbovita'),(647,175,'DJ','Dolj'),(648,175,'GL','Galati'),(649,175,'GR','Giurgiu'),(650,175,'GJ','Gorj'),(651,175,'HR','Harghita'),(652,175,'HD','Hunedoara'),(653,175,'IL','Ialomita'),(654,175,'IS','Iasi'),(655,175,'IF','Ilfov'),(656,175,'MM','Maramures'),(657,175,'MH','Mehedint'),(658,175,'MS','Mures'),(659,175,'NT','Neamt'),(660,175,'OT','Olt'),(661,175,'PH','Prahova'),(662,175,'SM','Satu-Mare'),(663,175,'SJ','Salaj'),(664,175,'SB','Sibiu'),(665,175,'SV','Suceava'),(666,175,'TR','Teleorman'),(667,175,'TM','Timis'),(668,175,'TL','Tulcea'),(669,175,'VS','Vaslui'),(670,175,'VL','Valcea'),(671,175,'VN','Vrancea'),(672,193,'WP','Western Cape'),(673,193,'GP','Gauteng'),(674,193,'KZN','Kwazulu-Natal'),(675,193,'NC','Northern-Cape'),(676,193,'EC','Eastern-Cape'),(677,193,'MP','Mpumalanga'),(678,193,'NW','North-West'),(679,193,'FS','Free State'),(680,193,'NP','Northern Province'),(681,215,'ADANA','ADANA'),(682,215,'ADIYAMAN','ADIYAMAN'),(683,215,'AFYON','AFYON'),(684,215,'AGRI','AGRI'),(685,215,'AMASYA','AMASYA'),(686,215,'ANKARA','ANKARA'),(687,215,'ANTALYA','ANTALYA'),(688,215,'ARTVIN','ARTVIN'),(689,215,'AYDIN','AYDIN'),(690,215,'BALIKESIR','BALIKESIR'),(691,215,'BILECIK','BILECIK'),(692,215,'BINGÖL','BINGÖL'),(693,215,'BITLIS','BITLIS'),(694,215,'BOLU','BOLU'),(695,215,'BURDUR','BURDUR'),(696,215,'BURSA','BURSA'),(697,215,'ÇANAKKALE','ÇANAKKALE'),(698,215,'ÇANKIRI','ÇANKIRI'),(699,215,'ÇORUM','ÇORUM'),(700,215,'DENIZLI','DENIZLI'),(701,215,'DIYARBAKIR','DIYARBAKIR'),(702,215,'EDIRNE','EDIRNE'),(703,215,'ELAZIG','ELAZIG'),(704,215,'ERZINCAN','ERZINCAN'),(705,215,'ERZURUM','ERZURUM'),(706,215,'ESKISEHIR','ESKISEHIR'),(707,215,'GAZIANTEP','GAZIANTEP'),(708,215,'GIRESUN','GIRESUN'),(709,215,'GÜMÜSHANE','GÜMÜSHANE'),(710,215,'HAKKARI','HAKKARI'),(711,215,'HATAY','HATAY'),(712,215,'ISPARTA','ISPARTA'),(713,215,'IÇEL','IÇEL'),(714,215,'ISTANBUL','ISTANBUL'),(715,215,'IZMIR','IZMIR'),(716,215,'KARS','KARS'),(717,215,'KASTAMONU','KASTAMONU'),(718,215,'KAYSERI','KAYSERI'),(719,215,'KIRKLARELI','KIRKLARELI'),(720,215,'KIRSEHIR','KIRSEHIR'),(721,215,'KOCAELI','KOCAELI'),(722,215,'KONYA','KONYA'),(723,215,'KÜTAHYA','KÜTAHYA'),(724,215,'MALATYA','MALATYA'),(725,215,'MANISA','MANISA'),(726,215,'KAHRAMANMARAS','KAHRAMANMARAS'),(727,215,'MARDIN','MARDIN'),(728,215,'MUGLA','MUGLA'),(729,215,'MUS','MUS'),(730,215,'NEVSEHIR','NEVSEHIR'),(731,215,'NIGDE','NIGDE'),(732,215,'ORDU','ORDU'),(733,215,'RIZE','RIZE'),(734,215,'SAKARYA','SAKARYA'),(735,215,'SAMSUN','SAMSUN'),(736,215,'SIIRT','SIIRT'),(737,215,'SINOP','SINOP'),(738,215,'SIVAS','SIVAS'),(739,215,'TEKIRDAG','TEKIRDAG'),(740,215,'TOKAT','TOKAT'),(741,215,'TRABZON','TRABZON'),(742,215,'TUNCELI','TUNCELI'),(743,215,'SANLIURFA','SANLIURFA'),(744,215,'USAK','USAK'),(745,215,'VAN','VAN'),(746,215,'YOZGAT','YOZGAT'),(747,215,'ZONGULDAK','ZONGULDAK'),(748,215,'AKSARAY','AKSARAY'),(749,215,'BAYBURT','BAYBURT'),(750,215,'KARAMAN','KARAMAN'),(751,215,'KIRIKKALE','KIRIKKALE'),(752,215,'BATMAN','BATMAN'),(753,215,'SIRNAK','SIRNAK'),(754,215,'BARTIN','BARTIN'),(755,215,'ARDAHAN','ARDAHAN'),(756,215,'IGDIR','IGDIR'),(757,215,'YALOVA','YALOVA'),(758,215,'KARABÜK','KARABÜK'),(759,215,'KILIS','KILIS'),(760,215,'OSMANIYE','OSMANIYE'),(761,215,'DÜZCE','DÜZCE'),(762,229,'AM','Amazonas'),(763,229,'AN','Anzoátegui'),(764,229,'AR','Aragua'),(765,229,'AP','Apure'),(766,229,'BA','Barinas'),(767,229,'BO','Bolívar'),(768,229,'CA','Carabobo'),(769,229,'CO','Cojedes'),(770,229,'DA','Delta Amacuro'),(771,229,'DC','Distrito Capital'),(772,229,'FA','Falcón'),(773,229,'GA','Guárico'),(774,229,'GU','Guayana'),(775,229,'LA','Lara'),(776,229,'ME','Mérida'),(777,229,'MI','Miranda'),(778,229,'MO','Monagas'),(779,229,'NE','Nueva Esparta'),(780,229,'PO','Portuguesa'),(781,229,'SU','Sucre'),(782,229,'TA','Táchira'),(783,229,'TU','Trujillo'),(784,229,'VA','Vargas'),(785,229,'YA','Yaracuy'),(786,229,'ZU','Zulia'),(787,222,'AVON','Avon'),(788,222,'BEDS','Bedfordshire'),(789,222,'BERK','Berkshire'),(790,222,'BIRM','Birmingham'),(791,222,'BORD','Borders'),(792,222,'BUCK','Buckinghamshire'),(793,222,'CAMB','Cambridgeshire'),(794,222,'CENT','Central'),(795,222,'CHES','Cheshire'),(796,222,'CLEV','Cleveland'),(797,222,'CLWY','Clwyd'),(798,222,'CORN','Cornwall'),(799,222,'CUMB','Cumbria'),(800,222,'DERB','Derbyshire'),(801,222,'DEVO','Devon'),(802,222,'DORS','Dorset'),(803,222,'DUMF','Dumfries & Galloway'),(804,222,'DURH','Durham'),(805,222,'DYFE','Dyfed'),(806,222,'ESUS','East Sussex'),(807,222,'ESSE','Essex'),(808,222,'FIFE','Fife'),(809,222,'GLAM','Glamorgan'),(810,222,'GLOU','Gloucestershire'),(811,222,'GRAM','Grampian'),(812,222,'GWEN','Gwent'),(813,222,'GWYN','Gwynedd'),(814,222,'HAMP','Hampshire'),(815,222,'HERE','Hereford & Worcester'),(816,222,'HERT','Hertfordshire'),(817,222,'HUMB','Humberside'),(818,222,'KENT','Kent'),(819,222,'LANC','Lancashire'),(820,222,'LEIC','Leicestershire'),(821,222,'LINC','Lincolnshire'),(822,222,'LOND','London'),(823,222,'LOTH','Lothian'),(824,222,'MANC','Manchester'),(825,222,'MERS','Merseyside'),(826,222,'NORF','Norfolk'),(827,222,'NYOR','North Yorkshire'),(828,222,'NWHI','North west Highlands'),(829,222,'NHAM','Northamptonshire'),(830,222,'NUMB','Northumberland'),(831,222,'NOTT','Nottinghamshire'),(832,222,'OXFO','Oxfordshire'),(833,222,'POWY','Powys'),(834,222,'SHRO','Shropshire'),(835,222,'SOME','Somerset'),(836,222,'SYOR','South Yorkshire'),(837,222,'STAF','Staffordshire'),(838,222,'STRA','Strathclyde'),(839,222,'SUFF','Suffolk'),(840,222,'SURR','Surrey'),(841,222,'WSUS','West Sussex'),(842,222,'TAYS','Tayside'),(843,222,'TYWE','Tyne & Wear'),(844,222,'WARW','Warwickshire'),(845,222,'WISL','West Isles'),(846,222,'WYOR','West Yorkshire'),(847,222,'WILT','Wiltshire');
/*!40000 ALTER TABLE `states` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `userID` int(11) NOT NULL AUTO_INCREMENT,
  `firstName` varchar(45) NOT NULL,
  `lastName` varchar(45) NOT NULL,
  `userName` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `userGuid` char(36) NOT NULL,
  `userRoleID` int(11) NOT NULL,
  PRIMARY KEY (`userID`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `user_group_request`
--

DROP TABLE IF EXISTS `user_group_request`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_group_request` (
  `userGroupRequestID` int(11) NOT NULL AUTO_INCREMENT,
  `groupID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `status` int(11) DEFAULT NULL,
  `dateRequested` datetime NOT NULL,
  `rejected` bit(1) NOT NULL DEFAULT b'0',
  `accepted` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`userGroupRequestID`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `user_role`
--

DROP TABLE IF EXISTS `user_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_role` (
  `userRoleID` int(11) NOT NULL,
  `name` varchar(45) NOT NULL,
  `description` varchar(100) DEFAULT NULL,
  `createMaterial` bit(1) NOT NULL DEFAULT b'0',
  `createItem` bit(1) NOT NULL DEFAULT b'0',
  PRIMARY KEY (`userRoleID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_role`
--

LOCK TABLES `user_role` WRITE;
/*!40000 ALTER TABLE `user_role` DISABLE KEYS */;
INSERT INTO `user_role` VALUES (1,'regular user','regular user','\0','\0'),(2,'site admin','site admin','',''),(3,'material admin','material admin','','\0'),(4,'item admin','item admin','\0','');
/*!40000 ALTER TABLE `user_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_to_group`
--

DROP TABLE IF EXISTS `user_to_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_to_group` (
  `groupID` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `groupRoleID` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;


--
-- Table structure for table `winner_to_contest`
--

DROP TABLE IF EXISTS `winner_to_contest`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `winner_to_contest` (
  `winner_to_contestID` int(11) NOT NULL AUTO_INCREMENT,
  `contestID` int(11) DEFAULT NULL,
  `userID` int(11) DEFAULT NULL,
  `winningActionID` int(11) DEFAULT NULL,
  PRIMARY KEY (`winner_to_contestID`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Temporary table structure for view `winner_to_contest_view`
--

DROP TABLE IF EXISTS `winner_to_contest_view`;
/*!50001 DROP VIEW IF EXISTS `winner_to_contest_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE TABLE `winner_to_contest_view` (
  `contestID` tinyint NOT NULL,
  `contestName` tinyint NOT NULL,
  `contestPrize` tinyint NOT NULL,
  `active` tinyint NOT NULL,
  `userID` tinyint NOT NULL,
  `userName` tinyint NOT NULL,
  `firstName` tinyint NOT NULL,
  `lastName` tinyint NOT NULL
) ENGINE=MyISAM */;
SET character_set_client = @saved_cs_client;

--
-- Dumping events for database 'ecosustainabilityefforts'
--

--
-- Dumping routines for database 'ecosustainabilityefforts'
--
/*!50003 DROP PROCEDURE IF EXISTS `acceptUserGroupRequest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `acceptUserGroupRequest`(aGroupID int(11), aUserID int(11))
BEGIN
	START TRANSACTION;

	UPDATE user_group_request 
    SET accepted = 1, 
    `status` = 2
    WHERE groupid = aGroupID
    AND userid = aUserID;

	INSERT INTO user_to_group 
		(groupID, userID, groupRoleID)
    VALUES 
		(aGroupID, aUserID, 1);

	COMMIT;

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `closeContest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `closeContest`(in_contestID int(11), in_winnerID int(11), in_winningAction int(11))
BEGIN

	INSERT INTO winner_to_contest 
		(contestID, userID, winningActionID)
    VALUES 
		(in_contestID, in_winnerID, in_winningAction);

	UPDATE contest 
    SET active = 0
    WHERE contestID = in_contestID;


   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createActionToContest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createActionToContest`(in_recAction int(11), in_contestID int(11), in_userID int(11), in_qty int)
BEGIN
    INSERT INTO action_to_contest
        (recyclingActionID, contestID, userID, quantity)
    Values
        (in_recAction, in_contestID, in_userID, in_qty);
	select LAST_INSERT_ID() as lastActionToContest;

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createGroupConfiguration` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createGroupConfiguration`(aGroupID int(11), aGeoTag int(11), aGeoTagRadius int(11))
BEGIN
    INSERT INTO `group_configuration`
        (groupID, geoTag, geoTagRadius)
    Values
        (aGroupID, aGeoTag, aGeoTagRadius);

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createGroupMember` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createGroupMember`(aGroupID int(11), aUserID int(11))
BEGIN
    INSERT INTO user_to_group
        (groupID, userID, groupRoleID)
    Values
        (aGroupID, aUserID, 1);

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createItem` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createItem`(aName varchar(45), aDescription varchar(100), aBarcode varchar(36))
BEGIN
    INSERT INTO item
        (name, description, barcode)
    Values
        (aName, aDescription, aBarcode);
	
    SELECT LAST_INSERT_ID() AS 'itemID';

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createItemToMaterialMakeup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createItemToMaterialMakeup`(aItemID int(11), aMaterialID int(11), aQuantity int(11))
BEGIN
    INSERT INTO item_to_material_makeup
        (itemID, materialID, quantity)
    Values
        (aItemID, aMaterialID, aQuantity);
	
    SELECT LAST_INSERT_ID() AS 'itemToMaterialMakeupID';

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createMaterial` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createMaterial`(aName varchar(45), aDescription varchar(100), aMeasure varchar(45))
BEGIN
    INSERT INTO material
        (name, description, measure)
    Values
        (aName, aDescription, aMeasure);

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createNewContest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createNewContest`(
	IN in_name varchar(45),
	IN in_prize varchar(45),
	IN in_threshold int(11),
	IN in_ends int(11),
	IN in_material int(11),
	IN in_boundary int(11),
	IN in_radius int(11),
	IN in_from date,
	IN in_to date,
	IN in_userID int(11),
	IN in_active tinyint
)
BEGIN
	INSERT INTO contest
		(contestName, contestPrize,threshold, contestEnds, materialType, boundaryType, radius, dateStart, dateEnd, createdByUserID, active)
	VALUES (in_name, in_prize,in_threshold, in_ends, in_material, in_boundary, in_radius, in_from, in_to, in_userID, in_active);

	select LAST_INSERT_ID() as contestID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createNewGroupProfile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createNewGroupProfile`(
    IN in_groupName varchar(45),
    IN in_userid int(11),
    IN in_email varchar(45),
    IN in_address1 varchar(100),
    IN in_address2 varchar(100),
    IN in_city varchar(30),
    IN in_stateID int(11),
    IN in_countryID int(11),
    IN in_zipcode varchar(45),
    IN in_geoTag tinyint(1),
    IN in_radius int(5),
    IN in_lat decimal(10, 8),
    IN in_lng decimal(10, 8)
)
BEGIN

    DECLARE userExists INT DEFAULT 0;   
    DECLARE newGroupID INT;

    SELECT count(*) INTO userExists FROM user WHERE user.userID = in_userid; 

    IF (userExists > 0) THEN
        SET SQL_SAFE_UPDATES = 0;
        
        START TRANSACTION;
        
        INSERT INTO `ecosustainabilityefforts`.`group` (groupName, userID, email, address1, address2, city, stateID, countryID, zipcode, lat, lng)
            VALUES (in_groupName, in_userid , in_email, in_address1, in_address2, in_city, in_stateID, in_countryID, in_zipcode, in_lat, in_lng);

        SET newGroupID = LAST_INSERT_ID();
        
        INSERT INTO `ecosustainabilityefforts`.`group_configuration` (groupID, geoTag, geoTagRadius)
            VALUES (newGroupID, in_geoTag, in_radius);

        INSERT INTO `ecosustainabilityefforts`.`user_to_group` (groupID, userID, groupRoleID)
            VALUES (newGroupID, in_userid, 2);

		COMMIT;
    END IF;


END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createRecyclingAction` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createRecyclingAction`(aItemID int(11), aUserID int(11), aGroupID int(11), aLat DECIMAL(10, 8), aLng DECIMAL(10, 8), aDateAdded varchar(14), aQuantity int(11))
BEGIN
	Declare lastRecAction int;
    INSERT INTO recycling_action
        (itemID, userID, groupID, lat, lng, dateAdded, quantity)
    Values
        (aItemID, aUserID, aGroupID, aLat, aLng, cast(aDateAdded as datetime), aQuantity);
	SET lastRecAction = LAST_INSERT_ID();
	Select lastRecAction;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createUser`(aFirstName varchar(45), aLastName varchar(45), aUserName varchar(45), aPassword varchar(45), aEmail varchar(45))
BEGIN
    INSERT INTO user
        (firstName, lastName, userName, password, email, userGuid, userRoleID)
    Values
        (aFirstname, aLastname, aUserName, aPassword, aEmail, UUID(), 1);

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `createUserGroupRequest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `createUserGroupRequest`(aGroupID int(11), aUserID int(11), aDateRequested varchar(14))
BEGIN
    INSERT INTO user_group_request
        (groupID, userID, `status`, dateRequested, rejected, accepted)
    Values
        (aGroupID, aUserID, 1, cast(aDateRequested as datetime), 0, 0);

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAcceptUserGroupsView` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAcceptUserGroupsView`(aUserID int(11))
BEGIN
    SELECT 
	*
    FROM accept_user_groups_view 
    WHERE userID = aUserID;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getAcceptUserUsersView` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getAcceptUserUsersView`(aGroupID int(11))
BEGIN
    SELECT 
	*
    FROM accept_user_users_view 
    WHERE groupID = aGroupID
    AND `status` = 1;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getActiveContestsForGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getActiveContestsForGroup`(in_groupID int(11))
BEGIN
	
    SELECT * from contest_config_view
	WHERE  active = 1 and contestID IN (SELECT contestID from contest_to_group
	WHERE in_groupID = groupID);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getBoundaries` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getBoundaries`()
BEGIN
    SELECT 
		boundaryID,
		boundaryName
    FROM contest_boundary;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContestActivity` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContestActivity`(in in_contestID int(11))
BEGIN
	select contestID, contestName, contestPrize, active, userID, userName, firstName, lastName, sum(quantity) as points
	from action_to_contest_view
	where in_contestID = contestID
	group by userID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContestEnds` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContestEnds`()
BEGIN
	select * from contest_ending_criteria;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContests` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContests`()
BEGIN
	select * from contest_config_view;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContestUserReachedThreshold` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContestUserReachedThreshold`(in_contestID int(11), in_userID int(11))
BEGIN
    Select sum(quantity) as reachedThreshold from action_to_contest 
	where in_contestID = contestID and userID = in_userID;

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getContestWinner` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getContestWinner`(in in_contestID int(11))
BEGIN
	select contestID, contestName, contestPrize, active, userID, userName, firstName, lastName
	from winner_to_contest_view
	where in_contestID = contestID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCountryByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCountryByID`(countryID int(11))
BEGIN
	SELECT *  FROM countries where countries_id = countryID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCountryList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCountryList`()
BEGIN
	SELECT *  FROM countries;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getCreateContestGroups` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getCreateContestGroups`(
	IN in_userID int(11)
)
BEGIN
	select * from group_role_view where userID = in_userID; 
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupProfile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupProfile`(
	IN in_groupID varchar(45)
)
BEGIN
	SELECT `group`.groupID, `group`.groupName, `group`.userID, `group`.email, `group`.address1, 
		`group`.address2, `group`.city, `group`.stateID,`group`.countryID, `group`.zipCode, 
		group_configuration.geoTag, group_configuration.geoTagRadius  FROM `group`, group_configuration
		WHERE `group`.groupID = in_groupID AND group_configuration.groupID = in_groupID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupRoles` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupRoles`()
BEGIN
   SELECT *  FROM group_role;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroups` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroups`()
BEGIN
    SELECT *  FROM `group_view`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupsActivitySelectedUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupsActivitySelectedUser`(in in_userID int(11))
BEGIN
  SELECT r.groupName, SUM(r.quantity)  as total
  FROM recycling_action_view as r
  WHERE r.userID = in_userID
  Group by r.groupName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupsMemberOf` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupsMemberOf`(aUserID int(11))
BEGIN
    SELECT 
	*
    FROM groups_member_of_view 
    WHERE groups_member_of_view.memberUserID = aUserID;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupsNotMemberOf` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupsNotMemberOf`(aUserID int(11))
BEGIN
    SELECT 
	*
    FROM groups_not_member_of_view 
    WHERE groups_not_member_of_view.groupID NOT IN (
		SELECT 
		groupID
        FROM user_to_group 
        WHERE user_to_group.userID = aUserID
	);
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupsOverallActivity` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupsOverallActivity`()
BEGIN
  SELECT g.groupName, SUM(r.quantity)  as total
  FROM `group` as g, recycling_action as r
  WHERE g.groupID = r.groupID
  Group by g.groupName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupsOverallScoreboard` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupsOverallScoreboard`()
BEGIN

    SELECT g.groupName, sum(r.quantity) as total
    FROM `group` as g, recycling_action as r
    where g.groupID= r.groupID
    Group by g.groupName
    Order by total DESC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupsOwnerOf` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupsOwnerOf`(aUserID int(11))
BEGIN
    SELECT 
		groupID,
		groupName,
        email,
        address1,
        address2,
        city,
        stateID as 'state',
        countryID as 'country',
        firstName,
        lastName,
        ownerEmail
    FROM group_view
    WHERE group_view.userID = aUserID;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupstoFilterDashboard` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupstoFilterDashboard`()
BEGIN
  SELECT g.groupName, g.groupID 
  FROM `group` as g, recycling_action as r
  WHERE g.groupID = r.groupID
  Group by g.groupName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getGroupUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getGroupUsers`(aGroupID int(11))
BEGIN
    SELECT 
		userName,
		firstName,
        lastName,
        password,
        email
    FROM group_users_view
    WHERE groupID = aGroupID;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getItemDuplicates` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getItemDuplicates`(aName varchar(45), aDescription varchar(100))
BEGIN
    SELECT 
		itemID,
		name,
        description,
        barcode
    FROM item
    WHERE name like CONCAT('%', aName, '%')
    OR description like CONCAT('%', aDescription, '%');
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getItems` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getItems`()
BEGIN
    SELECT *  FROM item;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getJoinedGroupUsersView` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getJoinedGroupUsersView`(aGroupID int(11))
BEGIN
    SELECT 
		*
    FROM joined_group_users_view
    WHERE groupID = aGroupID;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getMaterials` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getMaterials`()
BEGIN
    SELECT 
		materialID,
		name,
        description,
        measure
    FROM material;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getOwnedGroups` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getOwnedGroups`(aUserID int(11))
BEGIN
    SELECT * FROM group_view WHERE userID = aUserID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRecycledItemsDashboard` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRecycledItemsDashboard`()
BEGIN
    SELECT itemID, itemName, sum(quantity) as total FROM `recycling_action_view` group by itemName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getRecyclingActionMaterials` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getRecyclingActionMaterials`(in_itemID int(11))
BEGIN
	
    SELECT * from item_to_material_makeup
	WHERE  in_itemID = itemID and quantity > 0;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStateByID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStateByID`(stateID int(11))
BEGIN
	SELECT *  FROM states where state_id = stateID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getStateList` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getStateList`(in_country_id INT(11))
BEGIN
	SELECT *  FROM states WHERE in_country_id = state_country_id;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTotalGroups` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTotalGroups`()
BEGIN
    SELECT count(*) as total FROM `group_view`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTotalGroupsSelectedUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTotalGroupsSelectedUser`(in in_userID int(11))
BEGIN
    SELECT count(*) as total FROM `group_users_view` where userID = in_userID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTotalRecyclingActions` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTotalRecyclingActions`()
BEGIN
    SELECT sum(quantity) as total FROM `recycling_action`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTotalRecyclingActionsSelectedGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTotalRecyclingActionsSelectedGroup`(in in_groupID int(11))
BEGIN
    SELECT sum(quantity) as total FROM `recycling_action_view` where groupID = in_groupID ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTotalRecyclingActionsSelectedUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTotalRecyclingActionsSelectedUser`(in in_userID int(11))
BEGIN
    SELECT sum(quantity) as total FROM `recycling_action_view` where userID = in_userID ;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTotalUsers` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTotalUsers`()
BEGIN
    SELECT count(*) as total FROM `user`;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getTotalUsersSelectedGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getTotalUsersSelectedGroup`(in in_groupID int(11))
BEGIN
    SELECT count(*) as total FROM `group_users_view` where groupID = in_groupID;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserDetails` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserDetails`(aUserID int(11))
BEGIN
    SELECT *  FROM user WHERE user.userID = aUserID;  
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserID` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserID`(ausername varchar(45), apassword varchar(45))
BEGIN
    SELECT (CASE WHEN userID IS NULL THEN '0' ELSE userID END) as 'userID' from user WHERE user.username = ausername and user.password = apassword;  
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserRole` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserRole`(aUserRoleID int(11))
BEGIN
    SELECT *  FROM user_role where userRoleID = aUserRoleID;
   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUsersActivitySelectedGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUsersActivitySelectedGroup`(in in_groupID int(11))
BEGIN
  SELECT u.userName, SUM(r.quantity)  as total
  FROM `user` as u, recycling_action as r
  WHERE u.userID = r.userID and r.groupID = in_groupID
  Group by u.userName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUsersOverallScoreboard` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUsersOverallScoreboard`()
BEGIN

	SELECT username, sum(quantity) AS total
	FROM recycling_action_view
	GROUP BY username 
	ORDER BY total DESC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getUserstoFilterDashboard` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getUserstoFilterDashboard`()
BEGIN
  SELECT u.userName, u.firstName, u.lastName, u.userID 
  FROM `user` as u, recycling_action as r
  WHERE u.userID= r.userID
  Group by u.userName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getYTDGroupsOverallActivity` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getYTDGroupsOverallActivity`()
BEGIN
	SELECT DATE_FORMAT(`date`,'%b') AS `month`, SUM(quantity)  as total
	FROM recycling_action_view 
	GROUP BY  month(`date`);

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getYTDSelectedGroupOverallActivity` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getYTDSelectedGroupOverallActivity`(in in_groupID int(11))
BEGIN
	SELECT DATE_FORMAT(`date`,'%b') AS `month`, SUM(quantity)  as total
	FROM recycling_action_view 
	where groupID = in_groupID
	GROUP BY  month(`date`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `getYTDSelectedUserOverallActivity` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `getYTDSelectedUserOverallActivity`(in in_userID int(11))
BEGIN
	SELECT DATE_FORMAT(`date`,'%b') AS `month`, SUM(quantity)  as total
	FROM recycling_action_view 
	where userID = in_userID
	GROUP BY  month(`date`);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `groupScoreboardGetSelectedGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `groupScoreboardGetSelectedGroup`(in in_groupID int(11))
BEGIN

    SELECT g.groupName, sum(r.quantity) as total
    FROM `group` as g, recycling_action as r
    where g.groupID= r.groupID AND g.groupID = in_groupID
    Group by g.groupName
    Order by total DESC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `groupScoreboardGetSelectedUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `groupScoreboardGetSelectedUser`(in in_userID int(11))
BEGIN

    SELECT g.groupName, sum(r.quantity) as total
    FROM `group` as g, recycling_action as r
    where g.groupID= r.groupID AND r.userID = in_userID
    Group by g.groupName
    Order by total DESC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `itemsBoardGetSelectedGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `itemsBoardGetSelectedGroup`(in in_groupID int(11))
BEGIN
    SELECT itemID, itemName, sum(quantity) as total 
	FROM `recycling_action_view`
	where groupID = in_groupID
	group by itemName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `itemsBoardGetSelectedUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `itemsBoardGetSelectedUser`(in in_userID int(11))
BEGIN
    SELECT itemID, itemName, sum(quantity) as total 
	FROM `recycling_action_view`
	where userID = in_userID
	group by itemName;
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `rejectUserGroupRequest` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `rejectUserGroupRequest`(aGroupID int(11), aUserID int(11))
BEGIN
	UPDATE user_group_request 
    SET rejected = 1 
    WHERE groupid = aGroupID
    AND userid = aUserID;

   END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `setContestToGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `setContestToGroup`(
	in in_contestID int(11),
	in in_groupID int(11)
)
BEGIN
	INSERT INTO contest_to_group (contestID, groupID) VALUES (in_contestID, in_groupID);
END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateGroupProfile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateGroupProfile`(
    IN in_groupID int(11),
    IN in_groupName varchar(45),
    IN in_email varchar(45),
    IN in_address1 varchar(100),
    IN in_address2 varchar(100),
    IN in_city varchar(30),
    IN in_stateID int(11),
    IN in_countryID int(11),
    IN in_zipcode varchar(45),
    IN in_geoTag tinyint(1),
    IN in_geoTagRadius int(5),
    IN in_lat decimal(10, 8),
    IN in_lng decimal(10, 8)
)
BEGIN
   
        SET SQL_SAFE_UPDATES = 0;

	START TRANSACTION;
	
	UPDATE `ecosustainabilityefforts`.`group` 
	SET 
		groupName = in_groupName,
		email = in_email,
		address1 = in_address1,
		address2 = in_address2,
		city = in_city,
		stateID = in_stateID,
		countryID = in_countryID,
		zipcode = in_zipcode,
        lat = in_lat,
        lng = in_lng
        WHERE groupID = in_groupID;

	UPDATE `ecosustainabilityefforts`.`group_configuration` 
	SET 
		geoTag = in_geoTag,
		geoTagRadius = in_geoTagRadius
	WHERE groupID = in_groupID;
	
	COMMIT;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateUserProfile` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateUserProfile`(
	IN in_userID int(11),
	IN in_UserName varchar(45),
	IN in_FirstName varchar(45),
	IN in_LastName varchar(45),
	IN in_Email varchar(45),
	IN in_Password varchar(45)
)
BEGIN 
	
    UPDATE `ecosustainabilityefforts`.`user`
	SET  firstName =in_FirstName, lastName=in_LastName, 
		password = in_Password, email = in_Email
	WHERE userID = in_userID;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `updateUserToGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `updateUserToGroup`(aGroupID int(11), aUserID int(11), aGroupRoleID int(11))
BEGIN 
	
    UPDATE `ecosustainabilityefforts`.`user_to_group`
	SET  groupRoleID = aGroupRoleID
	WHERE userID = aUserID 
    AND groupID = aGroupID;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `userScoreboardGetSelectedGroup` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `userScoreboardGetSelectedGroup`(in in_groupID int(11))
BEGIN

	SELECT username, sum(quantity) AS total
	FROM recycling_action_view
	WHERE in_groupID = groupID
	GROUP BY username 
	ORDER BY total DESC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 DROP PROCEDURE IF EXISTS `userScoreboardGetSelectedUser` */;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8 */ ;
/*!50003 SET character_set_results = utf8 */ ;
/*!50003 SET collation_connection  = utf8_general_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'STRICT_TRANS_TABLES,NO_AUTO_CREATE_USER,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `userScoreboardGetSelectedUser`(in in_userID int(11))
BEGIN

	SELECT username, sum(quantity) AS total
	FROM recycling_action_view
	WHERE in_userID = userID
	GROUP BY username 
	ORDER BY total DESC;

END ;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Final view structure for view `accept_user_groups_view`
--

/*!50001 DROP TABLE IF EXISTS `accept_user_groups_view`*/;
/*!50001 DROP VIEW IF EXISTS `accept_user_groups_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `accept_user_groups_view` AS select `group`.`groupID` AS `groupID`,`group`.`groupName` AS `groupName`,`group`.`email` AS `email`,`group`.`address1` AS `address1`,`group`.`address2` AS `address2`,`group`.`city` AS `city`,`group`.`stateID` AS `stateID`,`group`.`countryID` AS `countryID`,`group`.`zipCode` AS `zipcode`,`group_role`.`name` AS `roleName`,`user`.`userID` AS `userID`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName` from (((`user_to_group` join `user` on((`user`.`userID` = `user_to_group`.`userID`))) join `group` on((`group`.`groupID` = `user_to_group`.`groupID`))) join `group_role` on(((`group_role`.`groupRoleID` = `user_to_group`.`groupRoleID`) and (`group_role`.`acceptUsers` = 1)))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `accept_user_users_view`
--

/*!50001 DROP TABLE IF EXISTS `accept_user_users_view`*/;
/*!50001 DROP VIEW IF EXISTS `accept_user_users_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `accept_user_users_view` AS select `user`.`userID` AS `userID`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`email` AS `email`,`user_group_request`.`groupID` AS `groupID`,`user_group_request`.`status` AS `status` from (`user` join `user_group_request` on((`user`.`userID` = `user_group_request`.`userID`))) where ((`user_group_request`.`rejected` = '0') and (`user_group_request`.`accepted` = '0')) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `action_to_contest_view`
--

/*!50001 DROP TABLE IF EXISTS `action_to_contest_view`*/;
/*!50001 DROP VIEW IF EXISTS `action_to_contest_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `action_to_contest_view` AS select `action_to_contest`.`contestID` AS `contestID`,`contest`.`contestName` AS `contestName`,`contest`.`contestPrize` AS `contestPrize`,`contest`.`active` AS `active`,`action_to_contest`.`userID` AS `userID`,`user`.`userName` AS `userName`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`action_to_contest`.`quantity` AS `quantity` from ((`action_to_contest` join `contest` on((`action_to_contest`.`contestID` = `contest`.`contestID`))) join `user` on((`action_to_contest`.`userID` = `user`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `contest_config_view`
--

/*!50001 DROP TABLE IF EXISTS `contest_config_view`*/;
/*!50001 DROP VIEW IF EXISTS `contest_config_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `contest_config_view` AS select `contest`.`contestID` AS `contestID`,`contest`.`contestName` AS `contestName`,`contest`.`contestPrize` AS `contestPrize`,`contest`.`threshold` AS `threshold`,`contest`.`contestEnds` AS `contestEndsID`,`contest_ending_criteria`.`contestEndsName` AS `contestEndsName`,`contest`.`materialType` AS `materialID`,`material`.`name` AS `materialName`,`material`.`measure` AS `measure`,`contest`.`boundaryType` AS `boundaryTypeID`,`contest`.`radius` AS `radius`,`contest`.`dateStart` AS `dateStart`,`contest`.`dateEnd` AS `dateEnd`,`contest`.`createdByUserID` AS `userID`,`contest`.`active` AS `active` from ((`contest` join `contest_ending_criteria` on((`contest`.`contestEnds` = `contest_ending_criteria`.`contestEndsID`))) join `material` on((`contest`.`materialType` = `material`.`materialID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `group_role_view`
--

/*!50001 DROP TABLE IF EXISTS `group_role_view`*/;
/*!50001 DROP VIEW IF EXISTS `group_role_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `group_role_view` AS select `group`.`groupID` AS `groupID`,`group`.`groupName` AS `groupName`,`user`.`userID` AS `userID`,`user`.`userName` AS `userName`,`user`.`firstName` AS `firstname`,`user`.`lastName` AS `lastname`,`user_to_group`.`groupRoleID` AS `groupRoleID`,`group_role`.`name` AS `name`,`group_role`.`description` AS `description`,`group_role`.`createContest` AS `createContest`,`group_role`.`acceptUsers` AS `acceptUsers` from (((`user_to_group` join `user` on((`user`.`userID` = `user_to_group`.`userID`))) join `group` on((`group`.`groupID` = `user_to_group`.`groupID`))) join `group_role` on(((`group_role`.`groupRoleID` = `user_to_group`.`groupRoleID`) and (`group_role`.`createContest` = 1)))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `group_users_view`
--

/*!50001 DROP TABLE IF EXISTS `group_users_view`*/;
/*!50001 DROP VIEW IF EXISTS `group_users_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `group_users_view` AS select `user`.`userID` AS `userID`,`user`.`userName` AS `userName`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`password` AS `password`,`user`.`email` AS `email`,`user`.`userGuid` AS `userGuid`,`user`.`userRoleID` AS `userRoleID`,`user_to_group`.`groupID` AS `groupID` from (`user` join `user_to_group` on((`user`.`userID` = `user_to_group`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `group_view`
--

/*!50001 DROP TABLE IF EXISTS `group_view`*/;
/*!50001 DROP VIEW IF EXISTS `group_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `group_view` AS select `group`.`groupID` AS `groupID`,`group`.`groupName` AS `groupName`,`group`.`email` AS `email`,`group`.`address1` AS `address1`,`group`.`address2` AS `address2`,`group`.`city` AS `city`,`group`.`stateID` AS `stateID`,`group`.`countryID` AS `countryID`,`group`.`zipCode` AS `zipcode`,`group`.`lat` AS `lat`,`group`.`lng` AS `lng`,`group_configuration`.`geoTag` AS `geoTag`,`group_configuration`.`geoTagRadius` AS `geoTagRadius`,`user`.`userID` AS `userID`,`user`.`userName` AS `userName`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`password` AS `password`,`user`.`email` AS `ownerEmail`,`user`.`userGuid` AS `userGuid`,`user`.`userRoleID` AS `userRoleID` from ((`group` join `group_configuration` on((`group_configuration`.`groupID` = `group`.`groupID`))) join `user` on((`group`.`userID` = `user`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `groups_member_of_view`
--

/*!50001 DROP TABLE IF EXISTS `groups_member_of_view`*/;
/*!50001 DROP VIEW IF EXISTS `groups_member_of_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `groups_member_of_view` AS select `group`.`groupID` AS `groupID`,`group`.`groupName` AS `groupName`,`group`.`email` AS `email`,`group`.`address1` AS `address1`,`group`.`address2` AS `address2`,`group`.`city` AS `city`,`group`.`zipCode` AS `zipCode`,`states`.`state_name` AS `state_name`,`countries`.`countries_name` AS `countries_name`,`user`.`userID` AS `ownerUserID`,`user`.`firstName` AS `ownerFirstName`,`user`.`lastName` AS `ownerLastName`,`user`.`email` AS `ownerEmail`,`user_to_group`.`userID` AS `memberUserID` from (((((`group` join `group_configuration` on((`group_configuration`.`groupID` = `group`.`groupID`))) join `user` on((`group`.`userID` = `user`.`userID`))) left join `countries` on((`group`.`countryID` = `countries`.`countries_id`))) left join `states` on((`group`.`stateID` = `states`.`state_id`))) join `user_to_group` on((`group`.`groupID` = `user_to_group`.`groupID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `groups_not_member_of_view`
--

/*!50001 DROP TABLE IF EXISTS `groups_not_member_of_view`*/;
/*!50001 DROP VIEW IF EXISTS `groups_not_member_of_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `groups_not_member_of_view` AS select `group`.`groupID` AS `groupID`,`group`.`groupName` AS `groupName`,`group`.`email` AS `email`,`group`.`address1` AS `address1`,`group`.`address2` AS `address2`,`group`.`city` AS `city`,`group`.`zipCode` AS `zipCode`,`states`.`state_name` AS `state_name`,`countries`.`countries_name` AS `countries_name`,`user`.`userID` AS `ownerUserID`,`user`.`firstName` AS `ownerFirstName`,`user`.`lastName` AS `ownerLastName`,`user`.`email` AS `ownerEmail` from ((((`group` join `group_configuration` on((`group_configuration`.`groupID` = `group`.`groupID`))) join `user` on((`group`.`userID` = `user`.`userID`))) left join `countries` on((`group`.`countryID` = `countries`.`countries_id`))) left join `states` on((`group`.`stateID` = `states`.`state_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `joined_group_users_view`
--

/*!50001 DROP TABLE IF EXISTS `joined_group_users_view`*/;
/*!50001 DROP VIEW IF EXISTS `joined_group_users_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `joined_group_users_view` AS select `user`.`userID` AS `userID`,`user`.`userName` AS `userName`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`email` AS `email`,`user`.`userGuid` AS `userGuid`,`user`.`userRoleID` AS `userRoleID`,`user_to_group`.`groupID` AS `groupID`,`user_to_group`.`groupID` AS `groupRoleID` from (`user` join `user_to_group` on((`user`.`userID` = `user_to_group`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `recycling_action_view`
--

/*!50001 DROP TABLE IF EXISTS `recycling_action_view`*/;
/*!50001 DROP VIEW IF EXISTS `recycling_action_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `recycling_action_view` AS select `recycling_action`.`recyclingActionID` AS `recyclingActionID`,`recycling_action`.`itemID` AS `itemID`,`item`.`name` AS `itemName`,`item`.`description` AS `itemDescription`,`item`.`barcode` AS `itemBarcode`,`recycling_action`.`userID` AS `userID`,`user`.`userName` AS `userName`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName`,`user`.`email` AS `email`,`recycling_action`.`groupID` AS `groupID`,`group`.`groupName` AS `groupName`,`recycling_action`.`dateAdded` AS `date`,`recycling_action`.`quantity` AS `quantity`,`recycling_action`.`lat` AS `lat`,`recycling_action`.`lng` AS `lng` from (((`recycling_action` join `item` on((`recycling_action`.`itemID` = `item`.`itemID`))) join `group` on((`recycling_action`.`groupID` = `group`.`groupID`))) join `user` on((`recycling_action`.`userID` = `user`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `winner_to_contest_view`
--

/*!50001 DROP TABLE IF EXISTS `winner_to_contest_view`*/;
/*!50001 DROP VIEW IF EXISTS `winner_to_contest_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `winner_to_contest_view` AS select `winner_to_contest`.`contestID` AS `contestID`,`contest`.`contestName` AS `contestName`,`contest`.`contestPrize` AS `contestPrize`,`contest`.`active` AS `active`,`winner_to_contest`.`userID` AS `userID`,`user`.`userName` AS `userName`,`user`.`firstName` AS `firstName`,`user`.`lastName` AS `lastName` from ((`winner_to_contest` join `contest` on((`winner_to_contest`.`contestID` = `contest`.`contestID`))) join `user` on((`winner_to_contest`.`userID` = `user`.`userID`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2014-12-11 11:02:50
