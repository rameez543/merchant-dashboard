<template>
  <div class="min-h-screen bg-gray-100 flex flex-col">
    <div class="flex flex-1">
      <Sidebar />
      <main class="flex-1">
        <div class="mx-auto">
          <Header class="max-w-[960px] mx-auto" />
          <Overview class="mt-[28px]" />
        </div>
      </main>
      <div class="max-w-[218px] border-l border-[#1C1C1C1A] h-screen">
        <Notifications />
        <Activities class="mt-spacing-[24px]" />
      </div>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
import Sidebar from "~/components/Sidebar.vue";
import Overview from "~/components/Overview.vue";
import Notifications from "@/components/Notifications.vue";
import Activities from "@/components/Activities.vue";

export default {
  components: {
    Header,
    Sidebar,
    Overview,
  },
};
</script>
