import { UserCircle } from "lucide-react";

interface Tab {
  id: string;
  label: string;
  content: React.ReactNode;
}

interface MobileTabBarProps {
  tabs: Tab[];
}

const MobileTabBar: React.FC<MobileTabBarProps> = ({ tabs }) => {
  return (
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 h-auto p-4 flex justify-between items-center">
      {tabs.map((tab) => (
        <div className="flex flex-col items-center gap-2">
          <UserCircle size={20} className="text-slate-600" />
          <span className="text-sm text-slate-600">{tab.label}</span>
        </div>
      ))}
    </div>
  );
};

export default MobileTabBar;
