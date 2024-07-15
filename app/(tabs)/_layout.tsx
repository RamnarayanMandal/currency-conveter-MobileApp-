import { Tabs } from 'expo-router';
import React from 'react';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import App from '@/src/App';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <App/>
  );
}
