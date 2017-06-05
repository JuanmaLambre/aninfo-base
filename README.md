# Proyecto base

Este proyecto es un ejemplo del uso de la herramienta Cucumber como medio de implementacion de la técnica BDD

Para correr este ejemplo ejecutar:

```
mvn test
```

## Cómo agregar un test

- Agregar una feature test en ```src/test/resources/features/*.features```
- Mappear los tests en ```src/test/java/fiuba/*Test.java``` (correr ```mvn test``` para instrucciones)
- Implementar el modelo en ```src/main/java/fiuba```
- Testear con ```mvn test```
