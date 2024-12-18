import React from 'react';
import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Frame from './screens/components/frame';

function App(): React.JSX.Element {
  const GenFramesData = Array.from({ length: 10 }, (_, index) => ({
    title: `Gen Frame ${index + 1}`,
    description: `Generative Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const AdvFramesData = Array.from({ length: 10 }, (_, index) => ({
    title: `Advertisement Frame ${index + 1}`,
    description: `Advertisement Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const FilmFramesData = Array.from({ length: 10 }, (_, index) => ({
    title: `Film Frame ${index + 1}`,
    description: `Film Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const ScriptsFramesData = Array.from({ length: 10 }, (_, index) => ({
    title: `Scripts Frame ${index + 1}`,
    description: `Scripts Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const AnimatedFramesData = Array.from({ length: 10 }, (_, index) => ({
    title: `Animated Frame ${index + 1}`,
    description: `Animated Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const ShortsFramesData = Array.from({ length: 10 }, (_, index) => ({
    title: `Shorts Frame ${index + 1}`,
    description: `Shorts Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const FacelessFramesData = Array.from({ length: 10 }, (_, index) => ({
    title: `Faceless Frame ${index + 1}`,
    description: `Faceless Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const handleSeeMorePress = (category: string) => {
    console.log(`See more clicked for: ${category}`);
    // You can navigate to a new screen or show more items based on the category
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.scrollViewContainer}>
      {/* Generative AI Videos */}
      <View style={styles.category}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Generative AI Videos</Text>
          <TouchableOpacity onPress={() => handleSeeMorePress('Generative AI Videos')}>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {GenFramesData.map((frame, index) => (
            <Frame
              key={index}
              title={frame.title}
              description={frame.description}
              backgroundImage={frame.backgroundImage}
            />
          ))}
        </ScrollView>
      </View>

      {/* Advertisement AI Videos */}
      <View style={styles.category}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Create advertisements</Text>
          <TouchableOpacity onPress={() => handleSeeMorePress('Advertisement AI Videos')}>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {AdvFramesData.map((frame, index) => (
            <Frame
              key={index}
              title={frame.title}
              description={frame.description}
              backgroundImage={frame.backgroundImage}
            />
          ))}
        </ScrollView>
      </View>

      {/* Film AI Videos */}
      <View style={styles.category}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Make AI films</Text>
          <TouchableOpacity onPress={() => handleSeeMorePress('Film AI Videos')}>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {FilmFramesData.map((frame, index) => (
            <Frame
              key={index}
              title={frame.title}
              description={frame.description}
              backgroundImage={frame.backgroundImage}
            />
          ))}
        </ScrollView>
      </View>

      {/* Use AI Scripts */}
      <View style={styles.category}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Use AI script</Text>
          <TouchableOpacity onPress={() => handleSeeMorePress('Scripts AI Videos')}>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {ScriptsFramesData.map((frame, index) => (
            <Frame
              key={index}
              title={frame.title}
              description={frame.description}
              backgroundImage={frame.backgroundImage}
            />
          ))}
        </ScrollView>
      </View>

      {/* Animated videos */}
      <View style={styles.category}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Animated videos</Text>
          <TouchableOpacity onPress={() => handleSeeMorePress('Animated Videos')}>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {AnimatedFramesData.map((frame, index) => (
            <Frame
              key={index}
              title={frame.title}
              description={frame.description}
              backgroundImage={frame.backgroundImage}
            />
          ))}
        </ScrollView>
      </View>

      {/* Create short videos */}
      <View style={styles.category}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Create short videos</Text>
          <TouchableOpacity onPress={() => handleSeeMorePress('Short Videos')}>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {ShortsFramesData.map((frame, index) => (
            <Frame
              key={index}
              title={frame.title}
              description={frame.description}
              backgroundImage={frame.backgroundImage}
            />
          ))}
        </ScrollView>
      </View>

      {/* Faceless video */}
      <View style={styles.category}>
        <View style={styles.categoryHeader}>
          <Text style={styles.categoryTitle}>Faceless video</Text>
          <TouchableOpacity onPress={() => handleSeeMorePress('Faceless Video')}>
            <Text style={styles.seeMore}>See More</Text>
          </TouchableOpacity>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.scrollView}>
          {FacelessFramesData.map((frame, index) => (
            <Frame
              key={index}
              title={frame.title}
              description={frame.description}
              backgroundImage={frame.backgroundImage}
            />
          ))}
        </ScrollView>
      </View>
    </ScrollView>
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
  frameWrapper: {
    width: 180,
    height: 140,
    marginRight: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: '#2a3342',
    borderWidth: 1.5,
    borderColor: '#404a59',
    shadowColor: '#4a90e2',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
});

export default App;
