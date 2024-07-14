<template>
  <div class="p-6">
    <div class="flex items-center">
      <p class="text-[16px] font-bold">USER Name:</p>

      <p v-if="currentEdit != 'name'">{{ userInfo?.name }}</p>
      <div v-else class="flex items-center">
        <input type="text" v-model="nameValue" />

        <button
          @click="handleClick"
          class="border p-1 ml-4 rounded-md bg-yellow-600"
        >
          Apply
        </button>
        <p class="text-red-600 ml-4">{{ this.error?.name }}</p>
      </div>
      <i
        v-if="currentEdit != 'name'"
        @click="handleEdit('name')"
        class="fas fa-edit ml-4"
      ></i>
    </div>
    <div class="flex mt-6 items-center">
      <p class="text-[16px] font-bold">USER Email:</p>

      <p v-if="currentEdit != 'email'">{{ userInfo?.email }}</p>
      <div v-else class="flex items-center">
        <input type="text" v-model="emailValue" />

        <button
          @click="handleClick"
          class="border p-1 ml-4 rounded-md bg-yellow-600"
        >
          Apply
        </button>
        <p class="text-red-600 ml-4">{{ this.error?.email }}</p>
      </div>
      <i
        v-if="currentEdit != 'email'"
        @click="handleEdit('email')"
        class="fas fa-edit ml-4"
      ></i>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      currentEdit: "",
      nameValue: "",
      emailValue: "",
      error: {},
    };
  },
  computed: {
    ...mapState({
      userInfo: (state) => state.dashboard.userInfo,
    }),
  },
  async mounted() {
    try {
      const resp = await this.$store.dispatch("dashboard/GET_USER_INFO");
      console.log("respp++", resp);
    } catch (err) {
      console.log("eer", err);
    }
  },
  methods: {
    handleEdit(type) {
      this.currentEdit = type;
    },
    async handleClick() {
      if (this.currentEdit === "name") {
        this.error.name = "";
        const nameRegex = /^[a-zA-Z\s'-]{2,50}$/;
        if (!nameRegex.test(this.nameValue)) {
          return (this.error = {
            ...this.error,
            name: "please enter valid name",
          });
        }
      } else if (this.currentEdit === "email") {
        this.error.email = "";
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(this.emailValue)) {
          return (this.error = {
            ...this.error,
            email: "please enter valid email",
          });
        }
      }
      await this.$store.dispatch("dashboard/SET_USER_INFO", {
        name: this.nameValue || this.userInfo?.name,
        email: this.emailValue || this.userInfo?.email,
      });
      this.currentEdit = "";
    },
  },
  layout: "main-app",
};
</script>
