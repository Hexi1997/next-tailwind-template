import { useMemo } from 'react';
import { useWindowSize } from 'react-use';

export function useSize() {
  const { width, ...rest } = useWindowSize();
  const isMIN = useMemo(() => {
    return width < 640;
  }, [width]);
  const isSM = useMemo(() => {
    return width >= 640 && width < 768;
  }, [width]);
  const isMD = useMemo(() => {
    return width >= 768 && width < 1024;
  }, [width]);
  const isLG = useMemo(() => {
    return width >= 1024 && width < 1280;
  }, [width]);
  const isXL = useMemo(() => {
    return width >= 1280 && width < 1536;
  }, [width]);
  const is2XL = useMemo(() => {
    return width >= 1536;
  }, [width]);
  return { isMIN, isSM, isMD, isLG, isXL, is2XL, ...rest };
}
