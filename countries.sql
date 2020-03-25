-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-03-2020 a las 19:18:08
-- Versión del servidor: 10.4.11-MariaDB
-- Versión de PHP: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyectoshs`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `countries`
--

CREATE TABLE `countries` (
  `id` int(11) NOT NULL,
  `country` varchar(255) NOT NULL,
  `confirmed` int(11) NOT NULL,
  `deaths` int(11) NOT NULL,
  `mortality` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `countries`
--

INSERT INTO `countries` (`id`, `country`, `confirmed`, `deaths`, `mortality`) VALUES
(1, 'Afghanistan', 24, 0, 0),
(2, 'Albania', 76, 2, 2.63),
(3, 'Algeria', 139, 15, 10.79),
(4, 'Andorra', 88, 0, 0),
(5, 'Angola', 2, 0, 0),
(7, 'Antigua and Barbuda', 1, 0, 0),
(8, 'Argentina', 158, 4, 2.53),
(9, 'Armenia', 160, 0, 0),
(10, 'Australia', 1071, 7, 0.65),
(11, 'Austria', 2814, 9, 0.28),
(12, 'Azerbaijan', 53, 1, 1.89),
(13, 'Bahrain', 305, 1, 0.33),
(14, 'Bangladesh', 25, 2, 8),
(15, 'Barbados', 6, 0, 0),
(16, 'Belarus', 76, 0, 0),
(17, 'Benin', 2, 0, 0),
(18, 'Bhutan', 2, 0, 0),
(19, 'Bolivia', 19, 0, 0),
(20, 'Brazil', 1021, 15, 1.47),
(21, 'Brunei', 83, 0, 0),
(22, 'Bulgaria', 163, 3, 1.84),
(23, 'Burkina Faso', 64, 2, 3.12),
(24, 'Cambodia', 53, 0, 0),
(25, 'Cameroon', 27, 0, 0);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `countries`
--
ALTER TABLE `countries`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `countries`
--
ALTER TABLE `countries`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
