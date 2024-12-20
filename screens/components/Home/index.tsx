import React from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Category from '../Category';
import SearchBar from '../SearchBar';
import {useNavigation} from '@react-navigation/native';
import { RootStackParamList } from '../../../types';    // Import the param list type
import {StackNavigationProp} from '@react-navigation/stack'; // Import the type for the navigation prop

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Home'>;

function Home(): React.JSX.Element {
  const navigation = useNavigation<HomeScreenNavigationProp>(); // Type the navigation prop

  const GenFramesData = Array.from({length: 11}, (_, index) => ({
    title: `Generative AI Videos`,
    description: `Generative Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const AdvFramesData = Array.from({length: 10}, (_, index) => ({
    title: `Create Advertisements`,
    description: `Advertisement Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const FilmFramesData = Array.from({length: 10}, (_, index) => ({
    title: `Make AI Film`,
    description: `Film Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const ScriptFramesData = Array.from({length: 10}, (_, index) => ({
    // title: `Script Frame ${index + 1}`,
    title: `Script Frame`,
    description: `Script Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const AnimatedFramesData = Array.from({length: 10}, (_, index) => ({
    title: `Animated videos`,
    description: `Script Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const ShortsFramesData = Array.from({length: 10}, (_, index) => ({
    title: `Create short video`,
    description: `Short Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const FacelessFramesData = Array.from({length: 10}, (_, index) => ({
    title: `Faceless Video`,
    description: `Faceless Description for frame ${index + 1}`,
    backgroundImage: `https://source.unsplash.com/random/70x100?sig=${index}`,
  }));

  const handleSeeMorePress = (categoryData: any) => {
    // Now that navigation is typed, TypeScript will know the params for SeeMore
    navigation.navigate('SeeMore', {categoryData});
  };

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.scrollViewContainer}>
      <SearchBar />
      <Category
        title="Generative AI Videos"
        data={GenFramesData}
        onSeeMorePress={() => handleSeeMorePress(GenFramesData)}
      />
      <Category
        title="Create Advertisements"
        data={AdvFramesData}
        onSeeMorePress={() => handleSeeMorePress(AdvFramesData)}
      />

      <Category
        title="Make AI Film"
        data={FilmFramesData}
        onSeeMorePress={() => handleSeeMorePress(FilmFramesData)}
      />
      <Category
        title="Use my script"
        data={ScriptFramesData}
        onSeeMorePress={() => handleSeeMorePress(ScriptFramesData)}
      />
      <Category
        title="Animated videos"
        data={AnimatedFramesData}
        onSeeMorePress={() => handleSeeMorePress(AnimatedFramesData)}
      />
      <Category
        title="Create short video"
        data={ShortsFramesData}
        onSeeMorePress={() => handleSeeMorePress(ShortsFramesData)}
      />
      <Category
        title="Faceless Video"
        data={FacelessFramesData}
        onSeeMorePress={() => handleSeeMorePress(FacelessFramesData)}
      />
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

export default Home;
