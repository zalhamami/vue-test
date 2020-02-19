<template>
  <div class="test-page">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <div class = "searchbar">
      <center>
      <input class="text-search" type="text" v-model="search" placeholder="Nama Tempat Yang dicari" @change="searching" >
      <input class="button" type="submit" value ="cari">
      </center>
    </div>
    <div class= "box">
        <div class = "item" v-for="place in places" :key="place.Id">
        <header>
            <img :src="place.Company.Photo.Url" class="photo">
            <div class = "partner">{{ place.Company.Name }}</div>
            <div class = "non-rate" v-if="place.Rating == null"> </div>
            <div class = "rate" v-else> <span class="fa fa-star checked"></span>{{ place.Rating }}/{{ place.RatingCount }} </div>
        </header>
            <div class="item-body">
                   <img :src="place.Photos[0].Url">
               <div class="item-details">
                   <div class="name">{{ place.Name }} </div>
                   <div class="city">{{ place.City.Name }} </div>
                   <div class="hour">{{ moment (place.Times[0].OpenHour).format('LT') }} - {{ moment (place.Times[0].CloseHour).format('LT') }}
                      <span class="close" v-if="checkHourInfo(place.Times)"> Close Now </span>
                      <span class="open" v-else>Open Now</span>
                   </div>
                   <div class="view"> Dilihat: {{ place.Summary.View}} Orang </div>
               </div>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
var moment = require('moment')
moment.locale('id')
export default {
  data () {
    return {
      places: [],
      moment: moment,
      search: ''
    }
  },
  async created () {
    const placeResponse = await this.$core.get('place')
    this.places = placeResponse.data.Data
  },
  methods: {
    checkHourInfo (times) {
      return moment().format('LT') > moment(times[0].CloseHour).format('LT')
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
