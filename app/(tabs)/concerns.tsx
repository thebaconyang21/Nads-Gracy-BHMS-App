import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ConcernsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Tenant Portal Profile Card */}
        <View style={styles.topCard}>
          <View style={styles.row}>
            <View style={styles.avatarBox}><Ionicons name="person" size={24} color="#0D9488" /></View>
            <View style={{ marginLeft: 10, flex: 1 }}>
              <View style={styles.row}>
                <Text style={styles.portalTitle}>TENANT PORTAL</Text>
                <View style={styles.badge}><Text style={styles.badgeText}>FEMALE WING</Text></View>
              </View>
              <Text style={styles.welcomeText}>Welcome, Alyssa Cruz</Text>
              <Text style={styles.subText}>BS Nursing • 2nd Year</Text>
            </View>
          </View>
          <View style={styles.roomInfoRow}>
            <Text style={styles.roomInfoText}>🛏 Room 14 (Bed A - Lower Bunk)</Text>
            <Text style={styles.roomInfoText}>👤 Roommate: Bea Ramos</Text>
          </View>
          <TouchableOpacity style={styles.callButton}>
            <Ionicons name="call-outline" size={16} color="#0D9488" style={{ marginRight: 6 }} />
            <Text style={styles.callButtonText}>Call Caretaker Jeffrey</Text>
          </TouchableOpacity>
        </View>

        {/* Monthly Statement Card */}
        <View style={styles.card}>
          <View style={styles.rowSpace}>
            <View>
              <Text style={styles.label}>MONTHLY STATEMENT</Text>
              <Text style={styles.amountText}>₱2,380.00</Text>
              <Text style={styles.periodText}>Billing Period: April 2024</Text>
            </View>
            <View style={styles.dueBadge}>
              <Ionicons name="calendar-outline" size={12} color="#B45309" style={{ marginRight: 4 }} />
              <Text style={styles.dueBadgeText}>Due May 3 (in 4 days)</Text>
            </View>
          </View>

          <View style={styles.breakdownBox}>
            <View style={styles.rowSpace}>
              <Text style={styles.breakdownItem}>Room Rent (Bed A)</Text>
              <Text style={styles.breakdownVal}>₱2,000.00</Text>
            </View>
            <View style={styles.rowSpace}>
              <Text style={styles.breakdownItem}>Water Supply</Text>
              <Text style={[styles.breakdownVal, { color: '#166534' }]}>FREE (₱0.00)</Text>
            </View>
            <View style={styles.rowSpace}>
              <Text style={styles.breakdownItem}>Electricity Sub-meter</Text>
              <Text style={styles.breakdownVal}>₱380.00</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButton}>
            <Ionicons name="card-outline" size={16} color="#FFF" style={{ marginRight: 6 }} />
            <Text style={styles.primaryButtonText}>I Have Paid (Submit GCash / Cash Ref)</Text>
          </TouchableOpacity>
        </View>

        {/* Boarding House Bulletin */}
        <View style={styles.sectionHeaderRow}>
          <Ionicons name="megaphone" size={16} color="#0F2C59" style={{ marginRight: 6 }} />
          <Text style={styles.sectionTitle}>Boarding House Bulletin</Text>
          <View style={styles.updatedBadge}><Text style={styles.updatedBadgeText}>Updated Today</Text></View>
        </View>

        <View style={styles.bulletinCard}>
          <Text style={styles.bulletinTitle}>Tagum Water Interruption this Saturday 8am–12pm</Text>
          <Text style={styles.bulletinDesc}>Main water maintenance. The 2nd floor overhead backup tank will remain online for all room bathrooms.</Text>
        </View>

        {/* Report an Issue */}
        <Text style={[styles.sectionTitle, { marginTop: 12, marginBottom: 8 }]}>Report an Issue</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Problem Category</Text>
          <View style={styles.dropdownBox}>
            <Text style={styles.dropdownText}>Plumbing (Faucet, Toilet, Drain)</Text>
            <Ionicons name="chevron-down" size={16} color="#333" />
          </View>

          <Text style={styles.label}>Problem Description</Text>
          <TextInput 
            style={styles.textInput}
            placeholder="Tell Caretaker Jeffrey what needs fixing..."
            placeholderTextColor="#94A3B8"
            multiline
          />

          <TouchableOpacity style={styles.submitButton}>
            <Ionicons name="send" size={16} color="#FFF" style={{ marginRight: 6 }} />
            <Text style={styles.submitButtonText}>Send Issue to Caretaker Jeffrey</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  scrollContent: { padding: 16, paddingBottom: 40 },
  topCard: { backgroundColor: '#FFF', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  row: { flexDirection: 'row', alignItems: 'center' },
  rowSpace: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 },
  avatarBox: { width: 42, height: 42, backgroundColor: '#F0FDF4', borderRadius: 21, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#BBF7D0' },
  portalTitle: { fontSize: 10, fontWeight: 'bold', color: '#666', marginRight: 6 },
  badge: { backgroundColor: '#F0FDF4', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  badgeText: { fontSize: 9, fontWeight: 'bold', color: '#166534' },
  welcomeText: { fontSize: 15, fontWeight: 'bold', color: '#111', marginTop: 2 },
  subText: { fontSize: 11, color: '#666' },
  roomInfoRow: { marginVertical: 10, backgroundColor: '#F8FAFC', padding: 8, borderRadius: 6 },
  roomInfoText: { fontSize: 11, color: '#334155', fontWeight: '600', marginBottom: 2 },
  callButton: { borderWidth: 1, borderColor: '#0D9488', borderRadius: 8, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 8 },
  callButtonText: { color: '#0D9488', fontSize: 12, fontWeight: 'bold' },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: '#E5E7EB' },
  label: { fontSize: 11, fontWeight: 'bold', color: '#555', marginBottom: 4 },
  amountText: { fontSize: 24, fontWeight: 'bold', color: '#111', marginVertical: 2 },
  periodText: { fontSize: 11, color: '#666' },
  dueBadge: { backgroundColor: '#FEF3C7', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  dueBadgeText: { fontSize: 10, fontWeight: 'bold', color: '#B45309' },
  breakdownBox: { backgroundColor: '#F8FAFC', borderRadius: 8, padding: 10, marginVertical: 10 },
  breakdownItem: { fontSize: 12, color: '#334155' },
  breakdownVal: { fontSize: 12, fontWeight: 'bold', color: '#111' },
  primaryButton: { backgroundColor: '#0F2C59', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 8 },
  primaryButtonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' },
  sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 8, marginTop: 4 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#111', flex: 1 },
  updatedBadge: { backgroundColor: '#E2E8F0', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  updatedBadgeText: { fontSize: 9, fontWeight: 'bold', color: '#475569' },
  bulletinCard: { backgroundColor: '#FEF3C7', borderRadius: 10, padding: 12, marginBottom: 16, borderWidth: 1, borderColor: '#FDE68A' },
  bulletinTitle: { fontSize: 13, fontWeight: 'bold', color: '#92400E', marginBottom: 4 },
  bulletinDesc: { fontSize: 11, color: '#B45309', lineHeight: 16 },
  dropdownBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 8, padding: 10, marginBottom: 10 },
  dropdownText: { fontSize: 12, color: '#111', fontWeight: '500' },
  textInput: { backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 8, padding: 10, height: 80, textAlignVertical: 'top', fontSize: 12, color: '#111', marginBottom: 12 },
  submitButton: { backgroundColor: '#166534', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 8 },
  submitButtonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' }
});