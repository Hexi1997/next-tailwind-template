import { createFromIconfontCN } from '@ant-design/icons';

export function useIconFont() {
  const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_3266139_15ccweq5pth.js'
  });
  return { IconFont };
}
