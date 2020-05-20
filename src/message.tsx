import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { MaterialBottomTabNavigationProp } from '@react-navigation/material-bottom-tabs';
import { useTheme } from 'react-native-paper';
import { WebView } from 'react-native-webview';
import htmlFile from './data/output/filelist.js';

import overlay from './overlay';

type Props = {
  navigation: MaterialBottomTabNavigationProp<{}>;
};

export const Message = () => {
  const theme = useTheme();

  const backgroundColor = overlay(2, theme.colors.surface) as string;

  const data = "<h1>Please wait...</h1>"
  const [htmlString, setHtmlString] = useState(data);

  useEffect(() => {
    const index1 = "047";
    const htmlString2 = htmlFile[index1];
    setHtmlString(htmlString2);
  }, );
  
  return (
      <WebView 
        style = {styles.scrollViewContent}
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
