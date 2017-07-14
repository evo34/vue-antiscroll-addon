<template>
  <div id="app">
    <vue-antiscroll :height="250">
            <ul>
              <li v-for="(item, index) in records" :key="index">{{item.name}}</li>
            </ul>
    </vue-antiscroll>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    let records = Array.apply(null, {length: 100}).map((ele, index) => {
      return {
        id: index,
        name: `xx--${index}--yy--qq--zz--dd`
      }
    })
    return {
      msg: 'Welcome to Your Vue.js App',
      records
    }
  },
  mounted () {
    
  },
  beforeDestroy () {
    
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
