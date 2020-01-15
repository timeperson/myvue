import Vue from 'vue';
import Toasts from './toast.vue';

let ToastConstructor = Vue.extend(Toasts);

let instance;

const Toast = function (opinions={}) {
    instance = new ToastConstructor({
        data:opinions
    }).$mount();
    document.body.appendChild(instance.$el)
}
export default Toast
