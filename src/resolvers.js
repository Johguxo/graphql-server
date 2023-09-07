import { v1 as uuid } from 'uuid'

const persons = [
  {
    id: '1',
    name: 'Johann',
    phone: '12222',
    city: 'Lima',
    country: 'Peru'
  },
  {
    id: '2',
    name: 'Midu',
    phone: '12222',
    city: 'Barcelona',
    country: 'Spain'
  }
]

const books = [
  {
    title: 'New book',
    author: persons[0]
  },
  {
    title: 'Old book',
    author: persons[0]
  }
]

const resolvers = {
  Query: {
    personCount: () => persons.length,
    allPersons: () => persons,
    findPerson: (root, args) => {
      const { id } = args
      return persons.find(person => person.id == id)
    },
    allBooks: () => books
  },
  Mutation: {
    addPerson: (root, args) => {
      const person =  { ...args, id: uuid() }
      persons.push(person)
      return person
    }
  },
  Person: {
    address: (root) => {
      return {
        country: root.country, 
        city: root.city
      }
    }
  }
}

export default resolvers