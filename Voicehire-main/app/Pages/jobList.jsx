import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import { useLocalSearchParams } from 'expo-router'; // To access the query params from URL
import axios from 'axios'; // Axios for API calls

const jobList = () => {
    const { jobTitle } = useLocalSearchParams(); // Get jobTitle from params
    const [jobDetails, setJobDetails] = useState([]); // Initialize state to hold the job details
    const [loading, setLoading] = useState(true); // To manage loading state

    // Fetch job details using Axios
    useEffect(() => {
        const fetchJobDetails = async () => {
            try {
                // Assuming jobTitle is passed as part of the URL path
                
                const response = await axios.get(`http://192.168.1.36:8080/api/employees/getByDomain/${jobTitle}`);
                
                setJobDetails(response.data); // Set the job details in state
            } catch (error) {
                console.error("Error fetching job details:", error);
                Alert.alert("Error", "Failed to fetch job details.");
            } finally {
                setLoading(false); // Stop loading after the request
            }
        };
    
        fetchJobDetails();
    }, [jobTitle]);
    
    
    

    return (
        <View style={styles.container}>
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" /> // Show loading indicator while fetching
            ) : jobDetails.length > 0 ? (
                jobDetails.map((job, index) => (
                    <View key={index} style={styles.card}>
                        <Text style={styles.title}>{job.name}</Text>
                        <Text style={styles.detail}><Text style={styles.bold}>Description:</Text> {job.description}</Text>
                        <Text style={styles.detail}><Text style={styles.bold}>Salary:</Text> {job.salary}</Text>
                        <Text style={styles.detail}><Text style={styles.bold}>Location:</Text> {job.location}</Text>
                        <Text style={styles.detail}><Text style={styles.bold}>Requirements:</Text> {job.requirements}</Text>
                    </View>
                ))
            ) : (
                <Text style={styles.errorText}>No details found for this job.</Text> // Message when no job details are found
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    card: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        width: '90%',
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        textAlign: 'center',
    },
    detail: {
        fontSize: 16,
        marginBottom: 5,
    },
    bold: {
        fontWeight: 'bold',
    },
    errorText: {
        fontSize: 18,
        color: 'red',
    },
});

export default jobList;
