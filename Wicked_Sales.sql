-- phpMyAdmin SQL Dump
-- version 4.6.6deb5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Oct 08, 2019 at 01:55 AM
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
(27, '2019-10-07 19:56:30');

-- --------------------------------------------------------

--
-- Table structure for table `cartItems`
--

CREATE TABLE `cartItems` (
  `id` int(11) NOT NULL,
  `productID` mediumint(8) UNSIGNED NOT NULL,
  `count` smallint(5) UNSIGNED NOT NULL,
  `price` mediumint(8) UNSIGNED NOT NULL,
  `added` datetime NOT NULL,
  `updated` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `cartID` mediumint(8) UNSIGNED NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Dumping data for table `cartItems`
--

INSERT INTO `cartItems` (`id`, `productID`, `count`, `price`, `added`, `updated`, `cartID`) VALUES
(2, 2, 1, 5300, '2019-09-16 22:57:36', '2019-09-16 22:57:36', 19),
(3, 2, 1, 5300, '2019-09-16 22:58:15', '2019-09-16 22:58:15', 20),
(4, 2, 1, 5300, '2019-09-16 22:59:19', '2019-09-16 22:59:19', 21),
(5, 2, 1, 5300, '2019-09-16 23:03:45', '2019-09-16 23:03:45', 22),
(6, 3, 1, 3900, '2019-09-16 23:03:51', '2019-09-16 23:03:51', 23),
(7, 2, 1, 5300, '2019-09-16 23:14:03', '2019-09-16 23:14:03', 24),
(8, 1, 1, 6500, '2019-09-16 23:16:18', '2019-09-16 23:16:18', 25),
(9, 4, 1, 3400, '2019-09-16 23:34:08', '2019-09-16 23:34:08', 25),
(10, 2, 1, 5300, '2019-09-24 05:09:34', '2019-09-24 05:09:34', 25),
(11, 5, 1, 2500, '2019-09-24 05:09:44', '2019-09-24 05:09:44', 25),
(13, 3, 1, 3900, '2019-09-25 03:01:01', '2019-09-25 03:01:01', 25),
(14, 3, 1, 3900, '2019-09-28 02:34:20', '2019-09-28 02:34:20', 26),
(15, 14, 1, 2400, '2019-09-30 18:23:11', '2019-09-30 18:23:11', 26),
(16, 15, 1, 3400, '2019-10-02 06:02:35', '2019-10-02 06:02:35', 26),
(19, 1, 1, 6500, '2019-10-03 03:53:50', '2019-10-03 03:53:50', 26),
(21, 4, 1, 3400, '2019-10-05 17:37:15', '2019-10-05 17:37:15', 26),
(24, 11, 1, 6000, '2019-10-07 01:11:21', '2019-10-07 01:11:21', 26),
(25, 2, 1, 5300, '2019-10-07 19:56:30', '2019-10-07 19:56:30', 27),
(26, 3, 1, 3900, '2019-10-07 19:56:34', '2019-10-07 19:56:34', 27);

-- --------------------------------------------------------

--
-- Table structure for table `Images`
--

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
(4, 'https://www.sephora.com/productimages/product/p433523-av-01-zoom.jpg', 2, '2019-09-30 02:21:59'),
(5, 'https://www.sephora.com/productimages/sku/s2218790-av-07-zoom.jpg', 2, '2019-09-30 02:21:59'),
(6, 'https://www.sephora.com/productimages/sku/s2137289-av-08-zoom.jpg', 1, '2019-09-30 02:21:59'),
(7, 'https://www.sephora.com/productimages/sku/s2137289-av-04-zoom.jpg', 1, '2019-09-30 02:21:59'),
(8, 'https://www.sephora.com/productimages/sku/s2129922-main-zoom.jpg', 3, '2019-09-30 02:21:59'),
(9, 'https://www.sephora.com/productimages/sku/s2129922-av-02-zoom.jpg', 3, '2019-09-30 02:21:59'),
(10, 'https://www.sephora.com/productimages/sku/s1846914-main-zoom.jpg', 4, '2019-09-30 02:21:59'),
(11, 'https://www.sephora.com/productimages/sku/s1846914-av-02-zoom.jpg', 4, '2019-09-30 02:21:59'),
(12, 'https://www.sephora.com/productimages/sku/s1501311-main-zoom.jpg', 5, '2019-09-30 02:21:59'),
(13, 'https://www.sephora.com/productimages/sku/s1572015-main-zoom.jpg', 5, '2019-09-30 02:21:59'),
(14, 'https://www.sephora.com/productimages/product/p433526-av-01-zoom.jpg', 6, '2019-09-30 02:21:59'),
(15, 'https://www.sephora.com/productimages/product/p433526-av-02-zoom.jpg', 6, '2019-09-30 02:21:59'),
(16, 'https://www.sephora.com/productimages/sku/s2137289-main-zoom.jpg', 1, '2019-09-30 02:21:59'),
(17, 'https://www.sephora.com/productimages/sku/s2218790-main-zoom.jpg', 2, '2019-09-30 02:21:59'),
(18, 'https://www.sephora.com/productimages/sku/s2129922-av-01-zoom.jpg', 3, '2019-09-30 02:21:59'),
(19, 'https://www.sephora.com/productimages/product/p387906-av-01-zoom.jpg', 4, '2019-09-30 02:21:59'),
(20, 'https://www.sephora.com/productimages/sku/s1501311-av-01-zoom.jpg', 5, '2019-09-30 02:21:59'),
(21, 'https://www.sephora.com/productimages/sku/s2116341-main-zoom.jpg', 6, '2019-09-30 02:21:59'),
(22, 'https://www.sephora.com/productimages/sku/s248930-main-zoom.jpg', 7, '2019-09-30 02:21:59'),
(23, 'https://www.sephora.com/productimages/sku/s248930-av-02-zoom.jpg', 7, '2019-09-30 02:21:59'),
(24, 'https://www.sephora.com/productimages/sku/s248930-av-01-zoom.jpg', 7, '2019-09-30 02:21:59'),
(25, 'https://www.sephora.com/productimages/sku/s2197507-main-zoom.jpg', 8, '2019-09-30 02:21:59'),
(26, 'https://www.sephora.com/productimages/product/p442792-av-01-zoom.jpg', 8, '2019-09-30 02:21:59'),
(27, 'https://www.sephora.com/productimages/sku/s2197507-av-02-zoom.jpg', 8, '2019-09-30 02:21:59'),
(28, 'https://www.sephora.com/productimages/sku/s2192821-main-zoom.jpg', 9, '2019-09-30 02:21:59'),
(29, 'https://www.sephora.com/productimages/sku/s2192821-av-03-zoom.jpg', 9, '2019-09-30 02:21:59'),
(30, 'https://www.sephora.com/productimages/sku/s2192821-av-07-zoom.jpg', 9, '2019-09-30 02:21:59'),
(31, 'https://www.sephora.com/productimages/sku/s2207892-main-zoom.jpg', 10, '2019-09-30 02:21:59'),
(32, 'https://www.sephora.com/productimages/product/p442803-av-02-zoom.jpg', 10, '2019-09-30 02:21:59'),
(33, 'https://www.sephora.com/productimages/sku/s2207892-av-07-zoom.jpg', 10, '2019-09-30 02:21:59'),
(34, 'https://cdn.shopify.com/s/files/1/0737/8455/products/0000_Jeffree_Star_Palette_Open.jpg?v=1565126762', 11, '2019-09-30 02:21:59'),
(35, 'https://cdn.shopify.com/s/files/1/0737/8455/products/0001_Jeffree_Star_Eye_Shadow_Group_Smear_Alt1.jpg?v=1565126762', 11, '2019-09-30 02:21:59'),
(36, 'https://cdn.shopify.com/s/files/1/0737/8455/products/Morphe_X_Jeffree_Star_Arm_Swatches_PDP_ROW_1.jpg?v=1565127690', 11, '2019-09-30 02:21:59'),
(37, 'https://cdn.shopify.com/s/files/1/0737/8455/products/0004_Jeffree_Star_Sponge_Trio_Box.jpg?v=1565038640', 12, '2019-09-30 02:21:59'),
(38, 'https://cdn.shopify.com/s/files/1/0737/8455/products/0005_Jeffree_Star_Sponge_Collection_Stylized_No_Effect.jpg?v=1565038640', 12, '2019-09-30 02:21:59'),
(39, 'https://cdn.shopify.com/s/files/1/0737/8455/products/0003_Jeffree_Star_Big_Sponge_Side2.jpg?v=1565038640', 12, '2019-09-30 02:21:59'),
(40, 'https://www.sephora.com/productimages/sku/s2260024-main-zoom.jpg', 13, '2019-09-30 02:21:59'),
(41, 'https://www.sephora.com/productimages/product/p449759-av-04-zoom.jpg', 13, '2019-09-30 02:21:59'),
(42, 'https://www.sephora.com/productimages/product/p449759-av-02-zoom.jpg', 13, '2019-09-30 02:21:59'),
(43, 'https://www.sephora.com/productimages/sku/s2217479-main-zoom.jpg', 14, '2019-09-30 02:21:59'),
(44, 'https://www.sephora.com/productimages/sku/s2217479-av-25-zoom.jpg', 14, '2019-09-30 02:21:59'),
(45, 'https://www.sephora.com/productimages/sku/s2217479-av-20-zoom.jpg', 14, '2019-09-30 02:21:59'),
(46, 'https://www.sephora.com/productimages/sku/s2116853-main-zoom.jpg', 15, '2019-09-30 02:21:59'),
(47, 'https://www.sephora.com/productimages/sku/s2116853-av-01-zoom.jpg', 15, '2019-09-30 02:21:59'),
(48, 'https://www.sephora.com/productimages/sku/s2116853-av-02-zoom.jpg', 15, '2019-09-30 02:21:59'),
(49, 'https://www.sephora.com/productimages/sku/s2209138-main-zoom.jpg', 16, '2019-09-30 02:21:59'),
(50, 'https://www.sephora.com/productimages/product/p442793-av-01-zoom.jpg', 16, '2019-09-30 02:21:59'),
(57, 'https://www.sephora.com/productimages/sku/s1765239-main-zoom.jpg', 17, '2019-09-30 02:21:59'),
(58, 'https://www.sephora.com/productimages/product/p400259-av-03-zoom.jpg', 17, '2019-09-30 02:21:59'),
(59, 'https://www.sephora.com/productimages/product/p400259-av-04-zoom.jpg', 17, '2019-09-30 02:21:59'),
(60, 'https://www.sephora.com/productimages/product/p392245-av-01-zoom.jpg', 18, '2019-10-03 06:00:14'),
(61, 'https://www.sephora.com/productimages/product/p392245-av-03-zoom.jpg', 18, '2019-10-03 06:00:14'),
(62, 'https://www.sephora.com/productimages/product/p392245-av-04-zoom.jpg', 18, '2019-10-03 06:00:41'),
(63, 'https://www.sephora.com/productimages/sku/s1788397-main-zoom.jpg', 19, '2019-10-03 06:05:06'),
(64, 'https://www.sephora.com/productimages/product/p406686-av-03-zoom.jpg', 19, '2019-10-03 06:05:06'),
(65, 'https://www.sephora.com/productimages/product/p406686-av-01-zoom.jpg', 19, '2019-10-03 06:05:39'),
(66, 'https://www.sephora.com/productimages/sku/s2096758-main-zoom.jpg', 20, '2019-10-03 06:12:45'),
(67, 'https://www.sephora.com/productimages/product/p432834-av-02-zoom.jpg', 20, '2019-10-03 06:12:45'),
(68, 'https://www.sephora.com/productimages/product/p432834-av-05-zoom.jpg', 20, '2019-10-03 06:13:13');

-- --------------------------------------------------------

--
-- Table structure for table `Products`
--

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
(1, 'HUDA', 'The New Nude Eyeshadow Palette', 6500, 'https://www.sephora.com/productimages/sku/s2137289-main-zoom.jpg', 'A game-changing palette that reinvents nude with revolutionary textures and colors.', 'Reinventing nude so you can experience it like never before, The New Nude Palette by HUDA BEAUTY is versatile and wearable in equal measure. Delivering infinite possibilities, this unexpected palette encourages you to experiment, empower, and express yourself however you please.', '2019-09-02 02:20:20', '2019-10-03 04:59:53'),
(2, 'CHARLOTTE TILBURY\r\n', 'Luxury Eyeshadow Palette', 5300, 'https://www.sephora.com/productimages/sku/s2218790-main-zoom.jpg', 'A four-step eyeshadow quad (Prime, Enhance, Smoke, Pop) with a super blend-able, buttery, and non-creasing formula for buildable looks from day to night.', 'Each palette contains four harmonious eye colors: Prime, Enhance, Smoke, and Pop. Create a smooth base for your eye look using the Prime shade, build up definition with Enhance, add drama with the Smoke shade, and finish your dazzling with the Pop shade (topper shade to be applied with finger). ', '2019-09-03 02:20:20', '2019-10-03 05:00:13'),
(3, 'YVES SAINT LAURENT\r\n', 'Rouge Pur Couture The Slim Matte Lipstick', 3900, 'https://www.sephora.com/productimages/sku/s2129922-main-zoom.jpg', 'A super-slim, square lipstick that provides luxurious, full, long wear, and matte color in couture-inspired shades developed for every skin tone by creative director Tom Pecheux.', 'The ultimate matte lipstick, Rouge Pur Couture The Slim saturates lips with ultra-rich, highly-pigmented, matte color that feels weightless and incredibly comfortable on the lips. The non-drying, creamy formula glides on effortlessly and stays put all day so you never have to worry about bleeding, cracking, or reapplying. ', '2019-09-03 02:20:20', '2019-10-03 04:59:43'),
(4, 'NARS', 'Audacious Lipstick', 3400, 'https://www.sephora.com/productimages/sku/s1846914-main-zoom.jpg', 'A modern lipstick that dresses up lips with bold coverage, long-lasting wear, and a luxurious texture that smooths and nourishes. ', 'ebut weightless, color-saturated lips when you smooth on NARS Audacious Lipstick. It glides on like satin across the skin and achieves single-stroke coverage that leaves lips with captivating color, dramatic depth, and unstoppable character. A cult-favorite, it is shamelessly seductive in touch and texture. ', '2019-09-04 02:20:20', '2019-10-03 05:00:22'),
(5, 'MARC JACOBS', 'Highliner Gel Eye Crayon Eyeliner', 2500, 'https://www.sephora.com/productimages/sku/s1501311-main-zoom.jpg', 'What it is: A gel pot eyeliner in a crayon that delivers intense color and 12-hour waterproof wear and amazing glide in shimmer and matte finishes. ', 'What it does: Experience the luxury of gel eyeliner with the ease of a pencil. Make a bold statement with this extreme-wear, waterproof eyeliner that glides on effortlessly to deliver instant color payoff. Exclusive to Marc Jacobs Beauty, the super-malleable formula offers versatility of application. Apply Highliner for flawless, precise lines, or smudge immediately after lining for an instant smoky eye. ', '2019-09-04 02:20:20', '2019-10-03 05:00:57'),
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
  ADD UNIQUE KEY `cartproductid` (`productID`,`cartID`);

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
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `id` mediumint(8) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
--
-- AUTO_INCREMENT for table `cartItems`
--
ALTER TABLE `cartItems`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
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
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
