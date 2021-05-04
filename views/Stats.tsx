import {useRoute} from '@react-navigation/core';
import React from 'react';
import {View} from 'react-native';
import EthBalance from '../components/stats/EthBalance';
import WalletHeader from '../components/stats/WalletHeader';
import WorkerCount from '../components/stats/WorkerCount';

export default function Stats() {
  const route = useRoute();

  const wallet = route.params?.wallet!!;
  const name = route.params?.name!!;

  return (
    <View>
      <WalletHeader name={name} wallet={wallet} />

      <EthBalance wallet={wallet} />
      <WorkerCount wallet={wallet} />
    </View>
  );
}
