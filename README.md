# React Router v6 Nested Component Re-rendering Issue

This repository demonstrates a subtle bug in React Router v6 related to nested component re-rendering when navigating between routes.  The issue involves nested components within routes not always updating their state or props correctly after a route change.

## Problem Description

The `App.js` file contains a basic React Router setup with nested components. When navigating between routes, the nested components may not re-render appropriately, leading to stale data or UI inconsistencies.

## Solution

The solution in `AppSolution.js` addresses the issue by utilizing the `useLocation` hook to force a re-render when the URL changes. This ensures that the nested components are always up-to-date with the current route.

## Reproduction Steps

1. Clone the repository.
2. Navigate to the project directory.
3. Run `npm install` to install dependencies.
4. Run `npm start` to start the development server.
5. Observe the unexpected behavior in `App.js`.
6. Compare with the corrected behavior in `AppSolution.js`.