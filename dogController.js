const dogs = require("./server/db.json")

let id = 1

module.exports = {
    getAllDogs: function(req,res) {
        res.status(200).send(dogs)
    },
    createDog: function(req,res) {
        console.log(req.body);
        const { name, quote, imageURL } = req.body;

        const newDog = {
            id, name, quote, imageURL };

        dogs.push(newDog);
        id++
        res.status(200).send(dogs);
    },
    updateDog:(req,res) => {
        let {id} = req.params
        let {type} = req.body
        let index = dogs.findIndex(elem => +elem.id === +id)

        if (dogs[index].sweetnessLevel <= 10000 && type ===  'minus') {
            dogs[index].sweetnessLevel = 0
            res.status(200).send(dogs)
        } else if (type === 'plus') {
            dogs[index].sweetnessLevel += 10000
            res.status(200).send(dogs)
        } else if (type === 'minus') {
            dogs[index].sweetnessLevel -= 10000
            res.status(200).send(dogs)
        } else {
            res.sendStatus(400)
        } 
    }

}