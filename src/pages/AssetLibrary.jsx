// pages/AssetLibrary.jsx
import React, { useState } from 'react';
import { Search, Filter, Download, Trash2, FolderOpen, Calendar } from 'lucide-react';

export default function AssetLibrary() {
  const [searchQuery, setSearchQuery] = useState('');
  
  // Mock Data for previously generated assets
  const [assets] = useState([
    { id: 1, campaign: 'حملة العودة للمدارس', date: '2023-09-01', score: 95, type: '1080x1080', img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400' },
    { id: 2, campaign: 'عروض الجمعة البيضاء', date: '2023-11-20', score: 88, type: '1080x1920', img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400' },
    { id: 3, campaign: 'إطلاق المنتج الجديد', date: '2024-01-15', score: 92, type: '1200x628', img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400' },
    { id: 4, campaign: 'تخفيضات الصيف', date: '2024-06-10', score: 81, type: '1080x1080', img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400' },
  ]);

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      
      {/* Header & Controls */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            مكتبة الأصول <FolderOpen className="ms-2 text-blue-600" size={24} />
          </h1>
          <p className="text-gray-500 mt-1">تصفح، حمل، وأدر جميع الإعلانات التي قمت بتوليدها مسبقاً.</p>
        </div>

        {/* Search and Filter */}
        <div className="flex space-x-reverse space-x-3">
          <div className="relative">
            <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input 
              type="text" 
              placeholder="ابحث باسم الحملة..."
              className="w-64 ps-9 pe-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none text-sm"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="flex items-center px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors shadow-sm">
            <Filter size={16} className="me-2 text-gray-500" />
            تصفية
          </button>
        </div>
      </div>

      {/* Grid Gallery */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {assets.map((asset) => (
          <div key={asset.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
            
            {/* Image Preview */}
            <div className="relative h-48 bg-gray-100">
              <img 
                src={asset.img} 
                alt={asset.campaign} 
                className="w-full h-full object-cover"
              />
              
              {/* Hover Overlay with Actions */}
              <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center space-x-reverse space-x-4">
                <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-blue-50 hover:text-blue-600 transition-colors" title="تحميل">
                  <Download size={20} />
                </button>
                <button className="bg-white text-gray-900 p-2 rounded-full hover:bg-red-50 hover:text-red-600 transition-colors" title="حذف">
                  <Trash2 size={20} />
                </button>
              </div>

              {/* Score Badge */}
              <div className="absolute top-2 start-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded text-xs font-bold text-gray-800 shadow-sm">
                تقييم: <span className="text-green-600">{asset.score}</span>
              </div>
            </div>

            {/* Meta Info */}
            <div className="p-4 border-t border-gray-100">
              <h3 className="font-semibold text-gray-900 text-sm truncate" title={asset.campaign}>
                {asset.campaign}
              </h3>
              <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                <span className="flex items-center">
                  <Calendar size={12} className="me-1" />
                  {asset.date}
                </span>
                <span className="bg-gray-100 px-2 py-1 rounded text-gray-600">
                  {asset.type}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}