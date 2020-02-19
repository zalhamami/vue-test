<template>
  <div class="coupon-page">
    <div class="search-container">
      <div class="search-core">
        <input type="text" placeholder="Type here..." class="txt-search" v-model="search" @change="searchMethod">
        <input type="submit" class="btn-search">
      </div>
    </div>
    <div class="box" v-for="deal in categories" :key="deal.Id">
      <div class="box-header">
        <div class="header-container">
          <div class="header-logo">
            <img :src="deal.Company.Photo.Url" alt="" v-if="deal.Company.Photo != null">
            <img src="@/assets/img/error.png" alt="" v-else>
          </div>
        </div>
        <div class="header-name">
          <a href="#"><p>{{ deal.Company.Name }}</p></a>
        </div>
        <div class="header-rating">
          <img src="@/assets/img/star.png" alt="" class="star" v-if="deal.Rating > 1">
          <p v-if="deal.Rating > 1" class="rate"><b>{{ deal.Rating }}/5</b></p>
        </div>
      </div>
      <div class="box-img">
        <div class="disc" v-if="deal.Price != 0">
          <section class="persen"><b>{{ getDiscount(deal.Price, deal.PriceActual) }}%</b></section>
        </div>
        <img :src="deal.Photos[0].Url" alt="" v-if="deal.Photos != null" class="found">
        <img src="@/assets/img/error.png" alt="" v-else class="not-found">
      </div>
      <div class="box-info">
        <p><b>{{ deal.Name }}</b></p>
        <section>Berlaku Hingga: {{ formatDate(deal.EndDate) }}</section>
        <section v-if="deal.Details.length == 1">{{ deal.Details[0].Place.City.Name }}</section>
        <section v-else>Tersedia di {{ deal.Details.length }} Lokasi</section>
        <section v-if="deal.Statistic.Redeemed">{{ deal.Statistic.Redeemed }} Kupon Ditukar</section>
        <p v-if="deal.Price > 0" class="price"><b>Hanya Rp. {{ formatNumber(deal.Price) }}</b></p>
      </div>
      <div class="box-seen">
        <section>Dilihat: {{ formatNumber(deal.Statistic.View) }}</section>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
var numeral = require('numeral')
moment.locale('id')
export default {
  data () {
    return {
      moment: moment,
      numeral: numeral,
      categories: [],
      jobCategories: [],
      search: ''
    }
  },
  async created () {
    const categoryResponse = await this.$core.get('deal')
    this.categories = categoryResponse.data.Data
    const jobCategoryResponse = await this.$jobs.get('job')
    this.jobCategories = jobCategoryResponse.data.Data
  },
  methods: {
    getDiscount (price, priceActual) {
      return Math.round((100 - (price / priceActual * 100)) * 10) / 10
    },
    formatDate (endDate) {
      return moment(endDate).format('ll')
    },
    formatNumber (number) {
      return numeral(number).format('0,0')
    },
    async searchMethod () {
      const categoryResponse = await this.$core.get('deal?keyword=' + this.search)
      this.categories = categoryResponse.data.Data
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/JobCoupon.scss">
</style>
