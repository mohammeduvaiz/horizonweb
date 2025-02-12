import React, { useState, useEffect } from 'react';
import { AlertCircle, Share2 } from 'lucide-react';

const RacketCustomizer = () => {
  const [customizations, setCustomizations] = useState({
    playerLevel: 'intermediate',
    playStyle: 'attacking',
    gripSize: '5u',
    stringTension: '24',
    stringType: 'BG80',
    stringColor: 'white',
    gripType: 'towel',
  });

  const [powerLevel, setPowerLevel] = useState(0);
  const [controlLevel, setControlLevel] = useState(0);
  const [durabilityLevel, setDurabilityLevel] = useState(0);

  // Calculate metrics based on customizations
  const calculateMetrics = () => {
    let power = 70;
    let control = 70;
    let durability = 70;

    // Player level impact
    if (customizations.playerLevel === 'beginner') {
      control += 10;
      durability += 10;
    } else if (customizations.playerLevel === 'advanced') {
      power += 10;
    }

    // Play style impact
    if (customizations.playStyle === 'attacking') {
      power += 15;
      control -= 5;
    } else if (customizations.playStyle === 'defensive') {
      control += 15;
      power -= 5;
    }

    // String tension impact
    const tension = parseInt(customizations.stringTension);
    if (tension < 24) {
      power += 10;
      control -= 5;
    } else if (tension > 26) {
      control += 10;
      power -= 5;
    }

    // String type impact
    if (customizations.stringType === 'BG80') {
      durability += 10;
    } else if (customizations.stringType === 'Aerobite') {
      power += 10;
    }

    setPowerLevel(Math.min(100, power));
    setControlLevel(Math.min(100, control));
    setDurabilityLevel(Math.min(100, durability));
  };

  const handleCustomizationChange = (type: string, value: string) => {
    setCustomizations(prev => ({
      ...prev,
      [type]: value
    }));
  };

  useEffect(() => {
    calculateMetrics();
  }, [customizations]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-gray-50 rounded-xl">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Find Your Perfect Racket</h2>
        <p className="text-gray-600">Customize your preferences to get personalized recommendations</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Customization Options */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Player Level
            </label>
            <select
              value={customizations.playerLevel}
              onChange={(e) => handleCustomizationChange('playerLevel', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Playing Style
            </label>
            <select
              value={customizations.playStyle}
              onChange={(e) => handleCustomizationChange('playStyle', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            >
              <option value="attacking">Attacking</option>
              <option value="defensive">Defensive</option>
              <option value="allround">All-Round</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              String Tension (lbs)
            </label>
            <input
              type="range"
              min="18"
              max="32"
              value={customizations.stringTension}
              onChange={(e) => handleCustomizationChange('stringTension', e.target.value)}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-center text-teal-600 font-semibold mt-2">
              {customizations.stringTension} lbs
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              String Type
            </label>
            <select
              value={customizations.stringType}
              onChange={(e) => handleCustomizationChange('stringType', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            >
              <option value="BG80">BG80 - Power & Control</option>
              <option value="BG65">BG65 - Durability</option>
              <option value="Aerobite">Aerobite - Maximum Power</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Grip Type
            </label>
            <select
              value={customizations.gripType}
              onChange={(e) => handleCustomizationChange('gripType', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
            >
              <option value="towel">Towel Grip</option>
              <option value="synthetic">Synthetic Grip</option>
              <option value="leather">Leather Grip</option>
            </select>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-semibold text-teal-700 mb-4">Performance Metrics</h3>
            
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Power</span>
                  <span className="text-sm text-teal-600">{powerLevel}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-teal-600 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${powerLevel}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Control</span>
                  <span className="text-sm text-teal-600">{controlLevel}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-teal-600 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${controlLevel}%` }}
                  />
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm text-gray-700">Durability</span>
                  <span className="text-sm text-teal-600">{durabilityLevel}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-teal-600 rounded-full h-2 transition-all duration-300"
                    style={{ width: `${durabilityLevel}%` }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="bg-teal-50 p-6 rounded-lg">
            <div className="flex gap-2 items-start">
              <AlertCircle className="h-5 w-5 text-teal-600 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="font-semibold text-teal-700 mb-2">Recommendations</h4>
                <p className="text-sm text-teal-600">
                  Based on your preferences, we recommend:
                  {powerLevel > controlLevel ? (
                    <span className="block mt-2">
                      • Astrox Series: Perfect for aggressive play and power shots
                    </span>
                  ) : (
                    <span className="block mt-2">
                      • Nanoflare Series: Ideal for control and quick exchanges
                    </span>
                  )}
                  {parseInt(customizations.stringTension) > 28 && (
                    <span className="block mt-2 text-orange-600">
                      • Consider lower tension for better durability
                    </span>
                  )}
                </p>
              </div>
            </div>
          </div>

          <button 
            className="w-full bg-teal-600 text-white py-3 px-4 rounded-lg hover:bg-teal-700 transition duration-300 flex items-center justify-center gap-2"
            onClick={() => {
              // Handle sharing configuration
              alert('Share functionality to be implemented');
            }}
          >
            <Share2 className="h-5 w-5" />
            Share Configuration
          </button>
        </div>
      </div>
    </div>
  );
};

export default RacketCustomizer;