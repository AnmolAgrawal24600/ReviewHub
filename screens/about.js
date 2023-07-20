import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { globalStyles } from '../styles/global';

export default function About() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Congratulations! If you are seeing this screen then thanks for wasting your time on this app</Text>
    </View>
  );
}