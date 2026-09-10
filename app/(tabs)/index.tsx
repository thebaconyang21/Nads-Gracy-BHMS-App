import { Ionicons } from '@expo/vector-icons';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function OverviewScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        {/* Header Section */}
        <View style={styles.header}>
          <View style={styles.headerLeft}>
            <View style={styles.logoIcon}><Ionicons name="home" size={20} color="#FFF" /></View>
            <View>
              <Text style={styles.headerTitle}>Nads & Gracy Boarding House</Text>
              <Text style={styles.headerSubtitle}>Caretaker: Jeffrey H. Dapal</Text>
            </View>
          </View>
          <View style={styles.syncBadge}>
            <View style={styles.syncDot} />
            <Text style={styles.syncText}>All Systems Synced</Text>
          </View>
        </View>

        {/* Occupancy Status Card */}
        <View style={styles.card}>
          <View style={styles.cardHeaderRow}>
            <View style={styles.row}>
              <Ionicons name="bed" size={18} color="#333" />
              <Text style={styles.cardTitle}> BED OCCUPANCY STATUS</Text>
            </View>
            <View style={styles.occupancyBadge}>
              <Text style={styles.occupancyBadgeText}>86% Full</Text>
            </View>
          </View>
          <Text style={styles.occupancyMainText}>19 of 22 <Text style={styles.occupancySubText}>Beds Occupied</Text></Text>
          <Text style={styles.vacantText}>✓ 3 Vacant Bed Spaces Ready for Move-In</Text>
          <View style={styles.progressBarBackground}>
            <View style={styles.progressBarFill} />
          </View>
          <View style={styles.cardFooterRow}>
            <Text style={styles.footerInfoText}>17 Rooms Total</Text>
            <Text style={styles.footerInfoText}>Tagum City (Opal St.)</Text>
          </View>
        </View>

        {/* Notice Banner */}
        <View style={styles.noticeBanner}>
          <View style={styles.row}>
            <Ionicons name="water" size={20} color="#D97706" style={{ marginRight: 8 }} />
            <View>
              <Text style={styles.noticeTitle}>NOTICE FOR CARETAKER</Text>
              <Text style={styles.noticeBody}>Water delivery scheduled 2:00 PM</Text>
            </View>
          </View>
        </View>

        {/* Quick Actions Grid */}
        <Text style={styles.sectionHeading}>Quick Actions</Text>
        <View style={styles.gridContainer}>
          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIconBox, { backgroundColor: '#E1F5FE' }]}><Ionicons name="cash" size={22} color="#0288D1" /></View>
            <Text style={styles.actionTitle}>Collect Payment</Text>
            <Text style={styles.actionSub}>Cash & GCash</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIconBox, { backgroundColor: '#EDE7F6' }]}><Ionicons name="speedometer" size={22} color="#512DA8" /></View>
            <Text style={styles.actionTitle}>Enter Meter Reading</Text>
            <Text style={styles.actionSub}>Electric sub-read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIconBox, { backgroundColor: '#E8F5E9' }]}><Ionicons name="person-add" size={22} color="#388E3C" /></View>
            <Text style={styles.actionTitle}>Register Tenant</Text>
            <Text style={styles.actionSub}>New move-in</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionCard}>
            <View style={[styles.actionIconBox, { backgroundColor: '#FFF3E0' }]}><Ionicons name="megaphone" size={22} color="#F57C00" /></View>
            <Text style={styles.actionTitle}>Post Announcement</Text>
            <Text style={styles.actionSub}>Board notice</Text>
          </TouchableOpacity>
        </View>

        {/* Priority List */}
        <Text style={styles.sectionHeading}>Today's Priority List</Text>
        <Text style={styles.sectionSubHeading}>3 items requiring your attention</Text>

        {/* Priority Item 1 */}
        <View style={styles.priorityCard}>
          <View style={styles.priorityCardHeader}>
            <Text style={styles.tenantName}>Maria Santos</Text>
            <View style={styles.roomTag}><Text style={styles.roomTagText}>Room 04</Text></View>
            <View style={{ flex: 1, alignItems: 'flex-end' }}>
              <Text style={styles.amountLabel}>AMOUNT</Text>
              <Text style={styles.amountValue}>₱2,500</Text>
            </View>
          </View>
          <Text style={styles.dueDateText}>📅 Rent Due Today</Text>
          <TouchableOpacity style={styles.primaryButton}>
            <Ionicons name="checkmark-circle-outline" size={18} color="#FFF" style={{ marginRight: 6 }} />
            <Text style={styles.primaryButtonText}>Record Cash Payment</Text>
          </TouchableOpacity>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F6F9' },
  scrollContent: { padding: 16, paddingBottom: 40 },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 },
  headerLeft: { flexDirection: 'row', alignItems: 'center' },
  logoIcon: { width: 36, height: 36, backgroundColor: '#0F2C59', borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginRight: 10 },
  headerTitle: { fontSize: 16, fontWeight: 'bold', color: '#111' },
  headerSubtitle: { fontSize: 12, color: '#666' },
  syncBadge: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E8F5E9', paddingHorizontal: 10, paddingVertical: 4, borderRadius: 12 },
  syncDot: { width: 6, height: 6, borderRadius: 3, backgroundColor: '#2E7D32', marginRight: 6 },
  syncText: { fontSize: 11, color: '#2E7D32', fontWeight: '600' },
  card: { backgroundColor: '#FFF', borderRadius: 12, padding: 16, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 },
  row: { flexDirection: 'row', alignItems: 'center' },
  cardTitle: { fontSize: 12, fontWeight: 'bold', color: '#555', letterSpacing: 0.5 },
  occupancyBadge: { backgroundColor: '#E8F5E9', paddingHorizontal: 8, paddingVertical: 2, borderRadius: 10 },
  occupancyBadgeText: { color: '#2E7D32', fontSize: 12, fontWeight: 'bold' },
  occupancyMainText: { fontSize: 28, fontWeight: 'bold', color: '#111' },
  occupancySubText: { fontSize: 18, fontWeight: 'normal', color: '#555' },
  vacantText: { color: '#2E7D32', fontSize: 13, fontWeight: '600', marginVertical: 6 },
  progressBarBackground: { height: 8, backgroundColor: '#E5E7EB', borderRadius: 4, marginVertical: 8, overflow: 'hidden' },
  progressBarFill: { width: '86%', height: '100%', backgroundColor: '#0F2C59' },
  cardFooterRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 4 },
  footerInfoText: { fontSize: 12, color: '#666' },
  noticeBanner: { backgroundColor: '#FEF3C7', borderRadius: 10, padding: 12, marginBottom: 16, borderWidth: 1, borderColor: '#FDE68A' },
  noticeTitle: { fontSize: 10, fontWeight: 'bold', color: '#B45309' },
  noticeBody: { fontSize: 13, fontWeight: '600', color: '#92400E' },
  sectionHeading: { fontSize: 16, fontWeight: 'bold', color: '#111', marginBottom: 4 },
  sectionSubHeading: { fontSize: 12, color: '#666', marginBottom: 12 },
  gridContainer: { flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between', marginBottom: 16 },
  actionCard: { width: '48%', backgroundColor: '#FFF', borderRadius: 10, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  actionIconBox: { width: 36, height: 36, borderRadius: 8, justifyContent: 'center', alignItems: 'center', marginBottom: 8 },
  actionTitle: { fontSize: 13, fontWeight: 'bold', color: '#111' },
  actionSub: { fontSize: 11, color: '#666', marginTop: 2 },
  priorityCard: { backgroundColor: '#FFF', borderRadius: 12, padding: 14, marginBottom: 12, borderWidth: 1, borderColor: '#E5E7EB' },
  priorityCardHeader: { flexDirection: 'row', alignItems: 'center', marginBottom: 8 },
  tenantName: { fontSize: 15, fontWeight: 'bold', color: '#111', marginRight: 8 },
  roomTag: { backgroundColor: '#1E293B', paddingHorizontal: 6, paddingVertical: 2, borderRadius: 4 },
  roomTagText: { color: '#FFF', fontSize: 10, fontWeight: 'bold' },
  amountLabel: { fontSize: 9, color: '#666', textAlign: 'right' },
  amountValue: { fontSize: 16, fontWeight: 'bold', color: '#111', textAlign: 'right' },
  dueDateText: { fontSize: 12, color: '#DC2626', fontWeight: '500', marginBottom: 12 },
  primaryButton: { backgroundColor: '#0D9488', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, borderRadius: 8 },
  primaryButtonText: { color: '#FFF', fontSize: 13, fontWeight: 'bold' }
});