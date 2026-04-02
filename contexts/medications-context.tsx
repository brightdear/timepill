import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

export type Medication = {
  id: string;
  name: string;
  dosageTime: string;
  frequency: string;
  createdAt: string;
};

type MedicationsContextValue = {
  medications: Medication[];
  addMedication: (input: Pick<Medication, 'name' | 'dosageTime' | 'frequency'>) => void;
};

const MedicationsContext = createContext<MedicationsContextValue | null>(null);

function createId() {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 11)}`;
}

export function MedicationsProvider({ children }: { children: React.ReactNode }) {
  const [medications, setMedications] = useState<Medication[]>([]);

  const addMedication = useCallback((input: Pick<Medication, 'name' | 'dosageTime' | 'frequency'>) => {
    const name = input.name.trim();
    if (!name) return;

    const med: Medication = {
      id: createId(),
      name,
      dosageTime: input.dosageTime.trim(),
      frequency: input.frequency.trim(),
      createdAt: new Date().toISOString(),
    };
    setMedications((prev) => [...prev, med]);
  }, []);

  const value = useMemo(
    () => ({ medications, addMedication }),
    [medications, addMedication]
  );

  return (
    <MedicationsContext.Provider value={value}>{children}</MedicationsContext.Provider>
  );
}

export function useMedications() {
  const ctx = useContext(MedicationsContext);
  if (!ctx) {
    throw new Error('useMedications는 MedicationsProvider 안에서만 사용할 수 있습니다.');
  }
  return ctx;
}
