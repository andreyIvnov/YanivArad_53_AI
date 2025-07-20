// create a function that calculates the days between two dates
function daysBetween(date1, date2) {
  
 
    if (!(date1 instanceof Date) || isNaN(date1)) {
        throw new Error("date1 must be a valid Date object");
    }
    if (!(date2 instanceof Date) || isNaN(date2)) {
        throw new Error("date2 must be a valid Date object");
    }
    const diffTime = Math.abs(date2 - date1);
  
    return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}
