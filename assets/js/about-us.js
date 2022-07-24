var doughnutData = [
    {
        value: 30,
        color:"#F7464A"
    },
    {
        value : 50,
        color : "#46BFBD"
    },
    {
        value : 100,
        color : "#FDB45C"
    }

];
var myDoughnut = new Chart(document.getElementById("performance").getContext("2d")).Doughnut(doughnutData);