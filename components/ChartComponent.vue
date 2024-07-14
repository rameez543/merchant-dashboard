<template>
  <div>
    <canvas ref="canvas"></canvas>
  </div>
</template>

<script>
import { Bar, Line, Pie, Doughnut } from "vue-chartjs";
import { Chart } from "chart.js";

export default {
  props: {
    type: {
      type: String,
      required: true,
      validator: (value) => ["line", "bar", "pie", "doughnut"].includes(value),
    },
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => {},
    },
  },
  mounted() {
    this.renderChart(this.chartData, this.chartOptions);
  },
  methods: {
    renderChart(chartData, chartOptions) {
      switch (this.type) {
        case "line":
          new Chart(this.$refs.canvas.getContext("2d"), {
            type: "line",
            data: chartData,
            options: chartOptions,
          });
          break;
        case "bar":
          new Chart(this.$refs.canvas.getContext("2d"), {
            type: "bar",
            data: chartData,
            options: chartOptions,
          });
          break;
        case "pie":
          new Chart(this.$refs.canvas.getContext("2d"), {
            type: "pie",
            data: chartData,
            options: chartOptions,
          });
          break;
        case "doughnut":
          new Chart(this.$refs.canvas.getContext("2d"), {
            type: "doughnut",
            data: chartData,
            options: chartOptions,
          });
          break;
      }
    },
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
