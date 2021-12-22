<template>
  <div class="monthly-chart">
    <canvas id="monthly-chart" style="height: 200px"> </canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
export default {
  name: "MeterCalculatorMonthlychart",
  props: {
    monthlyDatas: {
      type: Array,
      require: true,
    },
  },
  methods: {
    drawMonthlyChart: function () {
      const ctx = document.getElementById("monthly-chart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "1",
            "2",
            "3",
            "4",
            "5",
            "6",
            "7",
            "8",
            "9",
            "10",
            "11",
            "12",
            "13",
            "14",
            "15",
            "16",
            "17",
            "18",
            "19",
            "20",
            "21",
            "22",
            "23",
            "24",
            "25",
            "26",
            "27",
            "28",
            "29",
            "30",
          ],
          datasets: [
            {
              label: "# of Votes",
              data: this.monthlyDatas,
              backgroundColor: "rgba(54, 162, 235, 0.2)",
              borderColor: "rgba(54, 162, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      });
      myChart.draw();
    },
  },
  created: function () {
    var self = this;
    setTimeout(function () {
      self.drawMonthlyChart();
    }, 500);
  },
};
</script>
