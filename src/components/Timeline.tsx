'use client';

import { 
  CheckIcon, 
  GitBranchIcon, 
  DatabaseIcon, 
  ServerIcon, 
  MessageSquareIcon,
  UsersIcon,
  TestTubeIcon,
  FileCodeIcon,
  ShieldIcon,
  NetworkIcon,
  GamepadIcon,
  BrainIcon
} from 'lucide-react';

export default function Timeline() {
  const timelineEvents = [
    {
      title: 'Project Initialization',
      date: 'March 1-7, 2025 - Initial Setup',
      description: [
        'Next.js project environment setup',
        'Socket.io server configuration',
        'Winston logging system setup',
        'Development and production environment variables'
      ],
      details: 'Complete app.js basic setup, including HTTP server and WebSocket configuration',
      Icon: GitBranchIcon,
      color: 'blue',
      files: ['app.js', 'config/logger.js']
    },
    {
      title: 'Core Services Development',
      date: 'March 8-21, 2025 - Core Services',
      description: [
        'EventBroadcaster service implementation',
        'RoomService management implementation',
        'GameService logic implementation',
        'Inter-service communication mechanism'
      ],
      details: 'Implement core service classes in services/ directory, handling game core logic',
      Icon: ServerIcon,
      color: 'green',
      files: ['services/EventBroadcaster.js', 'services/RoomService.js', 'services/GameService.js']
    },
    {
      title: 'Data Models Design & Implementation',
      date: 'March 22-28, 2025 - Data Models',
      description: [
        'User model (user info and status)',
        'Room model (room management and status)',
        'Game model (game logic and status)',
        'GlobalState management'
      ],
      details: 'Complete data models in models/ directory, including core game data structures',
      Icon: DatabaseIcon,
      color: 'purple',
      files: ['models/User.js', 'models/Room.js', 'models/Game.js', 'models/GlobalState.js']
    },
    {
      title: 'Socket Communication System',
      date: 'March 29 - April 4, 2025 - WebSocket Implementation',
      description: [
        'Socket event handler setup',
        'Real-time communication mechanism',
        'Room event handling',
        'Game event handling'
      ],
      details: 'Implement handlers/socketHandlers.js, managing all Socket.io events',
      Icon: NetworkIcon,
      color: 'indigo',
      files: ['handlers/socketHandlers.js']
    },
    {
      title: 'Authentication System',
      date: 'April 5-11, 2025 - Authentication',
      description: [
        'User authentication middleware',
        'Session management',
        'User status tracking',
        'AI player handling'
      ],
      details: 'Complete middleware/auth.js, ensuring secure user authentication',
      Icon: ShieldIcon,
      color: 'yellow',
      files: ['middleware/auth.js']
    },
    {
      title: 'Room Management System',
      date: 'April 12-18, 2025 - Room Management',
      description: [
        'Room creation and destruction',
        'User join/leave handling',
        'Owner privileges management',
        'Room state synchronization'
      ],
      details: 'Implement complete room lifecycle management',
      Icon: UsersIcon,
      color: 'red',
      files: ['services/RoomService.js']
    },
    {
      title: 'Game Core Logic',
      date: 'April 19 - May 2, 2025 - Game Logic',
      description: [
        'Role assignment system',
        'Game phase management',
        'Voting system implementation',
        'Win/Loss condition logic'
      ],
      details: 'Implement core gameplay mechanics for Werewolf game',
      Icon: GamepadIcon,
      color: 'pink',
      files: ['services/GameService.js', 'models/Game.js']
    },
    {
      title: 'AI System Implementation',
      date: 'May 3-9, 2025 - AI Implementation',
      description: [
        'AI player behavior logic',
        'Decision-making system',
        'AI role special handling',
        'AI message generation'
      ],
      details: 'Develop intelligent decision system for AI players',
      Icon: BrainIcon,
      color: 'cyan',
      files: ['services/GameService.js']
    },
    {
      title: 'Messaging System',
      date: 'May 10-16, 2025 - Messaging System',
      description: [
        'Real-time message broadcasting',
        'System notification implementation',
        'Rate limiting',
        'Message history management'
      ],
      details: 'Implement all in-game communication features',
      Icon: MessageSquareIcon,
      color: 'orange',
      files: ['services/EventBroadcaster.js']
    },
    {
      title: 'Data Validation & Security',
      date: 'May 17-23, 2025 - Validation & Security',
      description: [
        'Joi validator implementation',
        'Input data validation',
        'Security checks',
        'Error handling'
      ],
      details: 'Implement request data validation and security mechanisms using Joi',
      Icon: ShieldIcon,
      color: 'emerald',
      files: ['validators/Validator.js']
    },
    {
      title: 'Testing & Optimization',
      date: 'May 24-30, 2025 - Testing & Optimization',
      description: [
        'Unit test writing',
        'Integration testing',
        'Performance optimization',
        'Load testing'
      ],
      details: 'Comprehensive testing and performance optimization',
      Icon: TestTubeIcon,
      color: 'violet',
      files: ['test.py']
    }
  ];

  return (
    <div className="relative flex-1 overflow-y-auto px-4">
      <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200"></div>
      <div className="space-y-12">
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative flex items-start">
            <div className={`absolute -left-4 w-8 h-8 bg-${event.color}-500 rounded-full flex items-center justify-center z-10`}>
              <event.Icon className="w-4 h-4 text-white" />
            </div>
            <div className="ml-8 bg-white p-6 rounded-lg shadow-sm border border-gray-100 w-full">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-xl text-gray-800">{event.title}</h3>
                <span className="text-sm text-gray-500">{event.date}</span>
              </div>
              <ul className="mt-3 space-y-2">
                {event.description.map((item, i) => (
                  <li key={i} className="flex items-center text-gray-600">
                    <CheckIcon className="w-4 h-4 mr-2 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-600">{event.details}</p>
              <div className="mt-4 pt-3 border-t border-gray-100">
                <p className="text-sm text-gray-500">Related Files:</p>
                <div className="mt-1 flex flex-wrap gap-2">
                  {event.files.map((file, i) => (
                    <span key={i} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      <FileCodeIcon className="w-3 h-3 mr-1" />
                      {file}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}