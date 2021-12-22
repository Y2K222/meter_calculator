<template>
  <div class="weekly-chart">
    <canvas id="weekly-chart" style="height: 200px"> </canvas>
  </div>
</template>
<script>
import Chart from "chart.js";
export default {
  name: "WeeklyChart",
  props: {
    weeklyDatas: {
      type: Array,
      require: true,
    },
  },
  methods: {
    drawWeeklyChart: function () {
      const ctx = document.getElementById("weekly-chart").getContext("2d");
      const myChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: [
            "တနင်္ဂနွေ",
            "တနင်္လာ",
            "အင်္ဂါ",
            "ဗုဒ္ဓဟူး",
            "ကြာသပတေး",
            "သောကြာ",
            "စနေ",
          ],
          datasets: [
            {
              label: "အသားတင်ယူနစ်များ",
              data: this.weeklyDatas,
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
      self.drawWeeklyChart();
    }, 2000);
  },
};
</script>