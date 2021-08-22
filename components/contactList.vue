<template>
  <div class="horizontal-margin vertical-margin padding">
    <input class="vertical-margin horizontal-margin padding center-element border-radius border-color-secondary"
           type="text" v-model="search" placeholder="Filter..." id="username" name="username">
    <a href="" class="align-right horizontal-margin">
      {{ 'Advanced filter' }}
    </a>
    <div v-if="search === ''" v-for="(value, key) in grouped">
      <h2 class="group-key-colour-tertiary">
        {{ key }}
      </h2>
      <div>
        <div v-for="contact in value" :key="contact.phone" @click="selectContact(contact)">
          {{ contact.name }}
        </div>
      </div>
    </div>
    <div v-else>
      <div v-for="contact in filteredContacts" :key="contact.phone">
        {{ contact.name }}
      </div>
    </div>
  </div>
</template>

<script>
import _ from 'lodash';

export default {
  name: "contactList",
  data() {
    return {
      search: '',
      contacts: [
        {
          name: 'Al Pacino',
          phone: '0123456783',
          group: 'Friends'
        },
        {
          name: 'Antony Hopkins',
          phone: '0123456782',
          group: 'Friends'
        },
        {
          name: 'Brad Pitt',
          phone: '0123456781',
          group: 'Friends'
        },
        {
          name: 'Tommy Lee Jones',
          phone: '0123456780',
          group: 'Friends'
        }
      ]
    }
  },
  computed: {
    grouped() {
      return _.groupBy(this.contacts, (item) => {
        return item.name.charAt(0);
      })
    },
    filteredContacts() {
      return this.contacts.filter(item => {
        return item.name.toLowerCase().indexOf(this.search.toLowerCase()) > -1;
      })
    }
  },
  methods: {
    selectContact(contact) {
      this.$root.$emit('contactSelection', contact);
    },
  },
  mounted() {
    this.$nextTick(function () {
      this.$root.$emit('contactSelection', this.contacts[0]);
    });
    this.$root.$on('addEditContact', data => {
      this.contactDetails.name = data.name;
      this.contactDetails.phone = data.phone;
      this.contactDetails.group = data.group;
    });
  }
}
</script>

<style scoped>
.vertical-margin {
  margin-bottom: 4%;
  margin-top: 4%;
}

.horizontal-margin {
  margin-left: 4%;
  margin-right: 4%;
}

.padding {
  padding: 10px 55px;
}

.group-key-colour-tertiary {
  color: #99C453
}

.align-right {
  float: right;
}

.center-element {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

.border-radius {
  border-radius: 5px;
}

.border-color-secondary {
  border-color: lightgrey;
}
</style>
