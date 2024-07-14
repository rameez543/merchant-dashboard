<template>
  <div>
    <Overview />
  </div>
</template>

<script>
import Dashboard from "~/components/Dashboard.vue";
import Overview from "~/components/Overview.vue";
import "@fortawesome/fontawesome-free/css/all.css";

export default {
  components: {
    Dashboard,
    Overview,
  },
  async mounted() {
    try {
      const resp = await this.$store.dispatch("dashboard/FETCH_TRX");
      console.log("respp++", resp);
    } catch (err) {
      console.log("eer", err);
    }
  },
  layout: "main-app",
};
</script>
