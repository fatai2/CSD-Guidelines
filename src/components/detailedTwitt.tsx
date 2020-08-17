import React from 'react';
import { StyleSheet, ScrollView, Dimensions  } from 'react-native';
import {
  useTheme,
} from 'react-native-paper';
import color from 'color';
import fileList from '../data/output/filelist.js'
import HTML from 'react-native-render-html';

type Props = {
  id: string;
  name: string;
};

export const DetailedTwitt = (props: Props) => {
  const theme = useTheme();
  const file = props.id;
  const htmlString = fileList[file];
  return (
        <ScrollView style={{ styles.scrollViewContent }}>
			<HTML html={htmlString} imagesMaxWidth= {Dimensions.get('window').width} />
		</ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
