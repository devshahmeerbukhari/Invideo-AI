import React from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import Frame from '../Frame'; // Import the Frame component

function SeeMore({ route }: { route: any }) {
  const { categoryData } = route.params;

  // Extract the title from the categoryData, assuming it has a title in its structure
  const categoryTitle = categoryData?.[0]?.title || 'Category Details'; // Default title if no categoryData is present

  // Render each frame item in a grid
  const renderItem = ({ item }: { item: any }) => (
    <Frame
      title={item.title}
      description={item.description}
      backgroundImage={item.backgroundImage}
    />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{categoryTitle}</Text>
      <FlatList
        data={categoryData}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2} // Ensures two frames per row
        columnWrapperStyle={styles.row} // Ensures proper spacing between rows
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
    paddingHorizontal: 10,
    paddingTop: 20,
  },
  scrollViewContainer: {
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
  },
  row: {
    justifyContent: 'space-between', // Space between frames in a row
  },
  footerSpacer: {
    flex: 1,
    marginBottom: 100, // Adjust space at the bottom if needed
  },
});

export default SeeMore;
