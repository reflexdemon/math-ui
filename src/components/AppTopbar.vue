<script lang="ts" setup>
import { useLayout } from '@/composables/useLayout.ts'
import AppConfig from './AppConfig.vue'
import { RouterLink } from 'vue-router'
import { ref } from 'vue'
import { Menubar } from 'primevue'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home',
    route: '/',
  },
  {
    label: 'About',
    icon: 'pi pi-info-circle',
    route: '/about',
  },
])

const { isDarkMode, toggleDarkMode } = useLayout()
</script>

<template>
  <div class="topbar">
    <div class="topbar-container">
      <div class="topbar-brand">
        <svg
          height="18.000000pt"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 35.000000 18.000000"
          width="35.000000pt"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            class="fill-surface"
            stroke="black"
            stroke-linecap="round"
            stroke-width="2"
            x1="0"
            x2="35"
            y1="0"
            y2="0"
          />
          <line
            class="fill-surface"
            stroke="black"
            stroke-linecap="round"
            stroke-width="2"
            x1="35"
            x2="35"
            y1="0"
            y2="18"
          />
          <line
            class="fill-surface"
            stroke="black"
            stroke-linecap="round"
            stroke-width="2"
            x1="35"
            x2="0"
            y1="18"
            y2="18"
          />

          <line
            class="fill-surface"
            stroke="black"
            stroke-linecap="round"
            stroke-width="2"
            x1="0"
            x2="0"
            y1="18"
            y2="0"
          />

          <g
            class="fill-primary"
            stroke="none"
            transform="translate(0.000000,18.000000) scale(0.100000,-0.100000)"
          >
            <path
              d="M46 173 c-3 -4 -1 -12 5 -20 9 -10 8 -13 -2 -13 -20 0 -39 -34 -29
-50 5 -7 4 -24 -1 -37 -12 -31 -11 -43 1 -43 6 0 10 9 10 20 0 11 5 20 10 20
6 0 10 -7 10 -15 0 -8 5 -15 10 -15 15 0 12 16 -5 30 -9 7 -14 19 -11 27 3 7
1 13 -4 13 -6 0 -10 7 -10 15 0 8 6 15 13 15 6 0 22 3 35 6 17 5 22 2 22 -13
0 -10 -5 -24 -10 -29 -13 -13 -1 -74 14 -74 7 0 10 17 8 48 -4 71 -11 92 -28
92 -8 0 -13 4 -10 9 7 10 -19 23 -28 14z"
            />
            <path
              d="M220 159 c0 -5 -4 -7 -10 -4 -5 3 -10 1 -10 -4 0 -6 4 -11 10 -11 5
0 7 -7 4 -15 -4 -8 -1 -15 5 -15 6 0 11 5 11 10 0 6 8 10 18 11 10 0 12 3 5 6
-7 2 -13 11 -13 19 0 8 -4 14 -10 14 -5 0 -10 -5 -10 -11z"
            />
            <path
              d="M284 151 c7 -21 -9 -46 -23 -37 -6 4 -4 -8 5 -28 10 -19 21 -33 26
-30 4 3 8 0 8 -5 0 -6 -4 -11 -10 -11 -14 0 -13 -27 2 -36 7 -5 9 -2 5 9 -3 8
0 18 8 21 9 3 12 0 8 -10 -3 -8 1 -14 8 -14 13 0 15 24 8 136 -1 16 -8 22 -25
22 -18 0 -23 -5 -20 -17z m38 -71 c-4 -30 -5 -30 -23 -14 -22 20 -24 35 -7 52
18 18 35 -3 30 -38z"
            />
            <path
              d="M295 90 c3 -5 8 -10 11 -10 2 0 4 5 4 10 0 6 -5 10 -11 10 -5 0 -7
-4 -4 -10z"
            />
            <path
              d="M126 142 c-13 -12 -5 -22 18 -22 13 0 27 -6 29 -12 3 -7 6 -3 6 10 1
12 -2 22 -6 23 -5 0 -16 2 -25 4 -9 2 -19 0 -22 -3z"
            />
            <path
              d="M195 100 c3 -19 10 -36 15 -38 6 -2 10 -15 10 -28 0 -13 5 -24 10
-24 6 0 10 13 10 30 0 17 5 30 10 30 6 0 10 5 10 10 0 6 -11 10 -25 10 -17 0
-29 8 -36 23 -8 18 -9 16 -4 -13z"
            />
            <path d="M65 109 c-10 -15 3 -25 16 -12 7 7 7 13 1 17 -6 3 -14 1 -17 -5z" />
            <path
              d="M125 100 c-10 -16 49 -100 61 -87 3 3 2 22 -2 42 -6 32 -10 36 -31
32 -18 -3 -23 -1 -19 9 6 16 0 19 -9 4z m43 -32 c-2 -5 -8 -9 -13 -9 -5 0 -11
4 -13 9 -1 5 4 9 13 9 9 0 14 -4 13 -9z"
            />
            <path
              d="M130 26 c0 -9 5 -16 10 -16 6 0 10 4 10 9 0 6 -4 13 -10 16 -5 3 -10
-1 -10 -9z"
            />
          </g>
        </svg>
        <span class="topbar-brand-text">
          <span class="topbar-title">Math UI</span>
          <span class="topbar-subtitle">Simple page to generate Math problems</span>
        </span>
      </div>
    </div>
    <div class="wrapper">
      <AppConfig />
    </div>
    <div class="card">
      <Menubar :model="items">
        <template #item="{ item, props, hasSubmenu }">
          <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
            <a v-ripple :href="href" v-bind="props.action" @click="navigate">
              <span :class="item.icon" />
              <span>{{ item.label }}</span>
            </a>
          </router-link>
          <a v-else v-ripple :href="item.url" :target="item.target" v-bind="props.action">
            <span :class="item.icon" />
            <span>{{ item.label }}</span>
            <span v-if="hasSubmenu" class="pi pi-fw pi-angle-down" />
          </a>
        </template>
        <template #end>
          <Button class="topbar-theme-button" rounded text type="button" @click="toggleDarkMode">
            <i :class="['pi ', 'pi ', { 'pi-moon': isDarkMode, 'pi-sun': !isDarkMode }]" />
          </Button>
        </template>
      </Menubar>
    </div>
  </div>
</template>
