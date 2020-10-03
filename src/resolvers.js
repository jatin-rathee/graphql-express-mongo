import {Cat} from './models/Cat'

export const resolvers = {
    Query: {
        hello: () => "hello",
        cats: () => Cat.find()
    },
    Mutation: {
        createCat: async (_, {name}) => {
            const newCat = new Cat({ name })
            await newCat.save()
            console.log(newCat)
            return newCat
        }
    }
}