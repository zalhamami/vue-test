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
