// Google Apps Script kode om in jou Google Sheets te plaas
// Gaan na script.google.com en skep 'n nuwe projek

function doPost(e) {
  try {
    // Kry die data van die POST versoek
    const data = JSON.parse(e.postData.contents)

    // Open jou Google Sheet (vervang met jou sheet ID)
    const sheet = SpreadsheetApp.openById("YOUR_SHEET_ID").getActiveSheet()

    // Voeg headers by as dit die eerste keer is
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Datum", "Naam", "Selfoon", "Bywoning", "Kommentaar"])
    }

    // Voeg die data by die sheet
    sheet.appendRow([new Date(data.timestamp), data.name, data.phone, data.attending, data.comments])

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}
