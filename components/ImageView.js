import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
function ImageView({ url }) {
  return (
    <View style={styles.container}>
      <Text style={{ color: 'white' }}>{url}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 8
  }
});

export default ImageView;
