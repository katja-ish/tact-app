import React from 'react';
import { FlatList, View } from 'react-native';
import Animated from 'react-native-reanimated';
import SortableCard, { CARD_HEIGHT } from './SortableCard';
import { cards } from './Card';

const { Value } = Animated;
export default () => {
  const offsets = cards.map((_, i) => new Value(i * CARD_HEIGHT));
  return (
    <FlatList
      data={cards}
      keyExtractor={(item, index) => `card${index}`}
      renderItem={({ item, index }) => <SortableCard {...{ offsets, item, index }} />}
    />

    /* {cards.map((card, index) => (
        // <SortableCard key={card.id} {...{ offsets, card, index }} />
      ))} */
    // </View>
  );
};
