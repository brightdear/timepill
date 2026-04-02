import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useTimepillColors } from './timepill-theme';

const MENU = [
  { id: '1', title: '알림', subtitle: '푸시·소리 (더미)' },
  { id: '2', title: '인증 방식', subtitle: 'PIN, 생체 인증 (더미)' },
  { id: '3', title: '앱 정보', subtitle: '버전 1.0.0 · Timepill' },
];

export default function SettingsScreen() {
  const c = useTimepillColors();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.screen }]} edges={['top']}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: c.text }]}>설정</Text>
        <Text style={[styles.desc, { color: c.muted }]}>아래 메뉴는 더미입니다.</Text>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          {MENU.map((item, index) => (
            <View key={item.id}>
              <Pressable
                style={({ pressed }) => [styles.row, pressed && { opacity: 0.65 }]}
                onPress={() => {}}>
                <View style={styles.rowText}>
                  <Text style={[styles.menuTitle, { color: c.text }]}>{item.title}</Text>
                  <Text style={[styles.menuSub, { color: c.muted }]}>{item.subtitle}</Text>
                </View>
                <Text style={[styles.chevron, { color: c.muted }]}>›</Text>
              </Pressable>
              {index < MENU.length - 1 ? (
                <View style={[styles.sep, { backgroundColor: c.border }]} />
              ) : null}
            </View>
          ))}
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
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  rowText: {
    flex: 1,
    paddingRight: 12,
  },
  menuTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  menuSub: {
    fontSize: 13,
  },
  chevron: {
    fontSize: 22,
    fontWeight: '300',
  },
  sep: {
    height: StyleSheet.hairlineWidth,
    marginLeft: 16,
  },
});
