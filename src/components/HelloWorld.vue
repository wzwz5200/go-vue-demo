<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
     "死亡如风，常伴吾身"
      
    </p>
    <!-- <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router" target="_blank" rel="noopener">router</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul> -->
    <h3>联系链接</h3>
    <ul>
      <li><a href="hhttps://steamcommunity.com/profiles/76561198887872517/" target="_blank" rel="noopener">Steam</a></li>
      <li><a href="https://space.bilibili.com/411569914?spm_id_from=333.1007.0.0" target="_blank" rel="noopener">bilibili</a></li>
      <li><a href="https://88866677.xyz/" target="_blank" rel="noopener">Blog</a></li>
      <li><a href="https://user.qzone.qq.com/3316483907" target="_blank" rel="noopener">QQ空间</a></li>

    </ul>
   
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
