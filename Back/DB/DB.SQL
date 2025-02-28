
--
-- Database: `moviesProject`
--


-- --------------------------------------------------------
--
-- Table structure for table `users`
--

drop table users;
CREATE TABLE `users` (
    `userId` INT NOT NULL unique auto_increment,
    `userName` VARCHAR(255) NOT NULL,
    `userEmail` VARCHAR(255) NOT NULL,
    `userPassword` VARCHAR(255) NOT NULL,
    `isAdmin` BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (userEmail)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


--
-- Indexes for table `board`
--

INSERT INTO `users` (`userEmail`, `userName` , `userPassword`, `isAdmin` ) VALUES
('admin', 'admin' , 'pass', true);


-- --------------------------------------------------------
--
-- Table structure for table `Watchlist`
--

drop table watchlist;
CREATE TABLE `watchlist` (
    `WatchlistId` INT NOT NULL unique auto_increment,
    `userEmail` VARCHAR(255) NOT NULL,
    `movieId` INT NOT NULL,
    PRIMARY KEY (WatchlistId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;


-- --------------------------------------------------------
--
-- Table structure for table `Ratings`
--


drop table ratings;
CREATE TABLE ratings (
    ratingId INT NOT NULL unique auto_increment,
    movieId INT NOT NULL,
    userEmail VARCHAR(255) NOT NULL,
    commentContent VARCHAR(255) DEFAULT NULL,
    like BOOLEAN DEFAULT FALSE,
    PRIMARY KEY (ratingId)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
ALTER TABLE ratings ADD UNIQUE unique_index(userEmail, movieId);