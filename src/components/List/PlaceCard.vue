<template>
  <div class="place-card">
    <header>
            <img :src="data.Company.Photo.Url" class="photo">
            <div class = "partner">{{ data.Company.Name }}</div>
            <div class = "non-rate" v-if="!data.Rating"> </div>
            <div class = "rate" v-else> <span class="fa fa-star checked"></span>{{ data.Rating }}/{{ data.RatingCount }} </div>
        </header>
            <div class="item-body">
                   <img :src="data.Photos[0].Url">
               <div class="item-details">
                   <div class="name">{{ data.Name }} </div>
                   <div class="city">{{ data.City.Name }} </div>
                   <div class="hour">
                     <span>{{ getOpenHourInformation(data.Times, 'time') }}</span>
                     <span class ="open" v-if="getOpenHourInformation(data.Times) == 'Open Now'">
                       {{ getOpenHourInformation(data.Times) }}
                      </span>
                      <span class ="close" v-else>
                        {{ getOpenHourInformation(data.Times) }}
                      </span>
                   </div>
                   <div class="view"> Dilihat: {{ data.Summary.View}} Orang </div>
               </div>
            </div>
  </div>
</template>

<script>
import moment from 'moment'
moment.locale('id')

export default {
  props: {
    data: {
      type: Object,
      required: true
    }
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
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/pages/TestPage.scss">
</style>
