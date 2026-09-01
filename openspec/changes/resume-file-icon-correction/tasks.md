## 1. Correct icon mapping

- [x] 1.1 Update the shared file icon helper so `.ts` and `.tsx` resolve to the TypeScript icon and verify the rule is explicit
- [x] 1.2 Update markdown and JSON mapping so `.md` resolves to the document icon and `.json` resolves to the bracket/code icon
- [x] 1.3 Keep the fallback icon limited to truly unknown or unsupported extensions and verify no known file types are misclassified

## 2. Surface validation

- [x] 2.1 Check explorer rows and verify the file icon matches each section's extension
- [x] 2.2 Check search results and verify the same extension-based icon logic is applied there
- [x] 2.3 Check tabs and verify the open file labels use the same icon mapping as explorer rows

## 3. Final verification

- [x] 3.1 Run the project build to confirm the icon correction did not introduce regressions
- [x] 3.2 Review the rendered UI to verify README, experience, skills, and other resume sections match their expected file icons
