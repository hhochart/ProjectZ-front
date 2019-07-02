<template>
  <aside :class="{ collasped: storeSidebarCollapsed }">
    <Logo />
    <nav>
      <div v-for="link in links" :key="`link-${link.name}`">
        <nuxt-link :to="{ path: `${link.path}` }">
          <i :class="`lni-${link.icon}`"></i>
          <transition name="fade">
            <span v-if="!delayedCollapse">
              {{ link.name }}
            </span>
          </transition>
        </nuxt-link>
        <transition @enter="enter">
          <component
            :is="link.component"
            v-show="link.component && !delayedCollapse"
          />
        </transition>
      </div>
    </nav>
    <div
      class="collapser"
      :style="computedCollapserStyle"
      @click="$store.commit('collapseSidebar')"
    >
      <i class="lni-backward"></i>
    </div>
  </aside>
</template>

<script>
import { mapState } from 'vuex'
import Logo from '@/components/Logo'
import SidebarProfile from '@/components/nav/SidebarProfile'
import SidebarNotifs from '@/components/nav/SidebarNotifs'

export default {
  components: {
    Logo
  },
  data: () => ({
    delayedCollapse: false,
    links: [
      {
        name: 'Dota 2',
        path: 'dota2',
        icon: 'game'
      },
      {
        name: 'Rocket league',
        path: 'rocket-league',
        icon: 'game'
      },
      {
        name: 'PUBG',
        path: 'pubg',
        icon: 'game'
      },
      {
        name: 'Profile',
        path: 'profile',
        icon: 'user',
        component: SidebarProfile
      },
      {
        name: 'Notifications',
        path: 'notifications',
        icon: 'alarm',
        component: SidebarNotifs
      }
    ]
  }),
  computed: {
    ...mapState({
      storeSidebarCollapsed: 'sidebarCollapsed'
    }),
    computedCollapserStyle() {
      return {
        transform: this.storeSidebarCollapsed ? 'rotateZ(180deg)' : 'none'
      }
    }
  },
  watch: {
    storeSidebarCollapsed(newVal, oldVal) {
      if (newVal === false) {
        setTimeout(() => {
          this.delayedCollapse = newVal
        }, 300)
      } else {
        this.delayedCollapse = newVal
      }
    }
  },
  methods: {
    enter(el, done) {
      const { height } = el.getBoundingClientRect()
      el.style.height = 0
      el.animate(
        [
          { height: 0, paddingTop: 0, paddingBottom: 0 },
          {
            height: `${height}px`,
            paddingTop: '0.75rem',
            paddingBottom: '0.75rem'
          }
        ],
        {
          duration: 300,
          easing: 'cubic-bezier(0.445, 0.05, 0.55, 0.95)',
          fill: 'forwards'
        }
      )
      done()
    }
  }
}
</script>

<style lang="postcss" scoped>
aside {
  @apply h-screen sticky top-0 z-50 py-5 px-3 bg-purple-200 flex flex-col;
  width: 20rem;
  transition: width 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &.collasped {
    width: 72px;
  }
  & > nav {
    @apply flex-grow flex flex-col;
    & > div {
      @apply bg-purple-100 my-1 rounded-lg;
      & > a {
        @apply flex items-center aside-padding;
        & > i {
          @apply text-2xl;
        }
        & > span {
          @apply ml-2;
        }
      }
      & > :not(a) {
        @apply border-t-2 border-purple-200 aside-padding overflow-hidden;
        overflow: hidden;
        text-overflow: ellipsis;
        flex-basis: 100%;
      }
    }
  }
  & .collapser {
    @apply flex cursor-pointer p-2 self-end aside-padding;
    transition: transform 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transform-origin: 50% 50%;
  }
}

.aside-padding {
  @apply py-2 px-3;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 0.3s cubic-bezier(0.445, 0.05, 0.55, 0.95);
}
</style>
