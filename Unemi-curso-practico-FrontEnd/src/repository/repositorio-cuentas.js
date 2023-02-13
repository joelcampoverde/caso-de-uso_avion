class RepositorioCuentasBanco {
  constructor() {
    this.cuentas = []
    this.transacciones = []
  }

  crearCuenta(cuenta) {
    this.cuentas.push(cuenta)
    console.log(this.cuentas)
  }

  getGeneraNumCuenta() {
    let numeroCuenta = this.cuentas.length + 1
    return numeroCuenta.toString().padStart(10, '0')
  }

  getExisteTitularAndTipoCuenta(cedula, tipoCuenta) {
    return this.cuentas.filter(
      (cuenta) => cuenta.titular.cedula === cedula && cuenta.tipoCuenta.codigo === tipoCuenta
    ).shift()
  }

  getExisteTitularAndTipoCuenta2(cedula, tipoCuenta) {
    for (const cuenta of this.cuentas) {
      if (cuenta.titular.cedula === cedula && cuenta.tipoCuenta.codigo === tipoCuenta) {
        return cuenta
      }
    }
  }

  depositarMonto(numeroCuenta, monto) {
    for (const cuenta of this.cuentas) {
      if (cuenta.cuentaProducto.numero === numeroCuenta) {
        cuenta.cuentaProducto.saldo += Number(monto)
        return cuenta
      }
    }
  }

  debitarMonto(numeroCuenta, monto) {
    for (const cuenta of this.cuentas) {
      if (cuenta.cuentaProducto.numero === numeroCuenta) {
        if ((cuenta.cuentaProducto.saldo - Number(monto)) >= 0) {
          cuenta.cuentaProducto.saldo -= Number(monto)
          return cuenta
        }

      }
    }
  }

}
export default RepositorioCuentasBanco
