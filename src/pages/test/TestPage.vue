<template>
  <div class="test-page">
    <p>Heading in the universe</p>
    <div class="flex">
      <category-list :data="categories" />
    </div>
  </div>
</template>

<script>
import CategoryList from '@/components/List/CategoryList'

export default {
  components: {
    CategoryList
  },
  data () {
    return {
      categories: []
    }
  },
  async created () {
    const categoryResponse = await this.$core.get('category')
    this.categories = categoryResponse.data.Data
  }
}
</script>

<style lang="scss" src="@/assets/styles/pages/TestPage.scss">
</style>
