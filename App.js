/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Image,
  ActivityIndicator,
  Dimensions,
  FlatList,
  StyleSheet
} from 'react-native';
import { apiKey } from './config';

const App = () => {
  const [state, setState] = useState({ err: false });
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);

        setState({ data });
      })
      .catch(err => {
        setState({ err: true });
        console.log(err);
      });
  }, []);
  function renderItem({ item }) {
    if (!item.urls) {
      console.log('item', item);
      return <ActivityIndicator />;
    }
    return (
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: item.urls.regular }}
          style={{ flex: 1, width: null, height: null }}
        />
      </View>
    );
  }
  if (!state.err && !state.data) {
    return <ActivityIndicator />;
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <FlatList
          pagingEnabled
          horizontal
          data={state.data}
          renderItem={renderItem}
        />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  imageContainer: {
    height: Dimensions.get('window').height,
    width: Dimensions.get('window').width
  }
});
export default App;

// or any pure javascript modules available in npm
