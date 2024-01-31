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
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 pl-10 pr-10 h-auto p-4 flex justify-between items-center">
      {tabs.map((tab) => (
        tab.content
      ))}
    </div>
  );
};

export default MobileTabBar;
