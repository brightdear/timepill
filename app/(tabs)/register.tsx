import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTimepillColors } from './timepill-theme';

export default function RegisterScreen() {
  const c = useTimepillColors();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.screen }]} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: c.text }]}>복약 등록</Text>
        <Text style={[styles.desc, { color: c.muted }]}>아래 항목은 더미 입력입니다.</Text>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.label, { color: c.muted }]}>약 이름</Text>
          <TextInput
            placeholder="예: 아스피린"
            placeholderTextColor={c.muted}
            style={[styles.input, { color: c.text, borderColor: c.border }]}
          />
        </View>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.label, { color: c.muted }]}>복용 시간</Text>
          <TextInput
            placeholder="예: 09:00, 21:00"
            placeholderTextColor={c.muted}
            style={[styles.input, { color: c.text, borderColor: c.border }]}
          />
        </View>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.label, { color: c.muted }]}>복용 주기</Text>
          <TextInput
            placeholder="예: 매일, 격일, 주 3회"
            placeholderTextColor={c.muted}
            style={[styles.input, { color: c.text, borderColor: c.border }]}
          />
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
  label: {
    fontSize: 13,
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
});
