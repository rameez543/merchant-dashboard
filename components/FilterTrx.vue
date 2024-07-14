<template>
  <div
    v-show="showFilter"
    class="bg-white mt-12 rounded-xl p-4 max-w-[300px] absolute top-0 right-6"
  >
    <div v-for="item in filters" class="flex justify-start">
      <input
        type="checkbox"
        v-model="selectedFilters"
        :id="item"
        :value="item"
      />
      <label class="ml-4" :for="item">{{ item }}</label>
    </div>
    <button
      @click="handleClick"
      class="mt-5 border p-1 rounded-md bg-yellow-600"
    >
      Apply
    </button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showFilter: false,
      selectedFilters: [],
      filters: ["personal", "income", "asset"],
    };
  },
  mounted() {
    this.$nuxt.$on("show-filter", (showFilter) => {
      console.log("showFilter", showFilter);
      this.showFilter = showFilter;
    });
  },
  methods: {
    handleClick() {
      this.$store.commit("dashboard/SET_TRX_FILTER", this.selectedFilters);
      this.showFilter = false;
    },
  },
};
</script>
