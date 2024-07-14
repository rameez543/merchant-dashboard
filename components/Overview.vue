<template>
  <div class="max-w-[948px] px-4">
    <div class="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mb-8">
      <div class="bg-[#F9FEF0] p-4 shadow rounded-lg">
        <h3 class="text-gray-700 text-lg font-semibold">Revenue</h3>
        <p class="text-gray-900 text-2xl">$24M</p>
        <p class="text-green-500">+11.01%</p>
      </div>
      <div class="bg-[#DBE6F2] p-4 shadow rounded-lg">
        <h3 class="text-gray-700 text-lg font-semibold">Transactions</h3>
        <p class="text-gray-900 text-2xl">14K</p>
        <p class="text-red-500">-0.03%</p>
      </div>
      <div class="bg-[#F9FEF0] p-4 shadow rounded-lg">
        <h3 class="text-gray-700 text-lg font-semibold">Average Transaction</h3>
        <p class="text-gray-900 text-2xl">$2K</p>
        <p class="text-green-500">+15.03%</p>
      </div>
      <div class="bg-[#DBE6F2] p-4 shadow rounded-lg">
        <h3 class="text-gray-700 text-lg font-semibold">Refunds</h3>
        <p class="text-gray-900 text-2xl">1K</p>
        <p class="text-green-500">+6.08%</p>
      </div>
    </div>
    <div class="grid grid-cols-2 gap-4">
      <div class="bg-white p-4 shadow rounded-lg">
        <h3 class="text-gray-700 text-lg font-semibold">Revenue</h3>
        <ChartComponent
          :chartData="revenueChartData"
          :chartOptions="chartOptions"
          type="line"
        />
        <!-- <Line
          ref="lineChart"
          :chart-data="revenueChartData"
          :options="chartOptions"
        ></Line> -->
      </div>
      <div class="bg-white p-4 shadow rounded-lg">
        <h3 class="text-gray-700 text-lg font-semibold">
          Number of Transactions
        </h3>
        <ChartComponent
          type="line"
          :chartData="transactionsChartData"
          :chartOptions="chartOptions"
        />
      </div>
      <div class="bg-white p-4 shadow rounded-lg">
        <h3 class="text-gray-700 text-lg font-semibold">
          Transaction Value by Referrer
        </h3>
        <ChartComponent
          :chartData="referrerChartData"
          :chartOptions="chartOptions"
          type="bar"
        />
      </div>
      <div class="bg-white p-4 shadow rounded-lg">
        <h3 class="text-gray-700 text-lg font-semibold">
          Transaction Volume by Location
        </h3>
        <ChartComponent
          :chartData="locationChartData"
          :chartOptions="chartOptions"
          type="doughnut"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ChartComponent from "~/components/ChartComponent.vue";
// import { Line } from "vue-chartjs";
// import { reactiveProp } from "vue-chartjs";

export default {
  // extends: Line,
  components: {
    ChartComponent,
  },
  data() {
    return {
      revenueChartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Revenue",

            data: [40000, 39000, 41000, 42000, 43000, 45000, 46000],
            borderColor: "#526062",
            backgroundColor: null,
            borderWidth: 3,

            hoverBorderWidth: 3,
            hoverBackgroundColor: this.color,
            events: [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ],
            radius: 0,
            type: "line",
            lineTension: 0.1,
            fill: "transparent",
            pointDotRadius: 1,
            pointHitRadius: 2,
            pointHoverRadius: 5.5,

            pointHoverBorderWidth: 30,

            hidden: false,
          },
        ],
      },
      transactionsChartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "Transactions",
            backgroundColor: "#66BB6A",
            borderColor: "#526062",
            backgroundColor: null,
            borderWidth: 3,

            hoverBorderWidth: 3,
            hoverBackgroundColor: this.color,
            events: [
              "mousemove",
              "mouseout",
              "click",
              "touchstart",
              "touchmove",
            ],
            radius: 0,
            type: "line",
            lineTension: 0.1,
            fill: "transparent",
            pointDotRadius: 1,
            pointHitRadius: 2,
            pointHoverRadius: 5.5,

            pointHoverBorderWidth: 30,

            hidden: false,
            data: [12000, 12500, 13000, 13500, 14000, 14500, 15000],
          },
        ],
      },
      referrerChartData: {
        labels: ["YouTube", "Twitter", "Reddit", "IndieHacker"],
        datasets: [
          {
            label: "Referrer",
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0"],
            data: [120000, 150000, 180000, 90000],
          },
        ],
      },
      locationChartData: {
        labels: ["United States", "Canada", "Europe", "Other"],
        datasets: [
          {
            label: "Location",
            backgroundColor: ["#42A5F5", "#66BB6A", "#FFA726", "#26C6DA"],
            data: [38.6, 22.5, 30.8, 8.1],
          },
        ],
      },
      chartOptions: {
        layout: {
          padding: 20,
        },
        legend: {
          display: false,
        },
        showAllTooltips: true,
        responsive: true,
        maintainAspectRatio: false,
        // scales: {
        //   xAxes: [
        //     {
        //       ticks: {
        //         display: false,
        //         gridLines: {
        //           display: false,
        //         },
        //       },
        //     },
        //   ],
        //   yAxes: [
        //     {
        //       ticks: {
        //         display: false,
        //         gridLines: {
        //           display: false,
        //         },
        //       },

        //       position: "left",
        //     },
        //   ],
        // },
        scales: {
          xAxes: [
            {
              // ticks: {
              //   display: false,
              // },
              gridLines: {
                display: false,
              },
            },
          ],
          yAxes: [
            {
              ticks: {
                padding: 20,
              },
              gridLines: {
                display: false,
              },
            },
          ],
        },
      },
    };
  },
  mounted() {
    // this.renderChart(this.revenueChartData, this.chartOptions);
  },
};
</script>

<style scoped>
/* Add any necessary styles here */
</style>
