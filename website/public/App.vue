// app instance
const app = {
    data() {
        return {
            message: "Hello world!"
        }
    }
};

Vue.createApp(app).mount("#app");


// import { createApp } from "vue";
// 
// const app = createApp({
//   // root instance definition
// });
// 
// app.mount("#app");