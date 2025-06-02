// STAP-VIR-STAP OM ENTRY IDs TE KRY:

// 1. Gaan na jou Google Form
// 2. Regs-klik op die eerste veld
// 3. Kies "Inspect Element"
// 4. Soek vir name="entry. in die HTML
// 5. Jy sal iets soos hierdie sien:

// VOORBEELD VAN WAT JY SAL SIEN:
// <input type="text" name="entry.123456789" ...>
// <input type="tel" name="entry.987654321" ...>
// <textarea name="entry.456789123" ...></textarea>
// <input type="text" name="entry.321654987" ...>

// SKRYF HIERDIE NOMMERS NEER:
// Naam veld: entry.123456789
// Selfoon veld: entry.987654321
// Kommentaar veld: entry.456789123
// Liedjie veld: entry.321654987

// ALTERNATIEWE METODE:
// 1. Gaan na jou form
// 2. Klik op "..." menu (3 dots)
// 3. Kies "Get pre-filled link"
// 4. Vul test waardes in
// 5. Klik "Get link"
// 6. Die URL sal die entry IDs wys

// VOORBEELD VAN PRE-FILLED LINK:
// https://docs.google.com/forms/d/e/1FAIpQLSfKYWa2Xp3jG9/viewform?usp=pp_url&entry.123456789=TestNaam&entry.987654321=TestFoon

// UIT HIERDIE LINK KRY JY:
// - Form ID: 1FAIpQLSfKYWa2Xp3jG9
// - Entry IDs: 123456789, 987654321, ens.
