<template>
 <div class="test-page">
    <div class = "item" v-for="job in jobs" :key="job.Id" >
      <header>{{ job.Merchant.Name }}</header>
      <section class="item-body">
        <div class="item-image">
          <figure>
            <img :src="job.Merchant.Photo.Url" />
          </figure>
        </div>
        <div class="item-details">
          <header>
            <div class = "category"> {{ job.Merchant.Category }} </div>
            <div class = "sal" v-if="job.HideSalary== true"> Gaji Dirahasiakan</div>
            <div class = "hide" v-else>{{job.MinimumSalary}}-{{job.MaximumSalary}}</div>
            <div class = "negsala" v-if="job.NegotiableSalary== 1">Gaji Dapat di Negosiasi</div>
            <div class = "cnegsala" v-else>Gaji Tidak dapat di Negosiasi</div>
       
          </header>

          <div class="item-details-body">            
            <div class = "type"> {{ job.EmploymentType.Type }},{{ job.Category.Name }} </div>
            <div class = "city"> {{ job.Merchant.City.Name }} </div>
            <div class = "appneed"> Kandidat yang dibutuhkan {{ job.ApplicantsNeeded }} </div>
          </div>
          
          <div class = "view"> {{ job.Statistic.Views }} Dilihat {{ job.Statistic.Applicants }} pelamar </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      jobs: []
    }
  },
  async created () {
    // const response = await axios.get('https://api.jobs.heikaku.com/jobs')
    //   .then((response) => {
    //     console.log(response)
    //     this.jobs = response.data
    // })
    const response = await axios.get('https://api.jobs.heikaku.com/v1/job')
    this.jobs = response.data.Data
  }
}
</script>

<style src="@/assets/css/main.css">
</style>
