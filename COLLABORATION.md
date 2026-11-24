# How Claude and GPT work together on Nodda Paws

Both agents work in **this one folder**. Read this file before you touch anything, then read `DESIGN.md`.

## The rules

1. **One local copy only.** The single working copy is `~/Desktop/nodda-paws-commerce`. Never clone the repo again, never make a copy of the folder, never work from a zip or a backup.
2. **`main` only.** While two agents share one working tree, no feature branches (switching branches changes files under the other agent). Work directly on `main` in small steps.
3. **Start of every task:** run `git pull --rebase`, then `git status`. If the tree is not clean, stop and sort it out before adding anything.
4. **Small commits, pushed immediately.** One idea per commit. A `post-commit` hook pushes to GitHub automatically (see below). If a push fails, run `git pull --rebase` and `git push` right away; do not move on with unpushed work.
5. **Clean tree at the end of every task.** `git status` must say "nothing to commit" and `git log origin/main..HEAD` must be empty. Never leave half-finished edits lying around; if work is not ready, do not start it.
6. **One owner per file.** The owner is the only one who edits it. To change someone else's file, leave a short note in `HANDOFFS.md` and let the owner do it (or agree the handover there).
7. **Say who you are.** Commit messages end with who wrote them (for Claude, the Co-Authored-By line; for GPT, its own attribution).
8. **Never commit** secrets, tokens, API keys, merchant credentials, personal data, or big binary files you do not need. `.gitignore` covers the common cases.
9. **Never invent facts.** Anything unconfirmed is marked `[OPEN]`. See `DESIGN.md`.
10. **Never rewrite shared history** (no force-push, no rebase of pushed commits) unless Aryan asks.

## Ownership (update this table when it changes)

| Files | Owner |
|---|---|
| `DESIGN.md`, `DESIGN_DIRECTIONS.md`, `directions-board.html` | Claude |
| `proposals/GPT_*.md` and any file GPT creates | GPT |
| `context.md`, `techstack.md` | Shared living state: both agents read and update when relevant |
| `COLLABORATION.md`, `AGENTS.md`, `CLAUDE.md`, `.gitignore`, `HANDOFFS.md` | Shared: small edits only, commit and push straight away |

## Handoffs

When you finish something another agent should pick up, add a short entry to `HANDOFFS.md`: what changed, which files, what is next, anything left open. Keep entries short, newest on top.

## Shared living context

Both agents read `context.md` and `techstack.md` at the start of every task. Update `context.md` when completed work, blockers, repository state or next actions change. Update `techstack.md` when a framework, provider, integration, deployment or technical constraint changes. Commit and push those updates with the work that caused them.

## Auto-push hook

A local `post-commit` hook pushes `main` to GitHub after every commit. Hooks live in `.git/hooks` and are **not** shared by git, so after a fresh clone (which should not happen: see rule 1) the hook must be re-created:

```sh
#!/bin/sh
git push origin HEAD:main --quiet || echo "post-commit: push failed. Run: git pull --rebase && git push" >&2
```

Save it as `.git/hooks/post-commit` and make it executable (`chmod +x`).

## Checklist before saying "done"

- [ ] `git status` is clean
- [ ] `git log origin/main..HEAD` is empty
- [ ] No second copy of the project exists on disk
- [ ] Anything another agent must know is in `HANDOFFS.md`
