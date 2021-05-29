<template>
    <div>
        <h1>Page Not Found</h1>
        <hr/>
        <p>The page you are looking for does not seen to exist. You may want to go <router-link :to="{ name: 'Calender' }">Calender</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'PageNotFound'
}
</script>

<style scoped>

</style>