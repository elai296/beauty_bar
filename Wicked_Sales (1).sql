-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Dec 12, 2019 at 06:44 AM
-- Server version: 5.7.27-0ubuntu0.18.04.1
-- PHP Version: 7.2.19-0ubuntu0.18.04.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `Wicked Sales`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
CREATE TABLE `cart` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `created` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`id`, `created`) VALUES
(1, '2019-09-16 22:15:40'),
(19, '2019-09-16 22:57:36'),
(20, '2019-09-16 22:58:15'),
(21, '2019-09-16 22:59:19'),
(22, '2019-09-16 23:03:45'),
(23, '2019-09-16 23:03:51'),
(24, '2019-09-16 23:14:03'),
(25, '2019-09-16 23:16:18'),
(26, '2019-09-28 02:34:20'),
(27, '2019-10-07 19:56:30'),
(28, '2019-10-16 03:08:46'),
(29, '2019-10-29 06:02:53'),
(30, '2019-10-30 02:51:47'),
(31, '2019-10-31 04:58:37'),
(32, '2019-11-07 04:42:59'),
(33, '2019-11-19 01:05:51'),
(34, '2019-11-25 19:01:28'),
(35, '2019-12-11 19:49:40');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

DROP TABLE IF EXISTS `cartItems`;
CREATE TABLE `cartItems` (
  `id` int(11) NOT NULL,
  `cartID` mediumint(8) UNSIGNED NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `cartID`, `productID`, `count`, `price`, `added`, `updated`) VALUES
(2, 19, 2, 1, 5300, '2019-09-16 22:57:36', '2019-09-16 22:57:36'),
(3, 20, 2, 1, 5300, '2019-09-16 22:58:15', '2019-09-16 22:58:15'),
(4, 21, 2, 1, 5300, '2019-09-16 22:59:19', '2019-09-16 22:59:19'),
(5, 22, 2, 1, 5300, '2019-09-16 23:03:45', '2019-09-16 23:03:45'),
(6, 23, 3, 1, 3900, '2019-09-16 23:03:51', '2019-09-16 23:03:51'),
(7, 24, 2, 1, 5300, '2019-09-16 23:14:03', '2019-09-16 23:14:03'),
(8, 25, 1, 1, 6500, '2019-09-16 23:16:18', '2019-09-16 23:16:18'),
(9, 25, 4, 1, 3400, '2019-09-16 23:34:08', '2019-09-16 23:34:08'),
(10, 25, 2, 1, 5300, '2019-09-24 05:09:34', '2019-09-24 05:09:34'),
(11, 25, 5, 1, 2500, '2019-09-24 05:09:44', '2019-09-24 05:09:44'),
(13, 25, 3, 1, 3900, '2019-09-25 03:01:01', '2019-09-25 03:01:01'),
(15, 26, 14, 5, 12000, '2019-09-30 18:23:11', '2019-10-14 05:22:14'),
(16, 26, 15, 5, 17000, '2019-10-02 06:02:35', '2019-10-14 05:11:11'),
(19, 26, 1, 1, 6500, '2019-10-03 03:53:50', '2019-10-03 03:53:50'),
(21, 26, 4, 1, 3400, '2019-10-05 17:37:15', '2019-10-05 17:37:15'),
(24, 26, 11, 1, 6000, '2019-10-07 01:11:21', '2019-10-07 01:11:21'),
(25, 27, 2, 1, 5300, '2019-10-07 19:56:30', '2019-10-07 19:56:30'),
(26, 27, 3, 1, 3900, '2019-10-07 19:56:34', '2019-10-07 19:56:34'),
(27, 27, 4, 1, 3400, '2019-10-09 03:57:42', '2019-10-09 03:57:42'),
(28, 27, 20, 1, 10000, '2019-10-09 05:10:34', '2019-10-09 05:10:34'),
(30, 27, 8, 1, 3900, '2019-10-15 01:36:55', '2019-10-15 01:36:55'),
(32, 27, 7, 1, 3000, '2019-10-15 04:16:20', '2019-10-15 04:16:20'),
(34, 27, 1, 1, 6500, '2019-10-15 04:16:36', '2019-10-15 04:16:36'),
(45, 27, 6, 1, 4500, '2019-10-15 04:43:14', '2019-10-15 04:43:14'),
(48, 27, 9, 1, 12900, '2019-10-15 04:43:45', '2019-10-15 04:43:45'),
(49, 27, 19, 1, 4200, '2019-10-15 04:43:50', '2019-10-15 04:43:50'),
(56, 27, 17, 1, 8000, '2019-10-15 05:01:01', '2019-10-15 05:01:01'),
(58, 27, 12, 1, 2000, '2019-10-16 02:56:33', '2019-10-16 02:56:33'),
(94, 29, 14, 1, 2400, '2019-10-29 06:02:53', '2019-10-29 06:02:53'),
(95, 30, 14, 7, 2400, '2019-10-30 02:51:47', '2019-10-30 04:48:02'),
(97, 30, 15, 1, 3400, '2019-10-30 02:55:37', '2019-10-30 02:55:37'),
(128, 30, 11, 21, 6000, '2019-10-30 04:58:25', '2019-10-30 05:58:05'),
(174, 31, 15, 8, 3400, '2019-10-30 05:59:17', '2019-10-30 05:59:34'),
(182, 31, 11, 4, 6000, '2019-10-30 05:59:38', '2019-10-30 05:59:42'),
(186, 31, 12, 3, 2000, '2019-10-30 05:59:45', '2019-10-30 05:59:46'),
(189, 31, 14, 3, 2400, '2019-10-30 06:00:15', '2019-10-30 06:00:17'),
(192, 31, 7, 10, 3000, '2019-10-30 06:00:32', '2019-10-31 05:37:59'),
(207, 32, 7, 5, 3000, '2019-11-07 04:42:59', '2019-11-07 04:42:59'),
(208, 32, 3, 5, 3900, '2019-11-07 04:43:40', '2019-11-07 04:43:40'),
(296, 28, 2, 4, 5300, '2019-11-16 04:57:52', '2019-11-16 05:37:37'),
(299, 28, 3, 1, 3900, '2019-11-16 05:25:18', '2019-11-16 05:25:18'),
(353, 33, 19, 1, 4200, '2019-11-20 21:26:38', '2019-11-20 21:26:38'),
(354, 33, 4, 2, 3400, '2019-11-22 21:58:10', '2019-11-22 21:58:10'),
(408, 35, 1, 15, 6500, '2019-12-11 19:49:40', '2019-12-11 20:05:23'),
(411, 35, 2, 4, 5300, '2019-12-11 20:06:00', '2019-12-11 20:06:00'),
(412, 35, 3, 5, 3900, '2019-12-11 20:06:17', '2019-12-11 20:06:17'),
(413, 35, 6, 6, 4500, '2019-12-11 20:06:36', '2019-12-11 20:06:36');

-- --------------------------------------------------------

--
-- Table structure for table `Images`
--

DROP TABLE IF EXISTS `Images`;
CREATE TABLE `Images` (
  `id_image` int(10) UNSIGNED NOT NULL,
  `url_image` varchar(150) COLLATE utf8_croatian_ci NOT NULL,
  `id_product` int(10) UNSIGNED NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `Images`
--

INSERT INTO `Images` (`id_image`, `url_image`, `id_product`, `created`) VALUES
(4, './image/makeup/charlotte-main.jpg', 2, '2019-09-30 02:21:59'),
(5, './image/makeup/charlotte-sample.jpeg', 2, '2019-09-30 02:21:59'),
(6, './image/makeup/huda-main.jpg', 1, '2019-09-30 02:21:59'),
(7, './image/makeup/huda-hands.jpg', 1, '2019-09-30 02:21:59'),
(8, './image/makeup/yves-saint-main.jpg', 3, '2019-09-30 02:21:59'),
(9, './image/makeup/yves-saint-lip1.jpeg', 3, '2019-09-30 02:21:59'),
(10, './image/makeup/nars-lipstick-main.jpg', 4, '2019-09-30 02:21:59'),
(11, './image/makeup/nars-lip-sample.jpeg', 4, '2019-09-30 02:21:59'),
(12, './image/makeup/marc-jacobs-main.jpg', 5, '2019-09-30 02:21:59'),
(13, './image/makeup/marc-jacobs-eye-pencil.jpeg', 5, '2019-09-30 02:21:59'),
(14, './image/makeup/charlotte-mirror-main.jpg', 6, '2019-09-30 02:21:59'),
(15, './image/makeup/charlotte-one-mirror.jpg', 6, '2019-09-30 02:21:59'),
(16, './image/makeup/huda-palette.jpg', 1, '2019-09-30 02:21:59'),
(17, './image/makeup/charlotte-palette.jpg', 2, '2019-09-30 02:21:59'),
(18, './image/makeup/yves-saint-lip2.jpeg', 3, '2019-09-30 02:21:59'),
(19, './image/makeup/nars-many-lips.jpg', 4, '2019-09-30 02:21:59'),
(20, './image/makeup/marc-jacobs-hands.jpeg', 5, '2019-09-30 02:21:59'),
(21, './image/makeup/charlotte-opened-mirror.jpg', 6, '2019-09-30 02:21:59'),
(22, './image/makeup/nars-blush-main.jpg', 7, '2019-09-30 02:21:59'),
(23, './image/makeup/nars-blush-sample.jpeg', 7, '2019-09-30 02:21:59'),
(24, './image/makeup/nars-blush-hands.jpeg', 7, '2019-09-30 02:21:59'),
(25, './image/makeup/tarte-concealer-main.jpg', 8, '2019-09-30 02:21:59'),
(26, './image/makeup/tarte-concealer-hands.jpeg', 8, '2019-09-30 02:21:59'),
(27, './image/makeup/tarte-concealer-sample.jpeg', 8, '2019-09-30 02:21:59'),
(28, './image/makeup/natasha-palette.jpg', 9, '2019-09-30 02:21:59'),
(29, './image/makeup/natasha-hands.jpeg', 9, '2019-09-30 02:21:59'),
(30, './image/makeup/natasha-face.jpeg', 9, '2019-09-30 02:21:59'),
(31, './image/makeup/too-faced-lip-color.jpg', 10, '2019-09-30 02:21:59'),
(32, './image/makeup/too-faced-lip-color-hands.jpeg', 10, '2019-09-30 02:21:59'),
(33, './image/makeup/too-faced-lip-color-sample.jpeg', 10, '2019-09-30 02:21:59'),
(34, './image/makeup/jeffree_star_palette.jpg', 11, '2019-09-30 02:21:59'),
(35, './image/makeup/Jeffree_Star_Eye_Shadow_sample.jpg', 11, '2019-09-30 02:21:59'),
(36, './image/makeup/Jeffree_Star_Hands.jpg', 11, '2019-09-30 02:21:59'),
(37, './image/makeup/Jeffree_Star_Sponge_Trio_Box_main.jpeg', 12, '2019-09-30 02:21:59'),
(38, './image/makeup/Jeffree_Star_Sponge_Collection_individuals.jpeg', 12, '2019-09-30 02:21:59'),
(39, './image/makeup/Jeffree_Star_Big_Sponge.jpeg', 12, '2019-09-30 02:21:59'),
(40, './image/makeup/hourglass-main.jpeg', 13, '2019-09-30 02:21:59'),
(41, './image/makeup/hourglass-hands.jpg', 13, '2019-09-30 02:21:59'),
(42, './image/makeup/hourglass-case.jpg', 13, '2019-09-30 02:21:59'),
(43, './image/makeup/benefit-brow-pencil-main.jpg', 14, '2019-09-30 02:21:59'),
(44, './image/makeup/benefit-brow-pencil-modeling.jpeg', 14, '2019-09-30 02:21:59'),
(45, './image/makeup/benefit-brow-pencil-sample.jpeg', 14, '2019-09-30 02:21:59'),
(46, './image/makeup/charlotte-lip-stick-main.jpg', 15, '2019-09-30 02:21:59'),
(47, './image/makeup/charlotte-lip-stick-lip.jpeg', 15, '2019-09-30 02:21:59'),
(48, './image/makeup/charlotte-lip-stick-sample.jpeg', 15, '2019-09-30 02:21:59'),
(49, './image/makeup/dior-blush-main.jpeg', 16, '2019-09-30 02:21:59'),
(50, './image/makeup/dior-blush-side.jpg', 16, '2019-09-30 02:21:59'),
(57, './image/makeup/drunk-elephant-main.jpg', 17, '2019-09-30 02:21:59'),
(58, './image/makeup/drunk-elephant-side-pic.jpg', 17, '2019-09-30 02:21:59'),
(59, './image/makeup/drunk-elephant-two-products.jpeg', 17, '2019-09-30 02:21:59'),
(60, './image/makeup/green-drunk-elephant-oil-main.jpg', 18, '2019-10-03 06:00:14'),
(61, './image/makeup/green-drunk-elephant-opened-oil.jpg', 18, '2019-10-03 06:00:14'),
(62, './image/makeup/green-drunk-elephant-oil-box.jpg', 18, '2019-10-03 06:00:41'),
(63, './image/makeup/fresh-main.jpg', 19, '2019-10-03 06:05:06'),
(64, './image/makeup/fresh-opened-container.jpeg', 19, '2019-10-03 06:05:06'),
(65, './image/makeup/fresh-container-hand.jpg', 19, '2019-10-03 06:05:39'),
(66, './image/makeup/shiseido-main.jpeg', 20, '2019-10-03 06:12:45'),
(67, './image/makeup/shiseido-product-hand.jpeg', 20, '2019-10-03 06:12:45'),
(68, './image/makeup/shiseido-product-flower.jpg', 20, '2019-10-03 06:13:13');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

DROP TABLE IF EXISTS `Products`;
CREATE TABLE `Products` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `brand` varchar(500) COLLATE utf8_croatian_ci NOT NULL,
  `name` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `image` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `shortDescription` varchar(500) COLLATE utf8_croatian_ci NOT NULL,
  `longDescription` varchar(500) COLLATE utf8_croatian_ci NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `Products`
--

INSERT INTO `Products` (`id`, `brand`, `name`, `price`, `image`, `shortDescription`, `longDescription`, `created`, `updated`) VALUES
(1, 'HUDA', 'The New Nude Eyeshadow Palette', 6500, './image/makeup/huda-main.jpg', 'A game-changing palette that reinvents nude with revolutionary textures and colors.', 'Reinventing nude so you can experience it like never before, The New Nude Palette by HUDA BEAUTY is versatile and wearable in equal measure. Delivering infinite possibilities, this unexpected palette encourages you to experiment, empower, and express yourself however you please.', '2019-09-02 02:20:20', '2019-12-08 05:33:22'),
(2, 'CHARLOTTE TILBURY\r\n', 'Luxury Eyeshadow Palette', 5300, './image/makeup/charlotte-main.jpg', 'A four-step eyeshadow quad (Prime, Enhance, Smoke, Pop) with a super blend-able, buttery, and non-creasing formula for buildable looks from day to night.', 'Each palette contains four harmonious eye colors: Prime, Enhance, Smoke, and Pop. Create a smooth base for your eye look using the Prime shade, build up definition with Enhance, add drama with the Smoke shade, and finish your dazzling with the Pop shade (topper shade to be applied with finger). ', '2019-09-03 02:20:20', '2019-12-08 05:33:22'),
(3, 'YVES SAINT LAURENT\r\n', 'Rouge Pur Couture The Slim Matte Lipstick', 3900, './image/makeup/yves-saint-main.jpg', 'A super-slim, square lipstick that provides luxurious, full, long wear, and matte color in couture-inspired shades developed for every skin tone by creative director Tom Pecheux.', 'The ultimate matte lipstick, Rouge Pur Couture The Slim saturates lips with ultra-rich, highly-pigmented, matte color that feels weightless and incredibly comfortable on the lips. The non-drying, creamy formula glides on effortlessly and stays put all day so you never have to worry about bleeding, cracking, or reapplying. ', '2019-09-03 02:20:20', '2019-12-08 05:33:22'),
(4, 'NARS', 'Audacious Lipstick', 3400, './image/makeup/nars-lipstick-main.jpg', 'A modern lipstick that dresses up lips with bold coverage, long-lasting wear, and a luxurious texture that smooths and nourishes. ', 'ebut weightless, color-saturated lips when you smooth on NARS Audacious Lipstick. It glides on like satin across the skin and achieves single-stroke coverage that leaves lips with captivating color, dramatic depth, and unstoppable character. A cult-favorite, it is shamelessly seductive in touch and texture. ', '2019-09-04 02:20:20', '2019-12-08 05:33:22'),
(5, 'MARC JACOBS', 'Highliner Gel Eye Crayon Eyeliner', 2500, './image/makeup/marc-jacobs-main.jpg', 'What it is: A gel pot eyeliner in a crayon that delivers intense color and 12-hour waterproof wear and amazing glide in shimmer and matte finishes. ', 'What it does: Experience the luxury of gel eyeliner with the ease of a pencil. Make a bold statement with this extreme-wear, waterproof eyeliner that glides on effortlessly to deliver instant color payoff. Exclusive to Marc Jacobs Beauty, the super-malleable formula offers versatility of application.  Apply Highliner for flawless, precise lines, or smudge immediately after lining for an instant smoky eye.', '2019-09-04 02:20:20', '2019-12-08 05:33:22'),
(6, 'CHARLOTTE TILBURY\r\n', 'Airbrush Flawless Finish Setting Powder', 4500, './image/makeup/charlotte-mirror-main.jpg', 'An ultra-fine setting powder that blurs imperfections and visibly reduces shine.', 'This breathable, micro-fine powder technology gives you an immaculate complexion that acts like a luxe, micro-fine cashmere veil on top of your skin for a bright, perfecting finish. ', '2019-09-11 02:20:20', '2019-12-08 05:33:22'),
(7, 'NARS', 'Blush', 3000, './image/makeup/nars-blush-main.jpg', 'An award-winning, pressed powder blush that delivers healthy-looking color to flatter any skin tone.', 'Silky, superfine micronized powder pigments in matte and shimmering shades ensure a seamless application. These soft, buildable shades deliver a wide range of effects, from ulta-sheer to powerful pops of color. Each iconic shade features a subtle pink undertone for a natural-looking blush.', '2019-09-11 02:20:20', '2019-12-08 05:33:22'),
(8, 'TARTE', 'babassu foundcealer skincare foundation SPF 20', 3900, './image/makeup/tarte-concealer-main.jpg', ' Free of parabens, formaldehydes, phthalates, mineral oil, and triclosan. This product is also vegan, cruelty-free, and gluten-free.', 'Formulated with nourishing babassu, essential fatty acids, and antioxidants, this blendable, customizable formula glides over your full face without cracking, caking, or settling. It helps hydrate and give the appearance of fuller, healthy-looking skin, and lets you live your day, your way. This formula is noncomedogenic.', '2019-09-13 02:20:20', '2019-12-08 05:33:22'),
(9, 'NATASHA DENONA', 'Biba All Neutral Eyeshadow Palette', 12900, './image/makeup/natasha-palette.jpg', 'Biba features 15 brand-new shades of Natasha Denona\'s signature formulas. It includes neutral, warm, and cool tones, from light to dark, in different textures. This eyeshadow palette is very user-friendly, and covers a shade range that varies from mauves, burgundies, and browns to warm greys and black.', '15 x 0.08 oz/ 2.5 g Eyeshadows in Rustic (metallic copper), Prairie (matte camel), Coco (matte dark burgundy), Freckle (matte antique nude), Shine (metallic champagne), Pasha (matte red), Monroe (metallic pink champagne), Rayon (matte medium burgundy), Buff (matte antique pink), Tone (matte clay), Seed (matte dark chocolate), Tor (matte dark grey brown), Sculpture (matte light grey), Spot (matte dark black), Tusk (matte light beige)', '2019-09-13 02:20:20', '2019-12-08 05:33:22'),
(10, 'TOO FACED', 'Peach Puff Long-Wearing Diffused Matte Lip Color', 1900, './image/makeup/too-faced-lip-color.jpg', 'A lip color that gives lips a long-wearing, diffused, modern-matte look that leaves behind a subtle kiss of feather-resistant color-even after a kiss on the lips. Free of parabens. This product is also gluten-free.', 'Ingredient Callouts: Free of parabens. This product is also gluten-free.\n\nWhat Else You Need to Know: The unique, custom Peach Puff applicator disperses the perfect amount of the most comfortable, weightless formula you\'ve ever experienced. The lightweight, long-wearing formula lasts for up to eight hours, and resists feathering and bleeding. Use the unique twist-up color delivery for light coverage.', '2019-09-13 02:20:20', '2019-12-08 05:33:22'),
(11, 'MORPHE', 'The Jeffree Star Artistry Palette', 6000, './image/makeup/jeffree_star_palette.jpg', 'An eyeshadow palette including six color combinations to mix, match, and create a customized look, plus a dual-ended eyeshadow brush.\r\n', 'This palette contains 18 highly pigmented eye shadows (nine matte and nine shimmer) grouped by shade into can\'t-miss combos. The palette contains six complimentary color trios for easy mix-and-match looks. The brush has a fluffy eyeshadow brush end and a smudger brush end to create your own unique eye look.', '2019-09-14 02:20:20', '2019-12-08 05:33:22'),
(12, 'MORPHE', 'The Jeffree Star Artist Sponge Trio', 2000, './image/makeup/Jeffree_Star_Sponge_Trio_Box_main.jpeg', 'The only BS you need in life is Beauty Sponges. Bold and in your face, Jeffree Star is giving you the ultimate beatdown thanks to this fierce trio. Our OG Highlight & Contour Beauty Sponge got a custom star-worthy makeover (with a mini twist). Soak it all in, babe.', '1. Highlight & Contour Beauty Sponge - We all know and love our OG beauty sponge, but it totally needed a pink moment. What Jeffree wants, Jeffree gets. The chiseled edge delivers the ultimate control for contouring, highlighting, and baking. Just add water and give it a good squeeze.\r\n\r\n2. Mini Highlight & Contour Beauty Sponges - This little guy is ready for some action. Jeffree took the OG and shrunk it down to size so you can conceal under your eyes and bake like a boss. Brilliant.', '2019-09-15 02:20:20', '2019-12-08 05:33:22'),
(13, 'HOURGLASS', 'Ambient Lighting Edit Face Palette-Ghost', 8000, './image/makeup/hourglass-main.jpeg', 'A palette featuring 100 percent vegan blush and bronzer in six shades for a glowing complexion.', 'This travel-friendly palette is everything you need to finish, brighten, contour, and highlight your skin in a single compact. Featuring three exclusive shades of Ambient Lighting Bronzer, Ambient Lighting Blush, and Ambient Strobe Lighting Blush, this palette is formulated with photoluminescent technology to capture, diffuse, and soften surrounding light for skin that appears softer, younger, and lit from within.', '2019-09-15 02:20:20', '2019-12-08 05:33:22'),
(14, 'BENEFIT COSMETICS', 'Precisely, My Brow Pencil Ultra Fine Shape & Define', 2400, './image/makeup/benefit-brow-pencil-main.jpg', 'A bestselling brow pencil to transform shapeless, undefined brows with a few strokes-now available in 12 shades to flatter every hair color.', ' Precisely, My Brow Pencil\'s ultra-fine tip makes adding definition to brows easy. It lets you draw incredibly natural-looking, hair-like strokes that last up to 12-hours. This rich, waterproof eyebrow pencil is ideal for spot-filling sparse or over-tweezed areas, and the smudge-proof formula is firm for precise application.', '2019-09-24 02:20:20', '2019-12-08 05:33:22'),
(15, 'CHARLOTTE TILBURY', 'Matte Revolution Lipstick', 3400, './image/makeup/charlotte-lip-stick-main.jpg', 'A matte lipstick that features a long-lasting, buildable, and hydrating formula.', 'The lipstick features 3D glow pigments that help lips appear wider and fuller. The matte formula is enriched with Charlotte\'s secret ingredient and orchid extract to protect and soothe lips for a cashmere finish. The unique, square-angled tip mimics the shape of a lip brush for a precise application. This lipstick comes in a range of 12 shades, including the bestselling Pillow Talk, giving every woman the choice of a perfect nude or pop of color.', '2019-09-25 02:20:20', '2019-12-08 05:33:22'),
(16, 'DIOR', 'Rouge Blush', 4400, './image/makeup/dior-blush-main.jpeg', 'An ultra-pigmented, long-wearing blush for intense cheek color.', ' High-intensity Rouge Blush touches cheeks with sultry, long-lasting color, revealing an irresistibly radiant, healthy glow. This range of iconic shades was inspired by the legendary Rouge Dior lipstick. The shades are buildable to suit any desired effect, from soft to bold.', '2019-09-27 02:20:20', '2019-12-08 05:33:22'),
(17, 'DRUNK ELEPHANT', 'C-Firma Vitamin C Day Serum', 8000, './image/makeup/drunk-elephant-main.jpg', 'A super-potent vitamin C day serum packed with a powerful antioxidant complex, essential nutrients, fruit enzymes, and a chronopeptide that mimics the antioxidant benefits of vitamin D, all working together to firm and brighten the appearance of skin, while improving the signs of photoaging.', 'This revolutionary serum is jam-packed with a potent antioxidant complex of 15 percent l-ascorbic acid, one-half percent ferulic acid, and one percent vitamin E, and other formula-supportive enzymes that help neutralize pollution, environmental stressors, and the damaging effects of free radicals over time. This formula helps to replenish lipids and visibly reduce the appearance of dark spots and wrinkles after applying regularly.', '2019-09-30 02:20:20', '2019-12-08 05:33:22'),
(18, 'DRUNK ELEPHANT', 'Virgin Marula Antioxidant Face Oil', 7200, './image/makeup/green-drunk-elephant-oil-main.jpg', 'A wonder-working luxury facial oil, high in critical antioxidants, to deeply moisturize, nourish, soothe, and rejuvenate your skin while restoring its youthful glow.', 'This Virgin Marula Oil is totally pure, which is the way it is used by African women. So close your eyes and pretend you\'re sitting under a beautiful Marula tree... skin will never know the difference! With regular use as part of your complete Drunk Elephant skincare routine, your skin will be balanced and optimized to look and feel it\'s healthiest.', '2019-10-03 05:58:24', '2019-12-08 05:33:22'),
(19, 'FRESH', 'Rose Deep Hydration Moisturizer', 4200, './image/makeup/fresh-main.jpg', 'An advanced gel-cream that delivers intense 24-hour hydration powered by a combo of hyaluronic acids and time-release hydropatches for petal-soft skin.', 'This lightweight moisturizer acts like a moisture magnet, attracting and increasing it for 24-hour deep hydration. Hydropatches form a moisturizing veil to seal it in all day. The gel-cream also contains rosewater, rose flower oil, angelica leaf extract, and vitamin E to quench and soothe dry skin.', '2019-10-03 06:04:09', '2019-12-08 05:33:22'),
(20, 'SHISEIDO', 'Ultimune Power Infusing Serum Concentrate', 10000, './image/makeup/shiseido-main.jpeg', 'A fast-absorbing serum for all skin types that hydrates, visibly strengthens and firms, and defends against daily damage while boosting the effects of any moisturizer layered over top.', 'A key step in any J-beauty routine, this featherweight fluid acts as an invisible shield by combining powerful Japanese botanical extracts with breakthrough technology to defend skin against the visible signs of aging, environmental aggressors, and stress. Shiseido\'s number one serum is infused with antioxidant reishi mushroom and moisturizing iris root extract for 28 percent stronger skin in just one week. ', '2019-10-03 06:11:49', '2019-12-08 05:33:22');

-- --------------------------------------------------------

--
-- Table structure for table `Products_backup`
--

DROP TABLE IF EXISTS `Products_backup`;
CREATE TABLE `Products_backup` (
  `id` mediumint(8) UNSIGNED NOT NULL,
  `brand` varchar(500) COLLATE utf8_croatian_ci NOT NULL,
  `name` varchar(150) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `image` varchar(300) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `shortDescription` varchar(500) COLLATE utf8_croatian_ci NOT NULL,
  `longDescription` varchar(500) COLLATE utf8_croatian_ci NOT NULL,
  `created` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_croatian_ci;

--
-- Dumping data for table `Products_backup`
--

INSERT INTO `Products_backup` (`id`, `brand`, `name`, `price`, `image`, `shortDescription`, `longDescription`, `created`, `updated`) VALUES
(1, 'HUDA', 'The New Nude Eyeshadow Palette', 6500, 'https://www.sephora.com/productimages/sku/s2137289-main-zoom.jpg', 'A game-changing palette that reinvents nude with revolutionary textures and colors.', 'Reinventing nude so you can experience it like never before, The New Nude Palette by HUDA BEAUTY is versatile and wearable in equal measure. Delivering infinite possibilities, this unexpected palette encourages you to experiment, empower, and express yourself however you please.', '2019-09-02 02:20:20', '2019-10-03 04:59:53'),
(2, 'CHARLOTTE TILBURY\r\n', 'Luxury Eyeshadow Palette', 5300, 'https://www.sephora.com/productimages/sku/s2218790-main-zoom.jpg', 'A four-step eyeshadow quad (Prime, Enhance, Smoke, Pop) with a super blend-able, buttery, and non-creasing formula for buildable looks from day to night.', 'Each palette contains four harmonious eye colors: Prime, Enhance, Smoke, and Pop. Create a smooth base for your eye look using the Prime shade, build up definition with Enhance, add drama with the Smoke shade, and finish your dazzling with the Pop shade (topper shade to be applied with finger). ', '2019-09-03 02:20:20', '2019-10-03 05:00:13'),
(3, 'YVES SAINT LAURENT\r\n', 'Rouge Pur Couture The Slim Matte Lipstick', 3900, 'https://www.sephora.com/productimages/sku/s2129922-main-zoom.jpg', 'A super-slim, square lipstick that provides luxurious, full, long wear, and matte color in couture-inspired shades developed for every skin tone by creative director Tom Pecheux.', 'The ultimate matte lipstick, Rouge Pur Couture The Slim saturates lips with ultra-rich, highly-pigmented, matte color that feels weightless and incredibly comfortable on the lips. The non-drying, creamy formula glides on effortlessly and stays put all day so you never have to worry about bleeding, cracking, or reapplying. ', '2019-09-03 02:20:20', '2019-10-03 04:59:43'),
(4, 'NARS', 'Audacious Lipstick', 3400, 'https://www.sephora.com/productimages/sku/s1846914-main-zoom.jpg', 'A modern lipstick that dresses up lips with bold coverage, long-lasting wear, and a luxurious texture that smooths and nourishes. ', 'ebut weightless, color-saturated lips when you smooth on NARS Audacious Lipstick. It glides on like satin across the skin and achieves single-stroke coverage that leaves lips with captivating color, dramatic depth, and unstoppable character. A cult-favorite, it is shamelessly seductive in touch and texture. ', '2019-09-04 02:20:20', '2019-10-03 05:00:22'),
(5, 'MARC JACOBS', 'Highliner Gel Eye Crayon Eyeliner', 2500, 'https://www.sephora.com/productimages/sku/s1501311-main-zoom.jpg', 'What it is: A gel pot eyeliner in a crayon that delivers intense color and 12-hour waterproof wear and amazing glide in shimmer and matte finishes. ', 'What it does: Experience the luxury of gel eyeliner with the ease of a pencil. Make a bold statement with this extreme-wear, waterproof eyeliner that glides on effortlessly to deliver instant color payoff. Exclusive to Marc Jacobs Beauty, the super-malleable formula offers versatility of application.  Apply Highliner for flawless, precise lines, or smudge immediately after lining for an instant smoky eye.', '2019-09-04 02:20:20', '2019-11-03 00:07:32'),
(6, 'CHARLOTTE TILBURY\r\n', 'Airbrush Flawless Finish Setting Powder', 4500, 'https://www.sephora.com/productimages/sku/s2116341-main-zoom.jpg', 'An ultra-fine setting powder that blurs imperfections and visibly reduces shine.', 'This breathable, micro-fine powder technology gives you an immaculate complexion that acts like a luxe, micro-fine cashmere veil on top of your skin for a bright, perfecting finish. ', '2019-09-11 02:20:20', '2019-10-03 05:00:41'),
(7, 'NARS', 'Blush', 3000, 'https://www.sephora.com/productimages/sku/s248930-main-zoom.jpg', 'An award-winning, pressed powder blush that delivers healthy-looking color to flatter any skin tone.', 'Silky, superfine micronized powder pigments in matte and shimmering shades ensure a seamless application. These soft, buildable shades deliver a wide range of effects, from ulta-sheer to powerful pops of color. Each iconic shade features a subtle pink undertone for a natural-looking blush.', '2019-09-11 02:20:20', '2019-09-30 02:23:59'),
(8, 'TARTE', 'babassu foundcealer skincare foundation SPF 20', 3900, 'https://www.sephora.com/productimages/sku/s2197507-main-zoom.jpg', ' Free of parabens, formaldehydes, phthalates, mineral oil, and triclosan. This product is also vegan, cruelty-free, and gluten-free.', 'Formulated with nourishing babassu, essential fatty acids, and antioxidants, this blendable, customizable formula glides over your full face without cracking, caking, or settling. It helps hydrate and give the appearance of fuller, healthy-looking skin, and lets you live your day, your way. This formula is noncomedogenic.', '2019-09-13 02:20:20', '2019-09-30 02:24:16'),
(9, 'NATASHA DENONA', 'Biba All Neutral Eyeshadow Palette', 12900, 'https://www.sephora.com/productimages/sku/s2192821-main-zoom.jpg', 'Biba features 15 brand-new shades of Natasha Denona\'s signature formulas. It includes neutral, warm, and cool tones, from light to dark, in different textures. This eyeshadow palette is very user-friendly, and covers a shade range that varies from mauves, burgundies, and browns to warm greys and black.', '15 x 0.08 oz/ 2.5 g Eyeshadows in Rustic (metallic copper), Prairie (matte camel), Coco (matte dark burgundy), Freckle (matte antique nude), Shine (metallic champagne), Pasha (matte red), Monroe (metallic pink champagne), Rayon (matte medium burgundy), Buff (matte antique pink), Tone (matte clay), Seed (matte dark chocolate), Tor (matte dark grey brown), Sculpture (matte light grey), Spot (matte dark black), Tusk (matte light beige)', '2019-09-13 02:20:20', '2019-09-30 02:24:20'),
(10, 'TOO FACED', 'Peach Puff Long-Wearing Diffused Matte Lip Color', 1900, 'https://www.sephora.com/productimages/sku/s2207892-main-zoom.jpg', 'A lip color that gives lips a long-wearing, diffused, modern-matte look that leaves behind a subtle kiss of feather-resistant color-even after a kiss on the lips. Free of parabens. This product is also gluten-free.', 'Ingredient Callouts: Free of parabens. This product is also gluten-free.\n\nWhat Else You Need to Know: The unique, custom Peach Puff applicator disperses the perfect amount of the most comfortable, weightless formula you\'ve ever experienced. The lightweight, long-wearing formula lasts for up to eight hours, and resists feathering and bleeding. Use the unique twist-up color delivery for light coverage.', '2019-09-13 02:20:20', '2019-09-30 02:24:25'),
(11, 'MORPHE', 'The Jeffree Star Artistry Palette', 6000, 'https://cdn.shopify.com/s/files/1/0737/8455/products/0000_Jeffree_Star_Palette_Open.jpg?v=1565126762', 'An eyeshadow palette including six color combinations to mix, match, and create a customized look, plus a dual-ended eyeshadow brush.\r\n', 'This palette contains 18 highly pigmented eye shadows (nine matte and nine shimmer) grouped by shade into can\'t-miss combos. The palette contains six complimentary color trios for easy mix-and-match looks. The brush has a fluffy eyeshadow brush end and a smudger brush end to create your own unique eye look.', '2019-09-14 02:20:20', '2019-09-30 02:24:42'),
(12, 'MORPHE', 'The Jeffree Star Artist Sponge Trio', 2000, 'https://cdn.shopify.com/s/files/1/0737/8455/products/0004_Jeffree_Star_Sponge_Trio_Box.jpg?v=1565038640', 'The only BS you need in life is Beauty Sponges. Bold and in your face, Jeffree Star is giving you the ultimate beatdown thanks to this fierce trio. Our OG Highlight & Contour Beauty Sponge got a custom star-worthy makeover (with a mini twist). Soak it all in, babe.', '1. Highlight & Contour Beauty Sponge - We all know and love our OG beauty sponge, but it totally needed a pink moment. What Jeffree wants, Jeffree gets. The chiseled edge delivers the ultimate control for contouring, highlighting, and baking. Just add water and give it a good squeeze.\r\n\r\n2. Mini Highlight & Contour Beauty Sponges - This little guy is ready for some action. Jeffree took the OG and shrunk it down to size so you can conceal under your eyes and bake like a boss. Brilliant.', '2019-09-15 02:20:20', '2019-09-30 02:24:46'),
(13, 'HOURGLASS', 'Ambient Lighting Edit Face Palette-Ghost', 8000, 'https://www.sephora.com/productimages/sku/s2260024-main-zoom.jpg', 'A palette featuring 100 percent vegan blush and bronzer in six shades for a glowing complexion.', 'This travel-friendly palette is everything you need to finish, brighten, contour, and highlight your skin in a single compact. Featuring three exclusive shades of Ambient Lighting Bronzer, Ambient Lighting Blush, and Ambient Strobe Lighting Blush, this palette is formulated with photoluminescent technology to capture, diffuse, and soften surrounding light for skin that appears softer, younger, and lit from within.', '2019-09-15 02:20:20', '2019-09-30 02:24:34'),
(14, 'BENEFIT COSMETICS', 'Precisely, My Brow Pencil Ultra Fine Shape & Define', 2400, 'https://www.sephora.com/productimages/sku/s2217479-main-zoom.jpg', 'A bestselling brow pencil to transform shapeless, undefined brows with a few strokes-now available in 12 shades to flatter every hair color.', ' Precisely, My Brow Pencil\'s ultra-fine tip makes adding definition to brows easy. It lets you draw incredibly natural-looking, hair-like strokes that last up to 12-hours. This rich, waterproof eyebrow pencil is ideal for spot-filling sparse or over-tweezed areas, and the smudge-proof formula is firm for precise application.', '2019-09-24 02:20:20', '2019-09-30 02:24:53'),
(15, 'CHARLOTTE TILBURY', 'Matte Revolution Lipstick', 3400, 'https://www.sephora.com/productimages/sku/s2116879-main-zoom.jpg', 'A matte lipstick that features a long-lasting, buildable, and hydrating formula.', 'The lipstick features 3D glow pigments that help lips appear wider and fuller. The matte formula is enriched with Charlotte\'s secret ingredient and orchid extract to protect and soothe lips for a cashmere finish. The unique, square-angled tip mimics the shape of a lip brush for a precise application. This lipstick comes in a range of 12 shades, including the bestselling Pillow Talk, giving every woman the choice of a perfect nude or pop of color.', '2019-09-25 02:20:20', '2019-09-30 02:25:00'),
(16, 'DIOR', 'Rouge Blush', 4400, 'https://www.sephora.com/productimages/sku/s2209138-main-zoom.jpg', 'An ultra-pigmented, long-wearing blush for intense cheek color.', ' High-intensity Rouge Blush touches cheeks with sultry, long-lasting color, revealing an irresistibly radiant, healthy glow. This range of iconic shades was inspired by the legendary Rouge Dior lipstick. The shades are buildable to suit any desired effect, from soft to bold.', '2019-09-27 02:20:20', '2019-09-30 02:25:14'),
(17, 'DRUNK ELEPHANT', 'C-Firma Vitamin C Day Serum', 8000, 'https://www.sephora.com/productimages/sku/s1765239-main-zoom.jpg', 'A super-potent vitamin C day serum packed with a powerful antioxidant complex, essential nutrients, fruit enzymes, and a chronopeptide that mimics the antioxidant benefits of vitamin D, all working together to firm and brighten the appearance of skin, while improving the signs of photoaging.', 'This revolutionary serum is jam-packed with a potent antioxidant complex of 15 percent l-ascorbic acid, one-half percent ferulic acid, and one percent vitamin E, and other formula-supportive enzymes that help neutralize pollution, environmental stressors, and the damaging effects of free radicals over time. This formula helps to replenish lipids and visibly reduce the appearance of dark spots and wrinkles after applying regularly.', '2019-09-30 02:20:20', '2019-09-30 02:22:37'),
(18, 'DRUNK ELEPHANT', 'Virgin Marula Antioxidant Face Oil', 7200, 'https://www.sephora.com/productimages/product/p392245-av-01-zoom.jpg', 'A wonder-working luxury facial oil, high in critical antioxidants, to deeply moisturize, nourish, soothe, and rejuvenate your skin while restoring its youthful glow.', 'This Virgin Marula Oil is totally pure, which is the way it is used by African women. So close your eyes and pretend you\'re sitting under a beautiful Marula tree... skin will never know the difference! With regular use as part of your complete Drunk Elephant skincare routine, your skin will be balanced and optimized to look and feel it\'s healthiest.', '2019-10-03 05:58:24', '2019-10-06 20:49:49'),
(19, 'FRESH', 'Rose Deep Hydration Moisturizer', 4200, 'https://www.sephora.com/productimages/sku/s1788397-main-zoom.jpg', 'An advanced gel-cream that delivers intense 24-hour hydration powered by a combo of hyaluronic acids and time-release hydropatches for petal-soft skin.', 'This lightweight moisturizer acts like a moisture magnet, attracting and increasing it for 24-hour deep hydration. Hydropatches form a moisturizing veil to seal it in all day. The gel-cream also contains rosewater, rose flower oil, angelica leaf extract, and vitamin E to quench and soothe dry skin.', '2019-10-03 06:04:09', '2019-10-03 06:06:20'),
(20, 'SHISEIDO', 'Ultimune Power Infusing Serum Concentrate', 10000, '', 'A fast-absorbing serum for all skin types that hydrates, visibly strengthens and firms, and defends against daily damage while boosting the effects of any moisturizer layered over top.', 'A key step in any J-beauty routine, this featherweight fluid acts as an invisible shield by combining powerful Japanese botanical extracts with breakthrough technology to defend skin against the visible signs of aging, environmental aggressors, and stress. Shiseido\'s number one serum is infused with antioxidant reishi mushroom and moisturizing iris root extract for 28 percent stronger skin in just one week. ', '2019-10-03 06:11:49', '2019-10-03 06:11:49');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `cartItems`
--
ALTER TABLE `cartItems`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `cartProductId` (`cartID`,`productID`);

--
-- Indexes for table `Images`
--
ALTER TABLE `Images`
  ADD PRIMARY KEY (`id_image`);

--
-- Indexes for table `Products`
--
ALTER TABLE `Products`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Products_backup`
--
ALTER TABLE `Products_backup`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=414;
--
-- AUTO_INCREMENT for table `Images`
--
ALTER TABLE `Images`
  MODIFY `id_image` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=69;
--
-- AUTO_INCREMENT for table `Products`
--
ALTER TABLE `Products`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT for table `Products_backup`
--
ALTER TABLE `Products_backup`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
