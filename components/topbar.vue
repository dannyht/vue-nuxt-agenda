<template>
    <div class="topbar">
        <a href="#news" class="align-left">
            <font-awesome-icon :icon="['fas', 'bars']"/>
        </a>
        <a href="#about" class="align-right">
            <font-awesome-icon :icon="['fas', 'user']"/>
        </a>
    </div>
</template>

<script>
import {defineComponent} from '@vue/composition-api';

export default defineComponent({
  name: 'topbar',
  setup() {

  },
});
</script>

<style scoped>
    .topbar {
        overflow: hidden;
        background-color: #333;
    }

    .topbar a {
        float: left;
        color: #f2f2f2;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 17px;
    }

    .topbar a:hover {
        background-color: #ddd;
        color: black;
    }

    .topbar a.active {
        background-color: #04AA6D;
        color: white;
    }

    .align-left {
        float: left !important;
        text-align: left !important;
    }

    .align-right {
        float: right !important;
        text-align: right !important;
    }
</style>
