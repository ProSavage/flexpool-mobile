import {useIsFocused} from '@react-navigation/core';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {getWorkerCount} from '../../util/fetch/Flexpool';

const WorkerCount = (props: {wallet: string}) => {
  const [workers, setWorkers] = useState({online: 0, offline: 0});

  const isFocused = useIsFocused();

  useEffect(() => {
    getWorkerCount(props.wallet)
      .then(res => {
        setWorkers(res.data.result);
      })
      .catch(err => console.log('worker-count', err.response.data));
  }, [isFocused]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.subTitle}>Workers Online/Offline</Text>
      <Text style={styles.title}>
        {workers.online}/{workers.offline}
      </Text>
    </View>
  );
};

export default WorkerCount;

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
