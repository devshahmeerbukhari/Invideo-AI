import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';

const Home2 = () => {
  return (
    <View style={styles.container}>
      {/* Create AI Video Section */}
      <TouchableOpacity style={styles.createVideo}>
        <Text style={styles.createText}>Create AI video</Text>
        <Text style={styles.createSubText}>Start from scratch</Text>
        <View style={styles.arrowContainer}>
          <Text style={styles.arrow}>→</Text>
        </View>
      </TouchableOpacity>

      {/* History Section */}
      <Text style={styles.sectionTitle}>History</Text>
      <TouchableOpacity style={styles.historyItem}>
        <Text style={styles.historyText}>Cat's Epic Train Adventure!</Text>
        <Text style={styles.arrow}>→</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.showMore}>Show more →</Text>
      </TouchableOpacity>

      {/* Exports Section */}
      <Text style={styles.sectionTitle}>Exports</Text>
      <Text style={styles.noExports}>No exports for this workspace</Text>

      {/* Bottom Navigation */}
      {/* <View style={styles.navBar}>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Text style={styles.navText}>Library</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Image
            style={styles.profileImage}
            source={{ uri: 'https://example.com/profile-image' }}
          />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  createVideo: {
    backgroundColor: '#333',
    padding: 20,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 30,
  },
  createText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  createSubText: {
    color: '#aaa',
    fontSize: 14,
    marginTop: 5,
  },
  arrowContainer: {
    backgroundColor: '#000',
    borderRadius: 20,
    width: 30,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    color: '#fff',
    fontSize: 20,
  },
  sectionTitle: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  historyItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#222',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  historyText: {
    color: '#fff',
    fontSize: 14,
  },
  showMore: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 30,
  },
  noExports: {
    color: '#aaa',
    fontSize: 14,
    marginBottom: 30,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#000',
    padding: 15,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#fff',
    fontSize: 14,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
});

export default Home2;