-- CreateTable
CREATE TABLE `Skill` (
    `title` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`title`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_QuestFileToSkill` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_QuestFileToSkill_AB_unique`(`A`, `B`),
    INDEX `_QuestFileToSkill_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_QuestFileToSkill` ADD CONSTRAINT `_QuestFileToSkill_A_fkey` FOREIGN KEY (`A`) REFERENCES `QuestFile`(`cid`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_QuestFileToSkill` ADD CONSTRAINT `_QuestFileToSkill_B_fkey` FOREIGN KEY (`B`) REFERENCES `Skill`(`title`) ON DELETE CASCADE ON UPDATE CASCADE;
