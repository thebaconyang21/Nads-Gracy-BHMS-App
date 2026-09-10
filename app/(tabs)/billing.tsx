import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function BillingScreen() {
  const [currentReading, setCurrentReading] = useState('840');
  const previousReading = 814;
  const ratePerKwh = 14.50;
  
  const usage = Math.max(0, parseInt(currentReading || '0', 10) - previousReading);
  const totalCost = (usage * ratePerKwh).toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Hub Title */}
        <View style={styles.headerHub}>
          <View style={styles.headerIconBox}>
            <Ionicons name="receipt" size={22} color="#0F2C59" />
          </View>
          <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={styles.headerHubTitle}>Billing & Electricity Meter Hub</Text>
          </View>
        </View>

        {/* Date Selector */}
        <View style={styles.dateSelector}>
          <TouchableOpacity><Ionicons name="chevron-back" size={20} color="#333" /></TouchableOpacity>
          <View style={{ alignItems: 'center' }}>
            <Text style={styles.monthText}>April 2025</Text>
            <Text style={styles.periodText}>Active Collection Period</Text>
          </View>
          <TouchableOpacity><Ionicons name="chevron-forward" size={20} color="#333" /></TouchableOpacity>
        </View>

        {/* Section 1: Quick Sub-Meter Calculator */}
        <View style={styles.sectionHeaderRow}>
          <View style={styles.dotIndicator} />
          <Text style={styles.sectionTitle}>1. Quick Sub-Meter Calculator</Text>
        </View>
        <Text style={styles.sectionDesc}>Designed for simple manual reading checks. Type current digits to compute electricity automatically.</Text>

        <View style={styles.card}>
          <Text style={styles.label}>Select Room & Occupants:</Text>
          <View style={styles.dropdownBox}>
            <Text style={styles.dropdownText}>Room 14 (Alyssa Cruz & Bea R...)</Text>
            <Ionicons name="chevron-down" size={16} color="#333" />
          </View>

          <View style={styles.readingGrid}>
            <View style={styles.readingBox}>
              <Text style={styles.readingLabel}>PREVIOUS READING</Text>
              <Text style={styles.readingValue}>{previousReading} <Text style={styles.unit}>kWh</Text></Text>
              <Text style={styles.readingSub}>Recorded last month</Text>
            </View>

            <View style={styles.currentReadingBox}>
              <Text style={styles.currentReadingLabel}>CURRENT METER READING</Text>
              <View style={styles.inputContainer}>
                <TextInput 
                  style={styles.input}
                  keyboardType="numeric"
                  value={currentReading}
                  onChangeText={setCurrentReading}
                />
                <Text style={styles.unitActive}>kWh</Text>
              </View>
              <Text style={styles.inputSub}>Tap digits to edit</Text>
            </View>
          </View>

          {/* Calculated Output Box */}
          <View style={styles.calcBox}>
            <View style={styles.calcRateBadge}>
              <Text style={styles.calcRateText}>Rate: ₱14.50 / kWh</Text>
            </View>
            <Text style={styles.calcMainText}>{usage} kWh used = <Text style={styles.calcCostText}>₱{totalCost}</Text></Text>
            <View style={styles.waterNoteRow}>
              <Ionicons name="water" size={14} color="#0D9488" style={{ marginRight: 4 }} />
              <Text style={styles.waterNoteText}>Water Bill: ₱0.00 (Included / Free for all rooms)</Text>
            </View>
          </View>

          <TouchableOpacity style={styles.primaryButton}>
            <Ionicons name="save-outline" size={18} color="#FFF" style={{ marginRight: 6 }} />
            <Text style={styles.primaryButtonText}>Save & Add to Room Bill</Text>
          </TouchableOpacity>
        </View>

        {/* Section 2: Payments to Verify */}
        <View style={styles.sectionHeaderRow}>
          <View style={[styles.dotIndicator, { backgroundColor: '#D97706' }]} />
          <Text style={styles.sectionTitle}>2. Payments to Verify</Text>
          <View style={styles.pendingBadge}><Text style={styles.pendingBadgeText}>2 Pending</Text></View>
        </View>
        <Text style={styles.sectionDesc}>Review payments handed directly in cash or received via offline GCash screenshot.</Text>

        {/* Payment Item 1 */}
        <View style={styles.card}>
          <View style={styles.paymentCardHeader}>
            <View>
              <Text style={styles.tenantName}>Alyssa Cruz</Text>
              <Text style={styles.roomSub}>Room 14 (Bedsitter Unit)</Text>
            </View>
            <View style={styles.cashBadge}><Text style={styles.cashBadgeText}>CASH IN HAND</Text></View>
          </View>
          <View style={styles.amountBox}>
            <Text style={styles.amountLabel}>Amount Received:</Text>
            <Text style={styles.amountValue}>₱2,380.00</Text>
          </View>
          <View style={styles.paymentActionRow}>
            <View style={styles.row}>
              <Ionicons name="cash" size={14} color="#0D9488" style={{ marginRight: 4 }} />
              <Text style={styles.paymentActionSub}>Cash handed directly to Caretaker Jeffrey</Text>
            </View>
          </View>
          <TouchableOpacity style={styles.greenButton}>
            <Ionicons name="checkmark-circle-outline" size={16} color="#FFF" style={{ marginRight: 6 }} />
            <Text style={styles.greenButtonText}>Confirm & Issue Receipt</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  scrollContent: { padding: 16, paddingBottom: 40 },
  headerHub: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  headerIconBox: { width: 38, height: 38, backgroundColor: '#F0FDF4', borderRadius: 8, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#BBF7D0' },
  headerHubTitle: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  dateSelector: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#FFF', borderRadius: 10, padding: 12, marginBottom: 16, borderWidth: 1, borderColor: '#E5E7EB' },
  monthText: { fontSize: 15, fontWeight: 'bold', color: '#111' },
  periodText: { fontSize: 11, color: '#666' },
  sectionHeaderRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4, marginTop: 8 },
  dotIndicator: { width: 8, height: 8, borderRadius: 4, backgroundColor: '#0F2C59', marginRight: 8 },
  sectionTitle: { fontSize: 15, fontWeight: 'bold', color: '#111' },
  sectionDesc: { fontSize: 12, color: '#666', marginBottom: 12 },
  pendingBadge: { backgroundColor: '#FEF3C7', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10, marginLeft: 8 },
  pendingBadgeText: { color: '#B45309', fontSize: 10, fontWeight: 'bold' },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: '#E5E7EB' },
  label: { fontSize: 12, fontWeight: 'bold', color: '#555', marginBottom: 6 },
  dropdownBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC', borderWidth: 1, borderColor: '#CBD5E1', borderRadius: 8, padding: 10, marginBottom: 12 },
  dropdownText: { fontSize: 13, color: '#111', fontWeight: '500' },
  readingGrid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12 },
  readingBox: { flex: 1, backgroundColor: '#F8FAFC', borderRadius: 8, padding: 10, marginRight: 6, borderWidth: 1, borderColor: '#E2E8F0' },
  readingLabel: { fontSize: 9, fontWeight: 'bold', color: '#666', marginBottom: 4 },
  readingValue: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  unit: { fontSize: 12, fontWeight: 'normal', color: '#666' },
  readingSub: { fontSize: 10, color: '#666', marginTop: 4 },
  currentReadingBox: { flex: 1, backgroundColor: '#FFF', borderRadius: 8, padding: 10, marginLeft: 6, borderWidth: 1, borderColor: '#D97706' },
  currentReadingLabel: { fontSize: 9, fontWeight: 'bold', color: '#D97706', marginBottom: 4 },
  inputContainer: { flexDirection: 'row', alignItems: 'center', borderBottomWidth: 1, borderBottomColor: '#D97706', paddingBottom: 2 },
  input: { flex: 1, fontSize: 18, fontWeight: 'bold', color: '#111', padding: 0 },
  unitActive: { fontSize: 12, fontWeight: 'bold', color: '#D97706' },
  inputSub: { fontSize: 10, color: '#D97706', marginTop: 4 },
  calcBox: { backgroundColor: '#F0FDF4', borderRadius: 8, padding: 12, marginBottom: 12, borderWidth: 1, borderColor: '#BBF7D0' },
  calcRateBadge: { backgroundColor: '#FFF', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 4, alignSelf: 'flex-start', marginBottom: 6, borderWidth: 1, borderColor: '#BBF7D0' },
  calcRateText: { fontSize: 11, fontWeight: 'bold', color: '#166534' },
  calcMainText: { fontSize: 16, fontWeight: 'bold', color: '#166534', marginBottom: 6 },
  waterNoteRow: { flexDirection: 'row', alignItems: 'center' },
  waterNoteText: { fontSize: 11, color: '#0D9488', fontWeight: '500' },
  primaryButton: { backgroundColor: '#0F2C59', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 8 },
  primaryButtonText: { color: '#FFF', fontSize: 13, fontWeight: 'bold' },
  paymentCardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  tenantName: { fontSize: 15, fontWeight: 'bold', color: '#111' },
  roomSub: { fontSize: 11, color: '#666' },
  cashBadge: { backgroundColor: '#F0FDF4', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  cashBadgeText: { color: '#166534', fontSize: 10, fontWeight: 'bold' },
  amountBox: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#F8FAFC', padding: 10, borderRadius: 8, marginBottom: 8 },
  amountLabel: { fontSize: 12, color: '#666' },
  amountValue: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  paymentActionRow: { marginBottom: 10 },
  paymentActionSub: { fontSize: 11, color: '#666' },
  greenButton: { backgroundColor: '#166534', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 8 },
  greenButtonText: { color: '#FFF', fontSize: 13, fontWeight: 'bold' }
});