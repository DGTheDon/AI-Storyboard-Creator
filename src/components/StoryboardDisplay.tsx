import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Trash2, Edit } from 'lucide-react';

const StoryboardDisplay: React.FC = () => {
  const scenes = useSelector((state: RootState) => state.storyboard.scenes);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Your Storyboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {scenes.map((scene, index) => (
          <div key={scene.id} className="border border-gray-200 rounded-md p-4">
            <div className="mb-2 font-semibold">Scene {index + 1}</div>
            {scene.imageUrl ? (
              <img src={scene.imageUrl} alt={`Scene ${index + 1}`} className="w-full h-48 object-cover mb-2 rounded" />
            ) : (
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center mb-2 rounded">
                <span className="text-gray-500">Image not generated yet</span>
              </div>
            )}
            <p className="text-sm mb-2">{scene.description}</p>
            <div className="flex justify-end space-x-2">
              <button className="text-blue-500 hover:text-blue-700">
                <Edit size={18} />
              </button>
              <button className="text-red-500 hover:text-red-700">
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoryboardDisplay;