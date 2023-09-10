-- AlterTable
ALTER TABLE `Lancer` MODIFY `description` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `Organization` MODIFY `description` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `Proposal` MODIFY `description` LONGTEXT NULL;

-- AlterTable
ALTER TABLE `ProposalFile` MODIFY `description` LONGTEXT NOT NULL;

-- AlterTable
ALTER TABLE `QuestFile` MODIFY `description` LONGTEXT NOT NULL;
