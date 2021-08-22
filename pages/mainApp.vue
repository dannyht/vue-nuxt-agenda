<template>
  <div>
    <topbar></topbar>
    <div class="flex-parent">
      <div class="flex-child box-shadow size border-radius vertical-margin horizontal-margin parent-div">
        <div>
          <contact-list></contact-list>
        </div>
        <div class="child-div">
          <input class="padding font-weight background-color border-color-primary border-radius center-element"
                 type="submit" value="Add new contact" @click="addEditContact(0)">
        </div>
      </div>
      <div class="flex-child parent-div vertical-margin horizontal-margin">
        <div>
          <contact-details></contact-details>
        </div>
        <div class="child-div">
          <div class="flex-parent">
            <input class="flex-child padding font-weight border-color-secondary border-radius center-element"
                   type="submit" value="Edit Contact" @click="addEditContact(1)">
            <input class="flex-child padding font-weight border-color-secondary border-radius center-element"
                   type="submit" value="Delete Contact">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {defineComponent} from '@vue/composition-api';
import topbar from '~/components/topbar.vue';
import ContactList from "~/components/contactList";
import ContactDetails from "~/components/contactDetails";

export default defineComponent({
  name: 'mainApp',
  setup() {
  },
  methods: {
    addEditContact(editMode) {
      if (editMode) {

      }
      window.location.href = '/contactForm';
    }
  },
  components: {ContactDetails, ContactList, topbar}
});
</script>

<style scoped>

.box-shadow {
  box-shadow: 0px 0px 3px 3px lightgrey;
}

.flex-parent {
  display: flex;
}

.flex-child {
  flex: 1;
}

.parent-div {
  position: relative;
}

.parent-div .child-div {
  position: absolute;
  bottom: 0;
  left: 0;
}

.size {
  min-height: 820px;
  max-height: 850px;
  min-width: 320px;
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

.horizontal-margin {
  margin-left: 4%;
  margin-right: 4%;
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

.border-color-primary {
  border-color: #F5C518;
}

.border-color-secondary {
  border-color: lightgrey;
}

.center-element {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.border-radius {
  border-radius: 5px;
}
</style>
