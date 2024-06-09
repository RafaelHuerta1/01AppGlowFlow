import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
//import { Link , router} from "expo-router";
import { useRouter } from 'expo-router';

function ButtonTabInformativo(props) {
  console.log('/',props.fc)

  const router = useRouter()

  const  resultBorder = props.borderS ? '2px solid red' : 'none'



  const goPage = () => {
    router.push(props.fc);
  }


  return (
    <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center',
          marginTop: 40,
          minHeight: 60,
          maxHeight: 80,
          height: 'auto',
        }}
        >
      
            <TouchableOpacity
            onPress={goPage}
            style={{
                backgroundColor: props.color,
                padding: 14,
                borderRadius: 10,
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
                width: '90%',
                minHeight: 60,
                maxHeight: 80,
                height: 'auto',
                borderBlockColor: resultBorder,
                
            }}
            >
                
        <View
        style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            width: '100%',
            justifyContent: 'center',
            }}
         
        >
            <Text
          style={{
            fontSize: 22,
            textAlign: 'center',
            marginTop: 0,
          //  marginLeft: 10,
            //padding: 10,
            color: 'white',
            fontWeight: '400',
            fontFamily: 'sans-serif', // robo momo
           
          }}
          >
           

            {props.text}
          </Text>
            <Ionicons name={props.nameIcono} size={30} color="white" />
        
            </View>

          </TouchableOpacity>
       
        </View>
  );
}
export default ButtonTabInformativo;