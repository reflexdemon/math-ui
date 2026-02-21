## 1. Table Selection UI

- [x] 1.1 Add selectedTables ref array (default all 1-12)
- [x] 1.2 Add "Select All" checkbox functionality
- [x] 1.3 Add table selection panel above problem cards
- [x] 1.4 Make table selection disabled after Start is pressed

## 2. Group Problems by Table

- [x] 2.1 Restructure problems to be grouped by table number
- [x] 2.2 Create computed property for filtered problems by selected tables
- [x] 2.3 Display one card per table with 12 multiplier rows each
- [x] 2.4 Add table card header showing "Table N"

## 3. Update Print to Use Selected Tables

- [x] 3.1 Modify printWorksheet to only include selected tables
- [x] 3.2 Update print HTML to match new grouped layout

## 4. Make Inputs Readonly After Verify

- [x] 4.1 Change input :disabled to :readonly after verify
- [x] 4.2 Update CSS to show readonly styling

## 5. Add Certificate for High Scores

- [x] 5.1 Add computed property for score percentage
- [x] 5.2 Add computed property for isHighScore (>= 90%)
- [x] 5.3 Add certificate button that appears for high scores
- [x] 5.4 Implement certificate generation function
- [x] 5.5 Add large trophy icon to certificate display
- [x] 5.6 Include score percentage on certificate
- [x] 5.7 Make certificate printable
