import { View, Text, Image } from 'react-native'
import React from 'react'

export default function BusinessListItem({business}) {
  return (
    <View>
     <Image source={{uri:business.images.url}}
            style={{width:20,height:20}}
            />
    </View>
  )
}


