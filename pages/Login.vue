<template>
  <div class="container">
    <topbar></topbar>
    <div class="box-shadow size center top-margin border-radius">
      <h3 class="title font-weight center-text">
        {{ 'Login' }}
      </h3>
      <div class="center-element">
        <input class="vertical-margin padding center-element border-radius input-border-color"
         type="text" placeholder="Username" v-model="input.username" id="username" name="username">

        <input class="vertical-margin padding center-element border-radius input-border-color"
         type="password" placeholder="Password" v-model="input.password" id="password" name="password">
      </div>
      <div class="vertical-margin">
        <input class="padding font-weight background-color border-color border-radius center-element"
         type="submit" value="Login" @click="login()">
      </div>
      <div class="font-weight center-text message-text-color">
        {{ loginMessage }}
      </div>
    </div>
    <div v-if="this.isLoggedIn" class="center-element">
      <input class="vertical-margin padding font-weight background-color border-color border-radius center-element"
        type="submit" value="Go to Main App" @click="goToMainApp()">
    </div>
  </div>
</template>

<script>
import {defineComponent} from '@vue/composition-api';
import topbar from '~/components/topbar.vue';

export default defineComponent({
  name: 'login',
  data () {
    return {
      input: {
        username: '',
        password: '',
      },
      loginMessage: '',
      isLoggedIn: false
    };
  },
  methods: {
    login () {
      if (
        this.input?.username !== '' && this.input?.password !== '' &&
        this.input?.username!== null && this.input?.password !== null &&
        this.input?.username !== undefined && this.input?.password !== undefined
      ) {
        this.loginMessage = 'Login was successful!';
        this.isLoggedIn = true;
      } else {
        this.loginMessage = 'Login failed! Incorrect username or password!';
        this.isLoggedIn = false;
      }
    },
    goToMainApp () {
      window.location.href = '/mainApp';
    }
  },
  components: {topbar},
  setup () {

  },
});
</script>

<style scoped>
  .box-shadow {
    box-shadow: 0px 0px 3px 3px lightgrey;
  }
  .input-border-color {
    border-color: lightgrey;
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
  .vertical-margin {
    margin-bottom: 4%;
    margin-top: 4%;
  }
  .top-margin {
    margin-top: 15%;
  }
  .padding {
    padding: 10px 55px;
  }
  .font-weight {
    font-weight: bolder;
  }
  .background-color {
    background-color: #F5C518;
  }
  .border-color {
    border-color: #F5C518;
  }
  .center-element {
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
  .center-text {
    text-align: center;
  }
  .border-radius {
    border-radius: 5px;
  }
  .message-text-color {
    color: #585858;
  }
</style>
