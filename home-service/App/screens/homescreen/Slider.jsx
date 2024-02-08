import { View, Text, StyleSheet, FlatList, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import GlobalApi from '../../Utils/GlobalApi'
import Heading from '../../components/Heading';

export default function Slider() {
    const [slider,setSlider]=useState();
    useEffect(()=>{
         getSlider();
    },[])

    const getSlider=()=>{
        GlobalApi.getSlider().then(resp=>{
            console.log("resp",resp.sliders);
            setSlider(resp?.sliders)
        })
    }
  return (
    <View>
      <Heading text={'Offers For You'}/>
     <FlatList 
     data={slider}
     horizontal={true}
     showsHorizontalScrollIndicator={false}
     renderItem={({item,index})=>(
        <View style={{marginRight:20}}>
            <Image source={{uri:item?.image?.url}}
            style={styles.sliderImage}
            />
        </View>
     )}
     
     />
    </View>
  )
}
const styles = StyleSheet.create({
    sliderImage:{
        width:170,
        height:100,
        // objectFit:'contain',
        borderRadius:20,
        marginTop:6,

    }
})