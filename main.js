// Variables para slider
var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("value1");
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("value2");

// Variables para gráfico
var rendBrut = 0;
var inver = 0;

var montoInv = 0;
var plazoInv = 0;

// Configuración de gráfico

//Opción 1
var options = {
  series: [75, 25],
  chart: {
  width: 500,
  type: 'donut',
  },
  colors: ['#14DA13', '#000000'],
  plotOptions: {
    pie:{
      donut: {
        size: '85%',
      },
    },
  },
  labels: ['Rendimiento bruto', 'Inversión'],
  dataLabels: {
    enabled: false,
  },
  responsive: [{
    breakpoint: 1180,
    options: {
      chart: {
        width: 300
      },
    }
  }],
  legend: {
    show: false,
  },
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();


//Opción 2
// var options = {
//     series: [70],
//     chart: {
//     height: 350,
//     type: 'radialBar',
//   },
//   plotOptions: {
//     radialBar: {
//       hollow: {
//         size: '75%',
//       }
//     },
//   },
//   colors:['#14DA13'],
//   labels: ['Rendimiento bruto'],
// };

// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


//Opción 3
// var options = {
//   series: [20, 30, 50],
//   chart: {
//   id: 'mychart',
//   height: 500,
//   type: 'radialBar',
//   },
//   plotOptions: {
//     radialBar: {
//       offsetY: 0,
//       offsetX: 10,
//       startAngle: 0,
//       endAngle: 270,
//       hollow: {
//         margin: 5,
//         size: '30%',
//         background: 'transparent',
//         image: undefined,
//       },
//       dataLabels: {
//         name: {
//           show: false,
//         },
//         value: {
//           show: false,
//         }
//       }
//     }
//   },
//   colors: ['#1ab7ea', '#0084ff', '#39539E'],
//   labels: ['Inversión WORTEV', 'Inversión tradicional', 'Inversión en bancos'],
//   legend: {
//     show: true,
//     floating: true,
//     fontSize: '16px',
//     position: 'left',
//     offsetX: 30,
//     offsetY: 30,
//     labels: {
//       useSeriesColors: true,
//     },
//     markers: {
//       size: 0
//     },
//     formatter: function(seriesName, opts) {
//       return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
//     },
//     itemMargin: {
//       vertical: 3
//     }
//   },
//   responsive: [{
//     breakpoint: 480,
//     options: {
//       legend: {
//           show: false
//       }
//     }
//   }]
// };
// var chart = new ApexCharts(document.querySelector("#chart"), options);
// chart.render();


// Control de sliders
slider1.oninput = function () {
    output1.innerHTML = this.value*10000;
    montoInic = this.value*10000;
    ApexCharts.exec('mychart', 'updateSeries', [this.value, this.value, this.value], true);
}
slider2.oninput = function () {
    output2.innerHTML = this.value*1000;
    depositMens = this.value*1000
}
slider1.addEventListener("input", function(){
    var x = slider1.value;
    var color = 'linear-gradient(90deg, #5BE55A '+x+'%, #A7FFA4 '+ x +'%)';
    slider1.style.background = color;
    invWortev = x;
})
slider2.addEventListener("input", function(){
    var x = slider2.value;
    var color = 'linear-gradient(90deg, #5BE55A '+x+'%, #A7FFA4 '+ x +'%)';
    slider2.style.background = color;
    invWortev = x;
})






// Actualización de valores en tiempo real
// output1.innerHTML = slider1.value;
// output2.innerHTML = slider2.value;
// output3.innerHTML = slider3.value;