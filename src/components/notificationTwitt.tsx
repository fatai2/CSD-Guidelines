import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Surface, Text, Avatar, useTheme } from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from 'color';

type Props = {
  id: string;
  name: string;
};

export const NotificationTwitt = (props: Props) => {
  const theme = useTheme();

  return (
    <Surface style={styles.container}>
      <View style={styles.leftColumn}>
        <MaterialCommunityIcons
          name="star-four-points"
          size={30}
          color="#8d38e8"
        />
      </View>
      <View style={styles.rightColumn}>
        <Text style={{ marginBottom: 10 }}>
          {props.name}
        </Text>
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingRight: 15,
    paddingBottom: 15,
  },
  leftColumn: {
    width: 40,
    marginRight: 10,
    alignItems: 'flex-end',
  },
  rightColumn: {
    flex: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
});
