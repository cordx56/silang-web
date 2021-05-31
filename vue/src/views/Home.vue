<template>
  <div class="home">
    <h1>SILang</h1>
    <h2>Simple Interpreter Language <small class="text-secondary">beta</small></h2>
    <h3 class="text-secondary">v0.3.0-beta</h3>
    <RunCode />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import RunCode from '@/components/RunCode.vue';

@Options({
  components: {
    RunCode,
  },
})
export default class Home extends Vue {}
</script>

<style lang="scss">
.home {
  text-align: center;
}
</style>
