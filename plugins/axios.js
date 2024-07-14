export default function ({ $axios, store, redirect, route, app }) {
  $axios.setBaseURL(process.env.BASE_URL || "http://localhost:3000");
}
