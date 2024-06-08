import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Stack } from "expo-router";
/** recibe txt y ruta hacia donde se dirigira  */


/** 
 * 1. Responder preguntas para tener una mayor informacion y que el analisis sea mas preciso
 * 2. Solo ir a la seccion de subir foto.
*/

export default function ModalInfo(){
        return(
            <View>

    <Stack.Screen
        options={{
          title: "Elije la forma de comenzar",
          headerStyle: { backgroundColor: "#f4511e" },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontWeight: "bold",
          },

          //          headerTitle: props => <LogoTitle {...props} />,
        }}
      />

            <View
            style={{
                justifyContent: "center",
                alignItems: "center",
                width: '100%',
                height: '100%',
            }}
            >
                <Text
                style={{marginBottom: 20, fontSize:22, textAlign: "center", fontFamily: "sans-serif", fontWeight: "400", width:'80%'}}
                >Como te gustaria hacer el analisis facial.</Text>

                <View
                style={{width: '80%', justifyContent: "space-around", alignItems: "center", flexDirection: "row"}}
                >
                        <TouchableOpacity>
                            <Text>Responder preguntas</Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text>Subir foto</Text>
                        </TouchableOpacity>

                 </View>

            </View>
        </View>

        )
}