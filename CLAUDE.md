# Haul247 — Claude Code guidelines

## Project context
Logistics platform serving the Nigerian market. Production traffic is live.
Treat every change as if it could affect a paying customer.

## Code consistency
- Match the existing code style exactly before writing anything new — check surrounding files first
- Use the same naming conventions already in the codebase (camelCase, kebab-case, etc.)
- Never introduce a new library or dependency without flagging it and getting confirmation
- Keep components/functions single-responsibility — if a function is doing two things, say so

## Security rules (non-negotiable)
- Never hardcode secrets, API keys, tokens, or credentials — use environment variables
- Never log sensitive user data (emails, phone numbers, payment info) to the console
- Always sanitise and validate user input before using it in queries or rendering
- Flag any change that touches auth, payments, or user data and explain the security implications
- Do not disable eslint-disable or security linting rules without explicit approval

## Before making any change
1. Read the relevant files first — understand what already exists
2. State your plan in plain English before writing code
3. If the change touches more than 3 files, ask for confirmation before proceeding
4. If you're unsure about intent, ask — don't guess

## Testing requirements
- Every new function must have at least one unit test
- Every bug fix must include a regression test that would have caught it
- Do not delete or skip existing tests
- After changes, tell me which tests to run and how

## Regression prevention
- Before editing a component, list what else depends on it
- If you rename or move anything, search the whole codebase for references first
- Never change a function signature without updating all call sites
- Flag breaking changes explicitly — don't bury them

## Git discipline
- Suggest a clear, conventional commit message after each logical change
- Group related changes into one commit, unrelated changes into separate commits
- Never commit commented-out code

## How to communicate with me
- Tell me what you're about to do before you do it
- After each change, summarise: files changed, why, and what to test
- If something looks wrong or inconsistent in the existing code, flag it — don't just work around it
- Give me options when there are tradeoffs, don't silently pick one