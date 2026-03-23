import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Briefcase, 
  Image as ImageIcon, 
  Type, 
  FolderOpen, 
  Settings, 
  LogOut,
  Sparkles
} from 'lucide-react';

export default function DashboardLayout({ user }) {
  const navItems = [
    { name: 'الرئيسية', path: '/', icon: <LayoutDashboard size={20} /> },
    { name: 'العلامات التجارية', path: '/brands', icon: <Briefcase size={20} /> },
    { name: 'صانع الإعلانات', path: '/generate-creative', icon: <ImageIcon size={20} /> },
    { name: 'مولد النصوص', path: '/generate-copy', icon: <Type size={20} /> },
    { name: 'المكتبة', path: '/library', icon: <FolderOpen size={20} /> },
    { name: 'الإعدادات', path: '/settings', icon: <Settings size={20} /> },
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 font-sans">
      
      {/* الشريط الجانبي */}
      <aside className="w-64 bg-white border-e border-gray-200 flex flex-col shadow-sm">
        <div className="h-16 flex items-center px-6 border-b border-gray-100">
          <Sparkles className="text-blue-600 me-2" size={24} />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-l from-blue-600 to-purple-600">
            ArabCreative AI
          </span>
        </div>
        
        <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center px-4 py-3 rounded-lg transition-colors ${
                  isActive 
                    ? 'bg-blue-50 text-blue-700 font-semibold' 
                    : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                }`
              }
            >
              <span className="me-3">{item.icon}</span>
              {item.name}
            </NavLink>
          ))}
        </nav>

        {/* تذييل المستخدم */}
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg">
              {user?.name?.charAt(0) || 'U'}
            </div>
            <div className="ms-3">
              <p className="text-sm font-semibold text-gray-900">{user?.name || 'مستخدم'}</p>
              <p className="text-xs text-gray-500">خطة {user?.subscription_plan || 'مجانية'}</p>
            </div>
          </div>
          <button className="flex items-center w-full px-4 py-2 text-sm text-red-600 rounded-lg hover:bg-red-50 transition-colors">
            <LogOut size={16} className="me-2" />
            تسجيل الخروج
          </button>
        </div>
      </aside>

      {/* منطقة المحتوى الرئيسي */}
      <main className="flex-1 flex flex-col h-screen overflow-hidden">
        <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm">
          <h2 className="text-lg font-semibold text-gray-800">مرحباً بك مجدداً، {user?.name || 'مستخدم'} 👋</h2>
          <div className="flex items-center space-x-reverse space-x-4">
            <div className="bg-blue-50 border border-blue-100 px-4 py-1.5 rounded-full flex items-center">
              <span className="text-sm text-blue-800 font-medium">الرصيد المتاح:</span>
              <span className="ms-2 text-blue-600 font-bold">{user?.available_credits || 0}</span>
              <Sparkles size={14} className="ms-1 text-blue-500" />
            </div>
          </div>
        </header>

        {/* محتوى الصفحات المتغير */}
        <div className="flex-1 overflow-y-auto p-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}