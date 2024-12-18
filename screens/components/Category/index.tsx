// Category.tsx (or Category.js if you're using JS)
import React from 'react';
import { ScrollView, Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import Frame from '../Frame';

interface CategoryProps {
  title: string;
  data: { title: string; description: string; backgroundImage: string }[];
  categoryName: string;
  onSeeMorePress: (category: string) => void;
}

const Category: React.FC<CategoryProps> = ({ title, data, categoryName, onSeeMorePress }) => {
  return (
    <View style={styles.category}>
      <View style={styles.categoryHeader}>
        <Text style={styles.categoryTitle}>{title}</Text>
        <TouchableOpacity onPress={() => onSeeMorePress(categoryName)}>
          <Text style={styles.seeMore}>See More</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
        {data.map((frame, index) => (
          <Frame
            key={index}
            title={frame.title}
            description={frame.description}
            backgroundImage={frame.backgroundImage}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  category: {
    marginTop: 16,
    marginBottom: 30,
  },
  categoryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  categoryTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#4a90e2',
    letterSpacing: 1.2,
    lineHeight: 26,
  },
  seeMore: {
    fontSize: 16,
    color: '#4a90e2',
    textDecorationLine: 'underline',
    cursor: 'pointer',
  },
  scrollView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default Category;
