<template>
  <div class="container">
    <topbar></topbar>
    <div class="box-shadow size center top-margin border-radius">
      <h3 class="title font-weight center-text">
        {{ 'Add new contact' }}
      </h3>
      <div class="center-element">
        <input class="vertical-margin padding center-element border-radius input-border-color"
               type="text" placeholder="Name" v-model="contact.name" id="name" name="name">

        <input class="vertical-margin padding center-element border-radius input-border-color"
               type="text" placeholder="Phone" v-model="contact.phone" id="phone" name="phone">

        <select class="vertical-margin padding center-element border-radius input-border-color"
                v-model="contact.group">
          <option v-for="item in groupOptions" :key="item.name">
            {{ item }}
          </option>
        </select>
      </div>
      <div class="vertical-margin">
        <input class="padding font-weight background-color border-color border-radius center-element"
               type="submit" value="Cancel" @click="cancel()">
        <input class="padding font-weight background-color border-color border-radius center-element"
               type="submit" value="Save" @click="addEditContact()">
      </div>
    </div>
  </div>
</template>

<script>
import topbar from "../components/topbar";

export default {
  name: "contactForm",
  components: {topbar},
  data() {
    return {
      contact: {
        name: '',
        phone: '',
        group: ''
      },
      groupOptions: [
        'Friends',
        'Family',
        'Work',
        'Others'
      ]
    };
  },
  methods: {
    cancel() {
      window.location.href = '/mainApp';
    },
    addEditContact() {
      this.$root.$emit('addEditContact', this.contact);
      this.cancel();
    },
  },
}
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

.border-color-secondary {
  border-color: lightgrey;
}
</style>
