# meteor-claim-admin

## Overview

Meteor based (with Blaze) demo claim administration system, made up of the following two core components:

### 1. Public Claim System

- Provides a CMS based website that can be used to relay claim details to the public.
- Provides a dynamic multi-step claim form (following a wizard approach) that can be used to capture claimant information and details. Claimants provide contact information, specify whether a certain purchase was made, review their details before submitting, and must agree to a solemn declaration regrading the validity of their provided details.
- When a claim is submitted the claimant receives a claim receipt email with all of their submitted details, along with an attached PDF based claim receipt (containing the same information).
- The public claim system is i18n ready, and is currently wired up in both English/French (with site language toggle functionality).

![Public site home](https://raw.githubusercontent.com/hwillson/meteor-claim-admin/master/public/images/demo/public_home.png "Public site home")

![Public site claim ](https://raw.githubusercontent.com/hwillson/meteor-claim-admin/master/public/images/demo/public_claim.png "Public site claim")

### 2. Member Only Claim Admin System

- Admins can review all captured claim information, control claim status, add claim notes, etc.
- Admins can download a CSV export of all captured claim information. This export is currently generated every 15 minutes (not generated on demand to avoid performance issues / report wait times for larger claim databases).
- Admins can control all public facing CMS based site content. New public site  pages can be created and modified using an embedded content editor. Pages can be currently created and managed in English/French.
- Public site documents can be uploaded and managed via the admin. These documents are then available on the public site for download, under the document section.
- Admins can add/update/remove other admins, and control which groups they're part of. Right now the admin system just uses the `admin` group for admin access, but the functionality is in place to support other groups as needed.

![Admin site claims list](https://raw.githubusercontent.com/hwillson/meteor-claim-admin/master/public/images/demo/admin_claims.png "Admin site claims list")

![Admin site manage claim ](https://raw.githubusercontent.com/hwillson/meteor-claim-admin/master/public/images/demo/admin_claim.png "Admin site manage claim")

![Admin site CMS content ](https://raw.githubusercontent.com/hwillson/meteor-claim-admin/master/public/images/demo/admin_content.png "Admin site CMS content")

![Admin site manage users ](https://raw.githubusercontent.com/hwillson/meteor-claim-admin/master/public/images/demo/admin_users.png "Admin site manage users")

## Background

The code for this claim system has been extracted from a few production Meteor apps created around Meteor version 0.8. The code has been updated a few times over the past couple of years, but was designed before ES2015 module and npm support existed natively with Meteor 1.3. Most of the code has been updated to follow the [Meteor Guide](http://guide.meteor.com) guidelines, but there are still a few areas that could definitely be improved, such as:

- Switching over to use more npm based packages instead of leveraging Atmosphere based npm wrapper packages
- Better leveraging the parent/child smart/dumb UI component approach outlined in the Meteor Guide.
- Testing; testing for this system was completely dropped due to issues around properly unit/integration testing Meteor apps pre Meteor 1.3. Now that testing is better supported this should definitely be re-considered.

## Technology

- Meteor 1.3 based using ES2015 modules, along with both [Atmosphere](https://atmospherejs.com) and [npm](https://www.npmjs.com) based packages.
- Leverages Blaze (instead of Angular or React) with Meteor.

## Sample Installation

1. `git clone https://github.com/hwillson/meteor-claim-admin.git`
2. `cd meteor-claim-admin`
3. `meteor npm install`
4. `meteor`

**Note:** Some initial seed data will be installed when the application first runs. This data consists of sample public site content pages, that can be managed in the admin under `/admin/pages`.

## Running

1. `meteor --settings=settings.json`
2. To get started, access the admin at http://localhost:3000/admin.

## Configuration

Application settings are controlled via `./settings.json`. Details are explained below:
```
{
  "public": {

    // If `true` only logged in admins can see the public website.
    // Non-logged in admins will see a "down for maintenance" message.
    // This provides admins a way to test the system in production
    // before opening it to the general public.
    "maintenanceMode": false,

    // The public facing site is made up of 2 main areas of
    // functionality. The information part of the site (Home, Contact Us,
    // Help, FAQ, Privacy, etc.) and the Claim part of the site. Set this
    // option to `false` to disable only the Claim part of the site (in case
    // you want to launch the information part of the site before allowing
    // claims to be captured).
    "claimSubmissionsEnabled": true,

    "admin": {

      // Default site admin email, linked to in a few admin locations in-case
      // people need to get ahold of the site admin. This email address is
      // also used to create the initial admin account.
      "initialAdminEmail": "jsmith@somesite.fake",

      // Project/company details displayed in different parts of the admin (for
      // informational purposes).
      "projectName": "Claim",
      "companyName": "Some Company",
      "companyUrl": "http://somesite.fake"

    }
  },
  "private": {

    // Initial admin password (used if `initialAdminEmail` doesn't already
    // exist in the database).
    "initialAdminPass": "cQ5-j51-PJa-l8T",

    "email": {

      // Set to `false` to disable emails sent after a claim is filed (one
      // email to the claimant, one email to a claim submission catch all
      // email account).
      "enabled": true,

      // Claim system email addresses. `info` is used as the from addresses
      // for all claim received emails sent to claimants, after filing a
      // claim. `claimsubmission` is the address the receives a copy of all
      // claim filing emails (a copy of the same email that's sent to the
      // claimant).
      "info": "info@somesite.fake",
      "claimsubmission": "claimsubmission@somesite.fake",

      // This system is configured to use [mailgun](http://mailgun.com) by
      // default. Add mailgun API info here.
      "mailgun": {
        "apiKey": "",
        "domain": ""
      }

    }
  }
}
```
