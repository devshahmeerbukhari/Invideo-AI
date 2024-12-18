import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

type SearchBarProps = {
  onSearch?: (query: string) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (onSearch) {
      onSearch(query);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{marginHorizontal: 10 }}>🔍</Text>
      <TextInput
        style={styles.input}
        placeholder="Search..."
        placeholderTextColor="#c1c1c1"
        value={searchQuery}
        onChangeText={handleSearch}
        autoCapitalize="none"
        autoCorrect={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 10,
    padding: 2,
    borderRadius: 10,
    backgroundColor: '#2a3545',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 3,
  },
  icon: {
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 16,
    backgroundColor: '#4a5b70',
    color: '#ffffff',
    borderRadius: 5,
    paddingHorizontal: 10,
  },
});

export default SearchBar;
