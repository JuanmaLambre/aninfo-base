$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("debito.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Debito de fondos",
  "description": "",
  "id": "debito-de-fondos",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Caja de ahorro con saldo suficiente",
  "description": "",
  "id": "debito-de-fondos;caja-de-ahorro-con-saldo-suficiente",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 5,
  "name": "que mi caja de ahorro tiene un saldo de \"100\" pesos",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "cuando debito \"50\" pesos",
  "keyword": "Cuando "
});
formatter.step({
  "line": 7,
  "name": "el saldo final es de \"50\" pesos",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 41
    }
  ],
  "location": "DebitoSteps.que_mi_caja_de_ahorro_tiene_un_saldo_de_pesos(int)"
});
formatter.result({
  "duration": 75151394,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 15
    }
  ],
  "location": "DebitoSteps.cuando_debito_pesos(int)"
});
formatter.result({
  "duration": 142470,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "50",
      "offset": 22
    }
  ],
  "location": "DebitoSteps.el_saldo_final_es_de_pesos(int)"
});
formatter.result({
  "duration": 1809285,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Caja de ahorro sin saldo suficiente",
  "description": "",
  "id": "debito-de-fondos;caja-de-ahorro-sin-saldo-suficiente",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 10,
  "name": "que mi caja de ahorro tiene un saldo de \"10\" pesos",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "cuando debito \"20\" pesos",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
  "name": "la operacion es rechazada y el saldo final es \"10\" pesos",
  "keyword": "Entonces "
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 41
    }
  ],
  "location": "DebitoSteps.que_mi_caja_de_ahorro_tiene_un_saldo_de_pesos(int)"
});
formatter.result({
  "duration": 115475,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "20",
      "offset": 15
    }
  ],
  "location": "DebitoSteps.cuando_debito_pesos(int)"
});
formatter.result({
  "duration": 123372,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "10",
      "offset": 47
    }
  ],
  "location": "DebitoSteps.la_operacion_es_rechazada_y_el_saldo_final_es_pesos(int)"
});
formatter.result({
  "duration": 81145,
  "status": "passed"
});
formatter.uri("user_story.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# language: es"
    }
  ],
  "line": 2,
  "name": "Empleado",
  "description": "",
  "id": "empleado",
  "keyword": "Característica"
});
formatter.scenario({
  "line": 4,
  "name": "Un empleado cambia el estado de una tarea",
  "description": "",
  "id": "empleado;un-empleado-cambia-el-estado-de-una-tarea",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 5,
  "name": "un empleado y una tarea asignada",
  "keyword": "Dado "
});
formatter.step({
  "line": 6,
  "name": "el empleado cambia el estado de la tarea",
  "keyword": "Cuando "
});
formatter.step({
  "line": 7,
  "name": "la tarea queda con el estado actualizado",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EmpleadoSteps.un_empleado_y_una_tarea_asignado()"
});
formatter.result({
  "duration": 228527,
  "status": "passed"
});
formatter.match({
  "location": "EmpleadoSteps.el_empleado_cambia_el_estado_de_la_tarea()"
});
formatter.result({
  "duration": 52145,
  "status": "passed"
});
formatter.match({
  "location": "EmpleadoSteps.la_tarea_queda_con_el_estado_actualizado()"
});
formatter.result({
  "duration": 42333,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Un empleado intenta cambiar el estado de una tarea que no le pertenece",
  "description": "",
  "id": "empleado;un-empleado-intenta-cambiar-el-estado-de-una-tarea-que-no-le-pertenece",
  "type": "scenario",
  "keyword": "Escenario"
});
formatter.step({
  "line": 10,
  "name": "un empleado y una tarea que no le pertenece",
  "keyword": "Dado "
});
formatter.step({
  "line": 11,
  "name": "el empleado cambia el estado de la tarea",
  "keyword": "Cuando "
});
formatter.step({
  "line": 12,
  "name": "la tarea queda con el estado anterior",
  "keyword": "Entonces "
});
formatter.match({
  "location": "EmpleadoSteps.un_empleado_y_una_tarea_que_no_le_pertenece()"
});
formatter.result({
  "duration": 47103,
  "status": "passed"
});
formatter.match({
  "location": "EmpleadoSteps.el_empleado_cambia_el_estado_de_la_tarea()"
});
formatter.result({
  "duration": 26951,
  "status": "passed"
});
formatter.match({
  "location": "EmpleadoSteps.la_tarea_queda_con_el_estado_anterior()"
});
formatter.result({
  "duration": 42698,
  "status": "passed"
});
});