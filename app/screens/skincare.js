import React from "react";
import { View, Text, Button , Image} from "react-native";
//import { registerRootComponent } from 'expo';
import { Link, Stack } from 'expo-router';
import { useLocalSearchParams } from "expo-router";
import ButtonTabInformativo from "../componentes/ButtonTabInformativo";


function Skincare() {

    const { respuestasCompletas } = useLocalSearchParams();
    console.log(respuestasCompletas, '- 1');


    return (
        <View
        style={{
            justifyContent: "center",
            alignItems: "center",
        }}
        >
             <Stack.Screen
        options={{
          title: 'Skin Care',
          headerStyle: { backgroundColor: '#f4511e' },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },

//          headerTitle: props => <LogoTitle {...props} />,
        }}
      />
        <Text
            style={{
            fontSize: 20,
            textAlign: "center",
            marginTop: -420,
            fontFamily: "sans-serif", // robo mono
            fontWeight: "bold",
            width: '80%',
            marginTop: 50,

            }}
        >
           Sube una foto en modo frontal, para comenzar. {"\n"}
        </Text>
        <View
            style={{
                width: '90%',
                height:400,
                borderRadius: 100,
                backgroundColor: "#fff",
            }}
        >

            <Image source={require("../assets/imgPruebaFondo.jpg")} 
            style={{
                width: '100%',
                height:'100%',
                borderRadius: 100,
                backgroundColor: "#fff",
               // marginTop: 100,
            }}
            />   
        
        </View>

        <View
        style={{
            marginTop: 150,
           
        }}
        >
            <ButtonTabInformativo
                text="Subir foto"
                color="red"
                goPage={() => console.log('Subir foto')}
            />
                </View>
        
        </View>
    );
}
//registerRootComponent(Skincare);
export default Skincare;