"use client";

import { useCallback, useState } from "react";

interface UseModalReturn<T> {
  selected: T | null;
  isOpen: boolean;
  open: (item: T) => void;
  close: () => void;
  onOpenChange: (next: boolean) => void;
}

export function useModal<T>(): UseModalReturn<T> {
  const [selected, setSelected] = useState<T | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((item: T) => {
    setSelected(item);
    setIsOpen(true);
  }, []);

  const close = useCallback(() => setIsOpen(false), []);

  // `selected`는 닫힘 애니메이션이 끝날 때까지 유지해 콘텐츠가 사라지지 않도록 한다.
  const onOpenChange = useCallback((next: boolean) => {
    setIsOpen(next);
  }, []);

  return { selected, isOpen, open, close, onOpenChange };
}
