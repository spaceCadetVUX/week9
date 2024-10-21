import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const BikeDetailScreen = ({ route }) => {
  const { bike } = route.params;

  return (
    <View style={styles.container}>
      <Image source={{ uri: bike.image }} style={styles.bikeImage} />
      <Text style={styles.bikeName}>{bike.name}</Text>
      {bike.discount && <Text style={styles.bikeDiscount}>{bike.discount}</Text>}
      <Text style={styles.bikePrice}>${bike.price}</Text>
      <Text style={styles.bikeDescription}>{bike.description}</Text>

      <TouchableOpacity style={styles.addButton}>
        <Text style={styles.addButtonText}>Add to cart</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  bikeImage: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  bikeName: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  bikeDiscount: {
    fontSize: 18,
    color: 'green',
    marginBottom: 10,
  },
  bikePrice: {
    fontSize: 22,
    color: '#ff6347',
    marginBottom: 20,
  },
  bikeDescription: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  addButton: {
    backgroundColor: '#ff6347',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  addButtonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default BikeDetailScreen;
