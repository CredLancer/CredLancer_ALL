import { PrismaClient, OrgType } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // await prisma.user.deleteMany();
  // await prisma.post.deleteMany();
  await prisma.freelancer.deleteMany();

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
}
main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
