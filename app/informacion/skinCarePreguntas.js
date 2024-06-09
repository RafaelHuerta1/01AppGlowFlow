import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, TextInput, TouchableOpacity } from "react-native";
import { Link, Stack, router } from "expo-router";
import ButtonTabInformativo from '../componentes/ButtonTabInformativo'

const preguntas = [
  '¿Cual es su nombre completo?',
  "¿Cuál es tu género?",
  "¿Cuál es tu edad?",
  "¿Tienes sensibilidad a algún producto o ingrediente específico?",
  "¿Con qué frecuencia y cuánto tiempo estás expuesto al sol?",
  "¿Usas protector solar regularmente?",
  "¿Qué tipo de dieta sigues?",
  "¿Con qué frecuencia haces ejercicio?",
  "¿Cuántas horas duermes al día?",
  "¿Fumas o consumes alcohol?",
  "¿Tienes alguna preferencia en los productos de cuidado facial?",
  "¿Cuál es tu presupuesto para skin care?",
];


/***
 * POSIBLES RESPUESTAS:
 * ¿Cuál es tu género?

Masculino
Femenino
Prefiero no decirlo
¿Cuál es tu edad?

Menor de 20 años
20-40 años
Mayor de 40 años
¿Tienes sensibilidad a algún producto o ingrediente específico?

Sí
No
No estoy seguro/a
¿Con qué frecuencia y cuánto tiempo estás expuesto al sol?

Raramente (Menos de 1 hora al día)
Moderadamente (1-3 horas al día)
Frecuentemente (Más de 3 horas al día)
¿Usas protector solar regularmente?

Sí
No
A veces
¿Qué tipo de dieta sigues?

Equilibrada
Vegetariana/Vegana
Alta en carbohidratos o grasas
¿Con qué frecuencia haces ejercicio?

Diariamente
Varias veces a la semana
Raramente o nunca
¿Cuántas horas duermes al día?

Menos de 6 horas
6-8 horas
Más de 8 horas
¿Fumas o consumes alcohol?

Ambos
Solo uno de ellos
Ninguno
¿Tienes alguna preferencia en los productos de cuidado facial?

Productos naturales/orgánicos
Productos de alta gama o de marca
No tengo preferencias específicas
¿Cuál es tu presupuesto para skin care?

Económico bajo: Menos de $20 mensuales
Económico medio: $20-$50 mensuales
Económico alto: Más de $50 mensuales
 */



const createBtnOpcion = () => {

}




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

  console.log(respuestas);
  console.log(preguntaActual);
  console.log(respuestasCompletas);


    const cambiarPregunta = () => {
    setRespuestasCompletas([...respuestasCompletas, respuestas]);
    setPreguntaActual(preguntaActual + 1);
    setRespuestas("");
    };



  const preguntasLayout = () => {
    if (preguntaActual < preguntas.length) {
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
            {preguntas[preguntaActual]}
          </Text>
          {
            preguntaActual === 0 ? (
              <TextInput
            style={{ height: 40, margin: 12, padding: 0 , width:'80%',fontStyle:'normal', fontSize: 20, textAlign: 'center', color: 'red', borderWidth: 1, borderColor: 'grey', borderRadius: 10, backgroundColor: 'white'}}
            placeholder="Escribe tu respuesta"
            onChangeText={ (text) => setRespuestas(text)}
              value={respuestas}
          />
            ) : 
           
            createBtnOpcion()
              


          }
          <Button title="Siguiente" 
          onPress={cambiarPregunta}
          />
        </View>
      );
    } else {
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
        marginTop: 20,
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
