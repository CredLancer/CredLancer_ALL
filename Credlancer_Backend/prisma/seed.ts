import { PrismaClient, OrgType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.freelancer.deleteMany();
  await prisma.org.deleteMany();
  await prisma.quest.deleteMany();
  await prisma.proposal.deleteMany();

  const freelancers = [
    {
      name: 'John Doe',
      address: '0x1234567890123456789012345678901234567890',
      skills: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
    },
  ];

  const result = await prisma.freelancer.create({
    data: freelancers[0],
  });
  console.log({ result });

  const orgs = [
    {
      name: 'Org 1',
      type: OrgType.EMPLOYER,
    },
  ];

  const result2 = await prisma.org.create({
    data: orgs[0],
  });
  console.log({ result2 });

  const quests = [
    {
      title: 'Quest 1',
      description: 'Quest 1 description',
      reward: 100,
      employerId: result2.id,
    },
  ];

  const result3 = await prisma.quest.create({
    data: quests[0],
  });
  console.log({ result3 });

  const proposals = [
    {
      content: 'Proposal 1',
      freelancerId: result.id,
      questId: result3.id,
    },
  ];

  const result4 = await prisma.proposal.create({
    data: proposals[0],
  });
  console.log({ result4 });
}
main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
