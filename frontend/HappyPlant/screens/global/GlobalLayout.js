import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const GlobalLayout = ({ component: Component, ...rest }) => {
  return (
    <LinearGradient colors={['#f4feee', '#b9ecaf']} style={styles.container}>
      <Component {...rest} style={styles.content}/>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    zIndex: -10,
    paddingTop: 15,
    paddingHorizontal: 20,
  },
  content: {
    flex: 1,
    zIndex: -10,
  },
});

export default GlobalLayout;
