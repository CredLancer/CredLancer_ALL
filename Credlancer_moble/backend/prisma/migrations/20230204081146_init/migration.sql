-- CreateTable
CREATE TABLE `signature` (
    `nonce` BIGINT NOT NULL,
    `user` VARCHAR(191) NOT NULL,
    `signature` VARCHAR(191) NOT NULL,
    `type` ENUM('OrganizationCreation', 'OrganizationImageCIDChange', 'QuestCreation', 'ProposalCreation', 'WorkSubmission') NOT NULL,

    PRIMARY KEY (`nonce`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Organization` (
    `id` VARCHAR(191) NOT NULL,
    `admin` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `imageCID` VARCHAR(191) NOT NULL,
    `imageURL` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `video` VARCHAR(191) NULL,
    `blockNumber` INTEGER NULL,
    `email` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `OrganizationDetailUpdate` (
    `transactionHash` VARCHAR(191) NOT NULL,
    `blockNumber` INTEGER NOT NULL,
    `transactionIndex` INTEGER NOT NULL,
    `logIndex` INTEGER NOT NULL,
    `type` ENUM('AdminChange', 'NameChange', 'ImageCIDChange') NOT NULL,
    `from` VARCHAR(191) NOT NULL,
    `to` VARCHAR(191) NOT NULL,
    `orgId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`transactionHash`, `blockNumber`, `transactionIndex`, `logIndex`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `QuestFile` (
    `cid` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`cid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProposalFile` (
    `cid` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `approxCompletionTime` DATETIME(3) NOT NULL,

    PRIMARY KEY (`cid`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Quest` (
    `id` VARCHAR(191) NOT NULL,
    `value` VARCHAR(191) NOT NULL,
    `status` ENUM('Open', 'Closed', 'Awarded') NOT NULL DEFAULT 'Open',
    `questCID` VARCHAR(191) NOT NULL,
    `orgId` VARCHAR(191) NOT NULL,
    `deadline` DATETIME(3) NOT NULL,
    `blockNumber` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Proposal` (
    `id` VARCHAR(191) NOT NULL,
    `proposer` VARCHAR(191) NOT NULL,
    `blockNumber` INTEGER NOT NULL,
    `description` VARCHAR(191) NULL,
    `fileCID` VARCHAR(191) NOT NULL,
    `workCID` VARCHAR(191) NULL,
    `status` ENUM('Proposed', 'Accepted', 'Rejected') NOT NULL DEFAULT 'Proposed',
    `questId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ProposalStatusChange` (
    `transactionHash` VARCHAR(191) NOT NULL,
    `blockNumber` INTEGER NOT NULL,
    `transactionIndex` INTEGER NOT NULL,
    `logIndex` INTEGER NOT NULL,
    `oldStatus` ENUM('Proposed', 'Accepted', 'Rejected') NOT NULL,
    `newStatus` ENUM('Proposed', 'Accepted', 'Rejected') NOT NULL,
    `proposalId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`transactionHash`, `blockNumber`, `transactionIndex`, `logIndex`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lancer` (
    `address` VARCHAR(191) NOT NULL,
    `nonce` VARCHAR(191) NOT NULL,
    `imageCID` VARCHAR(191) NULL,
    `email` VARCHAR(191) NULL,
    `name` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `registered` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`address`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Credential` (
    `id` VARCHAR(191) NOT NULL,
    `holderAddress` VARCHAR(191) NOT NULL,
    `transactionHash` VARCHAR(191) NOT NULL,
    `blockNumber` INTEGER NOT NULL,
    `transactionIndex` INTEGER NOT NULL,
    `logIndex` INTEGER NOT NULL,

    UNIQUE INDEX `Credential_transactionHash_blockNumber_transactionIndex_logI_key`(`transactionHash`, `blockNumber`, `transactionIndex`, `logIndex`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `OrganizationDetailUpdate` ADD CONSTRAINT `OrganizationDetailUpdate_orgId_fkey` FOREIGN KEY (`orgId`) REFERENCES `Organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Quest` ADD CONSTRAINT `Quest_orgId_fkey` FOREIGN KEY (`orgId`) REFERENCES `Organization`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Proposal` ADD CONSTRAINT `Proposal_questId_fkey` FOREIGN KEY (`questId`) REFERENCES `Quest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ProposalStatusChange` ADD CONSTRAINT `ProposalStatusChange_proposalId_fkey` FOREIGN KEY (`proposalId`) REFERENCES `Proposal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Credential` ADD CONSTRAINT `Credential_holderAddress_fkey` FOREIGN KEY (`holderAddress`) REFERENCES `Lancer`(`address`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Credential` ADD CONSTRAINT `Credential_id_fkey` FOREIGN KEY (`id`) REFERENCES `Quest`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
