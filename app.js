// var lastName1 = 'Doe'

var vm = Vue.createApp({
    data() {
        return {
            firstName: 'John',
            lastName: 'Doe'
        }
    },
    methods: {
        fullName() {
            return `${this.firstName} ${this.lastName.toUpperCase()}`
        }
    }
}).mount('#app');

setTimeout(() => {
    vm.firstName = 'Bob' // Ideally we should use vm.$data.firstName but we are not doing that here because of a property of Vue called proxy. Vue has proxy getters and setters to manipulate data directly. This can be seen directly by entering 'vm' in the console and seing it's values.
}, 2000);

// Vue.createApp({
//     data() {
//         return {
//             firstName: 'Jane',
//             lastName: 'Doe'
//         }
//     }
// }).mount('.app2')