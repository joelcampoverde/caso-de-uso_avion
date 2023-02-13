class TipoCuenta {
  constructor(codigo, nombre) {
    this.codigo = codigo
    this.nombre = nombre
  }
}

class Cuenta {
  constructor(numero, saldo) {
    this.numero = numero
    this.saldo = Number(saldo)
  }
}
class CuentaAhorro extends Cuenta {
  constructor(numero, saldo) {
    super(numero, saldo)
  }
}

class CuentaCorriente extends Cuenta {
  constructor(numero, saldo, interesMensual) {
    super(numero, saldo)
    this.interesMensual = Number(interesMensual)
  }

}

class InversionCDT extends Cuenta {
  constructor(numero, saldo, interesMensual, fechaCierre) {
    super(numero, saldo)
    this.interesMensual = Number(interesMensual)
    this.fechaCierre = fechaCierre
  }
}

export {
  TipoCuenta,
  CuentaAhorro,
  CuentaCorriente,
  InversionCDT
}
