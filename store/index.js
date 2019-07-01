export const state = () => ({
  sidebarCollapsed: false
})

export const mutations = {
  collapseSidebar(state) {
    state.sidebarCollapsed = !state.sidebarCollapsed
  }
}
