## Why

The VS Code-style status bar currently shows a non-interactive `main*` version-control label, while the resume's GitHub destination is only available inside the contact document. Making the version-control section link directly to the resume owner's GitHub profile gives visitors a fast, discoverable path to source and work samples.

## What Changes

- Turn the status-bar version-control section into an accessible external GitHub link.
- Display the GitHub handle or URL associated with the resume identity, using the resume data source rather than hardcoded duplicate content.
- Preserve the Figma status-bar placement, icon, colors, spacing, and compact visual treatment.
- Open the GitHub destination in a new tab with appropriate external-link security behavior.
- Provide a clear accessible name and visible keyboard focus state for the link.
- Keep the existing contact section GitHub entry consistent with the status-bar destination.

## Capabilities

### New Capabilities

- `github-version-control-link`: A data-driven GitHub link in the resume's version-control status-bar section.

### Modified Capabilities

- None.

## Impact

- Resume data: the existing GitHub link model in `app/resume-data.ts` becomes the single source for both contact and status-bar destinations.
- UI: the status bar implementation in `app/page.tsx` and its link/focus styling in `app/globals.css`.
- Runtime behavior: selecting the version-control area navigates to the configured GitHub profile in a separate tab.
- Dependencies and APIs: none.
- Content assumption: the current placeholder identity uses the `alexmorgan` handle; the final handle can be replaced in the typed resume data without changing the UI contract.