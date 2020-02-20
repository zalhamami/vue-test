<template>
  <div class="category-list">
    <ul>
      <li v-for="category in data" :key="category.Id">
        {{ category.Name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss">
.category-list {
  li {
    display: inline-block;
    padding: 1.5rem 2rem;
    background-color: lightseagreen;
    color: white;
    margin-right: 20px;
    margin-bottom: 20px;
    border-radius: 5px;
  }
}
</style>
