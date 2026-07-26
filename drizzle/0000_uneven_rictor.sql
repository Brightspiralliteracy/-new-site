CREATE TABLE `inquiries` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`kind` text NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`inquiry_type` text DEFAULT '' NOT NULL,
	`child_age` text DEFAULT '' NOT NULL,
	`message` text DEFAULT '' NOT NULL,
	`details` text DEFAULT '{}' NOT NULL,
	`marketing_consent` integer DEFAULT false NOT NULL,
	`mailerlite_status` text DEFAULT 'not_requested' NOT NULL,
	`created_at` text DEFAULT CURRENT_TIMESTAMP NOT NULL
);
