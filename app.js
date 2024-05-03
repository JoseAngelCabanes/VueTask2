const app = Vue.createApp({
    data() {
        return {
            userName: ''
        }
    },
    methods: {
        userOutput(event) {
            this.userName = event.target.value
        },
        showAlert() {
            alert('Nice job!')
        },
    }
});

app.mount('#assignment');