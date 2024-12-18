import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Category from './screens/components/Category';
import SearchBar from './screens/components/SearchBar';

function App(): React.JSX.Element {
  const GenFramesData = Array.from({length: 5}, (_, index) => ({
    title: `Gen Frame ${index + 1}`,
    description: `Generative Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const AdvFramesData = Array.from({length: 5}, (_, index) => ({
    title: `Advertisement Frame ${index + 1}`,
    description: `Advertisement Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const FilmFramesData = Array.from({length: 5}, (_, index) => ({
    title: `Film Frame ${index + 1}`,
    description: `Film Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const ScriptFramesData = Array.from({length: 5}, (_, index) => ({
    title: `Script Frame ${index + 1}`,
    description: `Script Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const AnimatedFramesData = Array.from({length: 5}, (_, index) => ({
    title: `Script Frame ${index + 1}`,
    description: `Script Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const ShortsFramesData = Array.from({length: 5}, (_, index) => ({
    title: `Short Frame ${index + 1}`,
    description: `Short Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const FacelessFramesData = Array.from({length: 5}, (_, index) => ({
    title: `Faceless Frame ${index + 1}`,
    description: `Faceless Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const handleSeeMorePress = (category: string) => {
    console.log(`See more clicked for: ${category}`);
    // You can navigate to a new screen or show more items based on the category
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}>
      <SearchBar />
      <Category
        title="Generative AI Videos"
        data={GenFramesData}
        categoryName="Generative AI Videos"
        onSeeMorePress={handleSeeMorePress}
      />

      <Category
        title="Create advertisements"
        data={AdvFramesData}
        categoryName="Advertisement AI Videos"
        onSeeMorePress={handleSeeMorePress}
      />

      <Category
        title="Make AI films"
        data={FilmFramesData}
        categoryName="Film AI Videos"
        onSeeMorePress={handleSeeMorePress}
      />

      <Category
        title="Use my script"
        data={ScriptFramesData}
        categoryName="Film AI Videos"
        onSeeMorePress={handleSeeMorePress}
      />

      <Category
        title="Animated Videos"
        data={AnimatedFramesData}
        categoryName="Film AI Videos"
        onSeeMorePress={handleSeeMorePress}
      />

      <Category
        title="Create short videos"
        data={ShortsFramesData}
        categoryName="Film AI Videos"
        onSeeMorePress={handleSeeMorePress}
      />

      <Category
        title="Faceless video"
        data={FacelessFramesData}
        categoryName="Film AI Videos"
        onSeeMorePress={handleSeeMorePress}
      />

      {/* Add more Category components for other categories */}
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
});

export default App;
