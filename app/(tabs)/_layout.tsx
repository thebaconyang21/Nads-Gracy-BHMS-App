import { Tabs } from 'expo-router';
import { Platform } from 'react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007BFF',
        headerShown: Platform.OS === 'ios',
      }}>
      {/* Hide default template tabs */}
      <Tabs.Screen name="index" options={{ href: null }} />
      <Tabs.Screen name="two" options={{ href: null }} />

      {/* Role dashboards */}
      <Tabs.Screen
        name="owner/dashboard"
        options={{
          title: 'Owner Dashboard',
          href: null,
        }}
      />
      <Tabs.Screen
        name="caretaker/dashboard"
        options={{
          title: 'Caretaker Dashboard',
          href: null,
        }}
      />
      <Tabs.Screen
        name="tenant/dashboard"
        options={{
          title: 'Tenant Dashboard',
          href: null,
        }}
      />
    </Tabs>
  );
}