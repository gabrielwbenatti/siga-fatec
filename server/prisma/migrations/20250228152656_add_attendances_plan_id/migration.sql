/*
  Warnings:

  - Added the required column `class_plan_id` to the `plans_attendances` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "plans_attendances" ADD COLUMN     "class_plan_id" INTEGER NOT NULL;

-- AddForeignKey
ALTER TABLE "plans_attendances" ADD CONSTRAINT "plans_attendances_class_plan_id_fkey" FOREIGN KEY ("class_plan_id") REFERENCES "class_plans"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
