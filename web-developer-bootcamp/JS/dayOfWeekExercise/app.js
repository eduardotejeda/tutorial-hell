function returnDay(num) {
    let days = {
        1 : "Monday",
        2 : "Tuesday",
        3 : "Wednesday",
        4 : "Thursday",
        5 : "Friday",
        6 : "Saturday",
        7 : "Sunday"
    }
    
    if(num === 1) {
        return days[1] 
    } else if (num === 2) {
        return days[2]
    }else if (num === 3) {
        return days[3]
    }else if (num === 4) {
        return days[4]
    }else if (num === 5) {
        return days[5]
    }else if (num === 6) {
        return days[6]
    }else if (num === 7) {
        return days[7]
    } else {
        return null
    }
    
}

