/*
  Warnings:

  - Added the required column `class_id` to the `class_materials` table without a default value. This is not possible if the table is not empty.
  - Added the required column `class_id` to the `class_planning` table without a default value. This is not possible if the table is not empty.
  - Added the required column `discipline_id` to the `classes` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "class_materials" ADD COLUMN     "class_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "class_planning" ADD COLUMN     "class_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "classes" ADD COLUMN     "discipline_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "class_exams" (
    "id" SERIAL NOT NULL,
    "class_id" INTEGER NOT NULL,

    CONSTRAINT "class_exams_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_discipline_id_fkey" FOREIGN KEY ("discipline_id") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_materials" ADD CONSTRAINT "class_materials_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_planning" ADD CONSTRAINT "class_planning_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_exams" ADD CONSTRAINT "class_exams_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;
