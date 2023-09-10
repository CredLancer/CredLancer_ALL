-- CreateTable
CREATE TABLE `WorkSubmission` (
    `transactionHash` VARCHAR(191) NOT NULL,
    `blockNumber` INTEGER NOT NULL,
    `transactionIndex` INTEGER NOT NULL,
    `logIndex` INTEGER NOT NULL,
    `cid` VARCHAR(191) NOT NULL,
    `proposalId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`transactionHash`, `blockNumber`, `transactionIndex`, `logIndex`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `WorkSubmission` ADD CONSTRAINT `WorkSubmission_proposalId_fkey` FOREIGN KEY (`proposalId`) REFERENCES `Proposal`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
