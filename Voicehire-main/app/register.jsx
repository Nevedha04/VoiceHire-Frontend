import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import React, { useState } from "react";
import { useSignUp } from "@clerk/clerk-expo";
import { useRouter } from "expo-router";

export default function RegisterScreen() {
  const { signUp, setActive } = useSignUp();
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    try {
      if (!signUp) {
        Alert.alert("Error", "Clerk authentication is not initialized yet.");
        return;
      }

      setLoading(true);

      // Step 1: Create the user in Clerk
      const newUser = await signUp.create({ emailAddress: email, password });

      // Step 2: Send verification email
      await signUp.prepareEmailAddressVerification();
      
      // Step 3: Show success message
      Alert.alert("Success", "Account created successfully! Please check your email to verify.");

      // Step 4: Set the user as active (optional, after verification)
      await setActive({ session: newUser.createdSessionId });

      // Step 5: Redirect to home/tabs page
      router.push("/(tabs)");

    } catch (error) {
      const errorMessage = error.errors?.[0]?.message || "Something went wrong. Please try again.";
      Alert.alert("Error", errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.btn} onPress={handleSignUp} disabled={loading}>
        <Text style={styles.btnText}>{loading ? "Signing Up..." : "Sign Up"}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    padding: 15,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 10,
    marginBottom: 15,
  },
  btn: {
    padding: 16,
    backgroundColor: "#000",
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
  },
  btnText: {
    color: "white",
    fontSize: 18,
  },
});
