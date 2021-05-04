import {useIsFocused} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getBalance, getETHUSD} from '../../util/fetch/Flexpool';
import {formatETH} from '../../util/Formatter';

const EthBalance = (props: {wallet: string}) => {
  const [balance, setBalance] = useState(-1);

  const isFocused = useIsFocused();

  useEffect(() => {
    console.log(props.wallet);
    getBalance(props.wallet)
      .then(res => {
        setBalance(formatETH(res.data.result));
      })
      .catch(err => console.log('eth-balance', err.response.data));
  }, [isFocused]);

  const convertBalToUSD = () => {
    if (balance === -1) {
      return 0;
    }
    return (balance * getETHUSD()).toFixed(2);
  };

  const getBalanceFormatted = () => {
    if (balance === -1) {
      return 'fetching...';
    }
    return balance.toFixed(5);
  };

  return (
    <View style={styles.wrapper}>
      <Text style={styles.subTitle}>Unpaid Balance</Text>
      <Text style={styles.title}>{getBalanceFormatted()} ETH</Text>
      <Text> = ${convertBalToUSD()}</Text>
    </View>
  );
};

export default EthBalance;

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'column',
    padding: 15,
    borderRadius: 5,
    borderColor: '#eaeaea',
    borderWidth: 1,
    margin: 5,
  },
  subTitle: {
    fontSize: 25,
    fontWeight: '500',
  },
  title: {
    fontSize: 30,
    fontWeight: '700',
  },
});
