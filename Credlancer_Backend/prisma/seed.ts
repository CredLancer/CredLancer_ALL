import { PrismaClient, OrgType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  await prisma.proposal.deleteMany();
  await prisma.freelancer.deleteMany();
  await prisma.quest.deleteMany();
  await prisma.org.deleteMany();

  const freelancers = [
    {
      name: 'John Doe',
      address: '0x1234567890123456789012345678901234567890',
      skills: ['JavaScript', 'TypeScript', 'React', 'Node.js'],
      nonce: 'DGVOCDSD-JTMVSRAN-FZSEMJGC-LKXHYPON',
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
      admin: '0x48D185bc646534597E25199dd4d73692ebD98BAc',
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
