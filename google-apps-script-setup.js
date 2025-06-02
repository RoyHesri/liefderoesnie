// KOPIEER HIERDIE KODE IN JOU GOOGLE APPS SCRIPT PROJEK

function doPost(e) {
  try {
    // Kry die data van die POST versoek
    const data = JSON.parse(e.postData.contents)

    // VERVANG "JOU_SHEET_ID" MET JOU WERKLIKE GOOGLE SHEET ID
    // Byvoorbeeld: "1rEst8tQSe7FSvjisUv2F8ZlolPqMg5gBzJ7r6nzqPEY"
    const sheet = SpreadsheetApp.openById("JOU_SHEET_ID").getActiveSheet()

    // Voeg headers by as dit die eerste keer is
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Datum", "Naam", "Selfoon", "Bywoning", "Kommentaar", "Liedjie"])
    }

    // Voeg die data by die sheet
    sheet.appendRow([new Date(), data.name, data.phone, data.attending, data.comments, data.songRequest])

    return ContentService.createTextOutput(JSON.stringify({ success: true })).setMimeType(ContentService.MimeType.JSON)
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ success: false, error: error.toString() })).setMimeType(
      ContentService.MimeType.JSON,
    )
  }
}
