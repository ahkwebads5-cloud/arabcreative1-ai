import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// استدعاء المكونات والصفحات
import DashboardLayout from './components/DashboardLayout';
import DashboardHome from './pages/DashboardHome';
import BrandWorkspace from './pages/BrandWorkspace';
import CreativeGenerator from './pages/CreativeGenerator';
import CopyGenerator from './pages/CopyGenerator';
import AssetLibrary from './pages/AssetLibrary';

export default function App() {
  // بيانات مستخدم وهمية لمحاكاة عمل المنصة
  const [userState, setUserState] = useState({
    id: 'usr_123',
    name: 'أحمد',
    role: 'admin',
    subscription_plan: 'Pro',
    available_credits: 450,
    total_generations: 1205
  });

  return (
    <Router>
      <Routes>
        {/* مسارات لوحة التحكم الرئيسية */}
        <Route path="/" element={<DashboardLayout user={userState} />}>
          <Route index element={<DashboardHome user={userState} />} />
          <Route path="brands" element={<BrandWorkspace />} />
          <Route path="generate-creative" element={<CreativeGenerator />} />
          <Route path="generate-copy" element={<CopyGenerator />} />
          <Route path="library" element={<AssetLibrary />} />
        </Route>
      </Routes>
    </Router>
  );
}