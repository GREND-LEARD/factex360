# Inventario de funcionalidades del proyecto Xtratoph Admin

## Resumen ejecutivo

Tras revisar la estructura funcional del frontend (`co-xtratoph-admin-ft`) y los controladores del backend (`co-xtratoph-admin-bk`), el sistema se comporta como un **ERP administrativo/comercial** orientado a ventas, inventario, compras, tesorería, contabilidad y facturación electrónica.

### Conteo comercial sugerido

> **Para landing page / propuesta comercial**

- **14 módulos principales**
- **60+ macrofuncionalidades**
- **90+ subfuncionalidades operativas**
- **15+ reportes administrativos y contables**

### Frase comercial recomendada

**Xtratoph Admin es una plataforma ERP con 14 módulos integrados, más de 60 funcionalidades clave de operación empresarial, facturación electrónica DIAN, control de inventario, cartera, tesorería, compras, contabilidad y reportes gerenciales.**

---

## Metodología de conteo

Para este inventario:

- Se contaron **funcionalidades visibles o claramente explotables por negocio**.
- No se contaron utilidades técnicas menores como pipes, helpers o validaciones internas.
- Algunas funcionalidades tienen varias subfunciones; por eso hay dos niveles de conteo:
  - **Macrofuncionalidades**: módulos o capacidades grandes.
  - **Subfuncionalidades**: operaciones concretas dentro de cada módulo.

---

## 1. Autenticación, acceso y seguridad

### Macrofuncionalidades
1. Inicio de sesión.
2. Recuperación de contraseña.
3. Validación de token de recuperación.
4. Gestión de sesiones activas.
5. Cierre de sesiones duplicadas.
6. Control de acceso por autenticación.
7. Control de acceso por roles y permisos.

### Subfuncionalidades detectadas
- Login de usuarios.
- Envío de token para reset de contraseña por correo.
- Verificación de token de recuperación.
- Cambio/restablecimiento de contraseña.
- Consulta de sesiones activas del día.
- Detección de múltiples sesiones activas.
- Cierre remoto de otras sesiones.
- Guardas de ruta por autenticación.
- Guardas por rol.
- Interceptor de autenticación.
- Interceptor de errores.

---

## 2. Dashboard gerencial

### Macrofuncionalidades
1. Indicadores comerciales.
2. Analítica de ventas.
3. Analítica de productos.
4. Analítica de medios de pago.
5. Analítica por usuarios.
6. Actividad reciente.
7. KPIs de facturación.
8. Analítica por categorías y productos.

### Subfuncionalidades detectadas
- Ventas por mes.
- Productos más vendidos.
- Estadísticas por método de pago.
- Estadísticas por usuario/vendedor.
- Actividad reciente.
- Métricas de facturas.
- Estadísticas por categoría.
- Estadísticas por producto.

---

## 3. Facturación avanzada / POS / ventas

### Macrofuncionalidades
1. Facturación avanzada.
2. Búsqueda de clientes para facturar.
3. Búsqueda de productos con stock.
4. Gestión de pagos de factura.
5. Gestión de cuotas.
6. Envío y descarga de factura.
7. Notas débito y crédito.
8. Soportes de pago.
9. Consulta histórica de ventas.
10. Relación con caja / sesión de caja.

### Subfuncionalidades detectadas
- Crear factura.
- Consultar factura por ID, referencia o empresa/sede.
- Buscar clientes por empresa y sede para facturación.
- Buscar productos con stock para facturación.
- Obtener primer consecutivo / primer registro.
- Registrar pagos de factura.
- Pagar cuotas de cartera.
- Añadir soportes de pago a una factura.
- Eliminar soportes de pago.
- Crear nota crédito sobre factura.
- Crear nota débito sobre factura.
- Enviar factura electrónica por correo.
- Enviar factura por WhatsApp.
- Descargar factura en PDF.
- Ver detalle electrónico de la factura.
- Selección de cuenta/caja durante la facturación.
- Cierre rápido de sesión de caja desde el flujo de facturación.
- Conversión de cotización a factura.

---

## 4. Cotizaciones

### Macrofuncionalidades
1. Creación de cotizaciones.
2. Consulta histórica de cotizaciones.
3. Detalle de cotización.
4. Exportación/imposición en PDF.
5. Conversión de cotización a venta.

### Subfuncionalidades detectadas
- Guardar cotización.
- Listar cotizaciones por empresa y sede.
- Filtrar cotizaciones por fecha y búsqueda.
- Consultar cotización por ID.
- Obtener primer registro de cotizaciones.
- Generar PDF de cotización.
- Usar cotización como origen en facturación avanzada.

---

## 5. Clientes y cartera

### Macrofuncionalidades
1. Gestión de clientes.
2. Consulta de cartera por cliente.
3. Gestión de cuotas.
4. Historial crediticio.
5. Saldos a favor.
6. Devoluciones / refund.
7. Consulta geográfica básica.

### Subfuncionalidades detectadas
- Crear cliente.
- Editar cliente.
- Activar/inactivar cliente.
- Buscar clientes por empresa.
- Buscar clientes por empresa y sede.
- Consultar cliente por ID.
- Ver cuotas del cliente.
- Ver facturas a crédito del cliente.
- Ver historial de crédito del cliente.
- Pagar cuota desde módulo cliente.
- Consultar saldo a favor.
- Consultar movimientos del saldo a favor.
- Registrar devolución de saldo a favor.
- Consultar departamentos.
- Consultar municipios.

---

## 6. Proveedores y compras

### Macrofuncionalidades
1. Gestión de proveedores.
2. Historial de compras por proveedor.
3. Estadísticas por proveedor.
4. Registro de compras.
5. Confirmación de compras.
6. Búsqueda de productos para compra.
7. Exportación de proveedores.

### Subfuncionalidades detectadas
- Crear proveedor.
- Editar proveedor.
- Activar/inactivar proveedor.
- Buscar proveedores por empresa.
- Ver proveedor por ID.
- Ver proveedores asociados a producto.
- Exportar proveedores a Excel.
- Consultar historial de compras por proveedor.
- Ver estadísticas de productos por proveedor.
- Crear compra.
- Editar compra.
- Consultar compra por ID o referencia.
- Listar compras por sede con paginación.
- Ver estadísticas globales de compras.
- Confirmar compra.
- Buscar productos para compras.

---

## 7. Productos e inventario base

### Macrofuncionalidades
1. Gestión de productos.
2. Variantes de producto.
3. Asociaciones con proveedores.
4. Listas de precios.
5. Impuestos por producto.
6. Consulta de utilidad.
7. Historial y movimientos del producto.
8. Carga y exportación masiva.
9. Búsqueda por código o código de barras.
10. Gestión multimedia del producto.

### Subfuncionalidades detectadas
- Crear producto.
- Editar producto.
- Listar productos por empresa y sede.
- Consultar producto por ID.
- Consultar producto por código.
- Consultar producto por código de barras / key.
- Conteo de productos por empresa y sede.
- Filtrar por categoría.
- Buscar productos con stock por sede.
- Buscar productos con stock por bodega.
- Ver categorías usadas por productos.
- Exportar productos a Excel.
- Crear/editar variantes.
- Crear opciones de variante.
- Manejar listas de precios por producto.
- Relacionar proveedores al producto.
- Ver utilidad / margen del producto.
- Ver movimientos del inventario del producto.
- Ver tracker de inventario.
- Cargar foto o multimedia del producto.
- Escaneo de código de barras desde UI.
- Ajustes masivos de precios.
- Ajustes masivos de impuestos.
- Consulta del ledger / historial de ajustes masivos.
- Disponibilidad del producto en otras bodegas.

---

## 8. Operaciones de inventario

### Macrofuncionalidades
1. Ajustes de inventario.
2. Saldos iniciales de inventario.
3. Plantilla de carga masiva.
4. Gestión de bodegas.
5. Transferencias entre bodegas.
6. Consulta de stock por ubicación.
7. Trazabilidad del inventario.

### Subfuncionalidades detectadas
- Crear ajuste de inventario.
- Listar ajustes por sede con paginación.
- Consultar ajuste por ID.
- Buscar productos para ajustes.
- Inicializar stock / saldo inicial.
- Listar saldos iniciales por empresa y sede.
- Consultar un saldo inicial por ID.
- Descargar plantilla Excel de saldos iniciales.
- Crear bodega.
- Editar bodega.
- Activar/inactivar bodega.
- Listar bodegas por empresa.
- Consultar bodega por ID.
- Transferir inventario entre bodegas.
- Consultar movimientos cancelables o históricos del tracker.

---

## 9. Tesorería, caja y movimientos

### Macrofuncionalidades
1. Gestión de cuentas de caja.
2. Apertura y cierre de sesiones de caja.
3. Movimientos manuales.
4. Transferencias entre cajas/cuentas.
5. Consulta de saldos.
6. Reportes de caja.
7. Integración con ventas y egresos.

### Subfuncionalidades detectadas
- Crear cuenta de caja.
- Editar cuenta de caja.
- Activar/inactivar cuenta.
- Listar cuentas por empresa.
- Listar cuentas por empresa y sede.
- Filtrar cuentas por tipo.
- Consultar balance de una cuenta.
- Abrir sesión de caja.
- Cerrar sesión de caja.
- Consultar sesión activa.
- Listar sesiones por cuenta o empresa.
- Consultar sesiones abiertas por empresa.
- Consultar sesiones disponibles por fecha/hora.
- Registrar movimiento manual.
- Registrar transferencia entre cuentas/cajas.
- Ver movimientos por cuenta.
- Ver movimientos por sesión.
- Obtener reporte de sesión de caja.
- Obtener reporte general de movimientos de caja.

---

## 10. Gastos / egresos / finanzas operativas

### Macrofuncionalidades
1. Gestión de egresos.
2. Consulta y filtros de egresos.
3. Control de pagos de egresos.
4. Desactivación/anulación de registros.
5. Exportación de egresos.
6. Integración con categorías y medios de pago.

### Subfuncionalidades detectadas
- Crear egreso.
- Editar egreso.
- Consultar egreso por ID.
- Consultar egreso por empresa y sede.
- Filtrar egresos por fechas, usuario y búsqueda.
- Ver conteos o métricas de egresos.
- Deshabilitar/anular egreso.
- Exportar egresos a Excel.
- Registrar pagos de egresos.
- Manejar pagos a crédito de egresos.

---

## 11. Contabilidad

### Macrofuncionalidades
1. Plan de cuentas.
2. Configuración contable.
3. Notas contables / asientos manuales.
4. Parametrización de eventos contables.
5. Libros y estados financieros.
6. Integración con operación comercial.

### Subfuncionalidades detectadas
- Gestión del plan de cuentas.
- Gestión de configuraciones contables.
- Gestión de notas contables manuales.
- Parametrización contable por empresa.
- Consulta de opciones contables para reportes.
- Integración con movimientos de inventario/ventas/egresos.

---

## 12. Facturación electrónica DIAN

### Macrofuncionalidades
1. Bandeja DIAN.
2. Envío individual de documentos electrónicos.
3. Envío masivo de documentos electrónicos.
4. Sincronización individual con DIAN.
5. Sincronización masiva con DIAN.
6. Rangos de numeración.
7. Configuración de factura electrónica.
8. Documentos electrónicos y estado público.

### Subfuncionalidades detectadas
- Ver bandeja DIAN con paginación.
- Filtrar por tipo de documento.
- Filtrar por estado electrónico.
- Filtrar por tipo de pago.
- Filtrar por rango de fechas.
- Enviar factura individual a DIAN.
- Enviar lote de facturas a DIAN.
- Sincronizar factura individual con DIAN.
- Sincronizar lote de facturas.
- Administrar rangos de numeración.
- Configurar factura electrónica.
- Descargar PDF electrónico.
- Consulta pública del estado de una factura electrónica.

---

## 13. Administración del sistema y catálogos

### Macrofuncionalidades
1. Configuración general del negocio.
2. Sedes / oficinas.
3. Usuarios.
4. Roles.
5. Permisos / módulos.
6. Categorías de productos.
7. Categorías de egresos/ingresos.
8. Impuestos.
9. Métodos de pago.
10. Unidades de medida.
11. Variantes globales.
12. Listas de precios.
13. Carga inicial.

### Subfuncionalidades detectadas
- Configuración general.
- Gestión del perfil del negocio.
- Gestión de oficinas/sedes.
- Validación de límite de creación de oficinas.
- Crear usuarios.
- Editar usuarios.
- Activar/inactivar usuarios.
- Consultar perfil de usuario.
- Actualizar perfil propio.
- Cambiar contraseña propia.
- Verificar límite de creación de usuarios por empresa.
- Crear roles.
- Crear roles con módulos.
- Actualizar roles con módulos.
- Activar/inactivar roles.
- Consultar módulos del sistema.
- Consultar permisos.
- Gestionar categorías de productos.
- Gestionar categorías de egresos/ingresos.
- Gestionar impuestos.
- Gestionar métodos de pago.
- Gestionar unidades de medida.
- Gestionar variantes globales.
- Gestionar listas de precios.
- Carga inicial de productos.
- Ajustes masivos de precios/impuestos desde administración.

---

## 14. Empresas, suscripciones y cuenta

### Macrofuncionalidades
1. Gestión multiempresa.
2. Suscripciones.
3. Historial de suscripción.
4. Cuenta del usuario/empresa.
5. Historial de pagos.
6. Enlaces de pago.
7. Integración con Wompi.
8. Reset técnico de empresa.

### Subfuncionalidades detectadas
- Crear empresa.
- Editar empresa.
- Subir logo de empresa.
- Buscar empresas con paginación.
- Consultar empresa por URL.
- Crear suscripción para empresa.
- Ver historial de suscripción.
- Ver detalle de cuenta de empresa/usuario.
- Ver historial de pagos.
- Consultar pagos con paginación.
- Generar link de pago.
- Consultar estado de transacción Wompi.
- Webhook de pagos Wompi.
- Resetear empresa.
- Eliminar empresa.

---

## 15. Reportes gerenciales, operativos y contables

### Macrofuncionalidades
1. Reportes de finanzas y caja.
2. Reportes de ventas.
3. Reportes de descuentos.
4. Reportes de cartera.
5. Reportes de productos.
6. Reportes de compras.
7. Reportes de valorización y análisis de inventario.
8. Reportes contables.
9. Exportación a Excel/PDF.

### Subfuncionalidades detectadas
- Reporte de caja.
- Dashboard/reportes de caja.
- Reporte discriminado de productos.
- Reporte de ventas.
- Reporte de descuentos.
- Reporte de créditos vigentes / cartera.
- Reporte de productos.
- Reporte de compras por producto.
- Reporte de valorización de inventario.
- Reporte de análisis de inventario.
- Estado de resultados.
- Balance general.
- Balance de prueba.
- Libro diario.
- Libro mayor.
- Reporte de ventas por producto.
- Exportación Excel de ventas.
- Exportación Excel de compras.
- Exportación Excel de cartera.
- Exportación Excel de descuentos.
- Exportación Excel de estado de resultados.
- Exportación Excel de balance general.
- Exportación Excel de balance de prueba.
- Exportación Excel de libro diario.
- Exportación Excel de libro mayor.
- Reporte de bajo stock.
- Reporte de productos más movidos.

---

## 16. Funcionalidades transversales y de experiencia

### Subfuncionalidades detectadas
- Centro de ayuda / sección help.
- Sistema de notificaciones en encabezado.
- Notificaciones con paginación.
- Marcado de notificaciones como leídas.
- Eliminación individual y masiva de notificaciones.
- Soporte de WebSocket / tiempo real.
- Cambio de tema visual.
- Componentes de impresión.
- Descarga de archivos.
- Autocompletados reutilizables de clientes, productos, proveedores y categorías.
- Carga de imágenes y multimedia con drag & drop.

---

## Conteo final recomendado

### Conteo macro
- **14 módulos principales de negocio**
- **16 bloques funcionales si separas reportes y funcionalidades transversales**
- **60+ macrofuncionalidades comercializables**

### Conteo detallado
- **90+ subfuncionalidades operativas reales**
- **15+ reportes empresariales y contables**
- **Múltiples exportaciones a Excel/PDF**

---

## Cómo lo vendería en una landing

### Opción corta
**ERP administrativo con facturación electrónica DIAN, ventas, cartera, inventario, compras, tesorería, contabilidad, reportes gerenciales y control multiempresa.**

### Opción media
**Plataforma ERP para comercios y empresas con más de 60 funcionalidades clave: facturación avanzada, clientes, cartera, proveedores, compras, inventario por bodegas, caja, egresos, contabilidad, reportes y facturación electrónica DIAN.**

### Opción fuerte comercial
**Sistema ERP integral con más de 90 capacidades operativas, 14 módulos empresariales, reportes gerenciales y contables, facturación electrónica DIAN, control de inventario por bodegas, caja y sesiones, cartera, compras, suscripciones y administración multiempresa.**

---

## Recomendación final

Si lo vas a usar para una landing page, mi recomendación es comunicarlo así:

- **14 módulos integrados**
- **60+ funcionalidades clave**
- **15+ reportes**
- **Facturación electrónica DIAN**
- **Control total de ventas, inventario, compras, cartera, tesorería y contabilidad**

Ese mensaje es más claro y comercial que intentar poner absolutamente cada endpoint o cada subproceso técnico.

