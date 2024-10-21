import React from 'react';
import { View, Text, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BikeListScreen = ({ navigation }) => {
  const mockBikes = [
    { id: 1, name: 'Pinarello', price: 1800, image: 'https://s3-alpha-sig.figma.com/img/b657/871f/5c0d8c0f67fc78f523516fd7768fec28?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=RNeU~3eQEwlIYHUQ~S6VMhM-4nij2gbMbEjRB1uyUhx-8iEWjcXFrm6HHWTKp4Zn1HQZOQzftBoL2fP6vs9XNaVGFDGlPOc~ZPbgIG~u~aGDSaK5YSexoUDXJN90FW6K49cdNMT9mEEs0DOnnMwGh9eNWTOodLNVDuuT83fCJ2Vmc6dXNulBir9dXrCCJ5R42EK~540FyMQS6hXYzSMmZRWBlrV6~1-xTpLxbxSalCYz-KU0xXi9EgJYbqN84b3SJ4TS0Dc7oxbyFUPKOHqgfd8wgaZacIDXDUEDazGu3IzlimNe8c0a6U-qXtO2gNrDAewfSAicJN7I5MoYRDyJdg__' },
    { id: 2, name: 'Pina Mountain', price: 1700, image: 'https://s3-alpha-sig.figma.com/img/241c/1c58/11168d8e6671f151053b8a6c8424a1a8?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Q4gqEyW~s0ZfpKb6oTc6HDOeBS9k7OSLXNAxd-h7Y0E1lV72VkzQcjgxQ6odkj32xL9zPdWPubtAS3ejp3CQJAT06rl2TPPLDOHZqzNHU3jUb0~5t~DJ2SRNcmWtpAtzsZ84sikraofATMsxk80nK~fAAIAOnMc6-xKDG0LR~rxHZVcli8zOYXOUV~Q-qb-Giy4luseyU5AFD3g~7pkmO3nMedxpXyDGnlHWYB6vOhZhpMe0oB2s7Dcd0wJbLXrKzbcnukovr4qxOHQcQ2O5iVKxDdX8UXdi88KWoYs313DWOpYZkZ5Qlr1m047amEscBcQ6WdBJfyyGjDGc3E-eog__' },
    { id: 3, name: 'Pina Bike', price: 1500, image: 'https://s3-alpha-sig.figma.com/img/49d5/2b9b/68c70d4381b662e07d65fdb7c3846000?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=E2brofCSOuLwLHm9nNsjPlrkSvgRx2-SZSQ0c6Yutb5pV0C6bAIfaY2rfwa~~E7AI0YEf1zfk-5yKPWIazjAMYM3dX3kHhmT8xxEa0KaPfZcQZ5MxH8A0teXFXvZcr5BnZlSVlNkeOiVremIths-60zafbgcz2ijECVmFhL6hZc7~2ssmYIfT~pen5WzuY2th-RRVK2vxvkiurRs5OZ6Q05Vqet~rniPmwLmx7Qmxf6SOKHYf4kox9KL1dk5kwVBosPtSEWiCN04vm1C9~YbyErVs1vyvE1B-MfmnpeKo3WZ9kEsHK00dWXZkBFoHQzjW9OYBXfjmgTgag75Ygz-sw__' },
    { id: 4, name: 'Pinarello', price: 1900, image: 'https://s3-alpha-sig.figma.com/img/fdbf/d9b3/251a5a94adb31c5f3a0d6caf10fae43b?Expires=1730678400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KiS6OVs4dWh-8WUdZyouaUqLcNm2bYAlp1xmHzIB8zzLstAq8rDt3KGHlxpP08-eJfUydeGaHt91ILdzk4lulTX3wiLEB5-aeEHdgSkF4t3Y-eW8kbo8of1ePiJ8KrY-kCRoLs5wTAdee6Pb2Lx-MJkPS2hJfv2Asc0yDXfn8z0Rt46P3vR3SPD6~7YSxr3RoDfoX8m6k8U5WeH5Rl-t-~sk-1pOjmyYRwtxKXsKg1yD45rZA18BfDtYlOOkZRdmprYeF61cOCN6RAG-8or4bjKPFwJqk9z5U9bwrbkVw6U6LIrIzMoodVPUA3FWG1IYqinYf5sVpnAl6xyG7nKiSQ__' },
  ];

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Screen3', { bike: item })}>
      <View style={styles.item}>
        <Image source={{ uri: item.image }} style={styles.bikeImage} />
        <Text style={styles.bikeName}>{item.name}</Text>
        <Text style={styles.bikePrice}>${item.price}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>The world's Best Bike</Text>
      <FlatList
        data={mockBikes}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#f8f8f8',
    justifyContent:'center',
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  item: {
    flex: 1,
    margin: 10,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 8,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 10,
  },
  bikeImage: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },
  bikeName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  bikePrice: {
    fontSize: 16,
    color: '#ff6347',
  },
});

export default BikeListScreen;
