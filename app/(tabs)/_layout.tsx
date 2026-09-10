// git add .
// git commit -m "Update code changes"
// Pull any remote changes: Bring in any updates from GitHub to avoid conflicts:

// Bash
// git pull origin main --rebase
// Push to GitHub: Send your finalized local commits up to your repository:

// Bash
// git push origin main
import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';

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
          title: 'Rooms',
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