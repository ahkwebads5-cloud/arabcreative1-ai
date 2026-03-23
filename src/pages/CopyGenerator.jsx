// pages/CopyGenerator.jsx
import React, { useState } from 'react';
import { Wand2, Copy, CheckCircle, Type, Sparkles } from 'lucide-react';

export default function CopyGenerator() {
  const [productDesc, setProductDesc] = useState('');
  const [tone, setTone] = useState('persuasive');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedResults, setGeneratedResults] = useState(null);
  const [copiedId, setCopiedId] = useState(null);

  // Simulated AI Copy Generation
  const handleGenerate = (e) => {
    e.preventDefault();
    if (!productDesc) return;
    
    setIsGenerating(true);
    setGeneratedResults(null);

    setTimeout(() => {
      setIsGenerating(false);
      setGeneratedResults({
        primaryText: [
          { id: 'p1', text: 'هل تبحث عن طريقة لزيادة مبيعاتك؟ اكتشف الحل الذكي الذي يساعدك على مضاعفة أرباحك في وقت قياسي وبدون مجهود.' },
          { id: 'p2', text: 'ارتقِ بعلامتك التجارية إلى مستوى جديد. منصتنا توفر لك كل ما تحتاجه للوصول إلى جمهورك المستهدف بدقة واحترافية.' }
        ],
        headlines: [
          { id: 'h1', text: 'ضاعف مبيعاتك اليوم! 🚀' },
          { id: 'h2', text: 'السر وراء نجاح العلامات التجارية الكبرى' }
        ],
        ctas: [
          { id: 'c1', text: 'ابدأ تجربتك المجانية الآن' },
          { id: 'c2', text: 'احصل على العرض الحصري' }
        ]
      });
    }, 2000);
  };

  const handleCopy = (id, text) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="max-w-5xl mx-auto space-y-6">
      
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 flex items-center">
          مولد النصوص <Type className="ms-2 text-blue-600" size={24} />
        </h1>
        <p className="text-gray-500 mt-1">اكتب وصفاً بسيطاً لمنتجك، وسيقوم الذكاء الاصطناعي بصياغة نصوص بيعية جذابة.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Input Form Area */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-100 p-6 h-fit">
          <form onSubmit={handleGenerate} className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">وصف المنتج أو الخدمة</label>
              <textarea 
                rows="5"
                required
                placeholder="تحدث عن منتجك، مميزاته، ولمن هو موجه..."
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                value={productDesc}
                onChange={(e) => setProductDesc(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">نبرة الصوت (Tone of Voice)</label>
              <select 
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              >
                <option value="persuasive">مقنع (Persuasive)</option>
                <option value="formal">رسمي واحترافي (Formal)</option>
                <option value="casual">ودي وبسيط (Casual)</option>
                <option value="urgent">حماسي وعاجل (Urgent)</option>
              </select>
            </div>

            <button 
              type="submit"
              disabled={isGenerating}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-bold transition-all shadow-sm flex justify-center items-center disabled:opacity-70"
            >
              {isGenerating ? 'جاري كتابة النصوص...' : 'توليد النصوص'}
              {!isGenerating && <Wand2 className="ms-2" size={18} />}
            </button>
          </form>
        </div>

        {/* Output Area */}
        <div className="lg:col-span-2 space-y-6">
          {isGenerating && (
            <div className="h-full flex flex-col items-center justify-center space-y-4 text-gray-500 min-h-[300px] bg-gray-50 rounded-xl border border-dashed border-gray-200">
              <Sparkles className="animate-spin text-blue-500" size={32} />
              <p>يتم الآن صياغة أفضل الكلمات لجمهورك...</p>
            </div>
          )}

          {generatedResults && !isGenerating && (
            <div className="space-y-6 animate-fade-in">
              {/* Primary Text Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">النص الأساسي (Primary Text)</h3>
                <div className="space-y-4">
                  {generatedResults.primaryText.map((item) => (
                    <div key={item.id} className="relative group p-4 bg-gray-50 rounded-lg hover:bg-blue-50/50 transition-colors border border-transparent hover:border-blue-100">
                      <p className="text-gray-800 leading-relaxed pe-10">{item.text}</p>
                      <button 
                        onClick={() => handleCopy(item.id, item.text)}
                        className="absolute top-4 end-4 text-gray-400 hover:text-blue-600 transition-colors"
                        title="نسخ النص"
                      >
                        {copiedId === item.id ? <CheckCircle size={20} className="text-green-500" /> : <Copy size={20} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Headlines Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">العناوين (Headlines)</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {generatedResults.headlines.map((item) => (
                    <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-100">
                      <p className="text-gray-800 font-medium">{item.text}</p>
                      <button onClick={() => handleCopy(item.id, item.text)} className="text-gray-400 hover:text-blue-600">
                        {copiedId === item.id ? <CheckCircle size={18} className="text-green-500" /> : <Copy size={18} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Section */}
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">دعوة لاتخاذ إجراء (Call to Action)</h3>
                <div className="flex flex-wrap gap-3">
                  {generatedResults.ctas.map((item) => (
                    <div key={item.id} className="flex items-center space-x-reverse space-x-2 bg-blue-50 text-blue-800 px-4 py-2 rounded-full font-medium border border-blue-100">
                      <span>{item.text}</span>
                      <button onClick={() => handleCopy(item.id, item.text)} className="hover:text-blue-600 ms-2">
                        {copiedId === item.id ? <CheckCircle size={16} className="text-green-600" /> : <Copy size={16} />}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}