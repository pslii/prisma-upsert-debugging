import { Prisma, PrismaClient } from "./__generated__/client";

async function main() {
  const prisma = new PrismaClient();

  console.log("Upserting person");
  const employeeCreate: Prisma.EmployeeCreateInput & Prisma.EmployeeUpdateInput = {
    emailAddress: "test_employee@test.com",
  }

  await prisma.employee.upsert({
    where: {
      emailAddress: "test_employee@test.com"
    },
    create: employeeCreate,
    update: employeeCreate
  });

  await prisma.employee.upsert({
    where: {
      emailAddress: "test_employee@test.com"
    },
    create: employeeCreate,
    update: employeeCreate
  });

}

main()
  .then((e) => {
    console.log("Upsert successful");
  })
  .catch((e) => {
    const message = (e as Error).message;
    console.error(`Encountered error ${message}`);
  });
