// pages/DashboardHome.jsx
import React from 'react';
import { ImageIcon, TrendingUp, Zap } from 'lucide-react';

export default function DashboardHome({ user }) {
  const metrics = [
    { 
      title: 'الرصيد المتاح', 
      value: user.available_credits, 
      icon: <Zap size={24} className="text-yellow-500" />,
      bg: 'bg-yellow-50'
    },
    { 
      title: 'الإعلانات المُنشأة', 
      value: user.total_generations, 
      icon: <ImageIcon size={24} className="text-blue-500" />,
      bg: 'bg-blue-50'
    },
    { 
      title: 'أفضل الإعلانات أداءً', 
      value: '24', 
      icon: <TrendingUp size={24} className="text-green-500" />,
      bg: 'bg-green-50',
      subtitle: 'بتقييم +90'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {metrics.map((metric, index) => (
          <div key={index} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-500 mb-1">{metric.title}</p>
              <h3 className="text-3xl font-bold text-gray-900">{metric.value}</h3>
              {metric.subtitle && (
                <p className="text-xs text-green-600 mt-1 font-medium">{metric.subtitle}</p>
              )}
            </div>
            <div className={`w-14 h-14 rounded-full flex items-center justify-center ${metric.bg}`}>
              {metric.icon}
            </div>
          </div>
        ))}
      </div>

      {/* Placeholder for Quick Actions or Recent Creatives */}
      <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 mt-8">
        <h3 className="text-lg font-bold text-gray-900 mb-4">إجراءات سريعة</h3>
        <p className="text-gray-500 text-sm">سيتم إضافة اختصارات إنشاء الإعلانات وإعدادات العلامة التجارية هنا.</p>
        {/* We will populate this in Step 3 */}
      </div>
    </div>
  );
}
