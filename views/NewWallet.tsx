import {useNavigation} from '@react-navigation/core';
import React, {useState} from 'react';
import {Alert, Button, StyleSheet, Text, View} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import {addWallet, getWallets} from '../util/fetch/Wallets';
import {Wallet} from '../util/types/Wallet';
export default function NewWallet() {
  const [name, setName] = useState("ProSavage's Wallet");

  const [wallet, setWallet] = useState(
    '0xFF6B681ADc84a7d2D12Ce2C1f708dbD7be66D9a7',
  );

  const navigation = useNavigation();

  const createWallet = async () => {
    const storedWallets = getWallets();
    if (walletExists(storedWallets)) {
      Alert.alert('Address Already Exists');
      console.log('duplicate wallet, aborting...');
      return;
    }

    const newWallet: Wallet = {
      name: name,
      address: wallet,
    };

    addWallet(newWallet);
    navigation.navigate('Home');
  };

  const walletExists = (wallets: Wallet[]) => {
    return wallets.map(w => w.address).includes(wallet);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Human Friendly Name for Wallet</Text>
      <TextInput style={styles.input} onChangeText={setName} value={name} />
      <Text style={styles.header}>ETH Wallet Address</Text>
      <TextInput style={styles.input} onChangeText={setWallet} value={wallet} />
      <Button title={'Create Wallet'} onPress={createWallet} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    marginTop: 20,
    marginHorizontal: 15,
  },
  input: {
    height: 40,
    marginVertical: 12,
    borderWidth: 1,
    borderColor: '#eaeaea',
    padding: 5,
    borderRadius: 5,
  },
  header: {
    fontSize: 20,
    fontWeight: '700',
  },
});
