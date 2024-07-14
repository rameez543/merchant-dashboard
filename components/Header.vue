<template>
  <header
    class="bg-gray-100 w-full py-4 px-6"
    style="border-bottom: 1px solid var(--black-10, #1c1c1c1a)"
  >
    <div class="lg:flex sm:block justify-between items-center">
      <div class="lg:text-lg xs:text-12 font-semibold">Superstars AI</div>
      <div class="flex items-center">
        <input
          type="search"
          placeholder="Search"
          class="border rounded-lg p-2 mr-4"
        />
        <div class="relative" v-show="$route.name === 'Transactions'">
          <i
            @click="$nuxt.$emit('show-filter', true)"
            class="fa cursor-pointer fa-filter"
            aria-hidden="true"
          ></i>
          <FilterTrx />
        </div>

        <i
          class="fa-solid fa-sort ml-4 cursor-pointer"
          v-show="$route.name === 'Transactions'"
        ></i>
      </div>
    </div>
  </header>
</template>

<script>
import FilterTrx from "@/components/FilterTrx";
export default {
  comments: {
    FilterTrx,
  },
};
</script>
