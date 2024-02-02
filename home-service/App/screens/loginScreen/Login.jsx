import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Utils/Colors'
import * as WebBrowser from "expo-web-browser";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import { useOAuth } from "@clerk/clerk-expo";

WebBrowser.maybeCompleteAuthSession();

export default function Login () {

  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <View style={{alignItems:'center'}}>
      <View>
      <Image source={require(',/../../assets/images/login.png')}
       style={styles.loginImage}
       
      />
      </View>
      <View style={styles.subContainer}>
         <Text style={{fontSize:19,color:Colors.WHITE,textAlign:'center',margin:11,}}>
            Let's Find 
            <Text style={{fontWeight:'bold'}}>Professional Cleaning and repair</Text> Service
         </Text>
         <Text style={{fontSize:13,color:Colors.WHITE,textAlign:'center',marginTop:40}}>Best App to find services near you which deliver you a Professional services</Text>
         <TouchableOpacity style={styles.button}
         onPress={onPress}
         >
            <Text style={{textAlign:'center',fontSize:17,color:Colors.PRIMARY}}>
                Get Started
            </Text>
         </TouchableOpacity>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    loginImage:{
        width:230,
        height:450,
        marginTop:40,
        borderWidth:4,
        borderColor:Colors.BLACK,
        borderRadius:15,

    },

    subContainer:{
        width:'100%',
        backgroundColor:Colors.PRIMARY,
        height:'90%',
        marginTop:-80,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    button:{
        padding:10,
        backgroundColor:Colors.WHITE,
        borderRadius:99,
        marginTop:40,
        marginLeft:10,
        marginRight:10,
    }
})