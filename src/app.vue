<template>
  <div class="main">
    aaa
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

declare var Raven: any

@Component({
  mounted() {
    // try {
      const abc: any = {}
      console.log(abc["aaa"].de)
    // } catch(e) {
      // Raven.captureException(e)
    // }
  }
})
export default class App extends Vue {}
</script>
