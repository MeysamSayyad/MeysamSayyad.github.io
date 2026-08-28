## Context

The current status bar renders the source-control icon and a static `main*` label in `app/page.tsx`. The existing typed resume data already contains a GitHub entry in `resume.links`, so the destination can be reused without adding a second configuration field.

## Goals / Non-Goals

**Goals:**

- Reuse the existing GitHub data entry for the status bar and contact section.
- Preserve the Figma-derived status-bar geometry while making only the version-control cluster interactive.
- Provide semantic external-link behavior, accessible naming, and keyboard focus.

**Non-Goals:**

- Implement repository status, branch switching, authentication, or a real source-control integration.
- Change the status-bar error, warning, port, language, or editor metadata indicators.
- Add a new icon or replace the exported Figma source-control asset.

## Decisions

### Derive the destination from the typed GitHub link

Find the existing `github` entry in `resume.links` and use its `href` for the status-bar anchor while displaying its `value`. This keeps the resume identity in one source of truth.

Alternative considered: add a separate `githubUrl` field. Rejected because it would allow the contact and status bar to drift.

### Use a native anchor with new-tab security attributes

Render the cluster as an anchor with `target="_blank"` and `rel="noreferrer"`, plus an explicit accessible label. This gives expected browser link semantics, keyboard activation, and safe external navigation without client-side event code.

Alternative considered: a button with `window.open`. Rejected because it weakens native link semantics and adds unnecessary client behavior.

### Preserve the existing compact status cluster

Keep the source-control icon and `main*` branch indicator as the visible content, adding the configured GitHub value through an accessible label or compact text treatment that remains readable at responsive widths. Focus styling will use the existing global focus rule.

Alternative considered: add a large GitHub call-to-action. Rejected because it would break the Figma status-bar hierarchy.

## Risks / Trade-offs

- [Risk] A placeholder GitHub URL is not a real profile -> Mitigation: keep the current placeholder clearly data-driven and replace it with the final profile before publishing.
- [Risk] The compact status bar has limited room on mobile -> Mitigation: preserve the icon-only visual footprint while retaining the full accessible name.
- [Risk] External destinations can become invalid -> Mitigation: validate the configured absolute HTTPS URL during content review.

## Migration Plan

Update the existing status-bar component and reuse the current resume link data. No route, dependency, or data migration is required; rollback is removing the anchor wrapper and restoring the static cluster.