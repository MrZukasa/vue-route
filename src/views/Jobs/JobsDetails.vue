<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>Numero Lavoro: {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Caricamento dettaglio lavori...</p>
  </div>
</template>

<script>
export default {
    props: ['id'],                    //i parametri passati dalla route diventano props
    // data(){
    //     return {
    //         id: this.$route.params.id,
    //         details: this.$route.params.details      se passiamo i parametri come props non serve questo
    //     }
    // }
    data(){
      return {
        job: null
      }
    },
    mounted(){
        fetch('http://localhost:3000/jobs/' + this.id)
          .then(res => res.json())
          .then(data => this.job = data)
          .catch(error => console.error(error.message))
    }
}
</script>

<style>

</style>