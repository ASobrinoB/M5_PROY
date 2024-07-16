![Banner](./images/banner.png)

# PROYECTO 5: Aplicación Web con React

## **ÍNDICE**

* [1. Enunciado](#1-Enunciado)
* [2. Requisitos](#2-requisitos-y-entregables)
* [3. Entrega](#3-entrega)

****

## 1. Enunciado

Para este proyecto, construirás una aplicación web con React que consumirá datos de una API pública. Los datos que obtenga de la API se mostrarán en una interfaz de usuario.

Para encontrar una API pública para este proyecto, puedes consultar esta lista en GitHub: https://github.com/public-apis/public-apis

Si lo requieres, puedes buscar otras APIs fuera de la lista anterior.

Hay libertad para usarlo en la industria que gustes, no necesariamente tienen que ser datos numéricos como economía o finanzas. Puedes extraer información sobre libros, música, ánime, videojuegos, geografía, mascotas, etc. La idea es que conozcas el flujo de información y puedas reflejarlo en la interfaz.


Tu aplicación deberá:

- Conectar con una API para obtener datos
- Mostrar los datos en una interfaz de usuario
- Permitir alguna interacción del usuario (por ejemplo, mediante botones o formularios)

****

## 2. Requisitos y entregables

A continuación, usarás esta lista para saber los requisitos mínimos del proyecto:

### REACT

- [ ] Uso de `vite` para la generación del proyecto
- [ ] Crear componentes funcionales
- [ ] Utilizar una API pública y mostrar los datos obtenidos en tu interfaz de usuario
- [ ] Uso de Hooks (mínimo `useEffect` para los procesos asíncronos)
- [ ] Implementar rutas en tu aplicación con `React Router`
- [ ] Manejar errores de renderizado con `Error Boundaries`
- [ ] Implementación CSS a través de un framework (`TailwindCSS`, `MUI`, `Bootstrap`)

### CONTROL DE VERSIONES
- [ ] Crear un repositorio en GitHub y Realizar mínimo 5 "commits" por persona en tu repositorio
- [ ] Crear un `README.md` dentro del repositorio. Incluir la descripción, instalación y uso del proyecto

### DESPLIEGUE
- [ ] Mostrar proyecto a través de una URL, usando un servicio de terceros (Netlify, GitHub Pages, Render)

### ENTREGA A TIEMPO
- [ ] Entregar tu proyecto en el tiempo estipulado

****

## 3. Entrega

### PANTALLAS

![Image](./images/home.png)
![Image](./images/about.png)

### EL EJERCICIO QUE HICIMOS EN CLASES

![Image](./images/ultimaclase.png)

### Proyecto realizado con API 

https://restcountries.com/v3.1/all

Objeto que responde la API

{
   "name":{
      "common":"Wallis and Futuna",
      "official":"Territory of the Wallis and Futuna Islands",
      "nativeName":{
         "fra":{
            "official":"Territoire des îles Wallis et Futuna",
            "common":"Wallis et Futuna"
         }
      }
   },
   "tld":[
      ".wf"
   ],
   "cca2":"WF",
   "ccn3":"876",
   "cca3":"WLF",
   "independent":false,
   "status":"officially-assigned",
   "unMember":false,
   "currencies":{
      "XPF":{
         "name":"CFP franc",
         "symbol":"₣"
      }
   },
   "idd":{
      "root":"+6",
      "suffixes":[
         "81"
      ]
   },
   "capital":[
      "Mata-Utu"
   ],
   "altSpellings":[
      "WF",
      "Territory of the Wallis and Futuna Islands",
      "Territoire des îles Wallis et Futuna"
   ],
   "region":"Oceania",
   "subregion":"Polynesia",
   "languages":{
      "fra":"French"
   },
   "translations":{
      "ara":{
         "official":"إقليم جزر واليس وفوتونا",
         "common":"واليس وفوتونا"
      },
      "bre":{
         "official":"Tiriad Inizi Wallis ha Futuna",
         "common":"Wallis ha Futuna"
      },
      "ces":{
         "official":"Teritorium ostrovů Wallis a Futuna",
         "common":"Wallis a Futuna"
      },
      "cym":{
         "official":"Territory of the Wallis and Futuna Islands",
         "common":"Wallis and Futuna"
      },
      "deu":{
         "official":"Gebiet der Wallis und Futuna",
         "common":"Wallis und Futuna"
      },
      "est":{
         "official":"Wallise ja Futuna ala",
         "common":"Wallis ja Futuna"
      },
      "fin":{
         "official":"Wallisin ja Futunan yhteisö",
         "common":"Wallis ja Futuna"
      },
      "fra":{
         "official":"Territoire des îles Wallis et Futuna",
         "common":"Wallis-et-Futuna"
      },
      "hrv":{
         "official":"Teritoriju Wallis i Futuna",
         "common":"Wallis i Fortuna"
      },
      "hun":{
         "official":"Wallis és Futuna",
         "common":"Wallis és Futuna"
      },
      "ita":{
         "official":"Territorio delle Isole Wallis e Futuna",
         "common":"Wallis e Futuna"
      },
      "jpn":{
         "official":"ウォリス·フツナ諸島の領土",
         "common":"ウォリス・フツナ"
      },
      "kor":{
         "official":"왈리스 퓌튀나",
         "common":"왈리스 퓌튀나"
      },
      "nld":{
         "official":"Grondgebied van de Wallis en Futuna",
         "common":"Wallis en Futuna"
      },
      "per":{
         "official":"جزایر والیس و فوتونا",
         "common":"والیس و فوتونا"
      },
      "pol":{
         "official":"Terytorium Wysp Wallis i Futuna",
         "common":"Wallis i Futuna"
      },
      "por":{
         "official":"Território das Ilhas Wallis e Futuna",
         "common":"Wallis e Futuna"
      },
      "rus":{
         "official":"Территория Уоллис и Футуна острова",
         "common":"Уоллис и Футуна"
      },
      "slk":{
         "official":"Teritórium ostrovov Wallis a Futuna",
         "common":"Wallis a Futuna"
      },
      "spa":{
         "official":"Territorio de las Islas Wallis y Futuna",
         "common":"Wallis y Futuna"
      },
      "srp":{
         "official":"Територија државе Валис и Футуна",
         "common":"Валис и Футуна"
      },
      "swe":{
         "official":"Territoriet Wallis- och Futunaöarna",
         "common":"Wallis- och Futunaöarna"
      },
      "tur":{
         "official":"Wallis ve Futuna Adaları Bölgesi",
         "common":"Wallis ve Futuna Adaları Bölgesi"
      },
      "urd":{
         "official":"سر زمینِ والس و فتونہ جزائر",
         "common":"والس و فتونہ"
      },
      "zho":{
         "official":"瓦利斯和富图纳群岛",
         "common":"瓦利斯和富图纳群岛"
      }
   },
   "latlng":[
      -13.3,
      -176.2
   ],
   "landlocked":false,
   "area":142.0,
   "demonyms":{
      "eng":{
         "f":"Wallis and Futuna Islander",
         "m":"Wallis and Futuna Islander"
      }
   },
   "flag":"\uD83C\uDDFC\uD83C\uDDEB",
   "maps":{
      "googleMaps":"https://goo.gl/maps/CzVqK74QYtbHv65r5",
      "openStreetMaps":"https://www.openstreetmap.org/relation/3412448"
   },
   "population":11750,
   "car":{
      "signs":[
         "F"
      ],
      "side":"right"
   },
   "timezones":[
      "UTC+12:00"
   ],
   "continents":[
      "Oceania"
   ],
   "flags":{
      "png":"https://flagcdn.com/w320/wf.png",
      "svg":"https://flagcdn.com/wf.svg"
   },
   "coatOfArms":{
      
   },
   "startOfWeek":"monday",
   "capitalInfo":{
      "latlng":[
         -13.95,
         -171.93
      ]
   },
   "postalCode":{
      "format":"#####",
      "regex":"^(986\\d{2})$"
   }
}

![Image](./images/countries.png)

### Realizando una busqueda

![Image](./images/busqueda.png)
