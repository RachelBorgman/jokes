const Joke = require('../models/joke.model');

module.exports.findAllJokes = (req, res) => {
    Joke.find()
        .then((allDaJokes) => {
            res.json({ jokes: allDaJokes })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });
}

module.exports.findOneSingleJoke = (req, res) => {
    Joke.findOne({ _id: req.params.id })
        .then(oneSingleJoke => {
            res.json({ joke: oneSingleJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.createNewJoke = (req, res) => {
    Joke.create(req.body)
        .then(newlyCreatedJoke => {
            res.json({ joke: newlyCreatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.updateExistingJoke = (req, res) => {
    Joke.findOneAndUpdate(
        { _id: req.params.id },
        req.body,
        { new: true, runValidators: true }
    )
        .then(updatedJoke => {
            res.json({ joke: updatedJoke })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.deleteAnExistingJoke = (req, res) => {
    Joke.deleteOne({ _id: req.params.id })
        .then(result => {
            res.json({ result: result })
        })
        .catch((err) => {
            res.json({ message: 'Something went wrong', error: err })
        });}

module.exports.randomJoke = (req, res) => {
    Joke.find()
    .then((allDaJokes) => {
        return { jokes: allDaJokes }
    })
    .then((allJokes) => {
        allJokes
        // console.log("These are all the jokes:", allJokes)
        const randomJoke = Math.ceil(Math.random() * (Joke.count - 0) + 0);
        res.json({ result: allJokes[randomJoke] })
    })
    .catch((err) => {
        res.json({ message: 'Something went wrong', error: err })
    });
}

// module.exports.randomJoke = (req, res) => {
//     Joke.count().exec(function(err, count){
//         var random = Math.floor(Math.random() * count)
//         Joke.findOne().skip(random.exec(
//             function (err, result){
//                 console.log(result)
//             }
//         ))
//     })
// }
