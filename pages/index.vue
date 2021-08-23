<template id="app">
  <topbar></topbar>
</template>

<script lang="ts">
import Vue from 'Vue'
import {store} from '~/store';

new Vue({
  el: '#app',
  store
});

</script>
