import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useMedications } from '../../contexts/medications-context';
import { useTimepillColors } from '@/constants/timepill-theme';

function formatCreatedAt(iso: string) {
  try {
    const d = new Date(iso);
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')} ${String(d.getHours()).padStart(2, '0')}:${String(d.getMinutes()).padStart(2, '0')}`;
  } catch {
    return iso;
  }
}

export default function RecordsScreen() {
  const c = useTimepillColors();
  const { medications } = useMedications();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.screen }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: c.text }]}>복약 기록</Text>
        <Text style={[styles.desc, { color: c.muted }]}>등록한 복약 목록입니다.</Text>

        {medications.length === 0 ? (
          <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
            <Text style={[styles.empty, { color: c.muted }]}>등록된 복약이 없습니다.</Text>
          </View>
        ) : (
          medications.map((item) => (
            <View
              key={item.id}
              style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
              <View style={styles.row}>
                <Text style={[styles.medName, { color: c.text }]}>{item.name}</Text>
              </View>
              <Text style={[styles.meta, { color: c.muted }]}>
                복용 시간: {item.dosageTime || '—'}
              </Text>
              <Text style={[styles.meta, { color: c.muted }]}>
                복용 주기: {item.frequency || '—'}
              </Text>
              <Text style={[styles.time, { color: c.muted }]}>등록: {formatCreatedAt(item.createdAt)}</Text>
            </View>
          ))
        )}
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
  meta: {
    fontSize: 14,
    marginBottom: 4,
  },
  time: {
    fontSize: 13,
    marginTop: 4,
  },
  empty: {
    fontSize: 15,
    textAlign: 'center',
    paddingVertical: 8,
  },
});
