CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"project_name" text NOT NULL,
	"ecosystem" text NOT NULL,
	"description" text NOT NULL,
	"contact_info" text,
	"created_at" timestamp DEFAULT now()
);
