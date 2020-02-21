<template>
    <div class="deal-card">
      <div class="box-header">
        <div class="header-container">
          <div class="header-logo">
            <img :src="data.Company.Photo.Url" alt="" v-if="data.Company.Photo">
            <img src="@/assets/img/error.png" alt="" v-else>
          </div>
        </div>
        <div class="header-name">
          <a href="#"><p>{{ data.Company.Name }}</p></a>
        </div>
        <div class="header-rating">
          <img src="@/assets/img/star.png" alt="" class="star" v-if="data.Rating > 1">
          <p v-if="data.Rating > 1" class="rate"><b>{{ data.Rating }}/5</b></p>
        </div>
      </div>
      <div class="box-img">
        <div class="disc" v-if="data.Price != 0">
          <section class="persen"><b>{{ getDiscount(data.Price, data.PriceActual) }}%</b></section>
        </div>
        <img :src="data.Photos[0].Url" alt="" v-if="data.Photos" class="found">
        <img src="@/assets/img/error.png" alt="" v-else class="not-found">
      </div>
      <div class="box-info">
        <p><b>{{ data.Name }}</b></p>
        <section>Berlaku Hingga: {{ formatDate(data.EndDate) }}</section>
        <section v-if="data.Details.length == 1">{{ data.Details[0].Place.City.Name }}</section>
        <section v-else>Tersedia di {{ data.Details.length }} Lokasi</section>
        <section v-if="data.Statistic.Redeemed">{{ data.Statistic.Redeemed }} Kupon Ditukar</section>
        <p v-if="data.Price > 0" class="price"><b>Hanya Rp. {{ formatNumber(data.Price) }}</b></p>
      </div>
      <div class="box-seen">
        <section>Dilihat: {{ formatNumber(data.Statistic.View) }}</section>
      </div>
    </div>
</template>

<script>
import moment from 'moment'
var numeral = require('numeral')
moment.locale('id')
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
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
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/JobCoupon.scss"></style>
