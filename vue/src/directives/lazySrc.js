import Vue from 'vue'

Vue.directive('lazy-src', {
    inserted (el, { value }) {
        el.src = value

        /* Maybe we need to wait for nextTick, but trry without it first:
         Vue.nextTick(() => {
         el.src = value
         })  */
    }
})
