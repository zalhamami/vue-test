<template>
  <div class="test-page">
    <!-- Test Get
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
    </ul>-->
    <div class="box" v-for="job in jobs" :key="job.Id">
      <div class="name">
        <h3><a href="#">{{ job.Merchant.Name }}</a></h3>
      </div>
      <a href="#">
        <div class="info">
          <p class="position">
            <b>{{ job.Position }}</b>
          </p>
          <p v-if="job.HideSalary == true" class="secret">Gaji Dirahasiakan</p>
          <p v-else class="nosecret">Rp. {{job.MinimumSalary}} - Rp. {{ job.MaximumSalary }}</p>
          <p v-if="job.NegotiableSalary == 1" class="nego">Gaji Dapat Dinegosiasi</p>
          <p v-else class="nonego">Gaji Tidak Dapat Dinegosiasi</p>
          <br />
          <p class="gray">{{ job.EmploymentType.Type }}, {{ job.Category.Name }}</p>
          <p class="gray">{{ job.City.Name }}</p>
          <p v-if="job.ApplicantsNeeded == null" class="gray"></p>
          <p v-else class="gray">Kandidat dibutuhkan ±{{ job.ApplicantsNeeded }} orang</p>
          <div class="stats">
            <div class="view">
              <p>{{ job.Statistic.Views }} Dilihat</p>
            </div>
            <div class="applicant">
              <p>{{ job.Statistic.Applicants }} Pelamar</p>
            </div>
          </div>
        </div>

        <div class="logo">
            <div class="center"><img :src="job.Merchant.Photo.Url" alt=""></div>
        </div>
      </a>
    </div>
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

<style src='@/assets/css/main.css'></style>
