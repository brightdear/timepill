import { useState } from 'react';
import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { useMedications } from '../../contexts/medications-context';
import { useTimepillColors } from '@/constants/timepill-theme';

export default function RegisterScreen() {
  const c = useTimepillColors();
  const { addMedication } = useMedications();
  const [name, setName] = useState('');
  const [dosageTime, setDosageTime] = useState('');
  const [frequency, setFrequency] = useState('');

  function handleSave() {
    if (!name.trim()) {
      Alert.alert('입력 필요', '약 이름을 입력해 주세요.');
      return;
    }
    addMedication({ name, dosageTime, frequency });
    setName('');
    setDosageTime('');
    setFrequency('');
    Alert.alert('저장됨', '복약 정보가 저장되었습니다.');
  }

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.screen }]} edges={['top']}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: c.text }]}>복약 등록</Text>
        <Text style={[styles.desc, { color: c.muted }]}>약 정보를 입력한 뒤 저장하세요.</Text>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.label, { color: c.muted }]}>약 이름</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            placeholder="예: 아스피린"
            placeholderTextColor={c.muted}
            style={[styles.input, { color: c.text, borderColor: c.border }]}
          />
        </View>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.label, { color: c.muted }]}>복용 시간</Text>
          <TextInput
            value={dosageTime}
            onChangeText={setDosageTime}
            placeholder="예: 09:00, 21:00"
            placeholderTextColor={c.muted}
            style={[styles.input, { color: c.text, borderColor: c.border }]}
          />
        </View>

        <View style={[styles.card, { backgroundColor: c.card, borderColor: c.border }]}>
          <Text style={[styles.label, { color: c.muted }]}>복용 주기</Text>
          <TextInput
            value={frequency}
            onChangeText={setFrequency}
            placeholder="예: 매일, 격일, 주 3회"
            placeholderTextColor={c.muted}
            style={[styles.input, { color: c.text, borderColor: c.border }]}
          />
        </View>

        <Pressable
          onPress={handleSave}
          style={({ pressed }) => [
            styles.saveBtn,
            { backgroundColor: c.text, opacity: pressed ? 0.85 : 1 },
          ]}>
          <Text style={[styles.saveBtnText, { color: c.card }]}>저장</Text>
        </Pressable>
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
  saveBtn: {
    borderRadius: 12,
    paddingVertical: 14,
    alignItems: 'center',
    marginTop: 4,
  },
  saveBtnText: {
    fontSize: 16,
    fontWeight: '600',
  },
});
