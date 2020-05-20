import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useTheme } from 'react-native-paper';

import { NotificationTwitt } from './components/notificationTwitt';
import { notificationTweets } from './data/index.ts';

type NotificationTwittProps = React.ComponentProps<typeof NotificationTwitt>;

function renderItem({ item }: { item: NotificationTwittProps }) {
  return <NotificationTwitt {...item} />;
}

function keyExtractor(item: NotificationTwittProps) {
  return item.id;
}

export const AllChanges = () => {
  const theme = useTheme();

  return (
    <FlatList
      contentContainerStyle={{ backgroundColor: theme.colors.background }}
      style={{ backgroundColor: theme.colors.background }}
      data={notificationTweets}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ItemSeparatorComponent={() => (
        <View style={{ height: StyleSheet.hairlineWidth }} />
      )}
    />
  );
};
