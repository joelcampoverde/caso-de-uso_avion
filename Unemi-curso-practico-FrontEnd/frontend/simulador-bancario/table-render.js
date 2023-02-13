export class RenderTemplate {

  constructor(cuentas) {
    this.cuentas = cuentas
    this.montoTotal = 0
  }

  renderTbody() {
    this.montoTotal = 0
    return this.cuentas.map((cuenta) => {
      this.montoTotal += cuenta.cuentaProducto.saldo
      return `<tr>
            <td><b>${cuenta.cuentaProducto.numero}</b></td>
            <td>${cuenta.titular.cedula}</td>
            <td>${cuenta.titular.nombres} ${cuenta.titular.apellidos}</td>
            <td>${cuenta.titular.genero}</td>
            <td>${cuenta.tipoCuenta.codigo}</td>
            <td>$ ${cuenta.cuentaProducto.saldo}</td>
            <td>${cuenta.fechaApertura}</td>
            <td><div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Acciones
                </button>
                <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                  <li>
                    <a class="dropdown-item" href="#" rel="accion-depositar" data-cuenta="${cuenta.cuentaProducto.numero}">Depositar</a>
                    <a class="dropdown-item" href="#" rel="accion-debitar" data-cuenta="${cuenta.cuentaProducto.numero}">Debitar</a>
                  </li>
                </ul>
              </div>
            </td>
        </tr>`
    }).join('')
  }

  renderTfoot() {
    return `<tr>
        <td colspan="5" align="right"><b>Monto Total: </b></td>
        <td colspan="2">$ ${this.montoTotal}</td>
        <td></td>
    </tr>`
  }
}
