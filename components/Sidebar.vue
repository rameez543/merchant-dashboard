<template>
  <nav class="w-64 py-4 px-6">
    <ul>
      <li class="mb-4">
        <nuxt-link to="/" class="text-gray-700">Overview</nuxt-link>
      </li>
      <li class="mb-4">
        <nuxt-link to="/transactions" class="text-gray-700"
          >Transactions</nuxt-link
        >
      </li>
      <li class="mb-4">
        <nuxt-link to="/invoices" class="text-gray-700">Invoices</nuxt-link>
      </li>
      <li class="mb-4">
        <nuxt-link to="/settings" class="text-gray-700">Settings</nuxt-link>
      </li>
      <li class="mb-4"><a href="#" class="text-gray-700">Customers</a></li>
      <li class="mb-4">
        <a href="#" class="text-gray-700">Product Catalog</a>
      </li>
      <li class="mb-4"><a href="#" class="text-gray-700">Reports</a></li>
      <li class="mb-4"><a href="#" class="text-gray-700">Checkout</a></li>
      <li class="mb-4">
        <a href="#" class="text-gray-700">Business Account</a>
      </li>
      <li class="mb-4">
        <a href="#" class="text-gray-700">Developer Tools</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {};
</script>
