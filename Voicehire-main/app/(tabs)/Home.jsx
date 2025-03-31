import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Image } from 'react-native';

const Home = () => {
  return (
    <View style={styles.container}>
      {/* 🔥 Fixed Search Bar */}
      <View style={styles.searchBarContainer}>
        <TextInput style={styles.searchBar} placeholder="Search" />
      </View>

      <ScrollView contentContainerStyle={{ paddingTop: 60 }}>
        <Text style={styles.title}>WELCOME TO VOICE HIRING FOR ILLITERATES</Text>

        <View style={styles.jobCard}>
          <Image 
              source={{ uri: 'https://i.pinimg.com/736x/9b/96/80/9b9680f9b844da0db6646efe87830e86.jpg' }} 
              style={styles.jobImage} 
              resizeMode="cover" 
          />
          <Text style={styles.jobTitle}>Find your Jobs and Hire easily</Text>
          <Text style={styles.jobSubtitle}>Access Anytime, Anywhere</Text>
          <Text style={styles.jobDescription}>
              A Platform designed to connect many skilled workers struggling to find jobs due to illiteracy or lack of digital access. 
              We ensure easy job access for painters, drivers, caretakers, security guards, cooks, and many others by providing a voice-based hiring system.
          </Text>
        </View> 

        <Text style={styles.sectionTitle}>Categories</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollContainer}>
          <View style={styles.categoriesWrapper}> 
            <TouchableOpacity style={[styles.categoryCard, styles.electrician]}>
              <Text style={styles.categoryTitle}>Electrician</Text>
              <Text style={styles.categoryJobs}>3.2k Jobs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.categoryCard, styles.plumber]}>
              <Text style={styles.categoryTitle}>Plumber</Text>
              <Text style={styles.categoryJobs}>2.8k Jobs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.categoryCard, styles.caretaker]}>
              <Text style={styles.categoryTitle}>CareTaker</Text>
              <Text style={styles.categoryJobs}>4.2k Jobs</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.categoryCard, styles.security]}>
              <Text style={styles.categoryTitle}>Security</Text>
              <Text style={styles.categoryJobs}>10.2k Jobs</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  searchBarContainer: {
    position: 'absolute',  // ✅ Keeps search bar fixed
    top: 10,
    left: 20,
    right: 20,
    zIndex: 10,  // ✅ Ensures it's above other content
    backgroundColor: '#fff',
    elevation: 5, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 20,
  },
  searchBar: {
    height: 40,
    borderColor: '#000',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  jobCard: {
    backgroundColor: '#000',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
  },
  jobImage: {
    width: '100%', 
    height: 165, 
    borderRadius: 10,
    marginBottom: 10, 
  },
  jobTitle: {
    color: '#fff',
    fontSize: 27,
    fontWeight: 'bold',
  },
  jobSubtitle: {
    color: '#fff',
    fontSize: 22,
    marginTop: 10,
  },
  jobDescription: {
    color: '#fff',
    fontSize: 16,
    marginTop: 18,
    textAlign: "center",
  },
  scrollContainer: {
    paddingVertical: 10,
  },
  categoriesWrapper: {
    flexDirection: 'row',
  },
  categoryCard: {
    height: 150,
    width: 130,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  categoryTitle: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  categoryJobs: {
    marginVertical: 5,
    fontSize: 14,
  },
  electrician: {
    backgroundColor: '#F1DDCF',
  },
  plumber: {
    backgroundColor: '#B5E3E7',
  },
  caretaker: {
    backgroundColor: '#E7E3B5',
  },
  security: {
    backgroundColor: '#DBD7D2',
  },
});

export default Home;
