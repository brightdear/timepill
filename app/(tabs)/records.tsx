import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTimepillColors } from './timepill-theme';

const DUMMY_RECORDS = [
  { id: '1', name: '비타민 D', time: '2026-04-02 09:00', status: '복용 완료' },
  { id: '2', name: '혈압약', time: '2026-04-02 13:00', status: '복용 완료' },
  { id: '3', name: '오메가3', time: '2026-04-02 21:00', status: '예정' },
];

export default function RecordsScreen() {
  const c = useTimepillColors();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.screen }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: c.text }]}>복약 기록</Text>
        <Text style={[styles.desc, { color: c.muted }]}>더미 데이터입니다.</Text>

        {DUMMY_RECORDS.map((item) => (
          <View
            key={item.id}
            style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
            <View style={styles.row}>
              <Text style={[styles.medName, { color: c.text }]}>{item.name}</Text>
              <Text style={[styles.badge, { color: c.muted, borderColor: c.border }]}>
                {item.status}
              </Text>
            </View>
            <Text style={[styles.time, { color: c.muted }]}>{item.time}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 24,
    paddingTop: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 4,
  },
  desc: {
    fontSize: 14,
    marginBottom: 18,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  medName: {
    fontSize: 17,
    fontWeight: '600',
    flex: 1,
  },
  badge: {
    fontSize: 12,
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    borderWidth: 1,
    overflow: 'hidden',
  },
  time: {
    fontSize: 14,
  },
});
