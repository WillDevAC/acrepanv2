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
    <div className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 pl-5 pr-5 h-auto p-4 flex justify-between items-center">
      {tabs.map((tab, key) => (
        <span key={key}>{tab.content}</span>
      ))}
    </div>
  );
};

export default MobileTabBar;
