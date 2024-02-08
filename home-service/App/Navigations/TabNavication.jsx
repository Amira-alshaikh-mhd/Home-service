import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/homescreen/HomeScreen';
import ProfileScreen from '../screens/profileScreen/ProfileScreen';
import BookingScreen from '../screens/bookingScreen/BookingScreen';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import Colors from '../Utils/Colors';

const Tab = createBottomTabNavigator();
export default function TabNavication() {
  return (
    <Tab.Navigator screenOptions={{headerShown:false, tabBarActiveTintColor:Colors.PRIMARY,tabBarLabelPosition:'below-icon'}} >

    <Tab.Screen name="home" component={HomeScreen} 
    options={{
    
        tabBarLabel:({color})=>(
            
            <Text style={{color:color,fontSize:12,fontFamily:'outfit'}}>Home</Text>
            
        ),
        tabBarIcon:({color,size})=>(
            <FontAwesome5 name="home" size={size} color={color} />
        ),
    
    }}
    
    />



    <Tab.Screen name="profile" component={ProfileScreen} 
    options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,fontFamily:'outfit'}}>Profile</Text>
        ),
        tabBarIcon:({color,size})=>(
            <Feather name="user" size={size} color={color} />
        )
    }}
    />



    <Tab.Screen name="booking" component={BookingScreen} 
    options={{
        tabBarLabel:({color})=>(
            <Text style={{color:color,fontSize:12,fontFamily:'outfit' }}>Booking</Text>
        ),
        tabBarIcon:({color,size})=>(
            <Entypo name="bookmark" size={size} color={color} />
        )
    }}
    />


  </Tab.Navigator>
  )
}

