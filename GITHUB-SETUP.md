# Bright Spiral Literacy GitHub Setup

This package contains the complete Bright Spiral Literacy website source from
the live Stan Store version.

## What is included

- All website pages and styles
- Images and public assets
- Reading Instruction Blueprint and Reading Turnaround pages
- Parent next-step quiz
- Contact and Private Advisory forms
- Privacy, terms, cookies, sitemap, and social metadata
- Stan Store links
- Database schema and migrations for form inquiries

## What is not included

- Private account credentials
- MailerLite API credentials
- Customer or inquiry records
- Installed dependencies
- Build output
- Git history

## Add this code to GitHub

### Safest method for an existing repository

1. Download and unzip this package.
2. Open your current Bright Spiral Literacy GitHub repository.
3. Create a backup branch from the current production branch.
4. Remove the old website files from the production branch.
5. Upload the contents of the unzipped folder to the repository root.
6. Commit the replacement.

Do not place the `bsl-github-source` folder inside the old project. Upload the
files inside it so `package.json`, `app`, and `public` sit at the repository
root.

### Local Git method

From a local clone of the existing repository:

```bash
git switch -c backup-old-bsl-site
git push origin backup-old-bsl-site
git switch main
```

Copy the contents of this package into the local repository, review the
changes, then:

```bash
npm ci
npm run lint
npm run build
git add .
git commit -m "Replace old BSL site with new website"
git push origin main
```

## Hosting requirement

GitHub should store the source. GitHub Pages is not enough for the full site
because the inquiry forms use a server route and database storage.

Use a host supporting this Cloudflare Vinext application and its D1 database
binding. The binding name is `DB`, declared in `.openai/hosting.json`.

If the existing domain currently points to GitHub Pages, update the domain only
after the new host has deployed successfully.

## Environment values

The inquiry form works without MailerLite. To activate optional subscriber
syncing, add these values in the hosting provider's secure environment settings:

```text
MAILERLITE_API_TOKEN
MAILERLITE_GROUP_ID
```

Never commit real credentials to GitHub.

## Stan Store

All former Paperbell links now lead to:

```text
https://stan.store/brightspiralliteracy
```

Once each Stan offer has its own published product URL, replace the general
store URL with the matching direct product URL on each offer page.

## Domain launch order

1. Push the source to GitHub.
2. Connect the GitHub repository to the host.
3. Configure the D1 database and apply the included migrations.
4. Add secure environment values.
5. Test every form and Stan Store link.
6. Point `www.brightspiralliteracy.com` to the new deployment.
7. Keep the old deployment available until the domain change has been verified.
