# Google Sheets Setup (via Apps Script)

## 1. Create the Spreadsheet

1. Go to [sheets.google.com](https://sheets.google.com/) → create new spreadsheet
2. Name it (e.g. `Campus Crew Waitlist`)
3. Add this header row in **Row 1**:

| A | B | C | D | E | F |
|---|---|---|---|---|---|
| Submitted At | Name | Email | Year | Department | Reason |

## 2. Add the Apps Script

1. In the spreadsheet: **Extensions** → **Apps Script**
2. Delete everything in `Code.gs` and paste:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  var emails = sheet.getRange("C:C").getValues().flat().map(function(v) {
    return v.toString().toLowerCase();
  });
  if (emails.indexOf(data.email.toLowerCase()) !== -1) {
    return ContentService.createTextOutput(
      JSON.stringify({ error: "This email is already on the waitlist" })
    ).setMimeType(ContentService.MimeType.JSON);
  }

  sheet.appendRow([
    new Date().toISOString(),
    data.name || "",
    data.email || "",
    data.year || "",
    data.department || "",
    data.reason || ""
  ]);

  var position = sheet.getLastRow() - 1;
  return ContentService.createTextOutput(
    JSON.stringify({ success: true, position: position })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. Save (Ctrl+S)

## 3. Deploy

1. Click **Deploy** → **New deployment**
2. Type: **Web app**
3. Execute as: **Me**
4. Who has access: **Anyone**
5. Click **Deploy** → **Authorize access** → allow permissions
6. Copy the **Web app URL**

## 4. Set Environment Variable

Create `.env.local` in the project root:

```
GOOGLE_SCRIPT_URL=https://script.google.com/macros/s/YOUR_SCRIPT_URL/exec
```

For Vercel: add `GOOGLE_SCRIPT_URL` in **Settings** → **Environment Variables**.

## 5. Test

Restart the dev server (`npm run dev`), submit the form, check the spreadsheet.

## Troubleshooting

| Problem | Fix |
|---------|-----|
| 500 "Server misconfigured" | `GOOGLE_SCRIPT_URL` not set — check `.env.local` and restart dev server |
| No row appears | Check Apps Script deployment is set to "Anyone" access |
| Duplicate error | Working as intended — same email can't join twice |
| Apps Script error | Open Apps Script → **Executions** tab to see logs |
