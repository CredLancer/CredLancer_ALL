-- AlterTable
ALTER TABLE `Proposal` MODIFY `status` ENUM('Proposed', 'Accepted', 'Rejected', 'Awarded') NOT NULL DEFAULT 'Proposed';

-- AlterTable
ALTER TABLE `ProposalStatusChange` MODIFY `oldStatus` ENUM('Proposed', 'Accepted', 'Rejected', 'Awarded') NOT NULL,
    MODIFY `newStatus` ENUM('Proposed', 'Accepted', 'Rejected', 'Awarded') NOT NULL;
