<template>
  <NavBar />
  <div class="container">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import NavBar from '@/components/NavBar.vue';
@Options({
  components: {
    NavBar,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

.container {
  width: 100%;
  margin: auto;
  padding: 0 15px;

  @include size-sm {
    max-width: 540px;
  }
  @include size-md {
    max-width: 720px;
  }
  @include size-lg {
    max-width: 960px;
  }
  @include size-xl {
    max-width: 1140px;
  }
}

body,
html {
  margin: 0;
  @include light {
    background-color: $background-color-light;
  }
  @include dark {
    background-color: $background-color-dark;
  }
}

a {
  text-decoration: none;
}

code,
pre {
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
    Courier New, monospace;
}

.text-secondary {
  @include light {
    color: $text-sub-color-light;
  }
  @include dark {
    color: $text-sub-color-dark;
  }
}

.button {
  padding: 0.5rem 2rem;
  background-color: transparent;
  border-radius: 4px;
  @include light {
    color: $accent-color-light;
    border: 1px solid $accent-color-light;
  }
  @include dark {
    color: $accent-color-dark;
    border: 1px solid $accent-color-dark;
  }
  &:hover {
    @include light {
      color: #ffffff;
      background-color: $accent-color-light;
    }
    @include dark {
      color: #ffffff;
      background-color: $accent-color-dark;
    }
  }
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  @include light {
    color: $text-color-light;
  }
  @include dark {
    color: $text-color-dark;
  }
}
</style>
