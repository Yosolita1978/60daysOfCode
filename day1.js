/*
This is your coding interview problem for today.

This problem was asked by Dropbox.

Spreadsheets often use this alphabetical encoding for its columns: "A", "B", "C", ..., "AA", "AB", ..., "ZZ", "AAA", "AAB", ....

Given a column number, return its alphabetical column id. For example, given 1, return "A". Given 27, return "AA".
*/

const printColumn = (number) => {

    let columnName = [];
    while (number > 0){
        // Find the remainder
        let temp = number % 26;
        console.log(temp);

        if(temp === 0){
            columnName.push("Z");
            number = Math.floor(number / 26) -1;
        } else{
            columnName.push(String.fromCharCode((temp -1) + "A".charCodeAt(0)));
            number = Math.floor(number / 26);
        }

    }

    return columnName.reverse().join("");

}

console.log(printColumn(26)) // Z
console.log(printColumn(51)) // AY
console.log(printColumn(52)) // AZ
console.log(printColumn(80)) // CB
console.log(printColumn(676)) // YZ
console.log(printColumn(702)) // ZZ
console.log(printColumn(705)) // AAC

