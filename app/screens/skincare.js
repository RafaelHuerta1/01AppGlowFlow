import React ,  {useState} from "react";
import { View, Text, Button , Image} from "react-native";
//import { registerRootComponent } from 'expo';
import { Link, Stack } from 'expo-router';
import { useLocalSearchParams } from "expo-router";
import ButtonTabInformativo from "../componentes/ButtonTabInformativo";


const imgUno = require("../assets/imgFondo.png");


function Skincare() {

    const [imageDefaultCamara, setImageDefaultCamara] = useState(imgUno);	



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
                marginTop: 10,
            }}
        >

            <Image source={imageDefaultCamara} 
            style={{
                width: '100%',
                height:500,
                borderRadius: 100,
                backgroundColor: "#fff",
               // marginTop: 100,
            }}
            />   
        
        </View>

        <View
        style={{
            marginTop: 150,
           width: '90%',
        }}
        >
            <ButtonTabInformativo
                text="Subir foto"
                color="red"
                fc='/screens/resultados'
                
            />
                </View>
        
        </View>
    );
}
//registerRootComponent(Skincare);
export default Skincare;