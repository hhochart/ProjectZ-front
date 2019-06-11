export const state = () => ({
  sidebarCollapsed: false
})

export const mutations = {
  collapseSidebar(state) {
    console.log('allo')
    state.sidebarCollapsed = !state.sidebarCollapsed
  }
}
