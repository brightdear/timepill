import { useColorScheme } from '@/hooks/use-color-scheme';

export function useTimepillColors() {
  const scheme = useColorScheme() ?? 'light';
  const isDark = scheme === 'dark';

  return {
    screen: isDark ? '#101010' : '#F2F2F7',
    card: isDark ? '#1C1C1E' : '#FFFFFF',
    border: isDark ? '#38383A' : '#E5E5EA',
    muted: isDark ? '#8E8E93' : '#6D6D70',
    text: isDark ? '#ECEDEE' : '#11181C',
  };
}
