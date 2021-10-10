export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    getters: {
        authenticated(state) {
            console.log(state)
           // return true
            
            return state.token && state.user;
        },
        user(state) {
            return state.user;
        }

    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, data) {
            state.user = data;
        }
    },
    actions: {
        async signIn({ dispatch }, credentials) {
            console.log(dispatch)
            console.log(credentials)
        },
        async attempt({ commit, state }, token) {
            console.log(commit,state,token)


        },
        signOut({ commit }) {
            commit('SET_TOKEN', null);
            commit('SET_USER', null);
        }

    },
    modules: {}
}