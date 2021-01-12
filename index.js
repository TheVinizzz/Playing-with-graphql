const {ApolloServer, gql} = require('apollo-server')

const userss = [{
    id: 10,
    name: 'Jão',
    email: 'Jão@gmail.com',
    year: 20
},{
    id: 11,
    name: 'Ana',
    email: 'AnaCL@gmail.com',
    year: 24  
}, {
    id: 12,
    name: 'Emanule',
    email: 'email@gmail.com',
    year: 15
}]

const typeDefs = gql`
    scalar Date 

    type User {
        id: ID
        name: String!
        email: String!
        year: Int
        money: Float
        admin: Boolean
    }

    type Product {
        name: String!
        price: Float!
        discount: Float
        discountPrice: Float
    }

    type Query {
        ola: String
        dataNow: Date
        loginUser: User
        getDiscount: Product
        numbersSort: [Int!]!
        getUserss: [User!]!
        setOneUser(id: ID): User
    }
`

const resolvers = {
    User: {
        money(user) {
            return user.money_real
        }
    },
    Product: {
        discountPrice(product) {
            if(product.discount){
                return product.price * (1 - product.discount)
            } 
            else {
                return product.price
            }
        }
    },
    Query: {
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
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen().then(({url}) => {
    console.log(`Executando em ${url}`)
})