## 1. Icon rule update

- [x] 1.1 Update the file icon mapping helper so `.ts` and `.tsx` resolve to the TypeScript icon and verify the rule is explicit
- [x] 1.2 Update the non-TypeScript mapping so bracket-style files use the bracket icon while markdown stays distinct and verify the mapping is centralized

## 2. Surface validation

- [x] 2.1 Check the explorer and search results against the corrected icon logic and verify the visual distinction matches the requirement
- [x] 2.2 Check the tab labels against the same logic and verify TypeScript tabs use the TS icon while other tabs use the bracket icon

## 3. Final verification

- [x] 3.1 Run the project build to confirm the icon mapping change did not introduce any compile regressions
- [x] 3.2 Review the rendered UI state to verify the final mapping matches the requested TypeScript-versus-bracket behavior
