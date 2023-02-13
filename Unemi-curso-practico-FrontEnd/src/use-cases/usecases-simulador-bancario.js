import Titular from '../entity/titular.js'

import {
  TipoCuenta,
  CuentaAhorro,
  CuentaCorriente,
  InversionCDT
} from '../entity/cuenta-producto.js'

import CuentaBancaria from '../entity/cuenta-banco.js'

class CasoUsoSimuladorBancario {

  constructor(repositorioCuentasBanco) {
    this.repositorioCuentasBanco = repositorioCuentasBanco
  }

  crearCuenta(data) {

    const cuenta = this.repositorioCuentasBanco.getExisteTitularAndTipoCuenta2(
      data.cedula,
      data.tipo
    )

    if (!cuenta) {

      const titular = new Titular(
        data.cedula,
        data.nombres.toUpperCase(),
        data.apellidos.toUpperCase(),
        data.genero
      )

      const tipoCuenta = new TipoCuenta(
        data.tipo,
        data.tipoNombre
      )

      const cuentaProducto = this.#getCuentaProducto(data)

      const cuentaBancaria = new CuentaBancaria(
        titular,
        tipoCuenta,
        cuentaProducto
      )

      this.repositorioCuentasBanco.crearCuenta(cuentaBancaria)

    }
    else {
      alert('Existe Titular con Tipo de cuenta repetido')

    }

  }

  #getCuentaProducto(data) {
    const numeroCuenta = this.repositorioCuentasBanco.getGeneraNumCuenta()
    switch (data.tipo) {
      case "AHORRO":
        return new CuentaAhorro(
          numeroCuenta,
          data.saldo
        )
      case "CORRIENTE":
        return new CuentaCorriente(
          numeroCuenta,
          data.saldo,
          data.interes
        )
      case "INVERSION":
        return new InversionCDT(
          numeroCuenta,
          data.saldo,
          data.interes
        )
    }

  }

  depositarMonto(numeroCuenta, monto) {
    return this.repositorioCuentasBanco.depositarMonto(numeroCuenta, monto)
  }


  debitarMonto(numeroCuenta, monto) {
    return this.repositorioCuentasBanco.debitarMonto(numeroCuenta, monto)
  }

}

export {
  CasoUsoSimuladorBancario
}
