import type { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

export async function seedStudents(prisma: PrismaClient, classId: number) {
  const students: {
    id: number;
    first_name: string;
    last_name: string;
    user_id: number;
    phone1: string | null;
    phone2: string | null;
  }[] = [];

  for (let i = 0; i < 20; i++) {
    const user = await prisma.users.create({
      data: {
        email: faker.internet.email(),
        username: faker.internet.username(),
        password: faker.internet.password(),
      },
    });

    const student = await prisma.students.create({
      data: {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        user_id: user.id,
      },
    });

    students.push(student);
  }

  return students;
}
