import {useIsFocused, useNavigation} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import 'react-native-gesture-handler';
import WalletListEntry from '../components/home/WalletListEntry';
import {getWallets} from '../util/fetch/Wallets';
import {Wallet} from '../util/types/Wallet';

const Home = () => {
  const [wallets, setWallets] = useState<Wallet[]>([]);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  useEffect(() => {
    console.log('refreshing..');
    fetchWallets();
  }, [isFocused]);

  const fetchWallets = () => {
    const storedWallets = getWallets();
    if (!storedWallets) {
      return;
    }
    setWallets(storedWallets);
    console.log('finished fetching...');
    console.log(wallets);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>Wallets</Text>
      <View style={styles.walletContainer}>
        {wallets.map((wallet, i) => {
          console.log(wallet, i);
          return (
            <WalletListEntry
              key={wallet.address}
              name={wallet.name}
              wallet={wallet.address}
            />
          );
        })}
      </View>
      <Button
        title={'Create New Wallet'}
        onPress={() => navigation.navigate('NewWallet')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignContent: 'center',
    width: '100%',
  },
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
  },
  walletContainer: {
    borderTopWidth: 1,
    flexDirection: 'column',
    borderColor: '#eaeaea',
  },
});

export default Home;
