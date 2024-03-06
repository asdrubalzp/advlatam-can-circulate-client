# Consulta de Pico y Placa

Este proyecto proporciona una interfaz para consultar si un vehículo puede circular en una fecha y hora determinada según las restricciones de Pico y Placa.

## Versiones

- Frontend: Angular v15.2.0
- Backend: Spring Boot v3.2.3

## Funcionalidades

- Consulta por número de placa y comprobación de si un vehículo puede circular en una fecha o día determinado. siguiendo las siguientes restricciones
    - Lunes: placas terminadas en 1 y 2
    - Martes: placas terminadas en 3 y 4
    - Miércoles: placas terminadas en 5 y 6
    - Jueves: placas terminadas en 7 y 8
    - Viernes: placas terminadas en 9 y 0
    - Sábado y Domingo: Todos los vehículos pueden circular
    
- El horario de restricción es de 6:00 a 9:30 y de 16:00 a 21:00
- El formulario de consulta permite ingresar la placa y la fecha actual con la hora.
- Validación para asegurar que la fecha ingresada no sea anterior a la fecha y hora actual.
- Mostrar el resultado con la información de placa del vehículo y un texto que indique si es libre de circular en la fecha y hora ingresada.

## Capturas de Pantalla

Formulario de Consulta
![aaa](https://github.com/asdrubalzp/advlatam-can-circulate-client/assets/49705410/0d1fd369-a376-4096-a4fc-05dd5077d990)
_Formulario de Consulta_

## Requisitos

- Node.js y Angular CLI para el frontend.
- Java y Spring Boot para el backend.
- Git para clonar el repositorio.

## Cómo Desplegar el Proyecto

Ejecuta `ng install` para instalar las dependencias del proyecto.

Ejecuta `ng serve` para iniciar un servidor de desarrollo. Navega a `http://localhost:4200/`. La aplicación se recargará automáticamente si cambias alguno de los archivos fuente.

## Construcción

Ejecuta `ng build` para construir el proyecto. Los artefactos de construcción se almacenarán en el directorio `dist/`.


## Ayuda Adicional

Para obtener más ayuda sobre Angular CLI, utiliza `ng help` o visita la página [Angular CLI Overview and Command Reference](https://angular.io/cli).
