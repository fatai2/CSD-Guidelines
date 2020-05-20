import React, { useState, useEffect } from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { useTheme, Searchbar } from 'react-native-paper';

import { Twitt } from './components/twitt';
import { twitts } from './data';
import { StackNavigatorParamlist } from './types';

const useDebounce = (value: any, delay: number) => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebounceValue(value);
    }, delay);

    return () => {
      clearTimeout(timer);
    };
  }, [value, delay]);

  return debounceValue;
};


type TwittProps = React.ComponentProps<typeof Twitt>;

function renderItem({ item }: { item: TwittProps }) {
  return <Twitt {...item} />;
}

function keyExtractor(item: TwittProps) {
  return item.id;
}

type Props = {
  navigation?: StackNavigationProp<StackNavigatorParamlist>;
};

export const Feed = (props: Props) => {
  const theme = useTheme();

  const data3 = twitts.map(twittProps => ({
    ...twittProps,
    onPress: () =>
      props.navigation &&
      props.navigation.push('Details', {
        ...twittProps,
      }),
  }))
  
  const data = Object.values(data3)
    .map(datum => ({
      ...datum,
      lowerCaseName: datum.name.toLowerCase(),
    }))
    .sort((a, b) => a.name > b.name);
    
  const [query, setQuery] = useState('');
  const debounceQuery = useDebounce(query, 200);
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    const lowerCaseQuery = debounceQuery.toLowerCase();
    const newData = data
      .filter((datum) => datum.lowerCaseName.includes(lowerCaseQuery))
      .map((datum) => ({
        ...datum,
        rank: datum.lowerCaseName.indexOf(lowerCaseQuery),
      }))
      .sort((a, b) => a.rank - b.rank);

    setFilteredData(newData);
  }, [debounceQuery]);
  
  return (
    <View>
        <Searchbar
            placeholder="Search Guidelines"
            onChangeText={setQuery}
            value={query}
        />
        <FlatList
          contentContainerStyle={{ backgroundColor: theme.colors.background }}
          style={{ backgroundColor: theme.colors.background }}
          data={filteredData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          ItemSeparatorComponent={() => (
            <View style={{ height: StyleSheet.hairlineWidth }} />
          )}
        />
    </View>
  );
};
