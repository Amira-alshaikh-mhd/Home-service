import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi';
import Heading from '../../components/Heading';
import Colors from '../../Utils/Colors';

export default function Categories() {
 
    const [categories, setCategories]=useState([]);

    useEffect(()=>{
        getCategories();
   },[])

   const getCategories=()=>{
       GlobalApi.getCategories().then(resp=>{
           console.log("resp",resp);
           setCategories(resp?.categories)
       })
   }

  return (
    <View style={{marginTop:10}}>
      <Heading text={"Categories"} isViewAll={true}/>
      <FlatList 
     data={categories}
    
     numColumns={4}
     renderItem={({item,index})=>index<=3&&(
        <View style={styles.container}>
            <View style={styles.iconContainer}>
            <Image source={{uri:item?.icon?.url}}
            style={{width:20,height:20}}
            />
            </View>
            <Text style={{marginTop:-11,marginBottom:3, fontFamily:'outfit-medium',fontSize:10}}>{item.name}</Text>
        </View>
     )}

     
     />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        
        
        


    },
    iconContainer:{
        backgroundColor:Colors.LIGHT_GRAY,
        padding:11,
        borderRadius:99,
        display:'flex',
        justifyContent:'space-between',
        alignItems:'center',
        margin:11,
        

    }
    
})