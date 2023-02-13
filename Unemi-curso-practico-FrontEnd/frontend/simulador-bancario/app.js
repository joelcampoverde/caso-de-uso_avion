// importacion de modelos de clases.
import RepositorioCuentasBanco from '../../src/repository/repositorio-cuentas.js'
import { CasoUsoSimuladorBancario } from '../../src/use-cases/usecases-simulador-bancario.js'
import { RenderTemplate } from './table-render.js'

// crear las instancias de las clases
const repositorioCuentasBanco = new RepositorioCuentasBanco()
const casoUsoSimuladorBancario = new CasoUsoSimuladorBancario(repositorioCuentasBanco)
const renderTemplate = new RenderTemplate(repositorioCuentasBanco.cuentas)

// se agrega la referencia a los constroles del formulario HTML
const tbody = document.querySelector("#id-table-cuentas-banco > tbody")
const tfoot = document.querySelector("#id-table-cuentas-banco > tfoot")

const formRegistroCuenta = document.querySelector('#id-form-registro-titular-cuenta')
const selectTipo = document.getElementById('id-select-tipo-cuenta')

// capturamos en evento submit del formulario HTML addEventListener
formRegistroCuenta.addEventListener('submit', (event) => {
  event.preventDefault();
  // creamos un objeto FormData con los valores de los controles del Formulario HTML
  const formdata = new FormData(event.target)
  // covertimos los datos en objeto key: values (diccionario)
  const data = Object.fromEntries(formdata.entries())

  data.tipoNombre = selectTipo.options[selectTipo.selectedIndex].text

  // modelo de negocio agregar cuentas bancarias
  casoUsoSimuladorBancario.crearCuenta(data)
  // renderizar datos en la tabla HTML
  tbody.innerHTML = renderTemplate.renderTbody()
  tfoot.innerHTML = renderTemplate.renderTfoot()
});


tbody.addEventListener('click', (event) => {
  event.preventDefault();
  // capturamos la accion-depositar monto
  if (event.target.closest('a[rel="accion-depositar"]')) {

    const monto = prompt("Ingrese el monto a Depositar: ", "0.00")

    if (isFinite(monto) && monto) {
      const numeroCuenta = event.target.dataset.cuenta
      casoUsoSimuladorBancario.depositarMonto(numeroCuenta, monto)
      tbody.innerHTML = renderTemplate.renderTbody()
      tfoot.innerHTML = renderTemplate.renderTfoot()
    }

  } // capturamos la accion-bebitar monto
  else if (event.target.closest('a[rel="accion-debitar"]')) {

    const monto = prompt("Ingrese el monto a Debitar: ", "0.00")

    if (isFinite(monto) && monto) {
      const numeroCuenta = event.target.dataset.cuenta
      casoUsoSimuladorBancario.debitarMonto(numeroCuenta, monto)
      tbody.innerHTML = renderTemplate.renderTbody()
      tfoot.innerHTML = renderTemplate.renderTfoot()
    }

  }

})
