import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  Surface,
  Title,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import color from 'color';

type Props = {
  id: string;
  name: string;
  onPress: (id: number) => void;
};

export const Twitt = (props: Props) => {
  const theme = useTheme();
  
  return (
    <TouchableRipple onPress={() => props.onPress(props.id)}>
      <Surface style={styles.container}>
        <View style={styles.leftColumn}>
          <MaterialCommunityIcons
            name="star-four-points"
            size={30}
            color="#8d38e8"
          />
        </View>
        <View style={styles.rightColumn}>
          <View style={styles.topRow}>
            <Title>{props.name}</Title>
          </View>
        </View>
      </Surface>
    </TouchableRipple>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingRight: 15,
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
    alignItems: 'baseline',
  },
});
