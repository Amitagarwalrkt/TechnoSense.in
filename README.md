**TechnoSense NextGen Solutions**

**Discover | Innovate | Automate**

TechnoSense NextGen Solutions Pvt. Limited is an IT services and technology solutions company focused on helping organizations modernize infrastructure, adopt cloud technologies, improve security, and accelerate digital transformation.

Website: https://technosense.in/

Overview

The TechnoSense website presents the company's IT infrastructure, cloud, development, database, Microsoft 365, security, and resource-placement services.

The company highlights experience in delivering large-scale projects and provides services spanning the full technology lifecycle—from assessment and roadmap planning through implementation, maintenance, and ongoing support.

Core Services

Infrastructure Management

IT & Infrastructure Roadmap Consulting

Setup & Platform Migrations

Network Security & Compliance

Infrastructure monitoring and support

Cloud Consulting

Cloud Adoption Strategy

Cloud Implementation & Migration

DevOps Consulting

Cloud deployment and transformation

Development Services

Oracle APEX

Web Application Development

Mobile Application Development

MAF & MCS Cloud

Database Management

Oracle Database Installation

Database Version Upgrades

Server Setup & Migration

Managed Database Services

Monitoring, performance optimization, backup and security management

Microsoft 365

Microsoft 365 Licensing & Setup

Security Solutions

Mobile Device Management

Identity and access protection

Email security and threat protection

Data Loss Prevention (DLP)

Security & Compliance

Firewall & Network Protection

Vulnerability Assessment

Endpoint & Device Security

Data Security & Encryption

Compliance Management

Security monitoring

Resource Placement

Onsite IT Resources

Offshore IT Resources

Cloud and DevOps professionals

Database and infrastructure specialists

Flexible engagement models

Solutions & Capabilities

TechnoSense focuses on:

Cloud transformation

Enterprise infrastructure modernization

DevOps

Network and cybersecurity

Oracle technologies

Database management

Microsoft 365

Application development

Enterprise mobility

Managed IT services

IT resource placement

Service Delivery Lifecycle

The website describes a four-stage service approach:

1. Pre-Implementation

Client readiness assessment

Gap analysis and fitment

Cloud and infrastructure assessments

Licensing rightsizing

2. Implementation

Roadmap design

Functional solution design

Environment setup

Data conversion and testing

Training and rollout

3. Maintenance

Version and platform upgrades

Enhancements and extensions

Release management

Audits

4. Support

Application support

Database and business operations support

Help desk and support management

Ongoing maintenance

Technology Partnerships

The website highlights alliances with technology organizations including:

AWS

Microsoft

Redington

Fortinet

Website Sections

The public website includes:

Home

About Us

Our Services

IT Solutions

Careers

Contact Us

Cloud Solutions

DevOps Consulting

Development Services

Enterprise Mobility Solutions

Company Highlights

According to the website:

100+ Projects Done

50+ Happy Customers

15+ Years Experience

100% Success Rate

About the Company

TechnoSense describes itself as a next-generation technology company focused on intelligent, scalable, and high-impact digital solutions for modern enterprises.

Its stated areas of expertise include:

Oracle technology solutions

Enterprise Cloud & DevOps

Microsoft 365

IT infrastructure modernization

Cloud and infrastructure services

Digital transformation

Contact

TechnoSense NextGen Solutions Pvt. Limited

Address:
48, 7th Floor, ETT Tower - 2B-36, Sector 132, Noida, India

Phone:
+91-9911191139

Email:
info@technosense.in

Website:
https://technosense.in/

Technology Stack

- React
- Vite
- React Router
- Nodemailer for local development contact-form delivery
- PHP and PHPMailer for production contact-form delivery
- Existing CSS, image, video, icon, and vendor assets in `css`, `img`, `technosense`, and `vendor`

Prerequisites

- Node.js 20 or newer
- npm
- Git
- PHP 8 or newer for production hosting, if the PHP contact endpoint is used
- A Gmail account with a Gmail App Password for contact-form email delivery

Installation

Clone the repository and enter the project directory:

```powershell
git clone https://github.com/Amitagarwalrkt/TechnoSense.in.git
cd TechnoSense.in
```

Install the JavaScript dependencies:

```powershell
npm install
```

Create the local SMTP configuration file:

```powershell
Copy-Item smtp-config.example.php smtp-config.php
```

Open `smtp-config.php` and set your own SMTP host, port, username, app password, sender email, and sender name. Never commit this file because it contains credentials. The file is ignored by Git.

Run the Website Locally

Start the Vite development server:

```powershell
npm run dev
```

Open the local website:

```text
http://localhost:5173/
```

The Vite development server handles the React application and provides a local contact-form API at `/send-message.php` using the SMTP values from `smtp-config.php`.

Useful Development Commands

```powershell
# Start the development server
npm run dev

# Create a production build in dist/
npm run build

# Serve the production build locally
npm run preview
```

The preview server is normally available at:

```text
http://localhost:4173/
```

Production Deployment

Build the project:

```powershell
npm run build
```

Upload the contents of `dist/` to the web server. The production server must provide:

- `dist/index.html` as the React entry point
- The generated JavaScript and CSS assets
- The copied `css`, `img`, `technosense`, and `vendor` directories
- `send-message.php`
- `smtp-config.php` with valid server-side SMTP credentials
- PHP with the PHPMailer files in `vendor/phpmailer`

For Apache or another SPA-aware web server, configure unknown application routes such as `/about-us` and `/contact-us` to serve `index.html`. Do not expose `smtp-config.php` as downloadable source, and keep it outside public access when the hosting provider supports that configuration.

Production Contact Form Test

After deployment, open `/contact-us`, complete every required field, and submit the form. If delivery fails, verify:

1. `smtp-config.php` exists on the server.
2. The Gmail App Password is valid and has no spaces or expired access.
3. `vendor/phpmailer/src` contains `Exception.php`, `PHPMailer.php`, and `SMTP.php`.
4. The server allows outbound SMTP connections on port 587.
5. PHP error logs contain no PHPMailer or SMTP connection errors.

Project Structure

```text
src/main.jsx       React entry point
src/App.jsx        React Router configuration and shared behavior
src/pages/         JSX page components
src/app.css        React-specific styles
index.html         Vite document shell
vite.config.js     Vite configuration and local contact API
send-message.php   Production contact-form endpoint
smtp-config.php    Local/server SMTP configuration, ignored by Git
dist/              Generated production output
```

License

Copyright © TechnoSense NextGen Solutions Pvt. Limited. All rights reserved.

The website content, branding, logos, graphics, and proprietary materials belong to their respective owners. This README does not grant permission to reproduce or redistribute proprietary website assets.
