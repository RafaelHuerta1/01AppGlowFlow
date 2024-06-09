import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, TextInput } from "react-native";
import { Link, Stack, router } from "expo-router";
import ButtonTabInformativo from '../componentes/ButtonTabInformativo'
const preguntas = [
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

export default function SkinCarePreguntas() {
  const [respuestas, setRespuestas] = useState([]);
  const [preguntaActual, setPreguntaActual] = useState(0);
  const [respuestasCompletas, setRespuestasCompletas] = useState([]);
  const num = 1;

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
            marginTop: 33,
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
          <TextInput
            style={{ height: 40, margin: 12, padding: 0 , width:'80%',fontStyle:'normal', fontSize: 20, textAlign: 'center', color: 'red', borderWidth: 1, borderColor: 'grey', borderRadius: 10, backgroundColor: 'white'}}
            placeholder="Escribe tu respuesta"
            onChangeText={ (text) => setRespuestas(text)}
              value={respuestas}
          />
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
            marginTop: 133,
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
              marginBottom: 20,
            }}
          >
            ¡Gracias por responder las preguntas! Ahora pasaremos al analisis facil.
          </Text>

      <Button title="Ver resultados"
      onPress={goPageAnalytic}
      />

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
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          //          headerTitle: props => <LogoTitle {...props} />,
        }}
      />

      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          fontFamily: "sans-serif", // robo mono
          fontWeight: "400",
          width: "90%",
          marginBottom: 20,
          marginTop: 40,
          color: 'black',
        }}
      >
        NO ES NECESARIA {'\n'} PERO AYUDA A PERSONALIZAR TU RUTINA : {'\n'}
        Responde de la mejor manera posible las siguientes preguntas para poder
        personalizar aun mas tu rutina de skin care, y obtener mejores resultados.
      </Text>

      {preguntasLayout()}

      <View
        style={{
          marginTop: 120,


        }}
      >

        <ButtonTabInformativo
          text="Omitir preguntas, ir al analisis facial  con IA"
          fc='/screens/skincare'
          color="grey"
        />

      </View>



    </View>
  );
}
