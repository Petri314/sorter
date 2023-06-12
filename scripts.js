
console.log("El archivo scripts.js se cargó correctamente.");




var totalesAcumulados = {}; // Objeto para almacenar los totales acumulados

function sumarFila(input, camara) {
  var fila = input.parentNode.parentNode; // Obtener la fila padre del input
  var celdas = fila.getElementsByTagName('td');
  var totalTurnoCelda = celdas[1];
  var totalTurno = 0;

  for (var i = 2; i < celdas.length; i++) {
    var valor = parseInt(celdas[i].getElementsByTagName('input')[0].value) || 0;
    totalTurno += valor;
  }

  totalTurnoCelda.innerHTML = totalTurno;

  actualizarTotalAcumulado(camara, totalTurno);
}

function actualizarTotalAcumulado(camara, totalTurno) {
  totalesAcumulados[camara] = totalTurno; // Almacenar el total acumulado

  var tablaAcumulados = document.getElementById('tabla-acumulados');
  var filas = tablaAcumulados.getElementsByTagName('tr');

  for (var i = 0; i < filas.length; i++) {
    var celdas = filas[i].getElementsByTagName('td');
    if (celdas[0].innerHTML === camara) {
      celdas[1].innerHTML = totalTurno;
      return; // Salir de la función si se actualizó el total acumulado
    }
  }

  // Si no se encontró una fila para la cámara, crear una nueva
  var nuevaFila = document.createElement('tr');
  var nuevaCeldaCamara = document.createElement('td');
  var nuevaCeldaTotal = document.createElement('td');
  nuevaCeldaCamara.innerHTML = camara;
  nuevaCeldaTotal.innerHTML = totalTurno;
  nuevaFila.appendChild(nuevaCeldaCamara);
  nuevaFila.appendChild(nuevaCeldaTotal);
  tablaAcumulados.appendChild(nuevaFila);
}

function limpiarCampos() {
  var filas = document.getElementsByTagName('tr');

  for (var i = 0; i < filas.length; i++) {
    var celdas = filas[i].getElementsByTagName('td');

    for (var j = 2; j < celdas.length; j++) {
      var input = celdas[j].getElementsByTagName('input')[0];
      input.value = '';
    }

    var totalTurnoCelda = celdas[1];
    totalTurnoCelda.innerHTML = '';
  }

  var tablaAcumulados = document.getElementById('tabla-acumulados');
  tablaAcumulados.innerHTML = ''; // Limpiar la tabla de totales acumulados
  totalesAcumulados = {}; // Reiniciar el objeto de totales acumulados
}

window.addEventListener('DOMContentLoaded', function() {
  var celdas = document.querySelectorAll('td');

  for (var i = 0; i < celdas.length; i++) {
    var input = celdas[i].querySelector('input');
    if (input) {
      var anchoCelda = celdas[i].offsetWidth;
      input.style.width = anchoCelda + 'px';
    }
  }
});



