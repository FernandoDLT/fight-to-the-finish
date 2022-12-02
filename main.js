// Create an array of movie titles. Loop through the array and each element to the h2.

// let movies = ['Scarface', 'Heat', 'Batman']

// for(let i = 0; i < movies.length;i++) {
//     document.querySelector('h2').innerText += movies[i]
// }

let movieTitles = ['Jaws', 'The Mask', 'Tommy Boy', 'Cars']

for(let i = 0; i < movieTitles.length;i++) {
    document.querySelector('h2').innerText += movieTitles[i]
}


// Create an array of numbers. Loop through the array and add three to each number and replace the old number.

let nums = [10,20,30]
// nums[0] += 3
// nums[1] += 3
// nums[2] += 3

// nums.forEach((item, i) => {
//     nums[i] = item + 3
// })

// let nums = [10,20,30]

// nums.forEach((item, i) => {
//     nums[i] = item + 3
// })


// let nums = [10,20,30]

// nums[0] += 3
// nums[1] += 3
// nums[2] += 3  

// nums.forEach((item, i) => {

// })

//Find the average of all the numbers from question three

let sum = 0
for(let i = 0; i < nums.length; i++) {
    sum = sum + nums[i]
    // sum += nums[i]
}
console.log( sum / nums.length )