# Prueba proceso de pasantia NOVO

La prueba consiste en un desarrollo Font del home, para una aplicación de Inversión.

* Diseño: https://www.figma.com/file/aCJCfLAAHUQvlH61rfZi7j/Ahorro?node-id=0%3A1
* Prototipo: https://www.figma.com/proto/aCJCfLAAHUQvlH61rfZi7j/Ahorro?node-id=1%3A25&viewport=460%2C481%2C0.3793455958366394&scaling=scale-down

## Proceso de desarrollo 

El desarrollo front requerido se realizo con el framework para creacion de aplicaciones moviles **React native**.

## Visualizacion de la aplicacion 

### Android
Para visualizar la aplicacion en un dispositivo android es necesario descargar el archivo NOVOSavings.apk desde el dispositivo movil en donde se desee visualizar el desarrollo e instalar la aplicacion en dicho dispositivo.

### iOS
Debido al costo que implica la creacion de una cuenta de desarrollo de Apple y que sin este recurso no es posible construir un archivo .ipa que se pueda instalar en un dispositivo iOS se opto por generar un archivo .app para su ejecucion en un simulador iOS en una computadora con un sistema operativo macOS. Para visualizar el desarrollo es necesario tener xCode, luego se descarga el archivo NOVOSavings.tar.gz y se descomprime, desde una terminal de comandos es necesario dirigirse a la carpeta en donde este el archivo descomprimido (Savings.app), una vez alli, y con el simulador de un dispositivo iOS abierto, ejecutar los siguientes comandos:

`xcrun simctl install booted /path/to/Your.app`

`xcrun simctl launch booted com.yourcompany.yourapp`
