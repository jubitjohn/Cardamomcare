import React from 'react';
import {StyleSheet, Text, View, FlatList, ImageBackground} from 'react-native';

const data = [
  {
    id: '1',
    title: 'Aphids',
    description:
      'Spray 5% Neem oil emulsion or 0.02% Methyl demeton or 0.05% Malathion or 0.025% Quinalphos or 0.05% Carbaryl.',
    image: 'assets/background.jpg',
  },
  {
    id: '2',
    title: 'Thrips',
    description:
      'Spray 0.05% Carbaryl or 0.02% Methyl demeton or 0.05% Malathion or 0.025% Quinalphos.',
  },
  {
    id: '3',
    title: 'Red spider mites',
    description:
      'Spray 0.05% Carbaryl or 0.02% Methyl demeton or 0.05% Malathion or 0.025% Quinalphos.',
    image: 'assets/background.jpg',
  },
  {
    id: '4',
    title: 'Scale insects',
    description:
      'Spray 5% Neem oil emulsion or 0.05% Carbaryl or 0.02% Methyl demeton or 0.05% Malathion or 0.025% Quinalphos.',
  },
];

const Item = ({title, description, image}) => (
  <View style={styles.item}>
    <ImageBackground source={image} style={styles.image}>
      <View style={styles.overlay}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </ImageBackground>
  </View>
);

const PestControlMeasuresScreen = () => {
  const renderItem = ({item}) => (
    <Item
      title={item.title}
      description={item.description}
      image={item.image}
    />
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
  },
  item: {
    backgroundColor: '#000',
    marginVertical: 10,
    marginHorizontal: 20,
    height: 200,
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});

export default PestControlMeasuresScreen;
