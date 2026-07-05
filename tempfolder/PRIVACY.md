# UtterIDE Privacy Policy

_Last updated: 2026-07-05_

This Privacy Policy explains how UtterIDE handles data.

UtterIDE is currently a beta product. This policy may be updated as the product evolves, especially if paid plans, telemetry, cloud services, or additional integrations are introduced.

This document is not legal advice. Organizations using UtterIDE with personal data, confidential data, customer data, production systems, or regulated environments should review their own legal, security, and compliance requirements.

---

## 1. Summary

UtterIDE is designed as a local-first Visual Studio Code extension.

UtterIDE does not require an UtterIDE account.

UtterIDE does not operate a central backend server for storing your code, prompts, project files, database credentials, chat history, memory files, run logs, or API keys.

Most UtterIDE data is stored locally on your machine or inside your project workspace.

However, when you choose to use a cloud LLM provider such as DeepSeek, Anthropic, OpenAI, Google, OpenRouter, Ollama Cloud, or another supported provider, selected prompts, code context, file contents, database query results, logs, or other workspace information may be sent directly from your machine to that provider.

UtterIDE uses a Bring Your Own Key model. You are responsible for the API keys and providers you choose to use.

---

## 2. What UtterIDE Does Not Collect Centrally

UtterIDE currently does not collect, transmit, or store the following on an UtterIDE-owned backend server:

- your name
- your email address
- your account information
- your source code
- your prompts
- your chat history
- your project files
- your database credentials
- your API keys
- your local memory files
- your architecture graph files
- your run logs
- your terminal output
- your Git history
- your database query results

UtterIDE currently has no central user account system and no central cloud storage for user projects.

---

## 3. Local Storage

UtterIDE may store data locally on your machine or inside your workspace.

Examples may include:

- `.utteride/memory.json`
- `.utteride/architecture.json`
- `.utteride/pii_rules.json`
- `.utteride/project-context.md`
- `.utteride/instructions.md`
- `.utteride/runs/`
- local run ledger files
- local architecture maps
- local project summaries
- local chat or session state
- local settings
- local logs

These files may contain sensitive project information.

You are responsible for protecting these files.

You should decide whether to:

- commit them to Git
- exclude them via `.gitignore`
- encrypt them
- delete them
- share them with teammates
- include them in backups
- copy them between machines

Recommended default:

```gitignore
.utteride/runs/
.utteride/*.local.json
.utteride/secrets*
```

Depending on your project, you may also want to exclude all `.utteride/` files from Git.

---

## 4. API Keys

UtterIDE uses a Bring Your Own Key model.

You may connect your own API keys for providers such as:

- DeepSeek
- Anthropic
- OpenAI
- Google
- OpenRouter
- Ollama Cloud
- other supported providers

UtterIDE is designed to store API keys using Visual Studio Code’s secure secret storage where supported.

API keys should not be stored in plain text files.

UtterIDE should not intentionally store API keys in:

- `settings.json`
- source code
- prompts
- memory files
- run logs
- terminal logs
- telemetry
- screenshots
- exported documentation

You are responsible for:

- creating your own provider accounts
- protecting your API keys
- rotating keys if needed
- deleting keys when no longer needed
- monitoring provider usage
- paying provider charges
- complying with each provider’s terms

---

## 5. Third-Party LLM Providers

UtterIDE may send selected data directly from your machine to your chosen LLM provider.

Examples of data that may be sent include:

- your prompt
- selected code
- active file content
- relevant project files
- search results
- project context
- database query results
- error messages
- terminal output
- Git diffs
- run summaries
- memory or project context snippets

UtterIDE does not control how third-party providers process, store, secure, retain, or use data sent to them.

Your use of each provider is governed by that provider’s own terms, privacy policy, data processing terms, retention policy, and security practices.

UtterIDE is not affiliated with DeepSeek, Anthropic, OpenAI, Google, Microsoft, OpenRouter, Ollama, or other providers unless explicitly stated.

Before using a provider, you should review that provider’s terms and privacy policy.

---

## 6. Cloud vs Local Runtime

UtterIDE may support both cloud and local runtimes.

### Cloud runtime

When using a cloud provider, selected context is sent to that provider.

Examples:

- DeepSeek API
- Anthropic Claude API
- OpenAI API
- Google Gemini API
- OpenRouter
- Ollama Cloud

### Local runtime

When using a local runtime, model execution may happen on your machine.

Examples:

- Ollama Local
- local model runtimes
- local OpenAI-compatible endpoints

Local runtime can reduce cloud data transfer, but local runtime does not automatically mean that all risk is removed. Local logs, local files, plugins, extensions, malware, backups, Git repositories, or system-level tools may still expose data if misconfigured.

UtterIDE should clearly display whether the active provider is local or cloud where possible.

---

## 7. Sensitive Data and PII Masking

UtterIDE may include local masking features designed to reduce the risk of sending sensitive information to cloud LLM providers.

For example, database query results may be intercepted before being sent to an LLM provider and masked according to rules in:

```text
.utteride/pii_rules.json
```

Potentially sensitive fields may include:

- email addresses
- passwords
- API keys
- tokens
- personal identity numbers
- social security numbers
- customer IDs
- salaries
- financial data
- health data
- addresses
- phone numbers
- private notes
- production database rows

Masking may replace values with placeholders such as:

```text
***MASKED***
```

### Important limitation

PII masking is a safety feature, not a guarantee.

UtterIDE may fail to detect sensitive data.

Rules may be incomplete.

Column names may be misleading.

Sensitive data may appear in unexpected fields, logs, comments, stack traces, filenames, database rows, JSON blobs, free text, or generated content.

You are responsible for reviewing what data may be sent to third-party providers and for ensuring that your use complies with applicable law, contracts, policies, and confidentiality obligations.

---

## 8. Databases

UtterIDE may support connecting to databases such as PostgreSQL or PostGIS.

Database credentials should be stored locally using secure storage where supported.

UtterIDE may be able to:

- inspect schema
- run SQL queries
- run `EXPLAIN`
- generate database diagrams
- optimize queries
- run migrations
- read rows
- modify rows
- create or drop database objects

Database actions can expose or modify sensitive data.

You are responsible for:

- choosing which database to connect
- avoiding production systems unless appropriate
- reviewing queries before execution
- protecting database credentials
- ensuring PII masking rules are correct
- complying with applicable data protection laws
- ensuring you have authorization to access and process the data

Recommended practice:

- use local or staging databases during development
- avoid production databases unless necessary
- avoid sending production data to cloud LLM providers
- use backups
- use read-only credentials where possible
- review all generated SQL
- use PII masking rules

---

## 9. Terminal and System Access

UtterIDE may support executing terminal commands.

Commands run with the permissions of the user account and VS Code session where UtterIDE is running.

UtterIDE does not have more operating system permissions than the user/session grants it, but those permissions may still be powerful enough to modify or delete files, install packages, change Git repositories, or affect local systems.

Terminal output may contain sensitive data.

If terminal output is sent to a cloud LLM provider, it may be processed by that provider.

You are responsible for reviewing terminal commands and outputs before allowing them to be used or transmitted.

---

## 10. Git and Source Control

UtterIDE may support Git actions such as:

- `git status`
- `git diff`
- commit message generation
- creating commits
- pushing to remotes

Git actions can expose or publish code and sensitive information.

You are responsible for reviewing:

- changed files
- staged files
- commit messages
- branch names
- remote repositories
- pushed content

Before committing or pushing, ensure that secrets, database credentials, personal data, tokens, logs, and local `.utteride/` files are not accidentally included.

---

## 11. Run Ledger and Logs

UtterIDE may create local run logs or run ledger files.

These may record:

- provider used
- model used
- runtime type
- estimated cost
- files read
- files changed
- approvals requested
- approvals accepted or rejected
- terminal usage
- Git usage
- database usage
- PII masking state
- final summaries
- errors

Run ledger files are intended to help users understand what happened during an agent run.

Run ledger files may contain sensitive information.

You are responsible for protecting, deleting, excluding, or sharing these files appropriately.

---

## 12. Cost and Billing Data

UtterIDE may show estimated or exact usage costs for third-party LLM providers.

Cost information may include:

- provider
- model
- input tokens
- output tokens
- estimated price
- session total
- run total
- remaining provider credits if supported by the provider

UtterIDE does not control third-party provider billing.

You are responsible for monitoring your own provider accounts, balances, invoices, usage limits, and API costs.

UtterIDE cost estimates may be inaccurate.

---

## 13. Telemetry

The current intended model is no central UtterIDE backend and no required user account.

If telemetry, analytics, crash reporting, usage metrics, licensing checks, cloud sync, or paid account features are introduced in the future, this Privacy Policy should be updated before those features are enabled.

If telemetry is added, it should be:

- clearly disclosed
- optional where practical
- limited in scope
- not include prompts, source code, file contents, database rows, terminal output, API keys, or secrets unless explicitly disclosed and consented to

---

## 14. Future Paid Plans

UtterIDE may be free during beta.

Future versions may introduce:

- monthly subscription fees
- commercial licensing
- premium features
- supporter tiers
- paid updates
- usage-based features
- paid support

Third-party LLM costs are separate from any UtterIDE subscription unless explicitly stated.

Users remain responsible for any charges from their chosen providers.

---

## 15. Children

UtterIDE is intended for developers and technical users.

It is not intended for children.

Do not use UtterIDE to process children’s personal data unless you are authorized to do so and have reviewed applicable legal requirements.

---

## 16. Security

UtterIDE is designed to reduce certain risks through local storage, secure secret storage, review-first workflows, PII masking, and local run logs.

However, no software can guarantee complete security.

Risks may include:

- accidental data exposure
- unsafe AI outputs
- prompt injection
- malicious project files
- unsafe terminal commands
- insecure third-party extensions
- leaked local files
- provider-side data retention
- misconfigured Git repositories
- database exposure
- incomplete masking rules

You should use standard security practices, including:

- Git
- backups
- least-privilege credentials
- read-only database users
- sandboxed environments
- Docker containers
- test databases
- `.gitignore`
- secret scanning
- code review
- provider usage limits

---

## 17. User Responsibilities

By using UtterIDE, you are responsible for:

- reviewing AI-generated outputs
- approving or rejecting proposed actions
- protecting your API keys
- monitoring provider usage and billing
- protecting local `.utteride/` files
- complying with third-party provider terms
- complying with privacy and data protection laws
- ensuring you have permission to process any data involved
- using backups and version control
- avoiding unauthorized use of production systems
- validating code, SQL, commands, diagrams, and recommendations

---

## 18. Contact

If an official support email, website, company name, or contact method is later created for UtterIDE, it should be added here.

Until then, this Privacy Policy is a beta draft and should be reviewed before public release.

---

## 19. Changes to This Policy

This policy may be updated over time.

Changes may be required as UtterIDE evolves, especially if the product adds:

- accounts
- payments
- telemetry
- crash reporting
- cloud sync
- hosted services
- central licensing
- team features
- marketplace publishing
- enterprise features

Users should review the latest version before using UtterIDE with sensitive, confidential, regulated, or production data.
