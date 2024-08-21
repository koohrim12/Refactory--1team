'use client';

import React from 'react';
import HeaderSection from '../ui/Header/headerSection';
import MainContent from './component/SettingContent'; // MainContent 컴포넌트 불러오기
import { LanguageProvider } from './component/Language/LanguageContext';

export default function Home() {
  return (
    <LanguageProvider>
      <HeaderSection />
      <MainContent /> {/* MainContent 컴포넌트 사용 */}
    </LanguageProvider>
  );
}
