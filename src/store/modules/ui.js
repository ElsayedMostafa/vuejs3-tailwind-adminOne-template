export default {
    namespaced: true,
    state: {

        /* Aside */
        isAsideMobileExpanded: false,
        isAsideLgActive: false,
    },

    getters: {
        sideBarOpen: state => {
            return state.sideBarOpen
        }
    },

    mutations: {
        /* A fit-them-all commit */
        basic(state, payload) {
            state[payload.key] = payload.value
        }
    },

    actions: {
        asideMobileToggle({ commit, state }, payload = null) {
            const isShow = payload !== null ? payload : !state.isAsideMobileExpanded

            document.getElementById('app').classList[isShow ? 'add' : 'remove']('ml-60')

            document.documentElement.classList[isShow ? 'add' : 'remove']('m-clipped')

            commit('basic', {
                key: 'isAsideMobileExpanded',
                value: isShow
            })
        },
        asideLgToggle({ commit, state }, payload = null) {
            commit('basic', { key: 'isAsideLgActive', value: payload !== null ? payload : !state.isAsideLgActive })
        },

    },

}