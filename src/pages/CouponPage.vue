<template>
  <div class="coupon-page">
    <div class="content-wrapper">
      <div class="search-container">
        <div class="search-core">
          <form action="" @submit.prevent>
            <input type="text" placeholder="Search XD .." class="txt-search" v-model="search">
            <input type="submit" class="btn-search" value="Search" @click="fetchData">
          </form>
        </div>
      </div>
    <div class="box" v-for="deal in deals.Data" :key="deal.Id">
      <deal-card :data="deal"></deal-card>
    </div>
    </div>
    <div class="page-container">
      <div class="page-btn">
        <ul>
          <li>
            <a href="#" :class="{ active: deals.Meta.PagePosition == deal }" v-for="deal in deals.Meta.TotalPage" :key="deal" @click="changePage(deal)">{{ deal }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import DealCard from '@/components/List/DealCard'
export default {
  components: {
    DealCard
  },
  data () {
    return {
      deals: [],
      search: ''
    }
  },
  async created () {
    await this.fetchData()
  },
  methods: {
    async fetchData () {
      const dealRespond = await this.$core.get('deal?page_size=6&keyword=' + this.search)
      this.deals = dealRespond.data
    },
    async changePage (page) {
      const dealRespond = await this.$core.get('deal?page_size=6&page_position=' + page + '&keyword=' + this.search)
      this.deals = dealRespond.data
    }
  }
}
</script>

<style lang="scss" src="@/assets/styles/JobCoupon.scss"></style>
