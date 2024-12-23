import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../../types';

// Define the types for navigation and route props
type UserAccountNavigationProp = StackNavigationProp<RootStackParamList, 'UserAccount'>;
type UserAccountRouteProp = RouteProp<RootStackParamList, 'UserAccount'>;

type UserAccountProps = {
  navigation: UserAccountNavigationProp;
  route: UserAccountRouteProp;
};

const UserAccount: React.FC<UserAccountProps> = ({ route, navigation }) => {
  const { profileName, profileEmail, profileImageUri } = route.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Account</Text>

      {/* Profile Section */}
      <View style={styles.profileSection}>
        <Image
          source={{ uri: profileImageUri || 'https://via.placeholder.com/100' }} // Replace with the user's image URI
          style={styles.profileImage}
        />
        <View style={styles.profileInfo}>
          <Text style={styles.profileName}>{profileName}</Text>
          <Text style={styles.profileEmail}>{profileEmail}</Text>
        </View>
        <TouchableOpacity>
          <Text style={styles.settingsIcon}>⚙️</Text>
        </TouchableOpacity>
      </View>

      {/* Workspace Section */}
      <View style={styles.sectionContainer}>
        <Text style={styles.sectionHeader}>Workspace</Text>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.itemText}>Workspace</Text>
          <Text style={styles.itemValue}>Shahmeer&#39;s Workspace</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.itemText}>Settings</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.itemText}>Usage</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.itemText}>Members</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.itemText}>Subscription</Text>
        </TouchableOpacity>
      </View>

      {/* Other Section */}
      <View style={styles.sectionContainer}>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.itemText}>FAQ&#39;s</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sectionItem}>
          <Text style={styles.itemText}>Terms and Conditions</Text>
        </TouchableOpacity>
      </View>

      {/* Actions Section */}
      <TouchableOpacity style={styles.logoutButton}>
        <Text style={styles.logoutText}>Log out</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.deleteButton}>
        <Text style={styles.deleteText}>Delete Account</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    padding: 16,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  profileSection: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    padding: 16,
    marginBottom: 24,
  },
  profileImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  profileEmail: {
    fontSize: 14,
    color: '#aaa',
  },
  settingsIcon: {
    fontSize: 20,
    color: '#fff',
  },
  sectionContainer: {
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    marginBottom: 24,
  },
  sectionHeader: {
    fontSize: 16,
    color: '#aaa',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  sectionItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  itemText: {
    fontSize: 16,
    color: '#fff',
  },
  itemValue: {
    fontSize: 16,
    color: '#aaa',
  },
  logoutButton: {
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
  },
  logoutText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
  deleteButton: {
    backgroundColor: '#1c1c1e',
    borderRadius: 8,
    padding: 16,
  },
  deleteText: {
    fontSize: 16,
    color: '#ff3b30',
    textAlign: 'center',
  },
});

export default UserAccount;
