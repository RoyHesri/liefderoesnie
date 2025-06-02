// STAP-VIR-STAP INSTRUKSIES OM ENTRY IDs TE KRY:

// METODE 1: Inspect Element (Maklikste)
// 1. Gaan na jou Google Form: https://forms.gle/h5XKCfKYWa2Xp3jG9
// 2. Regs-klik op die eerste veld ("Naam van gas of paartjie")
// 3. Kies "Inspect Element" of "Inspect"
// 4. Soek vir 'name="entry.' in die HTML
// 5. Jy sal iets soos name="entry.123456789" sien
// 6. Herhaal vir elke veld

// METODE 2: Pre-filled Link
// 1. Gaan na jou Google Form
// 2. Klik op die "..." menu (3 dots) regs bo
// 3. Kies "Get pre-filled link"
// 4. Vul test waardes in vir elke veld:
//    - Naam: "Test Naam"
//    - Selfoon: "0123456789"
//    - Kommentaar: "Test kommentaar"
//    - Liedjie: "Test liedjie"
// 5. Klik "Get link"
// 6. Die link sal lyk soos:
//    https://docs.google.com/forms/d/e/1FAIpQLSfKYWa2Xp3jG9/viewform?usp=pp_url&entry.123456789=Test+Naam&entry.987654321=0123456789

// UIT HIERDIE LINK KRY JY:
// - Form ID: 1FAIpQLSfKYWa2Xp3jG9 (tussen /e/ en /viewform)
// - Entry IDs: entry.123456789, entry.987654321, ens.

// VERVANG IN DIE KODE:
// 1. Vervang "VERVANG_MET_JOUW_ID1" met jou werklike entry ID vir naam
// 2. Vervang "VERVANG_MET_JOUW_ID2" met jou werklike entry ID vir selfoon
// 3. Vervang "VERVANG_MET_JOUW_ID3" met jou werklike entry ID vir kommentaar
// 4. Vervang "VERVANG_MET_JOUW_ID4" met jou werklike entry ID vir liedjie
// 5. Vervang "1FAIpQLSfKYWa2Xp3jG9_VERVANG_MET_JOUW_WERKLIKE_ID" met jou werklike form ID

// VOORBEELD VAN FINALE KODE:
// formDataToSend.append("entry.1234567890", formData.name)
// formDataToSend.append("entry.0987654321", formData.phone)
// formDataToSend.append("entry.1122334455", fullComments)
// formDataToSend.append("entry.5544332211", formData.songRequest)

// FINALE URL:
// "https://docs.google.com/forms/d/e/1FAIpQLSfKYWa2Xp3jG9/formResponse"
