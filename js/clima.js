
const ctx = document.getElementById("climaChart");

new Chart(ctx, {
    type: "line",
    data: {
        labels: ["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"],
        datasets: [{
            label: "Temperatura promedio (°C)",
            data: [26, 27, 27, 28, 28, 27, 27, 28, 28, 27, 26, 26],
            borderColor: "#E75704",
            backgroundColor: "rgba(231,87,4,0.3)",
            tension: 0.4,
            borderWidth: 3
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: false }
        }
    }
});