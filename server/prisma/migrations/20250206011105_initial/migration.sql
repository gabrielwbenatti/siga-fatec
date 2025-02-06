-- CreateTable
CREATE TABLE "users" (
    "id" SERIAL NOT NULL,
    "username" VARCHAR(63) NOT NULL,
    "email" VARCHAR(127) NOT NULL,
    "password" VARCHAR(255) NOT NULL,

    CONSTRAINT "users_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "teachers" (
    "id" SERIAL NOT NULL,
    "user_id" INTEGER NOT NULL,
    "teach_since" DATE,
    "document" VARCHAR(63),
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,

    CONSTRAINT "teachers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "students" (
    "id" SERIAL NOT NULL,
    "first_name" VARCHAR(255) NOT NULL,
    "last_name" VARCHAR(255) NOT NULL,
    "user_id" INTEGER NOT NULL,

    CONSTRAINT "students_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "courses" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(127) NOT NULL,
    "abbreviation" VARCHAR(15) NOT NULL,

    CONSTRAINT "courses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "disciplines" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(127) NOT NULL,
    "abbreviation" VARCHAR(15) NOT NULL,
    "course_id" INTEGER NOT NULL,

    CONSTRAINT "disciplines_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "classes" (
    "id" SERIAL NOT NULL,
    "teacher_id" INTEGER NOT NULL,
    "discipline_id" INTEGER NOT NULL,
    "semester" SMALLINT NOT NULL,
    "year" SMALLINT NOT NULL,
    "finished" BOOLEAN DEFAULT false,

    CONSTRAINT "classes_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_materials" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "file_format" VARCHAR(7),
    "file_url" VARCHAR(255),
    "list_index" SMALLINT NOT NULL,
    "class_id" INTEGER NOT NULL,

    CONSTRAINT "class_materials_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_planning" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT NOT NULL,
    "planned_date" DATE NOT NULL,
    "applied_date" DATE,
    "class_id" INTEGER NOT NULL,

    CONSTRAINT "class_planning_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_exams" (
    "id" SERIAL NOT NULL,
    "class_id" INTEGER NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "description" TEXT,
    "planned_date" DATE NOT NULL,
    "applied_date" DATE,

    CONSTRAINT "class_exams_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_exam_results" (
    "id" SERIAL NOT NULL,
    "class_exam_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,
    "score" DECIMAL(10,2) NOT NULL DEFAULT 0.00,

    CONSTRAINT "class_exam_results_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "class_students" (
    "id" SERIAL NOT NULL,
    "class_id" INTEGER NOT NULL,
    "student_id" INTEGER NOT NULL,

    CONSTRAINT "class_students_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "teachers" ADD CONSTRAINT "teachers_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "students" ADD CONSTRAINT "students_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "disciplines" ADD CONSTRAINT "disciplines_course_id_fkey" FOREIGN KEY ("course_id") REFERENCES "courses"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_teacher_id_fkey" FOREIGN KEY ("teacher_id") REFERENCES "teachers"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "classes" ADD CONSTRAINT "classes_discipline_id_fkey" FOREIGN KEY ("discipline_id") REFERENCES "disciplines"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_materials" ADD CONSTRAINT "class_materials_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_planning" ADD CONSTRAINT "class_planning_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_exams" ADD CONSTRAINT "class_exams_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_exam_results" ADD CONSTRAINT "class_exam_results_class_exam_id_fkey" FOREIGN KEY ("class_exam_id") REFERENCES "class_exams"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_exam_results" ADD CONSTRAINT "class_exam_results_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_students" ADD CONSTRAINT "class_students_class_id_fkey" FOREIGN KEY ("class_id") REFERENCES "classes"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "class_students" ADD CONSTRAINT "class_students_student_id_fkey" FOREIGN KEY ("student_id") REFERENCES "students"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
