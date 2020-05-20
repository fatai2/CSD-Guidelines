import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  useTheme,
} from 'react-native-paper';
import color from 'color';
import fileList from '../data/output/filelist.js'
import { WebView } from 'react-native-webview';

type Props = {
  id: string;
  name: string;
};

export const DetailedTwitt = (props: Props) => {
  const theme = useTheme();
  const file = props.id;
  const htmlString = fileList[file];
  return (
        <WebView style = {styles.scrollViewContent}
          originWhitelist={["*"]}
          source= {{ html: htmlString }}
        />
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
