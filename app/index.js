import React, {useEffect, useState} from "react"
import { View, Text, Button } from "react-native"
import ButtonTabInformativo from "./componentes/ButtonTabInformativo";
//import { router } from "expo-router";
//import { registerRootComponent } from 'expo';


/*
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Google from 'expo-google-app-auth';
import { router } from "expo-router";
*/
function Index( ) {
  /*  lO AGREEGARE EN UN TAB O EN UNA ESQUINA LA OPCION DE PERFL
    - CERRAR SESION
    - LINKS IMPORTANTES
  const [localUser, setLocalUser] = useState(null);
    const signOut = async () => {
        await AsyncStorage.removeItem("@user");
        setLocalUser(null);
        router.push("/SignIn");
      };
  useEffect(() => {
    const fetchLocalUser = async () => {
      const user = await fc();
      setLocalUser(user);
    };

    fetchLocalUser();
  }, []);
  console.log(localUser)
  const { given_name } = localUser || {};
 <Text>{given_name}</Text>
  */
  /*
  const goSkinCare = () => {
    console.log("Skin Care");
    router.push("/skincare");
  }

  const goTest = () => {
    console.log("Test");
    router.push("/test");
  }
  */
    return (
        <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
        }}
        >
            <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginTop: 0,
              fontFamily: 'sans-serif', // robo mono
              fontWeight: 'bold',
            }}
            >En que aspecto deseas mejorar?</Text>
          

          <View
            style={{
              flexDirection: 'column',
              justifyContent: 'center',
              marginTop: 40,
            }}
            >
               <ButtonTabInformativo  text="Skin Care" color='#0500FD' nameIcono='heart'  fc='/componentes/ModalInfo'  /> 
               <ButtonTabInformativo  text="Gym + Dieta" color='#34A853' nameIcono='fitness'    fc='/gym'  />
               <ButtonTabInformativo  text="Ambos" color='#C0C0C0' nameIcono='happy'  fc='/ambos'  />

            </View>
        </View>
    )
}
//registerRootComponent(Index);
export default Index;
