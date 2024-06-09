import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Link, Stack, router } from "expo-router";
import ButtonTabInformativo from '../componentes/ButtonTabInformativo'

const preguntas = {
  edad: "¿Cuál es tu rango de edad?",
  genero: "¿Cuál es tu género?",

  sensibilidadProducto: "¿Tienes la piel sensible?",
  exposicionSol: "¿Cuánto tiempo pasas al sol?",
  usoProtectorSolar: "¿Usas protector solar?",
  tipoDieta: "¿Qué tipo de dieta sigues?",
  frecuenciaEjercicio: "¿Con qué frecuencia haces ejercicio?",
  horasSueno: "¿Cuántas horas duermes al día?",
  consumoTabacoAlcohol: "¿Consumes tabaco o alcohol?",
  preferenciaProductosCuidadoFacial: "¿Qué tipo de productos prefieres para el cuidado facial?",
  presupuestoSkinCare: "¿Cuál es tu presupuesto mensual para productos de cuidado facial?"

}


const encuestaRespuestas = {
  genero: ["Masculino", "Femenino", "Prefiero no decirlo"],
  edad: ["Menor de 20 años", "20-40 años", "Mayor de 40 años"],
  sensibilidadProducto: ["Sí", "No", "No estoy seguro/a"],
  exposicionSol: [
    "Raramente (Menos de 1 hora al día)",
    "Moderadamente (1-3 horas al día)",
    "Frecuentemente (Más de 3 horas al día)"
  ],
  usoProtectorSolar: ["Sí", "No", "A veces"],
  tipoDieta: [
    "Equilibrada",
    "Vegetariana/Vegana",
    "Alta en carbohidratos o grasas"
  ],
  frecuenciaEjercicio: [
    "Diariamente",
    "Varias veces a la semana",
    "Raramente o nunca"
  ],
  horasSueno: ["Menos de 6 horas", "6-8 horas", "Más de 8 horas"],
  consumoTabacoAlcohol: ["Ambos", "Solo uno de ellos", "Ninguno"],
  preferenciaProductosCuidadoFacial: [
    "Productos naturales/orgánicos",
    "Productos de alta gama o de marca",
    "No tengo preferencias específicas"
  ],
  presupuestoSkinCare: [
    "Económico bajo: Menos de $20 mensuales",
    "Económico medio: $20-$50 mensuales",
    "Económico alto: Más de $50 mensuales"
  ]
};






export default function SkinCarePreguntas() {
  const [respuestas, setRespuestas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasCompletas, setRespuestasCompletas] = useState([]);

  const [cambiarTextBtn, setCambiarTextBtn] = useState("Omitir Preguntas");

  useEffect(() => {
    if (preguntaActual === preguntas.length) {
      setCambiarTextBtn("Ir Al Analisis Facil");
    }
  }, [preguntaActual]);


  const goPageAnalytic = () => {
    console.log(respuestasCompletas);
    router.navigate({pathname: '/screens/skincare', params: {respuestasCompletas: respuestasCompletas}});  
  };

  const opcionesMultiples = () => {
    return (
      <View
        style={{
          flexDirection: "column",

        }}
      >
        {encuestaRespuestas[Object.keys(preguntas)[preguntaActual]].map(
          (respuesta, index) => {
            return (
              <TouchableOpacity
              
                key={index}
                onPress={() => {
                  setRespuestas([...respuestas, respuesta]);
                }}
                style={{
                  backgroundColor: respuestas.includes(respuesta)
                    ? "blue"
                    : "white",
                  width: 200,
                  padding: 10,
                  margin: 5,
                  borderRadius: 10,
                  justifyContent: "center",
                }}
              >
                <Text
                  style={{
                    
                    color: respuestas.includes(respuesta) ? "white" : "black",
                    fontSize: 16,
                    textAlign: "center",
                  }}
                >
                  {respuesta}
                </Text>
              </TouchableOpacity>
            );
          }
        )}
      </View>
    );
  }

  console.log(respuestas);
  console.log(preguntaActual);
  console.log(respuestasCompletas);


    const cambiarPregunta = () => {
    setRespuestasCompletas([...respuestasCompletas, respuestas]);
    setPreguntaActual(preguntaActual + 1);
    setRespuestas("");
    };



  const preguntasLayout = () => {
    if (preguntaActual < Object.keys(preguntas).length) {
      return (
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center",
            width: "100%",
            height: 'auto',
            marginTop: 333,
          }}
        >
          <Text
            style={{
              fontSize: 23,
              fontStyle: "italic",
              textAlign: "center",
              fontFamily: "sans-serif", // robo mono
              fontWeight: "bold",
              width: "90%",
            }}
          >
            {preguntas[Object.keys(preguntas)[preguntaActual]]}
          </Text>
            
            {opcionesMultiples()}

            
          <Button
                title="Siguiente"
                onPress={cambiarPregunta}
              />


          
        </View>
      );
    }
   
    else {
      return (
          
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            alignSelf: "center",
            width: "100%",
            height: 'auto',
            marginTop: 303,
          }}
        >
           
          <Text
            style={{
              fontSize: 23,
              fontStyle: "italic",
              textAlign: "center",
              fontFamily: "sans-serif", // robo mono
              fontWeight: "bold",
              width: "90%",
              marginBottom: 0,
            }}
          >
            ¡Gracias por responder las preguntas! Ahora pasaremos al analisis facil.
          </Text>


      

      </View>

      )
     



    }
  };

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        width: "100%",
        //  height: '100%',
        marginTop: 10,
      }}
    >
      <Stack.Screen
        options={{
          title: "Skin Care -  Preguntas",
          headerStyle: { backgroundColor: '#0500FD' },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          //          headerTitle: props => <LogoTitle {...props} />,
        }}
      />

<View
        style={{
              position: 'absolute',
              top: 0,
              marginTop: 30,
              alignItems: 'center',
              width: '90%',
              backgroundColor: 'white',
              padding: 10,
            //  borderColor: 'black',
              borderTopRightRadius: 30, // Aplica un borde redondeado en el top derecho
            borderBottomLeftRadius: 30, // Aplica un borde redondeado en el bottom izquierdo
        }}
        >

        <Text
            style={{
            fontSize: 22,
            textAlign: "justify",
            marginTop: 0,
            width: '80%',
            marginBottom: 20,
            fontFamily: "sans-serif", // robo mono
            }}
        >
          Te suguerimos no saltar el paso de las preguntas, es importante para  obtener un analisis mas preciso y personalizado.

        </Text>

        </View>
      {preguntasLayout()}

      <View
        style={{
          marginTop: 620,
          width: "90%",
          height: "auto",
          position: "absolute",
        top: 0,

        }}
      >

        <ButtonTabInformativo
          text={cambiarTextBtn}
          fc='/screens/skincare'
          color="red"
          borderS={true}
        />

      </View>



    </View>
  );
}
