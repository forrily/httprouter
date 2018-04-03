# Host: localhost  (Version: 5.5.53)
# Date: 2018-04-03 18:25:17
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "token"
#

DROP TABLE IF EXISTS `token`;
CREATE TABLE `token` (
  `intAuthToken` varchar(32) DEFAULT NULL,
  `id` varchar(32) DEFAULT NULL,
  `device` varchar(32) DEFAULT NULL,
  `ip` varchar(16) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "token"
#

/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES ('qaqaqa','sp100029','iPhone6','192.168.1.88',NULL,NULL,NULL),('aaabbb','sp100029','Samsung Glaxy s3','177.15.33.8',NULL,NULL,NULL),('dddeeefff','sp100030','xiaomi 4x','110.20.3.7',NULL,NULL,NULL),('eeefffggg','sp100031','xiaomi 4x','111.20.3.7',NULL,NULL,NULL),('yuqbajnnr','sp100032','iPhone se','121.2.88.137',NULL,NULL,NULL),('qaqaqa','sp100029','iPhone6','192.168.1.88',NULL,NULL,NULL),('aaabbb','sp100029','Samsung Glaxy s3','177.15.33.8',NULL,NULL,NULL),('dddeeefff','sp100030','xiaomi 4x','110.20.3.7',NULL,NULL,NULL),('eeefffggg','sp100031','xiaomi 4x','111.20.3.7',NULL,NULL,NULL),('yuqbajnnr','sp100032','iPhone se','121.2.88.137',NULL,NULL,NULL),('xxxyyyzz','sp100029','iphone6','192.168.1.88',NULL,NULL,NULL),('aaabbb','sp100029','Samsung Glaxy s3','177.15.33.8',NULL,NULL,NULL),('dddeeefff','sp100030','xiaomi 4x','110.20.3.7',NULL,NULL,NULL),('eeefffggg','sp100031','xiaomi 4x','111.20.3.7',NULL,NULL,NULL),('yuqbajnnr','sp100032','iPhone se','121.2.88.137',NULL,NULL,NULL);
/*!40000 ALTER TABLE `token` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` varchar(32) DEFAULT NULL,
  `name` varchar(32) DEFAULT NULL,
  `age` int(11) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `email` varchar(32) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES ('sp100029','peter',25,NULL,NULL,NULL),('sp100030','tom',50,NULL,NULL,NULL),('sp100031','karl',34,NULL,NULL,NULL),('sp100032','mary',18,NULL,NULL,NULL),('sp100029','peter',25,NULL,NULL,NULL),('sp100030','tom',50,NULL,NULL,NULL),('sp100031','karl',34,NULL,NULL,NULL),('sp100032','mary',18,NULL,NULL,NULL),('sp100029','peter',25,NULL,NULL,NULL),('sp100030','tom',50,NULL,NULL,NULL),('sp100031','karl',34,NULL,NULL,NULL),('sp100032','mary',18,NULL,NULL,NULL);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
