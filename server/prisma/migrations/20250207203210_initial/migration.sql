/*
  Warnings:

  - You are about to drop the `class_exam_results` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `class_exams` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `class_planning` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "class_exam_results" DROP CONSTRAINT "class_exam_results_class_exam_id_fkey";

-- DropForeignKey
ALTER TABLE "class_exam_results" DROP CONSTRAINT "class_exam_results_student_id_fkey";

-- DropForeignKey
ALTER TABLE "class_exams" DROP CONSTRAINT "class_exams_class_id_fkey";

-- DropForeignKey
ALTER TABLE "class_planning" DROP CONSTRAINT "class_planning_class_id_fkey";

-- DropTable
DROP TABLE "class_exam_results";

-- DropTable
DROP TABLE "class_exams";

-- DropTable
DROP TABLE "class_planning";

-- CreateTable
CREATE TABLE "class_schedules" (
    "id" SERIAL NOT NULL,
    "class_id" INTEGER NOT NULL,
    "day_of_week" INTEGER NOT NULL,
    "start_time" TIME NOT NULL,
    "end_time" TIME NOT NULL,

    CONSTRAINT "class_schedules_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_plans" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "planned_date" DATE NOT NULL,
    "applied_date" DATE,
    "class_id" INTEGER NOT NULL,

    CONSTRAINT "class_plans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "planning_attendances" (
    "id" SERIAL NOT NULL,
    "class_id" INTEGER NOT NULL,
    "class_schedule_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "is_present" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "planning_attendances_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exams" (
    "id" SERIAL NOT NULL,
    "class_id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "planned_date" DATE NOT NULL,
    "applied_date" DATE,

    CONSTRAINT "exams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "exam_submissions" (
    "id" SERIAL NOT NULL,
    "class_exam_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "score" DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    CONSTRAINT "exam_submissions_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "planning_attendances_class_id_class_schedule_id_student_id_key" ON "planning_attendances"("class_id", "class_schedule_id", "student_id");

-- AddForeignKey
ALTER TABLE "class_schedules" ADD CONSTRAINT "class_schedules_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_plans" ADD CONSTRAINT "class_plans_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_attendances" ADD CONSTRAINT "planning_attendances_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_attendances" ADD CONSTRAINT "planning_attendances_class_schedule_id_fkey" FOREIGN KEY ("class_schedule_id") REFERENCES "class_schedules"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "planning_attendances" ADD CONSTRAINT "planning_attendances_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exams" ADD CONSTRAINT "exams_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exam_submissions" ADD CONSTRAINT "exam_submissions_class_exam_id_fkey" FOREIGN KEY ("class_exam_id") REFERENCES "exams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "exam_submissions" ADD CONSTRAINT "exam_submissions_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
