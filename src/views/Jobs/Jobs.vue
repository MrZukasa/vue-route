<template>
    <h1>Lavori</h1>
    <div v-if="jobs.length">
    <div v-for="job in jobs" :key='job.id' class="job">
        <router-link :to="{ name: 'JobsDetails', params: { id: job.id, details: job.details }}">
            <h4>{{job.title}}</h4>
        </router-link>
    </div>
    </div>
    <!-- scorro con un for il mio array la cui chiave è l'id 
    e ne stampo i lavori a video -->
    <div v-else>
        <p>Caricamento Lavori...</p>
    </div>
</template>

<script>
export default {
    data() {
        return {
            jobs: []                                //array vuoto che viene riempito dopo col fetch
        }
    },
    mounted(){
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => this.jobs = data)
            .catch(error => console.error(error.message))
    }
}
</script>

<style>
.job h4 {
    background: #f4f4f4;
    padding: 20px;
    border-radius: 10px;
    margin: 10px auto;
    max-width: 600px;
    cursor: pointer;
    color: #444;
}
.job h4:hover {
    background:rgb(223, 219, 219);
}
.job a {
    text-decoration: none;
}

</style>