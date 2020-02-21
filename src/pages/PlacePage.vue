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
        <div class="item">
          <place-card v-for="place in places.Data" :key="place.Id" :data="place"></place-card>
        </div>
    </div>
    <div class ="paginate">
      <ul>
       <li>
         <a href ="#"  v-for="place in places.Meta.TotalPage" :key="place" @click="paging(place)">{{ place }} </a>
       </li>
      </ul>
    </div>
  </div>
</template>
<script>
import PlaceCard from '@/components/List/PlaceCard'
export default {
  components: {
    PlaceCard
  },
  data () {
    return {
      places: [],
      search: ''
    }
  },
  async created () {
    const placeResponse = await this.$core.get('place')
    this.places = placeResponse.data
  },
  methods: {
    async searching () {
      const placeResponse = await this.$core.get('place?page_size=25&keyword=' + this.search)
      this.places = placeResponse.data
    },
    async paging (page) {
      const placeResponse = await this.$core.get('place?page_size=25&page_position='+ page + '&keyword=' + this.search)
      this.places = placeResponse.data
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/pages/TestPage.scss">
</style>
