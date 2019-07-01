<template>
  <section>
    <div class="main-container-game-pubg">
      <h1 class="title">Dota 2</h1>
      <h2 class="subtitle">Stats</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Dota2',
  data: () => ({
    data: [
      {
        id: 1,
        user: { first_name: 'Jesse', last_name: 'Simmons' },
        date: '2016/10/15 13:43:27',
        gender: 'Male'
      },
      {
        id: 2,
        user: { first_name: 'John', last_name: 'Jacobs' },
        date: '2016/12/15 06:00:53',
        gender: 'Male'
      }
    ],
    defaultOpenedDetails: [1],
    showDetailIcon: true,
    apikey: '49C63A24A736E598CE59E8E623AC1B28',
    dota2accountId: null
  }),
  methods: {
    toggle(row) {
      this.$refs.table.toggleDetails(row)
    },
    async submit() {
      try {
        const matchHistory = await fetch(
          `http://api.steampowered.com/IDOTA2Match_570/GetMatchHistory/v1/?key=${this.apikey}&account_id=${this.dota2accountId}`,
          {
            headers: { 'Access-Control-Allow-Origin': '*' }
          }
        )
        const dataMatchHistory = await matchHistory.json()
        console.log(dataMatchHistory)
      } catch (e) {
        console.log(e)
      }
    }
  }
}
</script>
