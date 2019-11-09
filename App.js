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
  View,Image,
  FlatList,
  StyleSheet,
  Text
} from 'react-native';
import { apiKey } from './config';
import ImageView from './components/ImageView';

const App = () => {
  const [state, setState] = useState({ err: false });
  useEffect(() => {
    fetch(`https://api.unsplash.com/photos/?client_id=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        setState(data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Image source={{ uri: state[0].urls.regular }} resizeMode="cover" />
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});
export default App;

// or any pure javascript modules available in npm
