<template>
  <div class="p-4">
    <h3 class="text-gray-700 text-lg font-semibold mb-4">Notifications</h3>

    <div
      v-for="(notification, index) in notifications"
      :key="index"
      class="flex p-1 items-start"
    >
      <div :class="notification.iconClass" class="h-5 w-5"></div>
      <div class="ml-2">
        <p class="text-gray-900 text-[14px]">{{ notification.message }}</p>
        <p class="text-gray-500 text-[12px]">{{ notification.time }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      notifications: [
        {
          message: "You have an issue that needs your attention",
          time: "Just now",
          iconClass: "fas fa-exclamation-circle text-red-500",
        },
        {
          message: "New team member joined",
          time: "59 minutes ago",
          iconClass: "fas fa-user-plus text-blue-500",
        },
        {
          message: "New product feature available",
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
