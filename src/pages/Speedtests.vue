<template>
  <div class="small">
    <line-chart
        v-if="loaded"
        :chart-data="datacollection"
        :options="options"
    />
    <button @click="fillData()">Update</button>
  </div>
</template>

<script>
import LineChart from '@/components/LineChart.vue'
import {speedtests} from "@/api/speedtests"

export default {
  components: {
    LineChart
  },
  data () {
    return {
      loaded: false,
      datacollection: null,
      options: {responsive: true}
    }
  },
  mounted () {
    this.fillData()
  },
  methods: {
    fillData () {
      speedtests().then((response) => {
        this.datacollection = {
          labels: response.data.speedtests.map(speedtest => speedtest.CreatedAt),
          datasets: [{
            label: 'Speedtests',
            data: response.data.speedtests.map(speedtest => speedtest.Download)
          }]
        }
        console.log(this.datacollection)
        this.loaded = true
      })
    }
  }
}
</script>

<style>
.small {
  max-width: 900px;
  margin:  150px auto;
}
</style>
