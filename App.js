import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useEffect, useState } from "react";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={[styles.box,styles.lightBlueBox,styles.boxShadow]}>LightBlue Box</Text>
      </View>
      <View>
        <Text style={[styles.box,styles.lightGreenBox,,styles.boxShadow]}>LightGreen Box</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "plum",
    //padding: 60,
    borderRadius: 8,
    alignItems: "center",
    //justifyContent: "center",
  },
  box : {
    width: 200,
    height: 200,
    borderWidth: 2,
    borderColor: "red",
    marginVertical: 10,
    marginHorizontal: 10,
    paddingVertical: 10,
    paddingHorizontal : 20,
  },
  lightBlueBox: {
    backgroundColor: "lightblue",
  },
  lightGreenBox: {
    backgroundColor: "lightgreen",
  },
  boxShadow : {
    shadowColor: "black",
    shadowOffset : {width: 6, height: 6},
    shadowOpacity: .5,
    shadowRadius: 4
  }
});
