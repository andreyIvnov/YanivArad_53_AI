// Your goal is to write a function that recives an array of Person objects.
// Each Person object has name and age properties. The function returns a number.

function getAverageAge(people) {
    if (!Array.isArray(people) || people.length === 0) {
        throw new Error("Input must be a non-empty array");
    }
    
    const totalAge = people.reduce((sum, person) => {
        if (typeof person.age !== 'number') {
            throw new Error("Each person must have a numeric age property");
        }
        return sum + person.age;
    }, 0);
    
    return totalAge / people.length;
}
