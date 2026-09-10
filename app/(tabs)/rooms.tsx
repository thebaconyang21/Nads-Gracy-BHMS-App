import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function RoomsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Summary Card */}
        <View style={styles.topCard}>
          <View>
            <Text style={styles.topCardSubtitle}>TAGUM CITY PROPERTY OPERATIONS</Text>
            <Text style={styles.topCardTitle}>17 Rooms Total</Text>
            <Text style={styles.topCardDesc}>12 Single Rooms • 5 Double Rooms</Text>
          </View>
          <View style={styles.iconBox}>
            <Ionicons name="bed" size={24} color="#0F2C59" />
          </View>
        </View>

        <View style={styles.statsRow}>
          <View>
            <Text style={styles.statLabel}>BED OCCUPANCY</Text>
            <Text style={styles.statValue}>19 / 22 Beds</Text>
          </View>
          <View style={styles.statBadge}>
            <Text style={styles.statBadgeText}>86% Full</Text>
          </View>
        </View>

        <View style={styles.freeCard}>
          <View style={styles.row}>
            <Ionicons name="checkmark-circle" size={20} color="#2E7D32" style={{ marginRight: 8 }} />
            <View>
              <Text style={styles.freeCardTitle}>AVAILABLE RIGHT NOW</Text>
              <Text style={styles.freeCardValue}>3 Beds Free</Text>
            </View>
          </View>
        </View>

        {/* Filter Selection Tabs */}
        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterBtnActive}>
            <Ionicons name="grid" size={16} color="#FFF" style={{ marginRight: 6 }} />
            <Text style={styles.filterBtnActiveText}>All Rooms (17)</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.filterBtnInactive}>
            <Ionicons name="checkmark-circle-outline" size={16} color="#2E7D32" style={{ marginRight: 6 }} />
            <Text style={styles.filterBtnInactiveText}>Vacant Beds (3)</Text>
          </TouchableOpacity>
        </View>

        {/* Room Card 1 (Occupied) */}
        <View style={styles.roomCard}>
          <View style={styles.roomHeader}>
            <View style={styles.roomNumberBadge}><Text style={styles.roomNumberText}>01</Text></View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.roomTitle}>Single Room 01</Text>
              <Text style={styles.roomSub}>1 Solo Bed • Ground Floor</Text>
            </View>
            <View style={styles.occupiedBadge}>
              <Ionicons name="lock-closed" size={12} color="#555" style={{ marginRight: 4 }} />
              <Text style={styles.occupiedBadgeText}>Occupied</Text>
            </View>
          </View>
          <View style={styles.tenantInfoBox}>
            <View>
              <Text style={styles.tenantLabel}>Current Tenant</Text>
              <Text style={styles.tenantName}>Sarah Lim</Text>
            </View>
            <View>
              <Text style={styles.tenantLabel}>Monthly Status</Text>
              <Text style={styles.tenantPaid}>✓ Paid May 2025</Text>
            </View>
          </View>
          <View style={styles.roomFooter}>
            <Text style={styles.roomRate}>Rate: ₱2,500 / month</Text>
            <Text style={styles.roomSubMeter}>Water & Sub-meter OK</Text>
          </View>
        </View>

        {/* Room Card 2 (Vacant & Ready) */}
        <View style={styles.roomCardVacant}>
          <View style={styles.roomHeader}>
            <View style={[styles.roomNumberBadge, { backgroundColor: '#E8F5E9' }]}><Text style={[styles.roomNumberText, { color: '#2E7D32' }]}>02</Text></View>
            <View style={{ flex: 1, marginLeft: 10 }}>
              <Text style={styles.roomTitle}>Single Room 02</Text>
              <Text style={styles.roomSub}>1 Solo Bed • Cleaned & Inspected</Text>
            </View>
          </View>
          <View style={styles.vacantReadyBadge}>
            <Ionicons name="checkmark-circle" size={14} color="#2E7D32" style={{ marginRight: 4 }} />
            <Text style={styles.vacantReadyText}>VACANT & READY</Text>
          </View>
          <View style={styles.rentRow}>
            <View>
              <Text style={styles.tenantLabel}>MONTHLY RENT RATE</Text>
              <Text style={styles.rentValue}>₱2,500 <Text style={styles.rentSub}>/ month</Text></Text>
            </View>
            <TouchableOpacity style={styles.assignButton}>
              <Ionicons name="person-add" size={16} color="#FFF" style={{ marginRight: 6 }} />
              <Text style={styles.assignButtonText}>+ Assign Tenant</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  scrollContent: { padding: 16, paddingBottom: 40 },
  topCard: { backgroundColor: '#FFF', borderRadius: 12, padding: 16, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  topCardSubtitle: { fontSize: 10, fontWeight: 'bold', color: '#666', marginBottom: 2 },
  topCardTitle: { fontSize: 20, fontWeight: 'bold', color: '#111' },
  topCardDesc: { fontSize: 12, color: '#666', marginTop: 2 },
  iconBox: { width: 44, height: 44, backgroundColor: '#F0FDF4', borderRadius: 10, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#BBF7D0' },
  statsRow: { flexDirection: 'row', backgroundColor: '#FFF', borderRadius: 12, padding: 16, alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  statLabel: { fontSize: 11, fontWeight: 'bold', color: '#666' },
  statValue: { fontSize: 18, fontWeight: 'bold', color: '#111', marginTop: 2 },
  statBadge: { backgroundColor: '#F0FDF4', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  statBadgeText: { color: '#166534', fontSize: 12, fontWeight: 'bold' },
  freeCard: { backgroundColor: '#F0FDF4', borderRadius: 12, padding: 14, marginBottom: 16, borderWidth: 1, borderColor: '#BBF7D0' },
  row: { flexDirection: 'row', alignItems: 'center' },
  freeCardTitle: { fontSize: 10, fontWeight: 'bold', color: '#166534' },
  freeCardValue: { fontSize: 16, fontWeight: 'bold', color: '#166534' },
  filterRow: { flexDirection: 'row', marginBottom: 16 },
  filterBtnActive: { flex: 1, backgroundColor: '#0F2C59', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 8, marginRight: 8 },
  filterBtnActiveText: { color: '#FFF', fontWeight: 'bold', fontSize: 13 },
  filterBtnInactive: { flex: 1, backgroundColor: '#FFF', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 8, borderWidth: 1, borderColor: '#2E7D32' },
  filterBtnInactiveText: { color: '#2E7D32', fontWeight: 'bold', fontSize: 13 },
  roomCard: { backgroundColor: '#FFF', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  roomCardVacant: { backgroundColor: '#FFF', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#2E7D32' },
  roomHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  roomNumberBadge: { width: 32, height: 32, backgroundColor: '#E2E8F0', borderRadius: 8, justifyContent: 'center', alignItems: 'center' },
  roomNumberText: { fontSize: 14, fontWeight: 'bold', color: '#1E293B' },
  roomTitle: { fontSize: 15, fontWeight: 'bold', color: '#111' },
  roomSub: { fontSize: 11, color: '#666' },
  occupiedBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F1F5F9', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6 },
  occupiedBadgeText: { fontSize: 11, color: '#475569', fontWeight: '600' },
  tenantInfoBox: { backgroundColor: '#F8FAFC', borderRadius: 8, padding: 10, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
  tenantLabel: { fontSize: 10, color: '#666', marginBottom: 2 },
  tenantName: { fontSize: 13, fontWeight: 'bold', color: '#111' },
  tenantPaid: { fontSize: 12, fontWeight: 'bold', color: '#166534' },
  roomFooter: { flexDirection: 'row', justifyContent: 'space-between', paddingTop: 6, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  roomRate: { fontSize: 12, fontWeight: '600', color: '#334155' },
  roomSubMeter: { fontSize: 12, color: '#0D9488', fontWeight: '500' },
  vacantReadyBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#F0FDF4', paddingHorizontal: 8, paddingVertical: 4, borderRadius: 6, alignSelf: 'flex-start', marginBottom: 10 },
  vacantReadyText: { fontSize: 11, color: '#166534', fontWeight: 'bold' },
  rentRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingTop: 8, borderTopWidth: 1, borderTopColor: '#F1F5F9' },
  rentValue: { fontSize: 18, fontWeight: 'bold', color: '#111' },
  rentSub: { fontSize: 12, fontWeight: 'normal', color: '#666' },
  assignButton: { backgroundColor: '#0F2C59', flexDirection: 'row', alignItems: 'center', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6 },
  assignButtonText: { color: '#FFF', fontSize: 12, fontWeight: 'bold' }
});