## 1. Icon mapping correction

- [x] 1.1 Update the shared icon resolver so TypeScript files map to the TypeScript icon, JSON files map to the bracket/code icon, Markdown files map to a document icon, and unsupported files fall back to a generic file icon
- [x] 1.2 Verify the resolver returns the expected icon names for the supported extension set and keep the logic centralized for reuse

## 2. Explorer and search UI alignment

- [x] 2.1 Update explorer rows to use the shared mapping and verify TypeScript, JSON, and Markdown entries display their correct file icon
- [x] 2.2 Update search results to use the same mapping and verify they match the explorer icon behavior for the same file type

## 3. Validation

- [x] 3.1 Run the project build to confirm the icon mapping fix compiles cleanly without regressions
- [x] 3.2 Review the UI behavior in the running app to confirm the corrected icon set matches the requested TypeScript, JSON, and Markdown distinctions
