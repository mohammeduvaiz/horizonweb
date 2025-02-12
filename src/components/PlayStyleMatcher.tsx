// PlayStyleMatcher.tsx
import React, { useState } from 'react';
import { ChevronRight, RotateCcw, Trophy, Zap, Shield, Move } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { products } from '../data/shopData';

interface Option {
  value: string;
  label: string;
  icon?: React.ComponentType<any>;
}

interface Question {
  id: string;
  question: string;
  options: Option[];
}

interface PlayStyle {
  title: string;
  description: string;
  racketRecommendations: string[];
  characteristics: string[];
}

const PlayStyleMatcher = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [result, setResult] = useState<PlayStyle | null>(null);

  const questions: Question[] = [
    {
      id: 'shotPreference',
      question: "What's your preferred type of shot?",
      options: [
        { value: 'smash', label: 'Powerful smashes', icon: Zap },
        { value: 'drive', label: 'Fast drives', icon: Move },
        { value: 'drop', label: 'Deceptive drops', icon: ChevronRight },
        { value: 'defense', label: 'Solid defense', icon: Shield }
      ]
    },
    {
      id: 'gameStyle',
      question: "How do you like to win points?",
      options: [
        { value: 'attack', label: 'Aggressive attacks' },
        { value: 'rally', label: 'Long rallies' },
        { value: 'deception', label: 'Deceptive play' },
        { value: 'counter', label: 'Counter-attacks' }
      ]
    },
    {
      id: 'courtPosition',
      question: "Where do you feel most comfortable on court?",
      options: [
        { value: 'rear', label: 'Rear court' },
        { value: 'mid', label: 'Mid court' },
        { value: 'net', label: 'Near the net' },
        { value: 'all', label: 'All areas equally' }
      ]
    },
    {
      id: 'physicalAttribute',
      question: "What's your strongest physical attribute?",
      options: [
        { value: 'power', label: 'Power' },
        { value: 'speed', label: 'Speed' },
        { value: 'stamina', label: 'Stamina' },
        { value: 'reflexes', label: 'Reflexes' }
      ]
    },
    {
      id: 'matchSituation',
      question: "In a crucial point, you're most likely to:",
      options: [
        { value: 'attack', label: 'Go for a winner' },
        { value: 'patient', label: 'Play it safe' },
        { value: 'mixed', label: 'Mix up the play' },
        { value: 'pressure', label: 'Pressure opponent' }
      ]
    }
  ];

  const playStyles = {
    aggressive: {
      title: "Aggressive Attacker",
      description: "You thrive on powerful attacks and creating pressure",
      racketRecommendations: ["Astrox 100ZZ", "Astrox 88D Pro", "Astrox 99 Pro"],
      characteristics: [
        "Power-focused gameplay",
        "Strong smashing ability",
        "Attacking clears",
        "Aggressive drives"
      ]
    },
    technical: {
      title: "Technical Player",
      description: "You excel at precise shots and deceptive play",
      racketRecommendations: ["Nanoflare 800", "Arcsaber 11 Play", "Nanoflare 700 Game"],
      characteristics: [
        "Excellent shot control",
        "Deceptive play",
        "Varied shot selection",
        "Technical precision"
      ]
    },
    defensive: {
      title: "Defensive Specialist",
      description: "You excel at retrieving shots and counter-attacks",
      racketRecommendations: ["Nanoflare 1000Z", "Duora Strike", "Nanoflare Nextage"],
      characteristics: [
        "Strong defense",
        "Counter-attacking ability",
        "Good court coverage",
        "Patient gameplay"
      ]
    },
    allround: {
      title: "All-Round Player",
      description: "You have a balanced game with no obvious weaknesses",
      racketRecommendations: ["Astrox 88S Pro", "Arcsaber 7 Pro", "Astrox 77 Pro"],
      characteristics: [
        "Balanced gameplay",
        "Adaptable style",
        "All-court coverage",
        "Varied shot selection"
      ]
    }
  };

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentStep].id]: answer
    }));

    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      analyzePlayStyle();
    }
  };

  const analyzePlayStyle = () => {
    let scores = {
      aggressive: 0,
      technical: 0,
      defensive: 0,
      allround: 0
    };

    // Score based on shot preference
    if (answers.shotPreference === 'smash') scores.aggressive += 2;
    if (answers.shotPreference === 'drop') scores.technical += 2;
    if (answers.shotPreference === 'defense') scores.defensive += 2;
    if (answers.shotPreference === 'drive') scores.allround += 2;

    // Score based on game style
    if (answers.gameStyle === 'attack') scores.aggressive += 2;
    if (answers.gameStyle === 'deception') scores.technical += 2;
    if (answers.gameStyle === 'counter') scores.defensive += 2;
    if (answers.gameStyle === 'rally') scores.allround += 2;

    // Court position influence
    if (answers.courtPosition === 'rear') scores.aggressive += 1;
    if (answers.courtPosition === 'net') scores.technical += 1;
    if (answers.courtPosition === 'mid') scores.defensive += 1;
    if (answers.courtPosition === 'all') scores.allround += 1;

    // Physical attributes influence
    if (answers.physicalAttribute === 'power') scores.aggressive += 1;
    if (answers.physicalAttribute === 'speed') scores.technical += 1;
    if (answers.physicalAttribute === 'stamina') scores.defensive += 1;
    if (answers.physicalAttribute === 'reflexes') scores.allround += 1;

    // Match situation influence
    if (answers.matchSituation === 'attack') scores.aggressive += 1;
    if (answers.matchSituation === 'mixed') scores.technical += 1;
    if (answers.matchSituation === 'patient') scores.defensive += 1;
    if (answers.matchSituation === 'pressure') scores.allround += 1;

    // Find highest score
    const playStyle = Object.entries(scores).reduce((a, b) => 
      b[1] > a[1] ? b : a
    )[0] as keyof typeof playStyles;

    setResult(playStyles[playStyle]);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setAnswers({});
    setResult(null);
  };

  // Function to get product details
  const getProductDetails = (racketName: string) => {
    return products.find(p => p.name.includes(racketName));
  };

  if (result) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Result Header */}
          <div className="bg-teal-600 px-6 py-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <Trophy className="h-12 w-12" />
            </div>
            <h3 className="text-2xl font-bold text-center mb-2">{result.title}</h3>
            <p className="text-center text-teal-100">{result.description}</p>
          </div>

          <div className="p-6">
            {/* Playing Characteristics */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Your Playing Characteristics:</h4>
              <ul className="space-y-2">
                {result.characteristics.map((trait, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <ChevronRight className="h-4 w-4 text-teal-500 mr-2" />
                    {trait}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recommended Rackets */}
            <div className="mb-8">
              <h4 className="font-semibold text-gray-900 mb-4">Recommended Rackets:</h4>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {result.racketRecommendations.map((racketName, index) => {
                  const product = getProductDetails(racketName);
                  if (!product) return null;
                  
                  return (
                    <div 
                      key={index} 
                      onClick={() => navigate(`/product/${product.id}`)}
                      className="bg-gray-50 rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="aspect-w-1 aspect-h-1 w-full">
                        <img 
                          src={product.image} 
                          alt={product.name}
                          className="w-full h-48 object-contain p-4"
                        />
                      </div>
                      <div className="p-4">
                        <h5 className="font-semibold text-teal-700 mb-1">{product.name}</h5>
                        <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
                        <p className="text-teal-600 font-semibold">{product.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Retake Quiz Button */}
            <button
              onClick={resetQuiz}
              className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-700 py-3 px-4 rounded-lg hover:bg-gray-200 transition duration-300"
            >
              <RotateCcw className="h-4 w-4" />
              Retake Quiz
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      {/* Quiz Header */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <h2 className="text-4xl font-bold text-teal-700 mb-4">
          Discover Your Badminton DNA
        </h2>
        <p className="text-xl text-gray-600 mb-6">
          Take our expert-designed quiz to uncover your unique playing style and get personalized racket recommendations
        </p>
        <div className="flex justify-center gap-8 text-gray-600">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-teal-500 rounded-full"></span>
            <span>5 Quick Questions</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-teal-500 rounded-full"></span>
            <span>Instant Analysis</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 bg-teal-500 rounded-full"></span>
            <span>Expert Recommendations</span>
          </div>
        </div>
      </div>

      {/* Quiz Content */}
      <div className="bg-white rounded-xl shadow-lg p-6">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Find Your Play Style</h2>
            <span className="text-sm text-gray-500">
              Question {currentStep + 1} of {questions.length}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-teal-600 rounded-full h-2 transition-all duration-300"
              style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            {questions[currentStep].question}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {questions[currentStep].options.map((option) => (
              <button
                key={option.value}
                onClick={() => handleAnswer(option.value)}
                className="flex items-center p-4 border-2 border-gray-200 rounded-lg hover:border-teal-500 hover:bg-teal-50 transition duration-300"
              >
                {option.icon && <option.icon className="h-5 w-5 text-teal-600 mr-3" />}
                <span className="text-gray-700">{option.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayStyleMatcher;