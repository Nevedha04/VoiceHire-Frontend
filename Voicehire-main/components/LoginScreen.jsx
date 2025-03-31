import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation, useRouter } from "expo-router";

export default function LoginScreen() {
  const navigation =useNavigation();// Hook for navigation

  return (
    <View>
      <View style={styles.imageContainer}>
        <Image
          source={require("./../assets/images/loogo.jpg")}
          style={styles.logo}
        />
      </View>
      <View style={styles.subContainer}>
        <Text style={styles.title}>Get the job instantly based</Text>
        <Text style={styles.title}>on your needs</Text>
        <Text style={styles.description}>
          Empowering skilled hands, bridging opportunities to Hire or get hired!
        </Text>

        {/* Navigate to Register Screen when button is clicked */}
        <TouchableOpacity
          style={styles.btn}
          onPress={()=>navigation.navigate('register')}
        >
          <Text style={styles.btnText}>Let's Get Started</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginTop: 100,
  },
  logo: {
    width: 270,
    height: 300,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "grey",
  },
  subContainer: {
    backgroundColor: "#fff",
    padding: 30,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
  },
  description: {
    fontSize: 18,
    padding: 20,
    textAlign: "center",
    color: "grey",
  },
  btn: {
    padding: 16,
    backgroundColor: "#000000",
    borderRadius: 30,
    marginTop: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
    fontSize: 20,
  },
});
