## 1. File icon mapping

- [x] 1.1 Add a reusable file-extension-to-icon mapping for common code, config, markdown, and asset types, and verify unknown files fall back to a generic file icon
- [x] 1.2 Reuse the same mapping in both explorer and search result rendering and verify all mapped values produce the expected asset names

## 2. Explorer and search UI updates

- [x] 2.1 Update explorer rows to render extension-specific icons and remove folder arrows from flat file rows, then verify the visual list no longer implies a folder hierarchy
- [x] 2.2 Update search result rows to use the same icon mapping and verify they match explorer behavior for the same file type

## 3. Visual verification

- [x] 3.1 Run a UI smoke check in the app to confirm TS, TSX, JSON, Markdown, and image file entries each display the correct icon and no false folder arrows remain
- [x] 3.2 Confirm there are no broken image references or missing asset errors in the browser console during the check
