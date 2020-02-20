<template>
  <div class="test-page">
    <div class = "searchbar">
      <center>
       <form action="" @submit.prevent>
        <input class="text-search" type="text" v-model="search" placeholder="Nama Tempat Yang dicari" >
        <input class="button" type="submit" value ="cari" @click="searching">
      </form>
      </center>
    </div>
    <div class= "box">
        <div class="item" v-for="place in places" :key="place.Id">
        <header>
            <img :src="place.Company.Photo.Url" class="photo">
            <div class="partner">{{ place.Company.Name }}</div>
            <div class="non-rate" v-if="!place.Rating"> </div>
            <div class="rate" v-else> <span class="fa fa-star checked"></span>{{ place.Rating }}/{{ place.RatingCount }} </div>
        </header>
            <div class="item-body">
                   <img :src="place.Photos[0].Url">
               <div class="item-details">
                   <div class="name">{{ place.Name }} </div>
                   <div class="city">{{ place.City.Name }} </div>
                   <div class="hour">
                     <span>{{ getOpenHourInformation(place.Times, 'time') }}</span>
                     <span>{{ getOpenHourInformation(place.Times) }}</span> 
                   </div>
                   <div class="view"> Dilihat: {{ place.Summary.View}} Orang </div>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
import moment from 'moment'
moment.locale('id')
export default {
  data () {
    return {
      places: [],
      search: ''
    }
  },
  async created () {
    const placeResponse = await this.$core.get('place')
    this.places = placeResponse.data.Data
  },

  methods: {
    getOpenHourInformation (times, type = null) {
      const currentDate = new Date()
      const currentDay = currentDate.getDay()
      const timeObject = times.find(x => x.TimeId === currentDay)
      if (!timeObject) return
      const now = moment().format('HH:mm')
      const openHour = moment(timeObject.OpenHour).format('HH:mm')
      const closeHour = moment(timeObject.CloseHour).format('HH:mm')
      if (type == 'time') {
        return `${openHour} - ${closeHour}`
      }
      if (now > openHour && now < closeHour) {
        return 'Open Now'
      }
      return 'Close Now'

    },
    openHourInfo (times) {
      return moment(times[0].OpenHour).format('LT')
    },

    closeHourInfo (times) {
      return moment(times[0].CloseHour).format('LT')
    },
    dayInfo (times) {
      return moment(times[0].TimeOfUse.Name).format('dddd')
    },
    async searching () {
      const placeResponse = await this.$core.get('place?keyword=' + this.search)
      this.places = placeResponse.data.Data
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/pages/TestPage.scss">
</style>
