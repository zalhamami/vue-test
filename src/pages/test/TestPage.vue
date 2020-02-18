<template>
  <div class="test-page">
    <p>Heading in the universe</p>
    <div class="flex">
      <ul>
        <li v-for="category in categories" :key="category.Id">
          {{ category.Name }}
        </li>
      </ul>
      <ul>
        <li v-for="category in jobCategories" :key="category.Id">
          {{ category.Name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      categories: [],
      jobCategories: []
    }
  },
  async created () {
    const categoryResponse = await this.$core.get('category')
    this.categories = categoryResponse.data.Data
    const jobCategoryResponse = await this.$jobs.get('category')
    this.jobCategories = jobCategoryResponse.data.Data
  }
}
</script>

<style lang="scss" src="@/assets/styles/pages/TestPage.scss">
</style>
