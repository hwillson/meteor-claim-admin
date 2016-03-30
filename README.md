# meteor-claim-admin

## Overview

Meteor based (with Blaze) demo claim administration system, made up of the following two core components:

### 1. Public Claim System

- Provides a CMS based website that can be used to relay claim details to the public.
- Provides a dynamic multi-step claim form (following a wizard approach) that can be used to capture claimant information and details.

[TODO - Screenshot]

### 2. Member Only Claim Admin System

- Allows admins to review all captured claim information, control claim status, add claim notes, etc.
- Allows admins to control all public facing CMS based site content.

[TODO - Screenshot]

## Technology

- Meteor 1.3 based using ES2015 modules.
- Leverages Blaze (instead of Angular or React) with Meteor.
- Testing using Meteor 1.3's built in testing support.

## Installation

1. `git clone https://github.com/hwillson/meteor-claim-admin.git`
2. `cd meteor-claim-admin; meteor`

## Running

1. `meteor --settings=settings.json`
2. To get started, access the admin at http://localhost:3000/admin.

## Configuration

- Default admin user/pass are configured via `./settings.json`, and are loaded the first time the application starts.

- TODO
