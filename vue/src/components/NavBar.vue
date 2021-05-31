<template>
  <div class="header">
    <div class="container header-container">
      <a class="brand" href="https://silang.cordx.net/">SILang</a>
      <div class="right">
        <a href="https://github.com/cordx56/silang/" target="_blank">Repository</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.header {
  padding: 1rem;
  background-color: #343a40;
  .header-container {
    display: flex;
    align-items: center;
    flex-wrap: nowrap;
  }
  .brand {
    margin: 0;
    color: #ffffff;
    font-size: 1.5rem;
    font-weight: 300;
  }
  .right {
    display: flex;
    margin-left: auto;
    margin-right: 0;
    a {
      color: hsla(0, 0%, 100%, 0.5);
      &:hover {
        color: hsla(0, 0%, 100%, 0.75);
      }
    }
  }
}
</style>

<script>
export default {
  name: 'NavBar',
};
</script>
