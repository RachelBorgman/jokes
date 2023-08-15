const mongoose = require('mongoose');

const JokeSchema = new mongoose.Schema({
    setup: {
        type: String,
        required: [true, "Setup is required"],
        minlength: [10, "Setup must be at least 10 characters long"]
    },
    punchline: {
        type: String,
        required: [true, "Punchline is required"],
        minlength: [3, "Punchline must be at least 3 characters long"]
    }
});

// function getRandomArbitrary(min, max) {
//     return Math.ceil(Math.random() * (max - min) + min);
// }

const Joke = mongoose.model('Joke', JokeSchema);

// Joke.count({your_query},function(err,count){
//     var skipRecords = getRandomArbitrary(1, count-limitrecords);
//     query.skip(skipRecords); // Random Offset
//     query.exec(function(err,result){
//       console.log(result);  // 10 random users 
//     });
// });

module.exports = Joke;
