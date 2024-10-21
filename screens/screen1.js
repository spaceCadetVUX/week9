import React, { useState, useEffect } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity, ScrollView, TextInput, RefreshControl, ActivityIndicator } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A premium online store for</Text>
      <Text style={styles.subText}>Sporter and their stylish choice</Text>
      <View style={styles.imgCTN}>
        <Image
          source={{ uri: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RNeU~3eQEwlIYHUQ~S6VMhM-4nij2gbMbEjRB1uyUhx-8iEWjcXFrm6HHWTKp4Zn1HQZOQzftBoL2fP6vs9XNaVGFDGlPOc~ZPbgIG~u~aGDSaK5YSexoUDXJN90FW6K49cdNMT9mEEs0DOnnMwGh9eNWTOodLNVDuuT83fCJ2Vmc6dXNulBir9dXrCCJ5R42EK~540FyMQS6hXYzSMmZRWBlrV6~1-xTpLxbxSalCYz-KU0xXi9EgJYbqN84b3SJ4TS0Dc7oxbyFUPKOHqgfd8wgaZacIDXDUEDazGu3IzlimNe8c0a6U-qXtO2gNrDAewfSAicJN7I5MoYRDyJdg__' }} 
          style={styles.image}
        />
      </View>

      <View style={{justifyContent:"center", alignItems:"center", marginTop:10}}>
        <Text style={{fontSize:20,fontWeight:500}}>POWER BIKE</Text>
         <Text style={{fontSize:20,fontWeight:500}}>SHOP</Text>
      </View>

      <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Screen2')}>
           <Text style={styles.btnText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    color: '#333',
    fontWeight: '300', // Corrected fontWeight
  },
  subText: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
  },
  imgCTN:{
     backgroundColor:'#E941411A',
     padding:20,
     borderRadius:40,
  },
  image: {
    width: 292,
    height: 270,
  },
  btn:{
    marginTop:20,
    padding:10,
    paddingHorizontal:50,
    borderRadius:10,
    backgroundColor:"red"
,    
  },
  btnText:{
    color:"#ffff",
    fontWeight:400,
  },
});

export default DashboardScreen;
