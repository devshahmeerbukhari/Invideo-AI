import React from 'react';
import { Text, View, StyleSheet, FlatList, Image } from 'react-native';
import { SeeMoreProps } from '../../../types';

function SeeMore({ route }: SeeMoreProps) {
  const { categoryData } = route.params;

  // Extract the title from the categoryData, assuming it has a title in its structure
  const categoryTitle = categoryData?.[0]?.title || 'Category Details';  // Default title if no categoryData is present

  // Render each frame item in a grid
  const renderItem = ({ item, index }: { item: any; index: number }) => (
    <View style={styles.frameContainer}>
      <Image source={{ uri: item.backgroundImage }} style={styles.frameImage} />
      <Text style={styles.frameTitle}>{item.title}</Text>
      <Text style={styles.frameDescription}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryTitle}</Text>  {/* Dynamic title here */}
      <FlatList
        data={categoryData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // This ensures two frames per row
        contentContainerStyle={styles.scrollViewContainer}
        ListFooterComponent={
          categoryData.length % 2 === 0 ? null : (
            <View style={styles.footerSpacer} />
          )
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1e2532',
  },
  scrollViewContainer: {
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    marginTop: 20,
  },
  listContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Adds spacing between columns
  },
  frameContainer: {
    width: '48%', // Ensures two items per row
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    margin: 5,
    alignItems: 'center',
    marginVertical: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3, // For Android shadow
  },
  frameImage: {
    width: '100%',
    height: 120,
    borderRadius: 8,
    marginBottom: 10,
  },
  frameTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4a90e2',
    marginBottom: 6,
  },
  frameDescription: {
    fontSize: 14,
    color: '#7f8c8d',
    textAlign: 'center',
  },
  footerSpacer: {
    flex: 1,
    marginBottom: 100, // Adjust space at the bottom if needed
  },
});

export default SeeMore;
