## 1. Component extraction

- [x] 1.1 Create the new component directory structure under `app/components/` and verify the files are present before moving code
- [x] 1.2 Extract the shared icon, helper, and type definitions into a reusable module and verify imports remain consistent

## 2. UI section refactor

- [x] 2.1 Extract the top bar and activity bar components and verify the shell still renders without layout regressions
- [x] 2.2 Extract the explorer, search, and source control panels and verify panel selection behavior still works
- [x] 2.3 Extract the tabs, editor document, and status bar components and verify the resume content still displays correctly
- [x] 2.4 Extract the terminal and theme logic into dedicated components and verify the terminal, menu, and theme toggles still operate as before

## 3. Final validation

- [x] 3.1 Run the project build to confirm the refactor compiles successfully with the new component structure
- [x] 3.2 Check the rendered app behavior to confirm the UI remains functionally equivalent after the split
