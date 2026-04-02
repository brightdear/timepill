import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useMedications } from '../../contexts/medications-context';
import { useTimepillColors } from '@/constants/timepill-theme';

export default function HomeScreen() {
  const c = useTimepillColors();
  const { medications } = useMedications();

  const todayLine =
    medications.length > 0
      ? medications.map((m) => m.name).join(', ')
      : '등록된 약이 없습니다';

  const nextTimeLine =
    medications.length > 0
      ? medications[0].dosageTime || '시간 미입력'
      : '없음';

  const statusLine =
    medications.length > 0
      ? `${medications.length}개 등록됨`
      : '0개 등록됨';

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.screen }]} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.pageTitle, { color: c.text }]}>Timepill</Text>
        <Text style={[styles.pageSubtitle, { color: c.muted }]}>오늘의 복약을 확인하세요</Text>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.cardLabel, { color: c.muted }]}>오늘의 복약</Text>
          <Text style={[styles.cardValue, { color: c.text }]}>{todayLine}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.cardLabel, { color: c.muted }]}>다음 복약 시간</Text>
          <Text style={[styles.cardValue, { color: c.text }]}>{nextTimeLine}</Text>
        </View>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.cardLabel, { color: c.muted }]}>복약 현황</Text>
          <Text style={[styles.cardValue, { color: c.text }]}>{statusLine}</Text>
        </View>
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
  pageTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 4,
  },
  pageSubtitle: {
    fontSize: 15,
    marginBottom: 20,
  },
  card: {
    borderRadius: 12,
    borderWidth: 1,
    padding: 16,
    marginBottom: 12,
  },
  cardLabel: {
    fontSize: 13,
    marginBottom: 6,
  },
  cardValue: {
    fontSize: 17,
    fontWeight: '600',
  },
});
