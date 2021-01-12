const {userss} = require('../data/db')

module.exports = {
    ola() {
        return 'EAE!!!'
    },
    dataNow() {
        return new Date
    },
    loginUser() {
        return {
            id: 1,
            name: 'Vinicius',
            email: 'vinicius@gmail.com',
            year: 23,
            money_real: 4574.50,
            admin: true
        }
    },
    getDiscount() {
        return {
            name: 'Batata',
            price: 23,
            discount: 0.17
        }
    },
    numbersSort() {
        const crecent = (a, b) => a - b
        return Array(6).fill(0)
        .map(n => parseInt(Math.random() * 60 + 1))
        .sort(crecent)
    },
    getUserss() {
        return userss 
    },
    setOneUser(_ , args) {
        const selection = userss.filter(u => u.id == args.id)
        return selection ? selection[0] : null
    }
}