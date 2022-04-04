<template>
    <h1>Lavori</h1>
    <div v-for="job in jobs" :key='job.id'>
        <h4>{{job.title}}</h4>
    </div>
    <!-- scorro con un for il mio array la cui chiave è l'id 
    e ne stampo i lavori a video -->
</template>

<script>
export default {
    data() {
        return {
            jobs: [
                { title: 'UX Designer', id: 1, details: 'Awesome' },
                { title: 'Web Designer', id: 2, details: 'Aweful' },
                { title: 'Vue Designer', id: 2, details: 'Gorgeus' }
            ]
        }
    }
}
</script>

<style>

</style>