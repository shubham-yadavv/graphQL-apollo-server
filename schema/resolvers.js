const { users } = require('../data');

const resolvers = {
    Query: {
        getUsers: () => {
            return users;
        }

    },
    Mutation: {
        createUser: (parent, args) => {
            const newUser = {
                id: users.length + 1,
                name: args.name,
                age: args.age,
                programmer: args.programmer

            };
            users.push(newUser);
            return newUser;
        },
        updateUser: (parent, args) => {
            const user = users.find(user => user.id === args.id);
            user.name = args.name;
            user.age = args.age;
            user.programmer = args.programmer;
            return user;
        },
        deleteUser: (parent, args) => {
            const user = users.find(user => user.id === args.id);
            const index = users.indexOf(user);
            users.splice(index, 1);
            return user;
        }
    }
};




module.exports = {
    resolvers
}
