<template>
<div class="text-page">
  <div class ="search">
    <center>
      <input class ="textsearch" type="text" v-model="search" placeholder="Posisi Jabatan Yang Dicari..." @change="searchJob">
      <input class ="btn-submit" type="submit" value="search">
    </center> 
  </div>
  <div class="box">
    <div class = "item" v-for="job in jobs" :key="job.Id">
      <header>{{ job.Merchant.Name }}</header>
      <section class="item-body">
        <div class="item-image">
          <figure>
            <img :src="job.Merchant.Photo.Url" />
          </figure>
        </div>
        <div class="item-details">
          <header>
            <div class = "category"> {{ job.Position }} </div>
            <div class = "sal" v-if="job.HideSalary== true"> Gaji Dirahasiakan</div>
            <div class = "hide" v-else>Rp.{{job.MinimumSalary}}-Rp.{{job.MaximumSalary}}</div>
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
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      jobs: [],
      search: ""
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
  },
  methods : {
    async searchJob(){
      const response = await axios.get('https://api.jobs.heikaku.com/v1/job?keyword='+this.search)
      this.jobs = response.data.Data
    }
  }
}
</script>

<style src="@/assets/css/main.css">
</style>
