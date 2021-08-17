// Variables para slider
var slider1 = document.getElementById("calc-myRange1");
var output1 = document.getElementById("calc-cantidad");
var slider2 = document.getElementById("calc-myRange2");
var output2 = document.getElementById("calc-tiempo");

//Variables para actualizar textos
var inputText1 = document.getElementById("calc-input-text1");
var inputText2 = document.getElementById("calc-input-text2");

var resultText1 = document.getElementById("calc-result-text1");
var resultText2 = document.getElementById("calc-result-text2");
var resultText3 = document.getElementById("calc-result-text3");
var resultText4 = document.getElementById("calc-result-text4");
var resultText5 = document.getElementById("calc-result-text5");
var resultText6 = document.getElementById("calc-result-text6");
var resultText7 = document.getElementById("calc-result-text7");
var resultText8 = document.getElementById("calc-result-text8");
var resultTotal = document.getElementById("calc-result-total");

// Variables para gráfico
var montoInic = 10000;
var plazoInv = 1;

// Configuración de gráfico

//Opción 1
var options = {
  series: [75, 25],
  chart: {
    width: 450,
    type: 'donut',
  },
  colors: ['#14DA13', '#000000'],
  plotOptions: {
    pie: {
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
    breakpoint: 1250,
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

var chart = new ApexCharts(document.querySelector("#calc-chart"), options);
chart.render();

// Control de sliders
slider1.oninput = function () {
  montoInic = this.value * 10000;
  var aux = (parseInt(this.value * 10000)).toFixed(2);
  output1.value = formatear(aux);
  inputText1.innerHTML = formatear(aux);
  calcular(montoInic, plazoInv);
  ApexCharts.exec('mychart', 'updateSeries', [this.value, this.value, this.value], true);
}
slider2.oninput = function () {
  plazoInv = this.value;
  output2.innerHTML = this.value;
  calcular(montoInic, plazoInv);
}
slider1.addEventListener("input", function () {
  var x = slider1.value;
  var color = 'linear-gradient(90deg, #5BE55A ' + x + '%, #ffff ' + x + '%)';
  slider1.style.background = color;
  invWortev = x;
})
slider2.addEventListener("input", function () {
  var x = slider2.value * 10;
  var color = 'linear-gradient(90deg, #5BE55A ' + x + '%, #ffff ' + x + '%)';
  slider2.style.background = color;
  invWortev = x;
})
output1.onchange = function () {
  montoInic = this.value;
  var aux = formatear(parseInt(this.value).toFixed(2));
  output1.value = aux;
  calcular(montoInic, plazoInv);
}

//Actualización de datos en tiempo real y funcionalidad de calculadora
function calcular(monto, tiempo) {
  if (monto >= 0) {
    resultText1.innerHTML = "$  " + monto.toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
    resultText2.innerHTML = "$  " + (monto * 0.02).toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
    resultText3.innerHTML = "$  " + (monto * 0.02 * 0.16).toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
    resultText4.innerHTML = "$  " + (monto * 0.02 + monto * 0.02 * 0.16).toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
    resultText5.innerHTML = "$  " + (-monto * 0.02 * 0.1066).toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
    resultText6.innerHTML = "$  " + (-monto * 0.02 * 0.2).toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
    resultText7.innerHTML = "$  " + (-monto * 0.02 * 0.1066 - monto * 0.02 * 0.2).toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
    resultText8.innerHTML = "$  " + (monto * 0.02 + monto * 0.02 * 0.16 - monto * 0.02 * 0.1066 - monto * 0.02 * 0.2).toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
    resultTotal.innerHTML = "$  " + ((monto * 0.02 + monto * 0.02 * 0.16 - monto * 0.02 * 0.1066 - monto * 0.02 * 0.2) * 12).toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
    inputText2.innerHTML = "$  " + ((monto * 0.02 + monto * 0.02 * 0.16 - monto * 0.02 * 0.1066 - monto * 0.02 * 0.2) * 12 * tiempo).toLocaleString('es-MX', {
      minimumFractionDigits: 2
    });
  } else {
    alert("Error al colocar tu número");
  }
}

//Dar formato a números
function formatear(dato) {
  return dato.replace(/./g, function (c, i, a) {
    return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "," + c : c;
  });
}

// center chart copy
function centerLegend() {
  console.log('called!');
  var chartBox = document.getElementById("calc-chart");
  var chartLegend = document.getElementById("calc-result");

  var chartBoxWidth = chartBox.offsetWidth;
  var chartBoxHeight = chartBox.offsetHeight;

  var messageBoxWidth = chartLegend.offsetWidth;
  var messageBoxHeight = chartLegend.offsetHeight;

  chartLegend.style.left = (chartBoxWidth - messageBoxWidth) / 2 + "px";
  chartLegend.style.top = (chartBoxHeight - messageBoxHeight) / 2 + "px";
}

centerLegend();

window.addEventListener("resize", function () {
  centerLegend();
});
// end: center chart copy


//Alternativas calculadora

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