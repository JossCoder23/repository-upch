-- CreateTable
CREATE TABLE "repository" (
    "id" SERIAL NOT NULL,
    "names" VARCHAR NOT NULL,
    "surnames" VARCHAR NOT NULL,
    "type_document" VARCHAR NOT NULL,
    "document_number" VARCHAR NOT NULL,
    "telephone_number" VARCHAR NOT NULL,
    "email" VARCHAR NOT NULL,
    "graduation_year" VARCHAR NOT NULL,
    "city" VARCHAR NOT NULL,
    "program_course" VARCHAR NOT NULL,
    "completedAt" VARCHAR NOT NULL,
    "url_reference" VARCHAR NOT NULL,
    "utm_campaign" VARCHAR NOT NULL,
    "utm_content" VARCHAR NOT NULL,
    "utm_source" VARCHAR NOT NULL,
    "utm_term" VARCHAR NOT NULL,
    "utm_id" VARCHAR NOT NULL,

    CONSTRAINT "repository_pkey" PRIMARY KEY ("id")
);
