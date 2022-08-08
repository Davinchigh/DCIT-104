//Students ID: 10941108
//write a funtion that takes in a number and returns the average of all the even numbers from 1 to that number (inclusive)
//example: evenAverage(10) should return 5

function EvenAverage (limit) {
    let average = 0;
    for (let i = 1; i <= limit; i++) {
        if (i % 2 === 0) {
            let currentnum = array[i];
            average += currentnum;
        }
    }
    average = average / array.length
    return average;
}
