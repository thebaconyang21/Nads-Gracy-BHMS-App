import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: '#0F2C59', headerStyle: { backgroundColor: '#F8F9FA' } }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Overview',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="grid-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="rooms"
        options={{
          title: 'Rooms (17)',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="bed-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="billing"
        options={{
          title: 'Billing',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="receipt-outline" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="concerns"
        options={{
          title: 'Notices',
          headerShown: false,
          tabBarIcon: ({ color, size }) => <Ionicons name="megaphone-outline" size={size} color={color} />,
        }}
      />
    </Tabs>
  );
}