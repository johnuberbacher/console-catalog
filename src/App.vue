<template>
  <div
    id="app"
    class="
      bg-gray-50
      dark:bg-gray-900 dark:text-white
      h-full
      lg:max-h-screen lg:overflow-y-auto
    "
  >
    <div class="grid grid-flow-row md:grid-flow-col md:flex md:flex-row h-full">
      <SideNav />
      <div class="main w-full px-4 lg:px-8">
        <div class="floating fixed top-4 right-4 lg:right-12 pl-4 lg:pl-8">
          <div
            class="
              flex flex-row
              justify-end
              align-center
              py-3
              px-4
              mt-0
              shadow-xs
              hover:shadow-lg
              rounded-full
              bg-white
              dark:bg-gray-800
              border border-gray-100
              dark:border-gray-700
            "
          >
            <button
              class="
                theme-toggle
                p-3
                rounded-full
                bg-gray-600
                hover:bg-gray-500
                focus:bg-gray-500
                font-semibold
                text-sm
                rounded-none
              "
              aria-label="Toggle Theme"
              @click="toggle"
            >
              <svg
                v-if="this.themeMode === 'dark'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 fill-current text-white"
                viewBox="0 0 20 20"
              >
                <path
                  d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"
                />
              </svg>
              <svg
                v-if="this.themeMode === 'light'"
                xmlns="http://www.w3.org/2000/svg"
                class="h-3 w-3 fill-current text-white"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
            <button
              class="
                p-3
                md:py-2 md:px-4
                ml-3
                rounded-full
                bg-gray-600
                hover:bg-gray-500
                focus:bg-gray-500
                font-semibold
                text-xs
                rounded-none
                flex flex-row
                items-center
                justify-center
              "
            >
              <span class="hidden md:inline pr-2">John123</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                version="1.1"
                id="Capa_1"
                x="0px"
                y="0px"
                viewBox="0 0 60 60"
                style="enable-background: new 0 0 60 60"
                xml:space="preserve"
                class="h-3 w-3 fill-current text-white"
              >
                <path
                  d="M48.014,42.889l-9.553-4.776C37.56,37.662,37,36.756,37,35.748v-3.381c0.229-0.28,0.47-0.599,0.719-0.951  c1.239-1.75,2.232-3.698,2.954-5.799C42.084,24.97,43,23.575,43,22v-4c0-0.963-0.36-1.896-1-2.625v-5.319  c0.056-0.55,0.276-3.824-2.092-6.525C37.854,1.188,34.521,0,30,0s-7.854,1.188-9.908,3.53C17.724,6.231,17.944,9.506,18,10.056  v5.319c-0.64,0.729-1,1.662-1,2.625v4c0,1.217,0.553,2.352,1.497,3.109c0.916,3.627,2.833,6.36,3.503,7.237v3.309  c0,0.968-0.528,1.856-1.377,2.32l-8.921,4.866C8.801,44.424,7,47.458,7,50.762V54c0,4.746,15.045,6,23,6s23-1.254,23-6v-3.043  C53,47.519,51.089,44.427,48.014,42.889z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div class="mx-auto pt-20 lg:pt-28">
          <KeepAlive>
            <router-view />
          </KeepAlive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'tw-elements';
import SideNav from "./components/sidenav/SideNav.vue";
export default {
  name: "App",
  data() {
    return {
      themeMode: "dark",
    };
  },
  components: {
    SideNav,
  },
  methods: {
    toggle() {
      if (localStorage.theme === "dark") {
        localStorage.theme = "light";
        this.themeMode = "light";
        document.documentElement.classList.remove("dark");
      } else {
        localStorage.theme = "dark";
        this.themeMode = "dark";
        document.documentElement.classList.add("dark");
      }
    },
    formatNumbers(x) {
      return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    randomList: function (rand) {
      return rand.sort(function () {
        return 0.5 - Math.random();
      });
    },
  },
  mounted() {
    if (localStorage.theme === "dark") {
      this.themeMode = "dark";
      document.documentElement.classList.add("dark");
    } else {
      this.themeMode = "light";
      document.documentElement.classList.remove("dark");
    }
  },
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
.main {
  @media (min-width: 768px) {
    margin-left: 135px;
  }
  .floating {
    @media (min-width: 768px) {
      left: 135px;
    }
  }
}
</style>