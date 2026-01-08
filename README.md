# Simple Auth

**Simple Auth** is a minimal authentication **template** built using **Better Auth**, **Bun**, **Hono**, **Drizzle**, and **PostgreSQL**.

It is meant to serve as a **starting point** for projects that need authentication without having to wire everything from scratch.  
You are expected to modify, extend, or remove parts of this template to fit your own needs.

---

## What This Is

- A working authentication setup
- A reference implementation using Better Auth
- A base you can copy, fork, or adapt

## What This Is Not

- A complete, opinionated auth solution
- A drop-in SaaS replacement
- A one-size-fits-all system

---

## Stack Used

- **Runtime:** Bun
- **HTTP Framework:** Hono
- **Authentication:** Better Auth
- **ORM:** Drizzle
- **Database:** PostgreSQL
- **Email:** Mailgun

> Since this is a template, you are free to replace any dependency or change the architecture.

---

## Setup

### 1. Prerequisites

- [Bun](https://bun.com/)
- PostgreSQL  
  - Either installed locally
  - Or via Docker / Docker Compose

---

### 2. Install Dependencies

```bash
bun install
