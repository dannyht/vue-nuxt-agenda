<template>
  <div>
    <h1>{{ contactDetails.name }}</h1>
    <div>
      <div class="inline-flex-parent">
        <p>{{ 'Phone: ' }}</p>
        <h4>{{ contactDetails.phone }}</h4>
      </div>
      <div class="inline-flex-parent">
        <p>{{ 'Group: ' }}</p>
        <h4>{{ contactDetails.group }}</h4>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "contactDetails",
  data() {
    return {
      contactDetails: {
        name: '',
        phone: '',
        group: ''
      }
    }
  },
  mounted() {
    this.$root.$on('contactSelection', data => {
      this.contactDetails.name = data.name;
      this.contactDetails.phone = data.phone;
      this.contactDetails.group = data.group;
    });
  }
}
</script>

<style scoped>
.flex-parent {
  display: flex;
}

.flex-child {
  flex: 1;
}

.inline-flex-parent {
  display: inline-flex;
}
</style>
