import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ScrollView } from 'react-native';
import axios from 'axios';

const createEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    jobDomain: '',
    area: '',
    phoneNumber: '',
    city: '',
    age: '',
  });

  const handleInputChange = (field, value) => {
    setEmployee({ ...employee, [field]: value });
  };

  const handleSubmit = async () => {
    // Validate fields
    if (!employee.name || !employee.phoneNumber || !employee.age) {
      Alert.alert('Error', 'Please fill required fields (Name, Phone, Age)');
      return;
    }

    // Phone number validation (must be 10 digits)
    if (employee.phoneNumber.length !== 10) {
      Alert.alert('Error', 'Phone number must be 10 digits');
      return;
    }

    // Age validation (must be between 18 and 60)
    if (employee.age < 18 || employee.age > 60) {
      Alert.alert('Error', 'Age must be between 18 and 60');
      return;
    }

    try {
      // Log the data being sent
      console.log("Data being sent to backend:", employee);

      const response = await axios.post("http://192.168.1.36:8080/api/employees/create", employee);

      console.log("Employee added:", response.data); // Log the response from backend

      // Show success message
      Alert.alert('Success', 'Employee created successfully!');

      // Reset form after submission
      setEmployee({
        name: '',
        jobDomain: '',
        area: '',
        phoneNumber: '',
        city: '',
        age: '',
      });
    } catch (error) {
      console.error("There was an error:", error.response ? error.response.data : error.message);
      Alert.alert('Error', 'Failed to create employee: ' + (error.response ? error.response.data : error.message));
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Create New Employee</Text>

      <Text style={styles.label}>Name *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        value={employee.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />

      <Text style={styles.label}>Job Domain</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Job Domain"
        value={employee.jobDomain}
        onChangeText={(text) => handleInputChange('jobDomain', text)}
      />

      <Text style={styles.label}>Area</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Area"
        value={employee.area}
        onChangeText={(text) => handleInputChange('area', text)}
      />

      <Text style={styles.label}>Phone Number *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Phone Number"
        value={employee.phoneNumber}
        onChangeText={(text) => handleInputChange('phoneNumber', text)}
        keyboardType="phone-pad"
      />

      <Text style={styles.label}>City</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter City"
        value={employee.city}
        onChangeText={(text) => handleInputChange('city', text)}
      />

      <Text style={styles.label}>Age *</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Age"
        value={employee.age}
        onChangeText={(text) => handleInputChange('age', text)}
        keyboardType="numeric"
      />

      <Button title="Submit" onPress={handleSubmit} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    marginTop: 15,
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
  },
});

export default createEmployee;
