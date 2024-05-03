const app = Vue.createApp({
  data() {
    return {
      userNameA: "",
      userNameB: "",
    };
  },
  methods: {
    userOutputA(event) {
      this.userNameA = event.target.value;
    },
    userOutputB(event) {
      this.userNameB = event.target.value;
    },
    showAlert() {
      alert("Nice job!");
    },
  },
});

app.mount("#assignment");
