import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { Headline, Caption, useTheme, Button } from 'react-native-paper';
import * as Linking from 'expo-linking';

import overlay from './overlay';

export const AllNotifications = () => {
  const theme = useTheme();

  const backgroundColor = overlay(2, theme.colors.surface) as string;

  const _handlePress = () => {
    Linking.openURL('mailto: csdapp@mrc.gm');
  };

  return (
    <ScrollView
      style={{ backgroundColor }}
      contentContainerStyle={[styles.scrollViewContent, { backgroundColor }]}
    >
      <Headline style={styles.centerText}>
        Thanks for installing our guidelines app.
      </Headline>
      <Caption style={styles.centerText}>
        This app is designed to provide doctors and nurses with quick offline access to the clinical guidelines of the Clinical Services Department of the MRC Unit The Gambia at LSHTM. {'\n'}It does not need an internet connection to be used. An internet connection is needed for updates which will download automatically whenever new guidelines are published. {'\n'}For feedback or support, click the button below:
      </Caption>
      <Button
        onPress={_handlePress}
        style={styles.button}
        mode="contained"
        labelStyle={{ color: 'white' }}
      >
        Contact Us
      </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerText: {
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
  },
});