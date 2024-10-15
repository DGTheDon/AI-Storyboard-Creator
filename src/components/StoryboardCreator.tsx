import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store';
import { addScene, generateStoryboard } from '../store/storyboardSlice';
import { PlusCircle } from 'lucide-react';

const StoryboardCreator: React.FC = () => {
  const [sceneDescription, setSceneDescription] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const handleAddScene = () => {
    if (sceneDescription.trim()) {
      dispatch(addScene({ description: sceneDescription }));
      setSceneDescription('');
    }
  };

  const handleGenerateStoryboard = () => {
    dispatch(generateStoryboard([])); // We'll need to pass the scenes here
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold mb-4">Create Your Storyboard</h2>
      <div className="mb-4">
        <textarea
          className="w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          rows={4}
          placeholder="Describe your scene..."
          value={sceneDescription}
          onChange={(e) => setSceneDescription(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300 flex items-center"
          onClick={handleAddScene}
        >
          <PlusCircle size={18} className="mr-2" />
          Add Scene
        </button>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
          onClick={handleGenerateStoryboard}
        >
          Generate Storyboard
        </button>
      </div>
    </div>
  );
};

export default StoryboardCreator;