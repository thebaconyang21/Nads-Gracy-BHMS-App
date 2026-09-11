import { StyleSheet, Text, View } from 'react-native';

export default function TenantDashboard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tenant Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 22, fontWeight: 'bold' },
});