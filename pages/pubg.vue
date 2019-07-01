<template>
  <div class="main-container-game-pubg">
    <h1 class="title">PUBG</h1>
    <h2 class="subtitle">Stats</h2>
    <form>
      <input
        v-model="pubgNickname"
        class="input"
        type="text"
        placeholder="PUBG nickname"
      />
      <button class="button is-primary" @click.prevent="submit">
        Search
      </button>
    </form>
    <div class="card">
      <div class="card-content">
        <p class="title">SQUAD</p>
        <p class="subtitle">FPP</p>
      </div>
      <GameBanner :banner="banner" />
      <footer class="card-footer">
        <p class="card-footer-item">K/D : {{ kd }}</p>
        <p class="card-footer-item">Avg Damage : {{ avgDamageDealt }}</p>
        <p class="card-footer-item">
          Avg Survived Time: {{ avgSurvivedTime }}m
        </p>
      </footer>
      <h2 class="subtitle">last TOP</h2>
      <BarCharts :chart-data="chartData" :options="options" />
    </div>
  </div>
</template>

<script>
import GameBanner from '@/components/GameBanner.vue'
import BarCharts from '@/components/charts/BarCharts.js'

export default {
  name: 'Pubg',
  components: {
    GameBanner,
    BarCharts
  },
  data: () => ({
    banner: {
      kills: null,
      maxPoints: null,
      wins: null
    },
    pubgNickname: null,
    kd: null,
    avgDamageDealt: null,
    avgSurvivedTime: null,
    seasonStats: [],
    columns: [
      {
        field: 'key',
        label: 'Key'
      },
      {
        field: 'value',
        label: 'Value'
      }
    ],
    apikey: process.env.API_KEY_PUBG,
    chartData: {
      labels: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      datasets: [
        {
          label: 'TOP',
          backgroundColor: '#f87979',
          pointBackgroundColor: 'white',
          borderWidth: 1,
          pointBorderColor: '#249EBF',
          data: [40, 20, 30, 50, 90, 12, 20, 40, 50, 70, 90, 100]
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
              reverse: true,
              max: 1,
              min: 100
            },
            gridLines: {
              display: true
            }
          }
        ],
        xAxes: [
          {
            gridLines: {
              display: false
            }
          }
        ]
      },
      legend: {
        display: true
      },
      responsive: true
    }
  }),
  methods: {
    pubgFetcher(url) {
      return fetch(url, {
        headers: {
          Authorization: `Bearer ${process.env.api_key_pubg}`,
          Accept: 'application/vnd.api+json'
        }
      })
    },
    async submit() {
      try {
        const pubgAccountId = await this.pubgFetcher(
          `https://api.pubg.com/shards/steam/players?filter[playerNames]=${this.pubgNickname}`
        )
        const dataAccountId = await pubgAccountId.json()
        const seasonStat = await this.pubgFetcher(
          `https://api.pubg.com/shards/steam/players/${dataAccountId.data[0].id}/seasons/division.bro.official.pc-2018-02`
        )
        const dataSeasonStat = await seasonStat.json()
        const squadFpp =
          dataSeasonStat.data.attributes.gameModeStats['squad-fpp']
        const kills = squadFpp.kills
        const roundsPlayed = squadFpp.roundsPlayed
        for (const key in squadFpp) {
          this.seasonStats.push({ key: key, value: squadFpp[key] })
        }
        this.kd = kills / roundsPlayed
        this.avgDamageDealt = Math.floor(squadFpp`'damageDealt'` / roundsPlayed)
        this.avgSurvivedTime = Math.floor(
          squadFpp`'timeSurvived'` / roundsPlayed / 60
        )
        this.banner.kills = kills
        this.banner.maxPoints = Math.floor(squadFpp`'bestRankPoint'`)
        this.banner.wins = squadFpp`'wins'`
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>

<style lang="postcss">
.card {
  width: 750px;
}
</style>
