<template>
  <div class="px-5 flex w-full items-center justify-center">
    <div class="max-w-[350px] max-h-screen w-full overflow-auto mt-4">
      <div
        v-for="item in filteredTrx"
        class="bg-[#F9FEF0] max-w-[450px] p-6 rounded-md shadow-md mb-3"
      >
        <div>
          <p class="font-bold text-16">{{ item?.trxName }}</p>
          <p class="font-bold text-12 text-gray-600">{{ item?.date }}</p>
        </div>
        <div class="flex items-center mt-4 justify-between">
          <p class="font-normal italic">
            <span class="font-bold">Amount:</span>
            ${{ item?.amount }}
          </p>
          <p class="font-normal">
            <span class="font-bold">Category:</span>
            {{ item?.category }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState, mapGetters } from "vuex";
import dashboard from "../store/dashboard";
export default {
  async mounted() {
    try {
      const resp = await this.$store.dispatch("dashboard/FETCH_TRX");
      console.log("respp++", resp);
    } catch (err) {
      console.log("eer", err);
    }
  },
  computed: {
    ...mapState({
      trx: (state) => state.dashboard?.transactions,
    }),
    ...mapGetters({
      filteredTrx: "dashboard/filteredTrx",
    }),
  },
  layout: "main-app",
};
</script>
