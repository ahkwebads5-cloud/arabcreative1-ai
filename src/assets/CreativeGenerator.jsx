// pages/CreativeGenerator.jsx
import React, { useState } from 'react';
import { 
  Link, Zap, Wand2, Download, Edit3, Type, Info, CheckCircle2 
} from 'lucide-react';

export default function CreativeGenerator() {
  const [url, setUrl] = useState('');
  const [audience, setAudience] = useState('');
  const [platform, setPlatform] = useState('1080x1080');
  
  const [isScraping, setIsScraping] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  const [creatives, setCreatives] = useState([]);
  
  // Local state to simulate credit deduction (would normally come from global state/backend)
  const [credits, setCredits] = useState(450);

  // Simulated Workflow 1: Instant Ads from URL
  const handleUrlScrape = () => {
    if (!url) return;
    setIsScraping(true);
    
    // Simulate API delay for scraping website
    setTimeout(() => {
      setAudience('الشباب ورواد الأعمال (18-35 عام)');
      setIsScraping(false);
    }, 1500);
  };

  // Simulated Workflow 2: Generate Creatives & Deduct Credits
  const handleGenerate = (e) => {
    e.preventDefault();
    if (credits < 10) return alert('عذراً، رصيدك غير كافٍ.');
    
    setIsGenerating(true);
    setCreatives([]);

    // Simulate AI Generation time
    setTimeout(() => {
      setCredits(prev => prev - 10); // Deduct credits
      setIsGenerating(false);
      
      // Mock generated output
      setCreatives([
        { id: 1, score: 98, img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=400', copy: 'أطلق العنان لعملك' },
        { id: 2, score: 92, img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=400', copy: 'نمو غير مسبوق' },
        { id: 3, score: 87, img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=400', copy: 'تحليلات دقيقة' },
        { id: 4, score: 85, img: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=400', copy: 'بيانات أسرع' },
      ]);
    }, 3000);
  };

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900 flex items-center">
            صانع الإعلانات <Wand2 className="ms-2 text-blue-600" size={24} />
          </h1>
          <p className="text-gray-500 mt-1">قم بتوليد عشرات التصاميم الإعلانية عالية التحويل في ثوانٍ معدودة.</p>
        </div>
        <div className="bg-blue-50 px-4 py-2 rounded-lg border border-blue-100 flex items-center">
          <Zap className="text-yellow-500 me-2" size={18} />
          <span className="text-sm text-blue-800 font-medium">تكلفة التوليد: <strong className="text-blue-900">10 أرصدة</strong></span>
        </div>
      </div>

      {/* Input Form */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <form onSubmit={handleGenerate} className="space-y-5">
          
          {/* URL Input & Scrape */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">رابط المنتج أو الصفحة (URL)</label>
            <div className="flex space-x-reverse space-x-3">
              <div className="relative flex-1">
                <div className="absolute inset-y-0 start-0 ps-3 flex items-center pointer-events-none">
                  <Link className="h-5 w-5 text-gray-400" />
                </div>
                <input 
                  type="url" 
                  required
                  placeholder="https://example.com/product"
                  className="w-full ps-10 pe-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all text-left"
                  dir="ltr"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
              <button 
                type="button"
                onClick={handleUrlScrape}
                disabled={isScraping || !url}
                className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-4 py-2.5 rounded-lg font-medium transition-colors flex items-center disabled:opacity-50"
              >
                {isScraping ? 'جاري التحليل...' : 'سحب البيانات تلقائياً'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">الجمهور المستهدف</label>
              <input 
                type="text" 
                required
                placeholder="من هو جمهورك؟ (مثال: الأمهات الجدد)"
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={audience}
                onChange={(e) => setAudience(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">المنصة / حجم الإعلان</label>
              <select 
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={platform}
                onChange={(e) => setPlatform(e.target.value)}
              >
                <option value="1080x1080">انستجرام / فيسبوك بوست (1080x1080)</option>
                <option value="1080x1920">ستوري / ريلز / تيك توك (1080x1920)</option>
                <option value="1200x628">إعلان فيسبوك بانر (1200x628)</option>
              </select>
            </div>
          </div>

          <div className="pt-2">
            <button 
              type="submit"
              disabled={isGenerating}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-bold text-lg transition-all shadow-md flex justify-center items-center disabled:opacity-70"
            >
              {isGenerating ? (
                <>جاري تصميم الإعلانات بالذكاء الاصطناعي...</>
              ) : (
                <>توليد الإعلانات الآن <Wand2 className="ms-2" size={20} /></>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Loading Skeleton */}
      {isGenerating && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-gray-100 animate-pulse rounded-xl h-72 border border-gray-200"></div>
          ))}
        </div>
      )}

      {/* Output Area */}
      {creatives.length > 0 && (
        <div className="mt-8 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-900 flex items-center">
              <CheckCircle2 className="text-green-500 me-2" size={24} />
              التصاميم المقترحة
            </h2>
            <span className="text-sm text-gray-500 flex items-center">
              <Info className="w-4 h-4 me-1" />
              مرتبة حسب تقييم الأداء المتوقع
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {creatives.map((creative) => (
              <div key={creative.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group hover:shadow-md transition-shadow relative">
                
                {/* Predictive Score Badge */}
                <div className="absolute top-3 end-3 z-10 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded-full shadow-sm flex items-center border border-white/50">
                  <span className={`text-sm font-bold ${creative.score >= 90 ? 'text-green-600' : 'text-yellow-600'}`}>
                    {creative.score}/100
                  </span>
                  <span className="text-xs text-gray-600 ms-1 font-medium">التقييم</span>
                </div>

                {/* Banner Image */}
                <div className="relative h-56 bg-gray-100 overflow-hidden">
                  <img 
                    src={creative.img} 
                    alt="Generated Creative" 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Overlay for Mock Copy */}
                  <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                    <p className="text-white font-bold text-lg drop-shadow-md">{creative.copy}</p>
                  </div>
                </div>

                {/* Quick Actions */}
                <div className="p-3 bg-gray-50 flex justify-between border-t border-gray-100">
                  <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors tooltip" title="تحميل">
                    <Download size={18} />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-purple-600 hover:bg-purple-50 rounded-lg transition-colors" title="تعديل التصميم">
                    <Edit3 size={18} />
                  </button>
                  <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors flex items-center text-sm font-medium" title="توليد نصوص بديلة">
                    <Type size={16} className="me-1" />
                    نص
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

    </div>
  );
}
