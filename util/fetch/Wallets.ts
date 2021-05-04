import {MMKV} from 'react-native-mmkv';
import {Wallet} from '../types/Wallet';

export const getWallets = () => {
  const storedWalletsRaw = MMKV.getString('wallets');
  if (!storedWalletsRaw) {
    return [];
  }
  return JSON.parse(storedWalletsRaw);
};

export const addWallet = (wallet: Wallet) => {
  const storedWallets = getWallets();
  storedWallets.push(wallet);
  MMKV.set('wallets', JSON.stringify(storedWallets));
  console.log('wallets modified');
  console.log(storedWallets);
};

export const deleteWallet = (wallet: Wallet) => {
  let storedWallets = getWallets();
  storedWallets = storedWallets.filter((wal: Wallet) => {
    return JSON.stringify(wal) !== JSON.stringify(wallet);
  });
  MMKV.set('wallets', JSON.stringify(storedWallets));
  console.log('wallets post delete', storedWallets);
};
