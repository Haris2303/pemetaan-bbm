// Initialize charts
const districtCtx = document.getElementById("districtChart").getContext("2d");
const districtChart = new Chart(districtCtx, {
  type: "bar",
  data: {
    labels: [
      "Sorong",
      "Sorong Utara",
      "Sorong Timur",
      "Sorong Barat",
      "Sorong Manoi",
    ],
    datasets: [
      {
        label: "SPBU",
        data: [2, 0, 3, 0, 3],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
        borderColor: "rgba(54, 162, 235, 1)",
        borderWidth: 1,
      },
      {
        label: "Pertashop",
        data: [0, 2, 1, 3, 0],
        backgroundColor: "rgba(255, 159, 64, 0.7)",
        borderColor: "rgba(255, 159, 64, 1)",
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

const statusCtx = document.getElementById("statusChart").getContext("2d");
const statusChart = new Chart(statusCtx, {
  type: "pie",
  data: {
    labels: [
      "SPBU Aktif",
      "SPBU Non-Aktif",
      "Pertashop Aktif",
      "Pertashop Non-Aktif",
    ],
    datasets: [
      {
        data: [6, 2, 4, 3],
        backgroundColor: [
          "rgba(75, 192, 192, 0.7)",
          "rgba(255, 99, 132, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(153, 102, 255, 0.7)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
      },
    },
  },
});

window.addEventListener("load", () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
});
