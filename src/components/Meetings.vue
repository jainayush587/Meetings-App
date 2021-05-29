<template>
  <div class="app">
    <div class="page-title">
        <h1>Meetings</h1>
        <hr/>
    </div>
    <div class="meeting-section">
        <input type="radio" id="filter-meetings" name="meetings" checked="checked">
        <label for="filter-meetings" class="meeting-tab-view">Filter/Search meetings</label>
        <div class="filter-meeting tab-view">
            <div class="search-add-meeting">
                <h2>Search for meetings</h2>
                <hr/>
                <form action="#" method="POST" class="search-form">
                    <label for="meeting-search-date">Date</label>
                    <select name="meeting-search-date" id="meeting-search-date">
                        <option value="All" selected>ALL</option>
                        <option value="PAST">PAST</option>
                        <option value="TODAY">TODAY</option>
                        <option value="UPCOMING">UPCOMING</option>
                    </select>
                    <label for="keywords">Search for</label>
                    <textarea name="keywords-text-area" id="keywords" placeholder="Search using words which describe the meeting"></textarea>
                    <div class=" btn search-submit-btn">
                        <button type="submit">Search</button>
                    </div>
                </form>
            </div>
            <div class="meeting-match col">
                <h2>Meetings matching search criteria</h2>
                <hr/>
                <div class="meeting-cards row">
                    <div class="date-time">
                        <span class="meeting-cards-date">12 September 2020</span>
                    <span class="meeting-card-time-range">06:00 - 07:00</span>
                    </div>
                    <span class="meeting-title">Project Kickoff</span>
                    <button class="excuse-btn">Excuse yourself</button>
                    <hr/>
                    <span class="meeting-attendees-title">Attendees:</span>
                    <span class="meeting-attendees-names">mark@example.com jane@example.com</span>
                    <div class="add-mem">
                        <select name="meeting-select-mem" id="select-mem">
                            <option value="select-mem" selected>Select member</option>
                            <option value="attendee-name">jane@example.com</option>
                        </select>
                        <button>Add</button>
                    </div>
                </div>
                <div class="meeting-cards row">
                    <div class="date-time">
                        <span class="meeting-cards-date">12 September 2020</span>
                    <span class="meeting-card-time-range">09:00 - 10:30</span>
                    </div>
                    <span class="meeting-title">AWS architecture</span>
                    <button class="excuse-btn">Excuse yourself</button>
                    <hr/>
                    <span class="meeting-attendees-title">Attendees:</span>
                    <span class="meeting-attendees-names">john@example.com jane@example.com</span>
                    <div class="add-mem">
                        <select name="meeting-select-mem" id="select-mem">
                            <option value="select-mem" selected>Select member</option>
                            <option value="attendee-name">jane@example.com</option>
                        </select>
                        <button>Add</button>
                    </div>
                </div>
            </div>
        </div>
        <input type="radio" id="add-meetings" name="meetings">
        <label for="add-meetings" class="meeting-tab-view">Add a meeting</label>
        <div class="add-meeting tab-view">
            <div class="search-add-meeting">
                <h2>Add a new meeting</h2>
                <hr/>
                <form action="#" method="POST" class="add-form">
                    <div class="add-select-date">
                        <label for="select-date">Date</label>
                        <input type="date" class="select-date">
                    </div>
                    <div class="hh-mm-div">
                        <label for="hh-mm">Start time (hh:mm)</label>
                        <select name="hh" id="hh" class="hh-mm">
                            <option value="0">00</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                        </select>
                        <span>:</span>
                        <select name="mm" id="mm" class="hh-mm">
                            <option value="0">00</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                        </select>
                    </div>
                    <div class="hh-mm-div">
                        <label for="hh-mm">End time (hh:mm)</label>
                        <select name="hh" id="hh" class="hh-mm">
                            <option value="0">00</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                        </select>
                        <span>:</span>
                        <select name="mm" id="mm" class="hh-mm">
                            <option value="0">00</option>
                            <option value="1">01</option>
                            <option value="2">02</option>
                            <option value="3">03</option>
                            <option value="4">04</option>
                        </select>
                    </div>
                    <div class="add-description">
                        <label for="meeting-description">Description</label>
                        <textarea name="description-text-area" id="meeting-description" placeholder="What is agenda of the meeting?"></textarea>
                    </div>
                    <div class="attendees-email-adding">
                        <label for="meeting-mem-emails">Email IDs of attendees, or team's short name</label>
                        <input type="text" name="meeting-mem-emails" id="meeting-mem-emails" placeholder="john@example.co,. @annual-day mark@example.com">
                        <span>Separate email-ids / team short names by commas - team short names always begin wiht @</span>
                    </div>
                    <div class=" btn add-meeting-btn">
                        <button type="submit">Add meeting</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
import '@/assets/styles/meeting.css';
import '@/assets/styles/btn.css';

export default {
    name: 'Meetings',
}
</script>

<style>

</style>