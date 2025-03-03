/*
  Warnings:

  - A unique constraint covering the columns `[class_id,class_schedule_id,class_plan_id,student_id]` on the table `plans_attendances` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "plans_attendances_class_id_class_schedule_id_student_id_key";

-- CreateIndex
CREATE UNIQUE INDEX "plans_attendances_class_id_class_schedule_id_class_plan_id__key" ON "plans_attendances"("class_id", "class_schedule_id", "class_plan_id", "student_id");
