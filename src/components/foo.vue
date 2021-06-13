<template>
  <div>
    <FullCalendar :options="calendarOptions" />
  </div>
</template>

<script>

require('@fullcalendar/daygrid/main.min.css')
require('@fullcalendar/timegrid/main.min.css')

import FullCalendar from '@fullcalendar/vue';
import DayGridPlugin from '@fullcalendar/daygrid';
import TimeGridPlugin from '@fullcalendar/timegrid';
import InteractionPlugin from '@fullcalendar/interaction';

export default {
  data(){
    return{
      calendarOptions: {
        plugins: [ DayGridPlugin, TimeGridPlugin, InteractionPlugin ],
        initialView: 'dayGridMonth'
      }
    }
  },
  components: {FullCalendar}
}
</script>

<style>

</style>