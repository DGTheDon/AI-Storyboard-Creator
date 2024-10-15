import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Scene {
  id: string;
  description: string;
  imageUrl: string | null;
}

interface StoryboardState {
  scenes: Scene[];
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: StoryboardState = {
  scenes: [],
  status: 'idle',
  error: null,
};

export const generateStoryboard = createAsyncThunk(
  'storyboard/generate',
  async (scenes: { description: string }[], { rejectWithValue }) => {
    try {
      const response = await axios.post('https://api.eachlabs.ai/v1/workflows', {
        scenes: scenes.map(scene => scene.description),
      });
      return response.data;
    } catch (error) {
      return rejectWithValue('Failed to generate storyboard');
    }
  }
);

const storyboardSlice = createSlice({
  name: 'storyboard',
  initialState,
  reducers: {
    addScene: (state, action: PayloadAction<{ description: string }>) => {
      state.scenes.push({
        id: Date.now().toString(),
        description: action.payload.description,
        imageUrl: null,
      });
    },
    updateScene: (state, action: PayloadAction<{ id: string; description: string }>) => {
      const scene = state.scenes.find(s => s.id === action.payload.id);
      if (scene) {
        scene.description = action.payload.description;
      }
    },
    removeScene: (state, action: PayloadAction<string>) => {
      state.scenes = state.scenes.filter(scene => scene.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(generateStoryboard.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(generateStoryboard.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.scenes = state.scenes.map((scene, index) => ({
          ...scene,
          imageUrl: action.payload.images[index],
        }));
      })
      .addCase(generateStoryboard.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.payload as string;
      });
  },
});

export const { addScene, updateScene, removeScene } = storyboardSlice.actions;
export default storyboardSlice.reducer;