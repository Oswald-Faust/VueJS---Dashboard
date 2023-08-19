<template>
  <div class="w-screen h-full flex">
    <div
      @mouseenter="handleMouseEnter"
      @mouseleave="handleMouseLeave"
      :class="sidebarClasses"
      :style="{ position: isSidebarRelative ? 'relative' : 'absolue' }"
      class="border-r"
    >
      <div class="flex bg-white">
        <div
          class="h-[50px] bg-white flex justify-start items-center -space-x-4"
        >
          <img
            class="px-2 w-full mx-4 mt-2"
            src="https://hencework.com/theme/jampack/classic/dist/img/brand-sm.svg"
          />
          <img
            class="pt-2"
            v-show="showSide"
            src="	https://hencework.com/theme/jampack/classic/dist/img/Jampack.svg"
          />
        </div>
        <div
          class="cursor-pointer scroll-px-96 py-[15px] max-w-full"
          v-show="showSide"
          @click="toggleSideBar"
        >
          <svg
            :class="{ 'rotate-180': isArrowRotated }"
            class="mr-2 w-[25px] h-[20px] fill-current transition-all duration-300"
            xmlns="http://www.w3.org/2000/svg"
            height="7em"
            viewBox="0 0 448 512"
            fill=" #000000"
          >
            <path
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
      </div>
      <div class="h-full bg-white py-[20px]">
        <div
          class="flex flex-col justify-between h-full px-[20px] space-y-[10px]"
        >
          <div class="flex flex-col justify-between space-y-[10px]">
            <router-link
              to="/HomePage"
              class="inline-flex relative items-center py-[5px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                class="mr-2 w-[20px] h-[25px] fill-current transition-all duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"
                ></path>
              </svg>
              <span v-show="showSide">Tableau de bord</span>
            </router-link>
            <div
              class="text-sm text-left px-[10px] text-neutral-500"
              v-show="showSide"
            >
              applications
            </div>
            <router-link
              to="/HomePage"
              class="inline-flex relative items-center py-[5px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-200 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="1em"
                class="mr-2 w-[20px] h-[25px] fill-current"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M168.2 384.9c-15-5.4-31.7-3.1-44.6 6.4c-8.2 6-22.3 14.8-39.4 22.7c5.6-14.7 9.9-31.3 11.3-49.4c1-12.9-3.3-25.7-11.8-35.5C60.4 302.8 48 272 48 240c0-79.5 83.3-160 208-160s208 80.5 208 160s-83.3 160-208 160c-31.6 0-61.3-5.5-87.8-15.1zM26.3 423.8c-1.6 2.7-3.3 5.4-5.1 8.1l-.3 .5c-1.6 2.3-3.2 4.6-4.8 6.9c-3.5 4.7-7.3 9.3-11.3 13.5c-4.6 4.6-5.9 11.4-3.4 17.4c2.5 6 8.3 9.9 14.8 9.9c5.1 0 10.2-.3 15.3-.8l.7-.1c4.4-.5 8.8-1.1 13.2-1.9c.8-.1 1.6-.3 2.4-.5c17.8-3.5 34.9-9.5 50.1-16.1c22.9-10 42.4-21.9 54.3-30.6c31.8 11.5 67 17.9 104.1 17.9c141.4 0 256-93.1 256-208S397.4 32 256 32S0 125.1 0 240c0 45.1 17.7 86.8 47.7 120.9c-1.9 24.5-11.4 46.3-21.4 62.9zM144 272a32 32 0 1 0 0-64 32 32 0 1 0 0 64zm144-32a32 32 0 1 0 -64 0 32 32 0 1 0 64 0zm80 32a32 32 0 1 0 0-64 32 32 0 1 0 0 64z"
                />
              </svg>
              <span v-show="showSide">Fenêtre</span>
            </router-link>
            <router-link
              to="/ProfilePage"
              class="inline-flex relative items-center py-[5px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
              :class="{ 'bg-green-200': $route.path === '/ProfilePage' }"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 w-[20px] h-[25px] fill-current"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"
                />
              </svg>
              <span v-show="showSide">Fenêtre</span>
            </router-link>
            <router-link
              to="/ProfilePage"
              class="inline-flex relative items-center py-[5px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 w-[20px] h-[25px] fill-current"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"
                />
              </svg>
              <span v-show="showSide">Tableau de bord</span>
            </router-link>
            <router-link
              to="/ProfilePage"
              class="inline-flex relative items-center py-[5px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 w-[20px] h-[25px] fill-current"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"
                />
              </svg>
              <span v-show="showSide">Tableau de bord</span>
            </router-link>
            <router-link
              to="/ProfilePage"
              class="inline-flex relative items-center py-[5px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="mr-2 w-[20px] h-[25px] fill-current"
                viewBox="0 0 512 512"
              >
                <!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                <path
                  d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z"
                />
              </svg>
              <span v-show="showSide">Tableau de bord</span>
            </router-link>
          </div>
          <div class="h-[50px]">
            <div>
              <router-link
                to="/setting"
                class="inline-flex relative items-center py-[10px] px-[10px] w-full text-sm font-medium rounded-md border-gray-200 hover:bg-gray-300 hover:text-gray-800 transition duration-400 ease-in-out"
              >
                <svg
                  aria-hidden="true"
                  class="mr-2 w-[20px] h-[25px] fill-current"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span v-show="showSide">Tableau de bord</span>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full">
      <!-- Search bar -->
      <div
        class="h-[50px] bg-white flex items-center shadow-sm px-[20px] w-full py-[10px] border-b"
      >
        <div class="w-full flex">
          <div class="w-full flex justify-center">
            <form class="flex items-center w-[500px]">
              <label for="voice-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div
                  class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
                >
                  <svg
                    aria-hidden="true"
                    class="w-5 h-auto text-gray-500 dark:text-gray-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                </div>
                <input
                  type="text"
                  id="voice-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full pl-10 p-2.5 d"
                  placeholder="Recherche..."
                  required
                />
              </div>
            </form>
          </div>
          <!-- User login -->
          <div class="w-[]">
            <img
              class="w-10 h-10 rounded-full border-2 border-gray-50"
              src="https://hencework.com/theme/jampack/classic/dist/img/avatar12.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="h-full p-[20px]">
        <div class="p-[20px] h-full">
          <router-view></router-view>
        </div>
      </div>
    </div>
    <!-- Main  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      showSide: true,
      isArrowRotated: true,
      isSidebarRelative: true,
    };
  },
  methods: {
    toggleSideBar() {
      this.showSide = !this.showSide;
      this.isArrowRotated = !this.isArrowRotated;
      this.isSidebarRelative = !this.isSidebarRelative;
    },
    // toggle user
    handleMouseEnter() {
      if (!this.showSide) {
        this.showSide = true;
      }
    },
  },
  computed: {
    // Calcule les classes CSS pour la barre de navigation en fonction de showSide
    sidebarClasses() {
      return {
        "w-[250px]": this.showSide,
        "w-[90px]": !this.showSide,
        "transition-all duration-300": true,
      };
    },
    sidebarPosition() {
      return this.isAbsolute ? "absolute" : "relative";
    },
  },
};
</script>
