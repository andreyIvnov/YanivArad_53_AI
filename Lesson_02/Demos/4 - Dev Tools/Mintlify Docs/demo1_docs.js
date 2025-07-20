/**
 * The function calculates the number of days between two Date objects.
 * @param date1 - The `date1` parameter is the first date for which you want to calculate the number of
 * days between it and another date. It should be a valid Date object.
 * @param date2 - date2 is the second date for which you want to calculate the number of days between
 * it and date1.
 * @returns The function `daysBetween` calculates the number of days between two dates provided as
 * arguments. It first validates that both `date1` and `date2` are valid Date objects. Then, it
 * calculates the absolute difference in milliseconds between the two dates and converts it to days
 * before returning the result.
 */
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
