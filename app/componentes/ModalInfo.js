import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { Link, Stack, router } from "expo-router";


const manerasNav = ['Preguntas', 'Reconocimiento Facial']





const createBtnToucha = () => {
    return manerasNav.map((item, index) => {
        return (
            <TouchableOpacity
                key={index}
                style={{
                    backgroundColor: '#f9c2ff',
                    padding: 12,
                    margin: 5,
                    borderRadius: 10,
                    width: 'auto',
                    justifyContent: 'center',
                    alignItems: 'center',
                    
                
                }}
                onPress={() => {
                    item === 'Preguntas' ? router.push('/informacion/skinCarePreguntas') : router.push('/screens/skincare')
                }}
            >
                <Text
                style={{
                    fontSize: 15,
                    textAlign: 'center',
                    fontFamily: 'sans-serif',
                    fontWeight: 'bold',
                }}
                >{item}</Text>
            </TouchableOpacity>
        );
    });
}




const ModalInfo = () => {
  return (
    <View style={{  justifyContent: 'center', alignContent: 'center' , width: '100%', height: '100%' , alignItems: 'center'}}>
      
      
      <Stack.Screen
        options={{
          title: "Skin Care - Preguntas o Reconocimiento Facial",
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
              backgroundColor: '#f9c2ff',
              padding: 10,
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



      <View
        style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: 'row',
            width: '80%',
        }}
        >


   


            <Text
            style={{
            fontSize: 20,
            textAlign: "center",

            marginTop: 0,
            width: '80%',
            marginBottom: 20,
            fontFamily: "sans-serif", // robo mono
            }}
        >
          De que manera le gustaria hacer el analisis?
        </Text>
        </View>
      
        <View
        style={{
            justifyContent: "center",
            alignItems: "center",
            flexDirection: 'row',
            width: '80%',
        }}
        >
          {createBtnToucha()}

      </View>
        
    </View>
  );
};


export default ModalInfo;