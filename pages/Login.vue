<template>
    <div class="container">
        <topbar></topbar>
        <div class="box-shadow size center">
          <p class="title">
              {{ 'Login' }}
          </p>
          <div>
              <input type="text" placeholder="Username"
              v-model="input.username" id="username" name="username">

              <input type="password" placeholder="Password"
              v-model="input.password" id="password" name="password">

              <input type="submit" value="Login" @click="login()">
          </div>
          <div>
              {{ loginMessage }}
          </div>
        </div>
    </div>
</template>

<script>
import {defineComponent} from '@vue/composition-api';
import topbar from '~/components/topbar.vue';

export default defineComponent({
  name: 'login',
  data() {
    return {
      input: {
        username: '',
        password: '',
      },
      loginMessage: '',
    };
  },
  methods: {
    login() {
      if (
        this.input?.username !== '' && this.input?.password !== '' &&
        this.input?.username!== null && this.input?.password !== null &&
        this.input?.username !== undefined && this.input?.password !== undefined
      ) {
        this.loginMessage = 'Login was successful!';
      } else {
        this.loginMessage = 'Login failed! Incorrect username or password!';
      }
    },
  },
  components: {topbar},
  setup() {

  },
});
</script>

<style scoped>
  .box-shadow {
    box-shadow: 0px 0px 3px 3px lightgrey;
  }
  .size {
    min-height: 200px;
    max-height: 400px;
    min-width: 350px;
    max-width: 350px;
  }
  .center {
    margin: auto;
    width: 60%;
    padding: 10px;
  }
</style>
