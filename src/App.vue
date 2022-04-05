<template>
  <nav>
    <router-link to="/">Home</router-link> 
    <!-- <router-link to="/about">About</router-link> -->
    <router-link :to="{ name: 'About' }">About</router-link>      <!-- posso databindare un oggetto per passare il riferimento del to -->
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>

  <!-- muoversi attraverso la history del browser -->
  <button @click="redirect">Redirect</button>
  <button @click="indietro">Indietro</button>
  <button @click="avanti">Avanti</button>

  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home'})
    },
    indietro() {
      this.$router.go(-1)
    },
    avanti() {
      this.$router.go(1)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}

nav {
  padding: 30px;
}

nav a {                                               /*queste sono le classi che vengono applicate a tutti gli a normali*/
  font-weight: bold;
  color: #13273a;
  text-decoration: none;
  padding: 10px;
  border-radius: 4px;

}

nav a.router-link-exact-active {                      /*queste sono le classi che vengono applicate al nostro*/
  color: #525852;                                   /*router-link quando diventa attivo*/
  background: lightgreen;
}
</style>
