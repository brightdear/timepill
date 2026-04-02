import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTimepillColors } from '@/constants/timepill-theme';

export default function HomeScreen() {
  const c = useTimepillColors();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.screen }]} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.pageTitle, { color: c.text }]}>Timepill</Text>
        <Text style={[styles.pageSubtitle, { color: c.muted }]}>오늘의 복약을 확인하세요</Text>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.cardLabel, { color: c.muted }]}>오늘의 복약</Text>
          <Text style={[styles.cardValue, { color: c.text }]}>비타민 D, 오메가3</Text>
        </View>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.cardLabel, { color: c.muted }]}>다음 복약 시간</Text>
          <Text style={[styles.cardValue, { color: c.text }]}>오후 6:30</Text>
        </View>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.cardLabel, { color: c.muted }]}>복약 현황</Text>
          <Text style={[styles.cardValue, { color: c.text }]}>완료 2 / 예정 1</Text>
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
