<template>
  <div class="app">
      <div class="holder">
          <ul>
              <li v-for="(data, index) in skills" :key='index'>{{index}}. {{data.skill}}</li>
          </ul>

          <p>These are the skills that you possess.</p>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Skills',
    data(){
        return{
            skills:[
                { 'skill': 'Vue.js' },
                { 'skill': 'Frontend Developer' }
            ]
        }
    }
}
</script>

<style scoped>
 .holder{
     display: block;
     width: 100%;
     align-items: center;
 }
</style>