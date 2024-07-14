<template>
  <div class="p-4">
    <h3 class="text-gray-700 text-lg font-semibold mb-4">Activities</h3>
    <ul>
      <li
        v-for="(notification, index) in activities"
        :key="index"
        class="flex p-1 items-start"
      >
        <div class="h-5 border bg-slate-50 rounded-[50%] w-5"></div>
        <div class="ml-2">
          <p class="text-gray-900 text-[14px]">{{ notification.message }}</p>
          <p class="text-gray-500 text-[12px]">{{ notification.time }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activities: [
        {
          message: "Discount details updated",
          time: "Just now",
          iconClass: "fas fa-exclamation-circle text-red-500",
        },
        {
          message: "Aman added a new product",
          time: "59 minutes ago",
          iconClass: "fas fa-user-plus text-blue-500",
        },
        {
          message: "Refunds cleared",
          time: "12 hours ago",
          iconClass: "fas fa-star text-yellow-500",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
