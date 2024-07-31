-- CreateTable
CREATE TABLE `post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` VARCHAR(191) NULL,
    `published` BOOLEAN NOT NULL DEFAULT false,
    `authorId` INTEGER NOT NULL,

    INDEX `Post_authorId_fkey`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `profile` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `bio` VARCHAR(191) NULL,
    `userId` INTEGER NOT NULL,

    UNIQUE INDEX `Profile_userId_key`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NULL,
    `password` VARCHAR(191) NULL,
    `contact` VARCHAR(191) NULL,

    UNIQUE INDEX `user_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoice_detail` (
    `id` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `logourl` VARCHAR(500) NULL,
    `po` VARCHAR(45) NULL,
    `orderdate` VARCHAR(45) NULL,
    `paymentterm` VARCHAR(200) NULL,
    `invoicenum` VARCHAR(45) NULL,
    `deleverydate` VARCHAR(45) NULL,
    `generated_on` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `bcompanyname` VARCHAR(200) NULL,
    `baddress` VARCHAR(400) NULL,
    `bcity` VARCHAR(45) NULL,
    `bstate` VARCHAR(45) NULL,
    `bcountry` VARCHAR(45) NULL,
    `bpin` VARCHAR(45) NULL,
    `bcontact` VARCHAR(45) NULL,
    `scompanyname` VARCHAR(200) NULL,
    `saddress` VARCHAR(300) NULL,
    `scity` VARCHAR(45) NULL,
    `sstate` VARCHAR(45) NULL,
    `scountry` VARCHAR(45) NULL,
    `spin` VARCHAR(45) NULL,
    `scontact` VARCHAR(45) NULL,
    `catagory` VARCHAR(200) NULL,
    `notes` VARCHAR(500) NULL,
    `timestamp` VARCHAR(45) NULL,
    `termscondition` VARCHAR(500) NULL,
    `tax` VARCHAR(45) NULL,
    `discount` VARCHAR(45) NULL,
    `amountpaid` VARCHAR(45) NULL,
    `invoicecat` VARCHAR(45) NULL,
    `userId` INTEGER NULL,

    UNIQUE INDEX `invoice_detail_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `invoice_item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `timestamp` VARCHAR(45) NULL,
    `itemname` VARCHAR(200) NULL,
    `rate` VARCHAR(45) NULL,
    `amount` VARCHAR(45) NULL,
    `subtotal` VARCHAR(45) NULL,
    `tax` VARCHAR(45) NULL,
    `total` VARCHAR(45) NULL,
    `notes` VARCHAR(500) NULL,
    `terms_condition` VARCHAR(500) NULL,
    `quantity` VARCHAR(45) NULL,
    `invoice_detailId` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `offer_letter` (
    `id` VARCHAR(50) NOT NULL,
    `email` VARCHAR(150) NOT NULL,
    `campanyname` VARCHAR(200) NULL,
    `contact_info` VARCHAR(20) NULL,
    `date` VARCHAR(200) NULL,
    `department` VARCHAR(400) NULL,
    `desination` VARCHAR(450) NULL,
    `emp_name` VARCHAR(500) NULL,
    `invoicecat` VARCHAR(450) NULL,
    `senderemail` VARCHAR(500) NULL,
    `sendername` VARCHAR(500) NULL,
    `sendsignation` VARCHAR(500) NULL,
    `subject` VARCHAR(500) NULL,
    `expirydate` VARCHAR(45) NULL,
    `generated_on` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `userId` INTEGER NULL,

    UNIQUE INDEX `offer_letter_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `po_detail` (
    `id` VARCHAR(50) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `bcompanyname` VARCHAR(200) NULL,
    `baddress` VARCHAR(200) NULL,
    `bcity` VARCHAR(45) NULL,
    `bstate` VARCHAR(45) NULL,
    `bcountry` VARCHAR(45) NULL,
    `bpin` VARCHAR(191) NULL,
    `bcontact` VARCHAR(191) NULL,
    `scompanyname` VARCHAR(200) NULL,
    `saddress` VARCHAR(200) NULL,
    `sstate` VARCHAR(45) NULL,
    `scity` VARCHAR(45) NULL,
    `invoicenumber` VARCHAR(45) NULL,
    `releasedate` VARCHAR(50) NULL,
    `orderdate` VARCHAR(50) NULL,
    `generated_on` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `notes` VARCHAR(500) NULL,
    `paymentterm` VARCHAR(200) NULL,
    `duedate` VARCHAR(50) NULL,
    `ponumber` VARCHAR(45) NULL,
    `timestamp` VARCHAR(64) NULL,
    `tax` VARCHAR(64) NULL,
    `invoicecat` VARCHAR(200) NULL,
    `termscondition` VARCHAR(2000) NULL,
    `userId` INTEGER NULL,

    UNIQUE INDEX `po_detail_id_key`(`id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `po_item` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemname` VARCHAR(300) NULL,
    `quantity` VARCHAR(50) NULL,
    `rate` VARCHAR(50) NULL,
    `amounts` VARCHAR(50) NULL,
    `subtotal` VARCHAR(50) NULL,
    `tax` VARCHAR(50) NULL,
    `discount` VARCHAR(50) NULL,
    `total` VARCHAR(50) NULL,
    `amountpaid` VARCHAR(50) NULL,
    `balancedue` VARCHAR(50) NULL,
    `timestamp` VARCHAR(45) NULL,
    `po_detailId` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `salary_detail` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `itemname` VARCHAR(500) NULL,
    `quantity` VARCHAR(500) NULL,
    `timestamp` VARCHAR(45) NULL,
    `offer_letterId` VARCHAR(50) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `post` ADD CONSTRAINT `Post_authorId_fkey` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `profile` ADD CONSTRAINT `Profile_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoice_detail` ADD CONSTRAINT `invoice_detail_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `invoice_item` ADD CONSTRAINT `invoice_item_invoice_detailId_fkey` FOREIGN KEY (`invoice_detailId`) REFERENCES `invoice_detail`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `offer_letter` ADD CONSTRAINT `offer_letter_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po_detail` ADD CONSTRAINT `po_detail_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `po_item` ADD CONSTRAINT `po_item_po_detailId_fkey` FOREIGN KEY (`po_detailId`) REFERENCES `po_detail`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `salary_detail` ADD CONSTRAINT `salary_detail_offer_letterId_fkey` FOREIGN KEY (`offer_letterId`) REFERENCES `offer_letter`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
