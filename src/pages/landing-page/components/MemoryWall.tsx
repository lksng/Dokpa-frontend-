import React, { useState } from 'react';
import { Camera, MapPin, Heart, Plus, X, Upload, AlertCircle, User, Calendar } from 'lucide-react';

interface Memory {
  id: string;
  name: string;
  location: string;
  story: string;
  imageUrl: string;
  date: string;
  likes: number;
}

interface AddMemoryFormData {
  name: string;
  location: string;
  story: string;
  image: File | null;
}

interface ImageVerification {
  isVerifying: boolean;
  isVerified: boolean;
  verificationStatus: 'pending' | 'analyzing' | 'approved' | 'rejected' | null;
  rejectionReason?: string;
}

const initialMemories: Memory[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    location: 'Santorini, Greece',
    story: 'Watching the sunset from Oia was absolutely magical. The white buildings against the deep blue sea created the perfect backdrop for our honeymoon. Every moment felt like a dream come true.',
    imageUrl: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-03-15',
    likes: 42
  },
  {
    id: '2',
    name: 'Marcus Chen',
    location: 'Kyoto, Japan',
    story: 'The cherry blossoms in Maruyama Park exceeded all expectations. Walking through the pink petals falling like snow while traditional music played in the distance was pure poetry.',
    imageUrl: 'https://images.pexels.com/photos/2070033/pexels-photo-2070033.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-04-08',
    likes: 38
  },
  {
    id: '3',
    name: 'Emma Rodriguez',
    location: 'Machu Picchu, Peru',
    story: 'Reaching the ancient citadel after a 4-day trek was the most rewarding experience of my life. The mist clearing to reveal the incredible Inca ruins left me speechless.',
    imageUrl: 'https://images.pexels.com/photos/2265876/pexels-photo-2265876.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-02-22',
    likes: 56
  },
  {
    id: '4',
    name: 'David Thompson',
    location: 'Northern Lights, Iceland',
    story: 'Dancing green lights across the star-filled sky while soaking in natural hot springs. Iceland showed me that magic truly exists in this world.',
    imageUrl: 'https://images.pexels.com/photos/1933239/pexels-photo-1933239.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-01-18',
    likes: 67
  },
  {
    id: '5',
    name: 'Lisa Park',
    location: 'Bali, Indonesia',
    story: 'The rice terraces of Tegallalang at sunrise were breathtaking. The golden light cascading over the emerald green steps created a scene of pure tranquility.',
    imageUrl: 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-05-12',
    likes: 29
  },
  {
    id: '6',
    name: 'Alex Morgan',
    location: 'Swiss Alps',
    story: 'Hiking through the pristine mountain trails with snow-capped peaks all around. The crisp alpine air and stunning vistas made every step worth it.',
    imageUrl: 'https://images.pexels.com/photos/1366919/pexels-photo-1366919.jpeg?auto=compress&cs=tinysrgb&w=800',
    date: '2024-06-03',
    likes: 45
  }
];

export default function MemoryWall() {
  const [memories, setMemories] = useState<Memory[]>(initialMemories);
  const [selectedMemory, setSelectedMemory] = useState<Memory | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [formData, setFormData] = useState<AddMemoryFormData>({
    name: '',
    location: '',
    story: '',
    image: null
  });
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<AddMemoryFormData>>({});
  const [imageVerification, setImageVerification] = useState<ImageVerification>({
    isVerifying: false,
    isVerified: false,
    verificationStatus: null
  });

  const verifyImage = async (file: File): Promise<boolean> => {
    setImageVerification({
      isVerifying: true,
      isVerified: false,
      verificationStatus: 'analyzing'
    });

    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      const checks = [
        { name: 'Image Quality', duration: 500 },
        { name: 'Content Analysis', duration: 800 },
        { name: 'Travel Context', duration: 600 },
        { name: 'Safety Check', duration: 400 }
      ];
      for (const check of checks) {
        await new Promise(resolve => setTimeout(resolve, check.duration));
      }
      const isApproved = Math.random() > 0.1;
      if (isApproved) {
        setImageVerification({
          isVerifying: false,
          isVerified: true,
          verificationStatus: 'approved'
        });
        return true;
      } else {
        const rejectionReasons = [
          'Image quality is too low for verification',
          'Content does not appear to be travel-related',
          'Image may contain inappropriate content',
          'Unable to verify image authenticity'
        ];
        setImageVerification({
          isVerifying: false,
          isVerified: false,
          verificationStatus: 'rejected',
          rejectionReason: rejectionReasons[Math.floor(Math.random() * rejectionReasons.length)]
        });
        return false;
      }
    } catch (error) {
      setImageVerification({
        isVerifying: false,
        isVerified: false,
        verificationStatus: 'rejected',
        rejectionReason: 'Verification failed due to technical error'
      });
      return false;
    }
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = 5 * 1024 * 1024;
    const allowedTypes = ['image/jpeg', 'image/jpg', 'image/png', 'image/webp'];

    if (!allowedTypes.includes(file.type)) {
      setErrors(prev => ({ ...prev, image: 'Please select a valid image file (JPEG, PNG, WebP)' }));
      return;
    }

    if (file.size > maxSize) {
      setErrors(prev => ({ ...prev, image: 'Image size should be less than 5MB' }));
      return;
    }

    setErrors(prev => ({ ...prev, image: undefined }));
    setFormData(prev => ({ ...prev, image: file }));
    setImageVerification({
      isVerifying: false,
      isVerified: false,
      verificationStatus: null
    });

    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target?.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleVerifyImage = async () => {
    if (!formData.image) return;
    await verifyImage(formData.image);
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<AddMemoryFormData> = {};

    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.location.trim()) newErrors.location = 'Location is required';
    if (!formData.story.trim()) newErrors.story = 'Story is required';
    if (formData.story.trim().length < 10) newErrors.story = 'Story should be at least 10 characters';
    if (!formData.image) newErrors.image = 'Please select an image';
    if (formData.image && !imageVerification.isVerified) {
      newErrors.image = 'Please verify your image before submitting';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newMemory: Memory = {
      id: Date.now().toString(),
      name: formData.name,
      location: formData.location,
      story: formData.story,
      imageUrl: imagePreview || '',
      date: new Date().toISOString().split('T')[0],
      likes: 0
    };

    setMemories(prev => [newMemory, ...prev]);
    setFormData({ name: '', location: '', story: '', image: null });
    setImagePreview(null);
    setErrors({});
    setShowAddForm(false);
  };

  const handleLike = (memoryId: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMemories(prev => 
      prev.map(memory => 
        memory.id === memoryId 
          ? { ...memory, likes: memory.likes + 1 }
          : memory
      )
    );
  };

  const closeAddForm = () => {
    setShowAddForm(false);
    setFormData({ name: '', location: '', story: '', image: null });
    setImagePreview(null);
    setErrors({});
    setImageVerification({
      isVerifying: false,
      isVerified: false,
      verificationStatus: null
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-[#E6F1EF] to-[#D0E6DF]">
      {/* Header */}
      <div className="bg-white/90 backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-[#005246]">
                Travel Memories
              </h1>
              <p className="text-lg text-gray-600 mt-1">A visual journey through amazing destinations</p>
            </div>
            <button
              onClick={() => setShowAddForm(true)}
              className="inline-flex items-center px-6 py-3 bg-[#005246] text-white font-medium rounded-full hover:bg-[#004536] transform hover:scale-105 transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <Camera className="w-5 h-5 mr-2" />
              Add Memory
            </button>
          </div>
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
          {memories.map((memory) => (
            <div
              key={memory.id}
              className="break-inside-avoid bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 cursor-pointer group"
              onClick={() => setSelectedMemory(memory)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={memory.imageUrl}
                  alt={memory.location}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <h3 className="text-lg font-bold text-white mb-2">{memory.name}</h3>
                  <p className="text-sm text-white mb-1">{memory.location}</p>
                  <p className="text-xs text-white line-clamp-3">{memory.story}</p>
                </div>

                {/* Like button */}
                <button
                  onClick={(e) => handleLike(memory.id, e)}
                  className="absolute top-3 right-3 w-10 h-10 bg-white/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-white"
                >
                  <Heart className="w-5 h-5 text-[#005246]" />
                </button>
              </div>

              <div className="p-4">
                <p className="text-sm text-gray-500">{memory.date}</p>
                <h3 className="text-lg font-semibold text-[#005246] mt-1">{memory.location}</h3>
                <p className="text-gray-700 mt-2 line-clamp-4">{memory.story}</p>
                <p className="mt-2 text-sm text-gray-500">{memory.likes} likes</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Add Memory Modal */}
      {showAddForm && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-lg p-6 relative shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={closeAddForm}
            >
              <X className="w-6 h-6" />
            </button>
            <h2 className="text-2xl font-bold text-[#005246] mb-4">Add a New Memory</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005246] focus:border-[#005246]"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <input
                  type="text"
                  value={formData.location}
                  onChange={(e) => setFormData(prev => ({ ...prev, location: e.target.value }))}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005246] focus:border-[#005246]"
                />
                {errors.location && <p className="text-red-500 text-xs mt-1">{errors.location}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Story</label>
                <textarea
                  value={formData.story}
                  onChange={(e) => setFormData(prev => ({ ...prev, story: e.target.value }))}
                  className="w-full border border-gray-300 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#005246] focus:border-[#005246]"
                  rows={4}
                />
                {errors.story && <p className="text-red-500 text-xs mt-1">{errors.story}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Upload Image</label>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="w-full"
                />
                {errors.image && <p className="text-red-500 text-xs mt-1">{errors.image}</p>}
              </div>

              {imagePreview && (
                <div className="relative">
                  <img src={imagePreview} alt="Preview" className="w-full rounded-xl mt-2" />
                  {!imageVerification.isVerified && !imageVerification.isVerifying && (
                    <button
                      type="button"
                      onClick={handleVerifyImage}
                      className="absolute top-2 right-2 bg-[#005246] text-white px-3 py-1 rounded-full hover:bg-[#004536] shadow-md"
                    >
                      Verify Image
                    </button>
                  )}
                  {imageVerification.isVerifying && (
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-white font-semibold rounded-xl">
                      Verifying...
                    </div>
                  )}
                  {imageVerification.verificationStatus === 'approved' && (
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-3 py-1 rounded-full shadow-md">
                      Verified
                    </div>
                  )}
                  {imageVerification.verificationStatus === 'rejected' && (
                    <div className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full shadow-md">
                      Rejected
                    </div>
                  )}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-[#005246] text-white rounded-xl px-6 py-3 font-medium hover:bg-[#004536] transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Memory Details Modal */}
      {selectedMemory && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-2xl w-full max-w-2xl p-6 relative shadow-xl">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={() => setSelectedMemory(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <img src={selectedMemory.imageUrl} alt={selectedMemory.location} className="w-full rounded-xl mb-4 object-cover max-h-96 mx-auto" />
            <h2 className="text-2xl font-bold text-[#005246]">{selectedMemory.name}</h2>
            <p className="text-gray-500 mb-2">{selectedMemory.location} | {selectedMemory.date}</p>
            <p className="text-gray-700">{selectedMemory.story}</p>
            <p className="mt-2 text-sm text-gray-500">{selectedMemory.likes} likes</p>
          </div>
        </div>
      )}
    </div>
  );
}
