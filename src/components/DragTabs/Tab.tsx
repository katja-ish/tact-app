import { Text } from '@app/theme';
import React from 'react';
import { Dimensions, Image, StyleSheet, View } from 'react-native';

interface Tab {
  id: number;
  name: string;
  uri: string;
}

export const TAB_COLUMNS = 2;
export const TAB_SIZE = Dimensions.get('window').width / TAB_COLUMNS;
export const tabs: Tab[] = [
  {
    id: 0,
    name: 'Tom',
    uri:
      'data:image/jpeg;base64,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',
  },
  {
    id: 1,
    name: 'Bill',
    uri:
      'https://st.depositphotos.com/1000122/2016/i/600/depositphotos_20163697-stock-photo-small-scottish-straight-kitten-walking.jpg',
  },
  {
    id: 2,
    name: 'John',
    uri:
      'https://lh3.googleusercontent.com/proxy/_2-6jQHq_Y-mkpPFxf4ayWBlrw6Y9qcWE8pDTH4pR42x5qNmkqHeBwvBMRaevzZhNjgO6kFVjJv1SU6SXkXLioJTQI5-Plxax6Nm9atFubAlU9zOXL_0JlrZZzruHTx8aRqI',
  },
  {
    id: 3,
    name: 'Sam',
    uri:
      'https://whiskas.ru/upload/medialibrary/45b/%D0%9A%D0%B0%D0%BA-%D0%BA%D0%BE%D1%82%D1%8F%D1%82%D0%B0-%D0%BF%D0%BE%D0%B7%D0%BD%D0%B0%D1%8E%D1%82-1404%D1%85879.jpg',
  },
  {
    id: 4,
    name: 'Harry',
    uri:
      'https://opt-1031816.ssl.1c-bitrix-cdn.ru/upload/resize_cache/iblock/5bb/750_400_1/kogda_kotyata_menyayut_sherst_i_tsvet_glaz.jpg?159558764197137',
  },
];

const styles = StyleSheet.create({
  container: { width: TAB_SIZE, height: TAB_SIZE },
  name: { position: 'absolute', top: 30, left: 30, zIndex: 99 },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: undefined,
    height: undefined,
    borderRadius: 16,
    margin: 16,
  },
});

export interface TabProps {
  tab: any;
  index: number;
}

export default ({ index, tab: { thumbnailPath, givenName } }: TabProps) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: tabs[index].uri }} style={styles.image} />
      <Text style={styles.name}>{givenName}</Text>
    </View>
  );
};
