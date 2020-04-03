export default {
    actions: {
        user(ctx) {
            ctx.commit('updateLogin, user')
        },
    },
    mutations: {
        updateLogin(state, user) {
            state.user = user
        },
        createUser(state, newUser){
            state.user = newUser
        }
    },
    state: {
        user: {
            login: 'asd',
            firstname: 'asd',
            lastname: 'asd',
        }
    },
    getters: {
        user(state) {
            return state.user
        }
    },
}