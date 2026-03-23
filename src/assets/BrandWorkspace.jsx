// pages/BrandWorkspace.jsx
import React, { useState } from 'react';
import { Upload, Palette, CheckCircle, Type } from 'lucide-react';

export default function BrandWorkspace() {
  const [brandData, setBrandData] = useState({
    name: '',
    primaryColor: '#2563EB',
    secondaryColor: '#9333EA',
    description: ''
  });

  const [isSaved, setIsSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setIsSaved(true);
    setTimeout(() => setIsSaved(false), 3000); // Reset success message
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">إعداد العلامة التجارية</h1>
          <p className="text-gray-500 mt-1">قم بضبط هوية علامتك التجارية لضمان توافق الإعلانات المولدة مع هويتك البصرية.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8">
        <form onSubmit={handleSave} className="space-y-6">
          
          {/* Brand Name & Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">اسم العلامة التجارية</label>
              <input 
                type="text" 
                placeholder="مثال: عرب كريتيف"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                value={brandData.name}
                onChange={(e) => setBrandData({...brandData, name: e.target.value})}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">وصف مختصر للنشاط</label>
              <input 
                type="text" 
                placeholder="مثال: منصة ذكاء اصطناعي لتوليد الإعلانات"
                className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={brandData.description}
                onChange={(e) => setBrandData({...brandData, description: e.target.value})}
              />
            </div>
          </div>

          {/* Logo Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">شعار العلامة التجارية (Logo)</label>
            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
              <div className="space-y-1 text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-400" />
                <div className="flex text-sm text-gray-600 justify-center">
                  <span className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500">
                    اضغط لرفع الشعار
                  </span>
                  <p className="ps-1">أو قم بالسحب والإفلات هنا</p>
                </div>
                <p className="text-xs text-gray-500">PNG, JPG, SVG حتى 5 ميجابايت</p>
              </div>
            </div>
          </div>

          {/* Brand Colors */}
          <div className="border-t border-gray-100 pt-6">
            <h3 className="text-md font-medium text-gray-900 mb-4 flex items-center">
              <Palette className="w-5 h-5 text-gray-500 me-2" />
              الألوان الأساسية
            </h3>
            <div className="flex space-x-reverse space-x-6">
              <div>
                <label className="block text-xs text-gray-500 mb-1">اللون الأساسي</label>
                <div className="flex items-center space-x-reverse space-x-2">
                  <input 
                    type="color" 
                    value={brandData.primaryColor}
                    onChange={(e) => setBrandData({...brandData, primaryColor: e.target.value})}
                    className="h-10 w-10 border-0 rounded-lg cursor-pointer"
                  />
                  <span className="text-sm font-mono text-gray-600 uppercase">{brandData.primaryColor}</span>
                </div>
              </div>
              <div>
                <label className="block text-xs text-gray-500 mb-1">اللون الثانوي</label>
                <div className="flex items-center space-x-reverse space-x-2">
                  <input 
                    type="color" 
                    value={brandData.secondaryColor}
                    onChange={(e) => setBrandData({...brandData, secondaryColor: e.target.value})}
                    className="h-10 w-10 border-0 rounded-lg cursor-pointer"
                  />
                  <span className="text-sm font-mono text-gray-600 uppercase">{brandData.secondaryColor}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Submit Action */}
          <div className="flex items-center justify-end pt-4 border-t border-gray-100">
            {isSaved && (
              <span className="text-green-600 flex items-center text-sm font-medium me-4 animate-pulse">
                <CheckCircle className="w-4 h-4 me-1" /> تم حفظ الإعدادات بنجاح
              </span>
            )}
            <button 
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-lg font-medium transition-colors shadow-sm"
            >
              حفظ العلامة التجارية
            </button>
          </div>

        </form>
      </div>
    </div>
  );
}
