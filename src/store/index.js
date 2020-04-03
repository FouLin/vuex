import Vue from 'vue'
import Vuex from 'vuex';
import register from './register/register'

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        register
    },
})