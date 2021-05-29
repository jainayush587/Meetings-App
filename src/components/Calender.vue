<template>
    <div class="app">
        <div class="page-title">
            <h1>Calender</h1>
            <hr/>
        </div>
        <div class="date-section">
            <div class="date-display">
                <span class="date--dd-mm-yyyy">{{ moment(new Date()).format('DD-MM-YYYY') }}</span>
                <span class="day-week">{{moment().format('dddd')}}</span>
            </div>
            <div class="date-picker">
                <date-picker v-model="date" format="YYYY-MM-DD" :value="date"></date-picker>
            </div>
        </div>
        <div class="time-blocks">
            <div class="hh-block" v-for="hour in 24" :key="hour">
                <span class="hour-block">{{hour}}</span>
                <div class="rectangle-block"></div>
            </div>
            <div class="meeting-block">
                <div class="calender-meeting"
                    v-for="meeting in meetings" 
                    :style="[ getHeight( meeting ), getPosition( meeting ) ]"
                    :key="meeting.id"
                >
                    <span class="meeting-title">Project kickoff</span>
                    <hr/>
                    <div class="meeting-attendees">
                        <span class="attendees-label">Attendees :</span>
                        <span class="attendees-name">mark@example.com</span>
                        <span class="comma-space">, </span>
                        <span class="attendees-name">jane@example.com</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import '@/assets/styles/calender.css';
import Vue from 'vue';
import moment from 'moment';
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import UserService from '../services/user.service';
Vue.prototype.moment = moment;
export default {
    name: 'Calender',
    components: {
        DatePicker
    },
    data(){
        return{
            meetings: [
                { id: 1, startHour: 2, startMinute: 0, endHour: 3, endMinute: 30 },
                { id: 2, startHour: 6, startMinute: 30, endHour: 8, endMinute: 45 }
            ],
            date: '2020-10-28',
            content: '',
        }
    },
    methods: {
        getHeight( { startHour, startMinute, endHour, endMinute } ) {    
            const HEIGHT_HOUR_BOX = 30;
            const MARGIN_HOUR_BOXES = 5;
            const totalMinutes = ( endHour - startHour ) * 60 + ( endMinute - startMinute );
            return {
                height: totalMinutes * HEIGHT_HOUR_BOX / 60 + ( endHour - startHour ) * MARGIN_HOUR_BOXES + 'px'
            };
        },
        getPosition( { startHour, startMinute } ) {
            const minutesFromStartOfDay = startHour * 60 + startMinute;
            return {
                top: minutesFromStartOfDay * this.HEIGHT_HOUR_BOX / 60 + startHour * this.MARGIN_HOUR_BOXES + 'px',
            };
        }
    },
    computed: {
        currentUser() {
        return this.$store.state.auth.user;
        }
    },
    mounted() {
        if (!this.currentUser) {
        this.$router.push('/login');
        } else{
            UserService.getMeetingsOnDate(this.date).then(
            response => {
                this.content = response.data;
                console.log(this.content);
            },
            error => {
                this.content =
                (error.response && error.response.data) ||
                error.message ||
                error.toString();
            }
            );
        }
    }
}
</script>

<style scoped>

</style>