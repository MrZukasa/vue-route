<template>
  <h1>Dettagli del Lavoro</h1>
  <p>Numero Lavoro: {{ id }}</p>
  <p>Dettaglio Lavoro: {{ details }}</p>
  <!-- per accedere al parametro relativo alla route dobbiamo usare questa formula -->
</template>

<script>
export default {
    props: ['id','details'],                    //i parametri passati dalla route diventano props
    // data(){
    //     return {
    //         id: this.$route.params.id,
    //         details: this.$route.params.details      se passiamo i parametri come props non serve questo
    //     }
    // }
}
</script>

<style>

</style>