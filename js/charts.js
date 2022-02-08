const options = {
    chart: {
      type: 'line',
      height: "280px",
      fontFamily: "Nunito Sans",
      toolbar:{
          show: false,
      }
    },
    stroke:{
        curve:"smooth",
        width: 3,
        colors:["#100b57"],
    },
    markers: {
        size: 7,
        colors:["#100b57"],
    },
    grid:{
        strokeDashArray:10,
    },
    series: [{
      name: 'Vendas',
      data: [30,40,35,3,5,10,70,6,10,15,100,19]
    }],
    xaxis: {
      categories: ["Jan","Fev","Mar","Abr","Mai","Jun","Jul","Ago","Set","Out","Nov","Dez"]
    }
  }
  
  const chart = new ApexCharts(document.querySelector("#chart"), options);
  
  chart.render();

  /*  -  radial chart - */
  // const optionsRadial = {
  //   series: [58],
  //   chart: {
  //   height: 280,
  //   type: 'radialBar',
  // },
  // plotOptions: {
  //   radialBar: {
  //     hollow: {
  //       size: '60%',
  //     },
  //     dataLabels:{
  //         name: {
  //             show: false,
  //         },
  //         value:{
  //             formatter: function(val){
  //                 return parseInt(val);
  //             },
  //             color: '#777',
  //             fontSize: '40px',
  //             fontWeight: 500,
  //         }
  //     }
  //   },
  // },
  // stroke:{
  //     lineCap: "round",
  // },
  // fill: {
  //   colors:["#ffb100"],
  // },
  // };

  // const chartRadial = new ApexCharts(document.querySelector("#emailChart"), optionsRadial);
  //       chartRadial.render();

  const optionsRadial = {
    series: [93, 20, 87, 5],
    chart: {
    height: 280,
    type: 'radialBar',
  },
  plotOptions: {
    radialBar: {
      dataLabels: {
        name: {
          fontSize: '22px',
        },
        value: {
          fontSize: '16px',
        },
        total: {
          show: true,
          label: 'Total',
          formatter: function (w) {
            // By default this function returns the average of all series. The below is just an example to show the use of custom formatter function
            return 250
          }
        }
      }
    }
  },
  labels: ['Instalados', 'Conectados', 'Vistorias', 'Aguardando'],
  };

  const chartRadial = new ApexCharts(document.querySelector("#emailChart"), optionsRadial);
  chartRadial.render();
