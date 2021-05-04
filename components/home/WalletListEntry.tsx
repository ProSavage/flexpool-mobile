import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

export default function WalletListEntry(props: {name: string; wallet: string}) {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.wrapper}
      onPress={() =>
        navigation.navigate('Stats', {name: props.name, wallet: props.wallet})
      }>
      <Text style={styles.header}>{props.name}</Text>
      <Text numberOfLines={1}>{props.wallet}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    padding: 5,
    borderTopColor: 'black',
    borderBottomWidth: 1,
    borderColor: '#eaeaea',
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
});
