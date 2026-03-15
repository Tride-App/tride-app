# Tride App

> Learn More: https://tride-app.github.io/project

[![Discord](https://img.shields.io/badge/Discord-Join%20Server-5865F2?style=for-the-badge&logo=discord&logoColor=white)](https://discord.gg/7b3YRtNxTE)

Tride is an intercity carpooling platform built around transparent trip payments and deterministic settlement. This repository contains the web application for the Tride user experience.

The App repo is responsible for presenting the product, onboarding riders and drivers, and later handling core flows such as trip discovery, booking, wallet connection, and boarding confirmation.

## What Tride Is About

Intercity travel is often expensive, fragmented, and unreliable. Tride addresses that by combining:

- seat-based ride booking,
- non-custodial USDC escrow on Stellar,
- clear cancellation and no-show rules,
- off-chain coordination for profiles, messaging, and logistics.

The goal is to make intercity ride sharing feel predictable for both passengers and drivers, without requiring the platform to take custody of user funds.

## What This Repo Covers

This repo currently contains a Next.js frontend foundation for:

- the public-facing product experience,
- landing and marketing surfaces,
- future authenticated rider and driver flows,
- integration points for the Tride API and Soroban contracts.

## Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Vitest for unit tests

## Local Development

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

The app runs on `http://localhost:3000` by default.

## Scripts

```bash
npm run dev
npm run build
npm run start
npm run lint
npm run test
npm run test:watch
```

## Project Structure

- `src/app`: Next.js app router pages, layout, and shared content
- `test`: Vitest test files
- `public`: static assets

## Contribution Guide

Contributions are welcome, especially in areas such as:

- rider and driver booking flows,
- wallet connection UX,
- trip search and filtering,
- responsive UI polish,
- accessibility,
- frontend test coverage.

When contributing:

1. Keep changes focused on one concern.
2. Run `npm run lint` and `npm run test` before opening a PR.
3. Prefer small, reviewable pull requests with clear descriptions.
4. Preserve the product direction: escrow-first, intercity-focused, and operationally realistic.

## Product Context

The first Tride MVP targets a corridor such as Kaduna to Abuja. The frontend should evolve toward that concrete launch goal rather than generic ride-hailing patterns.
