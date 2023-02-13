class CuentaBancaria {
  constructor(titular, tipoCuenta, cuentaProducto) {
    this.titular = titular
    this.tipoCuenta = tipoCuenta
    this.cuentaProducto = cuentaProducto
    this.fechaApertura = new Date().toLocaleString()
  }
}

export default CuentaBancaria
