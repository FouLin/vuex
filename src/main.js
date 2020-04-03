import Vue from 'vue'
import store from './store'
import App from './App.vue'
// eslint-disable-next-line no-unused-vars
import fieldMapping from './fieldMapping.vue'

Vue.config.productionTip = true;

new Vue({
    render: h => h(App),
    store,
})
    .$mount('#app');

new Vue({
    store,
    render: h => h(fieldMapping),
}).$mount('#info');

