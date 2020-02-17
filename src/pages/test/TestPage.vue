<template>
  <div class="test-page">
    Test Get
    <br>
    <input v-model="input" type="text">
    <input v-model="user.name" type="text">
    <input v-model="user.dateOfBirth" type="text">
    <input v-model="user.age" type="text">
    <p>
      {{ input }}
    </p>
    <p>
      Name: {{ user.name }}
    </p>
    <p>
      Age: {{ user.age }}
    </p>
    <ul>
      <li v-for="item in jobs" :key="item.Id">
        {{ item.Position }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      input: '',
      user: {
        name: '',
        dateOfBirth: '',
        age: ','
      },
      jobs: []
    }
  },
  async created () {
    // const response = axios.get('https://api.jobs.heikaku.com/v1/category?page_size=5')
    //   .then((response) => {
    //     console.log(response)
    //     this.jobs = response.data.Data
    //   })
    const response = await axios.get('https://api.jobs.heikaku.com/v1/job')
    this.jobs = response.data.Data
  }
}
</script>

<style src="@/assets/css/main.css"></style>
