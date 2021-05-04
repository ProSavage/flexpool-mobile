import axios from 'axios';

const BASE_URL = 'https://flexpool.io/api/v1';

const flexpoolAPI = axios.create({baseURL: BASE_URL});

export const getBalance = async (address: string) => {
  return flexpoolAPI.get(`/miner/${address}/balance`);
};

export const getWorkerCount = async (address: string) => {
  return flexpoolAPI.get(`/miner/${address}/workerCount`);
};

export const getETHUSD = () => {
  return 3055.81;
};
