<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
#app {
  margin: 30px auto 0;
  max-width: 1000px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.test-pic{
  width:300px;
}
button{
  padding:6px 18px;
  line-height:24px;
  color:#fff;
  background:#409eff;
  cursor: pointer;
  outline: none;
  border:none;
  border-radius: 4px;
}
button:hover{
  background:#3294f7;
}
</style>
