<template>
  <div id="runCode">
    <form @submit="runCode" id="runCodeForm">
      <textarea id="codeArea" v-model="code" required rows="8"></textarea>
      <button type="submit" id="submitButton" class="button">Run</button>
    </form>
    <div v-if="stderr" class="block">
      <h3 class="title">Error</h3>
      <pre id="error">
        <code>
          {{ stderr }}
        </code>
      </pre>
    </div>
    <div v-if="stdout" class="block">
      <h3 class="title">Output</h3>
      <pre id="output">
        <code>
          {{ stdout }}
        </code>
      </pre>
    </div>
    <div v-if="parseTree" class="block">
      <h3 class="title">Parse tree</h3>
      <pre id="parseTree">
        <code>
          {{ parseTree }}
        </code>
      </pre>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'RunCode',
  data() {
    return {
      code: `f: gcd ((:: a int) (:: b int)) int {
    if (== b 0) {
        return a
    }
    return (gcd b (% a b))
}

= (:: (x y z) (float float float)) (1.2 2.3 3.4)
println "x = " x ", y = " y ", z = " z
{
    :: x string
    = x "Hello"
    = (:: y string) ", world!"
    println (+ x y)
    = z 3.14
}
println "x = " x ", y = " y ", z = " z

println (gcd 256 56)

import "math"
println (math.sin math.PI)`,
      stdout: '',
      parseTree: '',
      stderr: '',
    };
  },
  methods: {
    runCode(evt) {
      evt.preventDefault();
      this.stdout = '';
      this.parseTree = '';
      this.stderr = '';
      axios
        .post('/api/run', { code: this.code })
        .then((response) => {
          if (response.data.status) {
            this.stdout = response.data.stdout;
            this.parseTree = response.data.parseTree;
          } else {
            this.stderr = response.data.stderr;
          }
        })
        .catch((error) => {
          this.stderr = String(error);
        });
    },
  },
};
</script>

<style lang="scss">
#codeArea {
  width: 100%;
  padding: 0.5rem;
  border-radius: 4px;
  font-family: SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono,
    Courier New, monospace;
  @include light {
    color: $text-color-light;
    background-color: $background-sub-color-light;
    border: 1px solid $border-color-light;
  }
  @include dark {
    color: $text-color-dark;
    background-color: $background-sub-color-dark;
    border: 1px solid $border-color-dark;
  }
}
#submitButton {
  font-size: 1.2rem;
  margin-top: 0.5rem;
}
.block {
  margin: 1rem 0;
  padding: 0 1.5rem;
  border-radius: 4px;
  text-align: left;
  @include light {
    border: 1px solid $border-color-light;
  }
  @include dark {
    border: 1px solid $border-color-dark;
  }
}
</style>
