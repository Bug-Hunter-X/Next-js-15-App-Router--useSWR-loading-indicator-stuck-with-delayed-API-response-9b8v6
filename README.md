# Next.js 15 App Router: useSWR loading indicator stuck with delayed API response

This repository demonstrates a bug in Next.js 15 App Router where the `useSWR` hook's loading indicator gets stuck indefinitely when fetching data from an API route that has a simulated delay.  The issue stems from the interaction between the App Router's asynchronous rendering and `useSWR`'s data fetching mechanism.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm run dev` to start the development server.
4. Navigate to `http://localhost:3000`. You'll see the loading indicator persist indefinitely.

## Solution

The solution involves adding a proper error handling mechanism to the `useSWR` hook, accounting for potential network errors or timeouts.
