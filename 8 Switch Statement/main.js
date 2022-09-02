let day = "   Monday  ";
document .write(day.trim());
console.log(day.trim().charAt(0).toUpperCase() + day.trim().slice(1));

// You Need To Remove Spaces And Make First Letter Capital => Friday

/*
let day2 = "Friday";
let day3 = "Saturday";
let day4 = "Sunday";
// Output => "No Appointments Available"

let day5 = "Monday";
let day6 = "Thursday";
// Output => "From 10:00 AM To 5:00 PM"

let day7 = "Tuesday";
// Output => "From 10:00 AM To 6:00 PM"

let day8 = "Wednesday";
// Output => "From 10:00 AM To 7:00 PM"

let day9 = "World";
// Output => "Its Not A Valid Day"
*/


switch (day.trim().charAt(0).toUpperCase() + day.trim().slice(1)) {
    case "Friday": 
    case  "Saturday":
    case "Sunday": 
        document.write("    No Appointments Available");
        break;
    case "Monday":
    case "Thursday":
        document.write("    From 10:00 AM To 5:00 PM");
        break;
        case "Tuesday":
        document.write("    From 10:00 AM To 6:00 PM");
        break;
        case "Wednesday":
        document.write("    From 10:00 AM To 7:00 PM");
        break;
        default:
        document.write("    Its Not A Valid Day");


    }