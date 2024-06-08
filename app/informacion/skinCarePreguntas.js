import React, { useEffect, useState } from "react";
import { View, Text, Button, ScrollView, TextInput } from "react-native";
import { Link, Stack, router } from "expo-router";

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

  const goPageAnalytic = () => {
    console.log(respuestasCompletas);
    router.navigate("/screens/skincare", { respuestasCompletas :   respuestasCompletas });  
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
            style={{ height: 40, margin: 12, padding: 22 , width:'50%',fontStyle:'normal' }}
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
            marginTop: 33,
          }}
        >
           
      <Text
        style={{
          fontSize: 22,
          textAlign: "center",
          fontFamily: "sans-serif", // robo mono
          fontWeight: "400",
          width: "90%",
          marginTop: 129,
        }}
      
      >¡Gracias por responder todas las preguntas!</Text>;

      <Button title="Ver resultados"
      onPress={(
        goPageAnalytic
      )} 
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
          width: "80%",
          marginBottom: 20,
          marginTop: 100,
          color: 'black',
        }}
      >
        Responde de la mejor manera posible las siguientes preguntas para poder
        recomendarte los productos de skin care que mejor se adapten a tus
        necesidades.
      </Text>

      {preguntasLayout()}





    </View>
  );
}
