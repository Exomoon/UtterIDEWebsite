# UtterIDE Terms of Use

_Last updated: 2026-07-05_

These Terms of Use govern your use of UtterIDE.

UtterIDE is currently a beta product. These Terms may be updated as the product evolves, especially if paid plans, licensing, telemetry, cloud services, marketplace publishing, or team features are introduced.

This document is a beta draft and is not legal advice. It should be reviewed by a qualified legal professional before public commercial release.

---

## 1. Acceptance of Terms

By installing, accessing, or using UtterIDE, you agree to these Terms of Use.

If you do not agree to these Terms, do not install or use UtterIDE.

If you use UtterIDE on behalf of a company, organization, client, employer, or other legal entity, you represent that you have authority to do so and that the entity agrees to these Terms.

---

## 2. What UtterIDE Is

UtterIDE is a Visual Studio Code extension that provides AI-assisted coding and development workflows.

Depending on enabled features and configuration, UtterIDE may help users:

- understand code
- generate code
- propose patches
- edit files
- create files
- review diffs
- run terminal commands
- interact with Git
- connect to databases
- generate SQL
- inspect database schemas
- generate diagrams
- run query analysis
- use project memory
- use multiple AI providers
- run multi-agent workflows

UtterIDE is designed as a review-first development assistant, but users remain responsible for all actions performed through the software.

---

## 3. Beta Status

UtterIDE is currently provided as beta software.

Beta software may contain:

- bugs
- incomplete features
- unstable behavior
- incorrect AI outputs
- security issues
- performance issues
- unexpected side effects
- breaking changes
- missing documentation

UtterIDE is provided **“as is”** and **“as available”**.

You should not rely on UtterIDE as your sole method for writing, reviewing, testing, deploying, migrating, securing, or operating software systems.

---

## 4. No UtterIDE Account Required

UtterIDE currently does not require users to create an UtterIDE account.

UtterIDE currently does not operate a central backend server for storing user projects, prompts, source code, database credentials, API keys, local memory files, architecture graphs, or run logs.

UtterIDE uses a Bring Your Own Key model for third-party LLM providers.

If future versions introduce accounts, licensing, payments, telemetry, cloud sync, or hosted services, these Terms and the Privacy Policy should be updated.

---

## 5. Bring Your Own Key

Users may connect their own API keys for third-party AI providers such as:

- DeepSeek
- Anthropic
- OpenAI
- Google
- OpenRouter
- Ollama Cloud
- other supported providers

You are responsible for:

- obtaining valid API keys
- protecting API keys
- managing API usage
- monitoring API costs
- complying with provider terms
- reviewing provider privacy policies
- paying provider charges
- handling provider account limits, balances, bans, rate limits, and errors

UtterIDE is not responsible for third-party API charges, rate limits, outages, model behavior, provider data handling, provider policy changes, or provider account issues.

---

## 6. Third-Party Providers

UtterIDE is not affiliated with DeepSeek, Anthropic, OpenAI, Google, Microsoft, OpenRouter, Ollama, or any other third-party provider unless explicitly stated.

When you use a third-party provider, your use is governed by that provider’s own terms, privacy policy, data processing terms, usage policies, billing terms, and security practices.

UtterIDE does not control how third-party providers process, store, secure, retain, train on, or otherwise handle data sent to them.

You are responsible for deciding which provider to use and what data may be sent to that provider.

---

## 7. Local Storage and Workspace Files

UtterIDE may create or use local files inside your workspace, including:

- `.utteride/memory.json`
- `.utteride/architecture.json`
- `.utteride/pii_rules.json`
- `.utteride/project-context.md`
- `.utteride/instructions.md`
- `.utteride/runs/`
- logs
- run ledger files
- project metadata

These files may contain sensitive information.

You are responsible for:

- protecting these files
- excluding them from Git if needed
- encrypting them if needed
- deleting them if needed
- deciding whether to share them
- avoiding accidental publication of local project metadata

Recommended practice: review your `.gitignore` before committing or pushing any project using UtterIDE.

---

## 8. User Responsibility for Outputs

AI-generated outputs may be wrong.

UtterIDE may generate:

- incorrect code
- insecure code
- broken code
- incomplete patches
- destructive commands
- invalid SQL
- unsafe migrations
- misleading explanations
- incorrect architecture diagrams
- wrong database advice
- incorrect security recommendations
- hallucinated information

You are responsible for reviewing, testing, validating, securing, and approving all outputs.

You are responsible for all code, files, commands, database operations, Git operations, deployments, migrations, and decisions made with or through UtterIDE.

---

## 9. Review and Approval

UtterIDE may include approval flows for actions such as:

- applying patches
- writing files
- running terminal commands
- committing code
- pushing code
- running database queries
- running migrations
- sending data to cloud providers
- changing project memory

Approval means you authorize the action and accept the associated risk.

You should carefully review all proposed actions before approving them.

Rejected actions should not be executed, but you remain responsible for verifying the state of your own project and system.

---

## 10. Terminal Access and Local Commands

UtterIDE may support terminal command execution.

Commands run with the permissions available to the local VS Code session and operating system user account.

Terminal commands can be dangerous.

They may:

- delete files
- modify files
- install packages
- change permissions
- alter repositories
- expose secrets
- connect to networks
- run scripts
- modify databases
- affect your system

You are responsible for reviewing commands before approval and for understanding their effects.

You should use sandboxed environments, Docker containers, virtual machines, backups, and Git where appropriate.

---

## 11. Git and DevOps Actions

UtterIDE may support Git and DevOps-related actions such as:

- checking status
- reading diffs
- generating commit messages
- staging changes
- creating commits
- pushing to remotes

Git actions can expose code, secrets, credentials, logs, personal data, or confidential business information.

You are responsible for reviewing all changes before committing or pushing.

You should not push sensitive information, secrets, credentials, local `.utteride/` files, logs, or personal data unless you are authorized and understand the risks.

---

## 12. Database Use

UtterIDE may support database connections and SQL execution.

Database actions may include:

- reading schemas
- generating diagrams
- running queries
- reading data
- modifying data
- creating extensions
- creating tables
- altering tables
- dropping tables
- running migrations
- analyzing query plans

Database actions can be high risk.

They may cause:

- data loss
- corruption
- downtime
- privacy incidents
- security incidents
- production outages
- compliance violations

You are responsible for:

- choosing database environments
- reviewing SQL
- using least-privilege credentials
- avoiding production unless necessary
- using backups
- using staging/test databases
- complying with data protection laws
- ensuring you are authorized to access and process the data

Production database actions are strongly discouraged unless you fully understand and accept the risk.

---

## 13. Sensitive Data and PII

UtterIDE may include masking features intended to reduce the risk of sending sensitive data to cloud LLM providers.

Masking is not guaranteed.

UtterIDE may fail to detect sensitive data.

You are responsible for ensuring that confidential information, personal data, trade secrets, secrets, credentials, tokens, customer data, production data, regulated data, or other sensitive data is not improperly processed or transmitted.

You should not use UtterIDE with sensitive, confidential, regulated, or production data unless you are authorized to do so and understand the risks.

---

## 14. Compliance

UtterIDE does not guarantee compliance with:

- GDPR
- EU AI Act
- data protection laws
- cybersecurity laws
- employment laws
- intellectual property laws
- export controls
- sector-specific regulations
- contractual confidentiality obligations
- company security policies
- customer agreements

You are responsible for determining whether your use of UtterIDE complies with applicable laws, rules, contracts, and policies.

UtterIDE does not provide legal, compliance, security, financial, or professional advice.

---

## 15. Acceptable Use

You agree not to use UtterIDE to:

- violate laws or regulations
- access systems without authorization
- exfiltrate data
- steal credentials
- generate or deploy malware
- bypass security controls
- attack systems
- process data you are not authorized to process
- infringe intellectual property rights
- violate third-party provider terms
- intentionally cause data loss or system damage
- misrepresent UtterIDE as affiliated with third-party providers

You are responsible for how you use the software and any provider APIs connected to it.

---

## 16. Intellectual Property

UtterIDE does not claim ownership of your source code or project files.

You retain responsibility for ensuring that any code generated, modified, copied, or inserted through UtterIDE does not violate third-party intellectual property rights, licenses, contracts, or policies.

AI-generated code may be similar to existing code or may include patterns subject to licensing concerns. You are responsible for reviewing generated output before use.

UtterIDE’s own source code, name, logo, documentation, interface, and branding may be protected by copyright, trademark, license terms, or other rights depending on how the project is released.

---

## 17. Future Pricing and Paid Plans

UtterIDE may be offered for free during beta.

Future versions may introduce:

- monthly subscription fees
- premium features
- commercial licensing
- paid support
- supporter tiers
- usage-based features
- license checks
- team plans
- enterprise plans

Any future pricing will be communicated separately.

Third-party LLM usage is separate from any UtterIDE subscription unless explicitly stated.

You remain responsible for all charges from your chosen AI providers.

Continued free access is not guaranteed.

---

## 18. Updates and Changes

UtterIDE may be updated, changed, limited, suspended, discontinued, or modified at any time.

Features may be added, removed, renamed, restricted, or changed.

Beta features may break or disappear.

These Terms may be updated over time. Continued use after updates means you accept the updated Terms.

---

## 19. No Warranty

To the maximum extent permitted by applicable law, UtterIDE is provided without warranties of any kind.

This includes, but is not limited to, implied warranties of:

- merchantability
- fitness for a particular purpose
- non-infringement
- accuracy
- availability
- security
- reliability
- correctness
- uninterrupted operation
- error-free operation

UtterIDE does not warrant that the software will meet your requirements, produce correct results, prevent data loss, prevent security issues, or be safe for production use.

---

## 20. Limitation of Liability

To the maximum extent permitted by applicable law, the developers, maintainers, contributors, distributors, and publishers of UtterIDE are not liable for any direct, indirect, incidental, consequential, special, punitive, or exemplary damages arising from or related to the use of UtterIDE.

This includes, but is not limited to:

- data loss
- code loss
- database loss
- business interruption
- downtime
- lost profits
- lost revenue
- broken builds
- failed deployments
- corrupted repositories
- API costs
- provider charges
- security incidents
- privacy incidents
- compliance violations
- production outages
- accidental disclosure of information
- actions approved by the user
- third-party provider behavior
- AI-generated errors

Some jurisdictions do not allow certain exclusions or limitations, so some limitations may not apply to you.

---

## 21. Indemnification

To the extent permitted by law, you agree to defend, indemnify, and hold harmless the developers, maintainers, contributors, distributors, and publishers of UtterIDE from claims, damages, losses, liabilities, costs, and expenses arising from:

- your use of UtterIDE
- your approved actions
- your code, data, or systems
- your use of third-party providers
- your violation of these Terms
- your violation of law
- your violation of third-party rights
- your processing of personal or confidential data
- your database, Git, terminal, or deployment actions

---

## 22. Termination

You may stop using UtterIDE at any time.

Access to future versions, updates, paid features, beta features, or support may be changed or discontinued.

If future paid services are introduced, access may depend on payment, license status, or plan terms.

---

## 23. Governing Law

This beta draft does not specify governing law or venue.

Before public commercial release, the developer should choose appropriate governing law, jurisdiction, dispute resolution, company details, and contact information.

---

## 24. Contact

If an official company name, website, support email, legal contact, or business address is later created for UtterIDE, it should be added here.

Until then, this Terms document is a beta draft and should be reviewed before public release.

---

## 25. Entire Agreement

These Terms, together with the Privacy Policy and any other applicable notices, form the agreement between you and UtterIDE regarding use of the software.

If any part of these Terms is found invalid or unenforceable, the remaining parts remain in effect.

---

## 26. Final User Acknowledgement

By using UtterIDE, you acknowledge that:

- AI outputs may be wrong
- autonomous tools are risky
- local files may be modified
- terminal commands may affect your system
- database actions may affect live data
- Git actions may publish code
- cloud providers may receive selected context
- masking is not guaranteed
- provider charges are your responsibility
- review, backups, Git, sandboxing, and testing are strongly recommended
- you remain responsible for all actions performed through UtterIDE
