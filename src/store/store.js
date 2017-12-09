import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    phoneNumber: '',
    isShowAlert: false
}
export default new Vuex.Store({
    state,
    mutations: {
        showTel(state, obj) {
            console.log(obj.flag + '     flag')
            console.log(obj.tel + '     tel')
            state.isShowAlert = obj.flag
            state.phoneNumber = obj.tel

            // console.log(state.phoneNumber+'   state.phoneNumber')
            console.log(state.isShowAlert + '   state.isShowAlert show')
        },
        hideAlert(state, flag) {
            console.log(flag + '     mutation传进来的flag hide')
            state.isShowAlert = flag
            console.log(state.isShowAlert + '   改过之后的state.isShowAlert hide')
        }
    },
    actions: {
        showTel({ commit }, obj) {
            commit('showTel', obj)
        },
        hideAlert({ commit }, flag) {
            commit('hideAlert', flag)
        }
    }
})