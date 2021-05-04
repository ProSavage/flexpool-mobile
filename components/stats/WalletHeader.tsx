import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {deleteWallet} from '../../util/fetch/Wallets';
const WalletHeader = (props: {name: string; wallet: string}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>{props.name}</Text>
      <Text numberOfLines={1}>{props.wallet}</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.delete}
          onPress={() => {
            deleteWallet({name: props.name, address: props.wallet});
            navigation.navigate('Home');
          }}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.settings} onPress={() => {}}>
          <Text style={styles.buttonText}>Settings</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WalletHeader;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    padding: 15,
    borderRadius: 5,
    borderColor: '#eaeaea',
    borderWidth: 1,
    margin: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
  buttonContainer: {
    flexDirection: 'row',
    marginVertical: 5,
  },
  delete: {
    backgroundColor: '#ed4f32',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  settings: {
    backgroundColor: '#0069ff',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonText: {
    color: '#FFF',
    fontWeight: '700',
  },
});
