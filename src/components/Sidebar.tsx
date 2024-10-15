import React from 'react';
import { Settings, Save, History } from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="bg-gray-800 text-white w-64 p-6 space-y-6">
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Options</h2>
        <ul className="space-y-2">
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-300">
            <Settings size={18} />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-300">
            <Save size={18} />
            <span>Save Project</span>
          </li>
          <li className="flex items-center space-x-2 cursor-pointer hover:text-blue-300">
            <History size={18} />
            <span>Version History</span>
          </li>
        </ul>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Image Style</h2>
        <select className="w-full bg-gray-700 text-white p-2 rounded">
          <option>Realistic</option>
          <option>Cartoon</option>
          <option>Sketch</option>
        </select>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold">Resolution</h2>
        <select className="w-full bg-gray-700 text-white p-2 rounded">
          <option>1920x1080</option>
          <option>1280x720</option>
          <option>3840x2160</option>
        </select>
      </div>
    </aside>
  );
};

export default Sidebar;