import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

type FrameProps = {
  title: string;
  description: string;
  backgroundImage: string; // URL or local image path
};

const Frame: React.FC<FrameProps> = ({ title, description, backgroundImage }) => {
  return (
    <ImageBackground
      source={{ uri: backgroundImage }}
      style={styles.container}
      imageStyle={styles.backgroundImage}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <View style={styles.socialIconsContainer}>
        <View style={styles.iconBox}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png',
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.iconBox}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Facebook_icon.svg',
            }}
            style={styles.icon}
          />
        </View>
        <View style={styles.iconBox}>
          <Image
            source={{
              uri: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/TikTok_logo.svg',
            }}
            style={styles.icon}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'blue'
  },
  container: {
    width: 180, // Adjust width as needed
    height: 120, // Increased height for social icons
    margin: 8,
    borderRadius: 8,
    overflow: 'hidden', // Ensures the borderRadius is applied to the background image
  },
  backgroundImage: {
    borderRadius: 8, // Apply border radius to the image itself
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.3)', // Dark overlay for text readability
    justifyContent: 'flex-start', // Align content to the top of the container
    alignItems: 'flex-start', // Align items to the left
    paddingLeft: 10, // Add some left padding to ensure text doesn't touch the edge
    paddingTop: 10, // Ensure there's some space above the text
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'left', // Align text to the left
    marginTop: 4,
  },
  socialIconsContainer: {
    position: 'absolute', // Position icons at the bottom-left
    bottom: 10,
    left: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconBox: {
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6, // Add space between icons
  },
  icon: {
    width: 16,
    height: 16,
    resizeMode: 'contain',
  },
});

export default Frame;
