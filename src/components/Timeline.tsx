import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    phase: "Project Framework and Game Design",
    date: "2024.3.1 - 2024.3.15",
    color: "bg-blue-500",
    icon: "🎮",
    content: [
      {
        title: "Game Core Mechanism Design (3.1-3.7)",
        items: [
          {
            text: "Werewolf Game Rules Analysis",
            description: "Conducted in-depth research on classic Werewolf game rules, including character settings, game flow, and win/loss conditions. Analyzed different character abilities and balance, designed rule variants suitable for online gaming. Determined basic game configurations and character ratios based on player experience and game pacing."
          },
          {
            text: "Multiplayer Online Feature Planning",
            description: "Designed a room-based multiplayer game system supporting multiple game rooms running simultaneously with state management. Planned real-time communication mechanisms ensuring timely synchronization of game states and player actions. Designed reconnection mechanisms to maintain game process continuity and data consistency."
          },
          {
            text: "AI Player System Design",
            description: "Designed AI player behavior patterns and decision systems, including character traits, voting strategies, and skill usage logic. Planned AI player interaction methods enabling natural game participation and rational decision-making. Designed AI difficulty level system providing different gaming experiences."
          }
        ]
      },
      {
        title: "Technical Architecture Design (3.8-3.14)",
        items: [
          {
            text: "Frontend Architecture Planning",
            description: "Selected Next.js as the frontend framework, utilizing its SSR features to enhance first-screen loading performance and SEO. Designed component-based UI architecture implementing code modularity and reusability. Planned state management strategy ensuring effective management of complex game states."
          },
          {
            text: "Backend Architecture Planning",
            description: "Initially chose Python as backend language, designed WebSocket-based real-time communication architecture. Planned data models and business logic layers ensuring accurate game state management and synchronization. Designed access control and security mechanisms protecting game data and user information."
          },
          {
            text: "Data Flow Design",
            description: "Designed frontend-backend data interaction formats, determined Socket.io event types and data structures. Planned state synchronization strategies handling data consistency during network delays and disconnections. Designed data persistence solutions supporting game records and user data storage."
          }
        ]
      },
      {
        title: "UI Interface Design (3.15)",
        items: [
          {
            text: "Main Page Design",
            description: "Designed responsive main page layout including game lobby, personal information, and function entry areas. Planned room list display methods supporting room filtering and quick join functionality. Designed user information display and operation interface providing good interaction experience."
          },
          {
            text: "Room System Interface",
            description: "Designed game room interface layout including player list, ready status, and room settings areas. Planned chat system UI design supporting in-game communication and information display. Designed host special function areas facilitating room management and game control."
          },
          {
            text: "Game Interface Design",
            description: "Designed main interface during gameplay including player status, game phases, and operation panel areas. Planned character skill usage interface ensuring operation convenience and clarity. Designed voting system interface supporting various voting methods and result display."
          },
          {
            text: "Interaction Flow Design",
            description: "Designed user operation flows ensuring natural transitions between functions. Planned prompt and feedback mechanisms helping users understand game states and operation results. Designed animations and transition effects enhancing game visual experience and immersion."
          }
        ]
      }
    ]
  },
  {
    phase: "Next.js Frontend Development",
    date: "2024.3.17 - 2024.3.20",
    color: "bg-green-500",
    icon: "💻",
    content: [
      {
        title: "Main Page Development (3.17)",
        items: [
          {
            text: "Project Foundation Setup",
            description: "Initialized project using create-next-app, configured TypeScript and Tailwind CSS environment. Established App Router-based project structure, including page routing and layout component planning. Implemented environment variable configuration and development environment hot-reload functionality."
          },
          {
            text: "Navigation Component Development",
            description: "Implemented responsive navigation bar in /components/Navbar.tsx, supporting user login status display and page navigation. Integrated user avatar and dropdown menu functionality, providing quick operation access. Added mobile-adapted hamburger menu and expansion effects."
          },
          {
            text: "Room List Component",
            description: "Developed room list display component in /components/RoomList.tsx, supporting pagination and dynamic loading. Implemented room status indicators and quick join functionality, including real-time display of room occupancy and game status. Added room search and filtering functionality, optimizing user search experience."
          },
          {
            text: "Room Creation Functionality",
            description: "Developed room creation form component, supporting custom room names and game settings. Implemented room parameter validation and submission functionality, including error prompts and feedback mechanisms. Added quick creation and advanced settings modes to meet different user needs."
          }
        ]
      },
      {
        title: "Room Preparation Page (3.19)",
        items: [
          {
            text: "Player List Management",
            description: "Implemented player list component in /components/game_ready/PlayerList.tsx, displaying player status and ready states. Developed player join/leave animation effects, enhancing visual experience. Implemented host indicators and kick functionality, strengthening room management."
          },
          {
            text: "Chat System Implementation",
            description: "Developed in-room chat system in /components/game_ready/ChatArea.tsx, supporting real-time message sending and history display. Implemented message type differentiation and style optimization, including different displays for system and user messages. Added emoji support and message notification functionality."
          },
          {
            text: "Room Settings Panel",
            description: "Developed /components/game_ready/RoomSettings.tsx component, allowing hosts to adjust game parameters and rules. Implemented role configuration and player count settings, including real-time preview and validation. Added preset configuration functionality for quick game rule setup."
          },
          {
            text: "Ready State Control",
            description: "Implemented player ready state management in /components/game_ready/PlayerControls.tsx. Developed ready/cancel ready animation effects and state synchronization. Implemented all-player ready detection and game start countdown functionality."
          }
        ]
      },
      {
        title: "Game Page (3.20)",
        items: [
          {
            text: "Game Main Interface Construction",
            description: "Developed game main interface framework in /components/GameRoom.tsx, integrating all game-related components. Implemented different game phase interface switching and animation transition effects. Designed responsive layout adapting to different screen sizes."
          },
          {
            text: "Role Information Display",
            description: "Developed role information display component, including identity descriptions and skill instructions. Implemented role skill usage interface and operation prompts. Added role special status visual effects and notification information."
          },
          {
            text: "Voting System Interface",
            description: "Implemented voting system interactive interface in /components/GameRoom_UI.tsx, supporting multiple voting methods. Developed voting animations and result display effects, enhancing game experience. Implemented voting countdown and real-time statistics functionality."
          },
          {
            text: "Game State Management",
            description: "Used React Context to implement global game state management, ensuring component state synchronization. Developed game phase switching animation effects and prompt system. Implemented game progress visualization and round recording."
          }
        ]
      }
    ]
  },
  {
    phase: "Python Backend Development",
    date: "2024.4.5 - 2024.5.11",
    color: "bg-yellow-500",
    icon: "🐍",
    content: [
      {
        title: "Login Module Development (4.5-4.8)",
        items: [
          {
            text: "User Authentication System",
            description: "Built authentication service using Python FastAPI framework, implemented JWT-based user authentication mechanism. Designed user data models and database structure, including user basic information, game statistics, and permission management. Implemented password encryption storage and Token management, ensuring user data security."
          },
          {
            text: "Session Management System",
            description: "Developed Redis-based session storage system, implementing distributed management of user login states. Designed session expiration and auto-renewal mechanisms, solving multi-device login and login state synchronization issues. Implemented session hijacking protection and abnormal login detection functionality."
          },
          {
            text: "User Data Service",
            description: "Implemented user data CRUD interfaces, supporting user information query and update operations. Developed user game record statistics functionality, including real-time updates of win rates and game counts. Added user avatar upload and management functionality, supporting personalization settings."
          }
        ]
      },
      {
        title: "Room System Implementation (4.9-4.11)",
        items: [
          {
            text: "Room State Management",
            description: "Designed and implemented room state machine, managing room creation, operation, and end lifecycle. Developed room data memory cache system, improving room information access efficiency. Implemented room auto-cleanup mechanism, handling abnormal disconnections and empty rooms."
          },
          {
            text: "Player Management System",
            description: "Implemented real-time player state management within rooms, including ready status, role assignment, and game states. Developed player entry/exit event handling system, ensuring room state real-time synchronization. Added host transfer and kick functionality permission control."
          },
          {
            text: "Room Configuration Service",
            description: "Developed room settings configuration system, supporting custom game rules and parameter settings. Implemented configuration validation and dynamic update mechanisms, ensuring game rule consistency. Added configuration template functionality, supporting quick creation of specific game room types."
          }
        ]
      },
      {
        title: "Game Core Functionality Development (4.12-4.16)",
        items: [
          {
            text: "Role Assignment System",
            description: "Implemented weight-based role random assignment algorithm, ensuring balanced game role distribution. Developed role skill effect processing system, supporting different character special ability implementations. Designed role information encryption transmission mechanism, preventing cheating behavior."
          },
          {
            text: "AI Decision Engine",
            description: "Developed rule-based AI decision system, simulating different role game behaviors and strategies. Implemented AI player probability voting mechanism, increasing game uncertainty and entertainment value."
          },
          {
            text: "Game State Synchronization",
            description: "Designed real-time game state synchronization mechanism, ensuring all players see consistent game information. Implemented game event broadcast system, handling various game action synchronization and display."
          }
        ]
      },
      {
        title: "Communication System Implementation (4.17-4.23)",
        items: [
          {
            text: "WebSocket Service",
            description: "Implemented real-time communication service using Python WebSocket library, supporting bidirectional game state data transmission. Developed message queue system, handling message delivery and order guarantee in high-concurrency scenarios. Implemented heartbeat detection mechanism, timely discovering and handling disconnections."
          },
          {
            text: "Message Broadcast System",
            description: "Designed multi-level message broadcast mechanism, supporting global, room, and individual level message sending. Implemented message priority queue, ensuring timely delivery of important messages. Developed message compression and batch sending functionality, optimizing network transmission efficiency."
          },
          {
            text: "Error Handling Mechanism",
            description: "Implemented global error capture and handling system, including network exceptions and game logic error handling. Developed error log recording and analysis functionality, helping quick problem location and resolution. Added auto-recovery mechanism, improving system reliability."
          }
        ]
      },
      {
        title: "Game Logic Implementation (4.24-5.10)",
        items: [
          {
            text: "Voting System",
            description: "Implemented multi-round voting processing logic, supporting daytime voting and werewolf night voting. Developed vote result statistics and determination system, handling tie votes and special cases. Added vote validity verification, preventing abnormal voting behavior."
          },
          {
            text: "Win/Loss Determination",
            description: "Designed complex win/loss determination logic, considering multiple game ending conditions. Implemented special role victory condition determination, supporting individual and faction victory determination. Developed result broadcast and statistics system, recording game results."
          },
          {
            text: "Game Flow Control",
            description: "Implemented complete game flow control system, managing day/night alternation and round progression. Developed role action order control mechanism, ensuring orderly game progression. Added timeout handling and automatic process advancement functionality."
          }
        ]
      },
      {
        title: "Bug Fixes and Optimization (5.11)",
        items: [
          {
            text: "Logic Error Fixes",
            description: "Fixed role skill usage state synchronization issues, ensuring skill effect accuracy. Resolved race condition issues caused by simultaneous multiple operations, improving system stability. Fixed vote counting errors and display anomalies in the voting system."
          },
          {
            text: "Performance Optimization",
            description: "Optimized room state update performance, reducing unnecessary data transmission and processing. Improved AI decision computation efficiency, reducing server load. Optimized database access patterns, improving query efficiency."
          },
          {
            text: "Exception Handling Enhancement",
            description: "Enhanced data consistency guarantee during network exceptions, improved reconnection mechanism. Enhanced error prompt messages, providing clearer problem descriptions and resolution suggestions. Added more log recording points, facilitating problem tracking."
          }
        ]
      }
    ]
  },
  {
    phase: "Node.js Migration and Integration",
    date: "2024.5.3 - 2024.6.17",
    color: "bg-purple-500",
    icon: "⚡",
    content: [
      {
        title: "Node.js Server Setup (5.3)",
        items: [
          {
            text: "Server Framework Setup",
            description: "Built new server architecture using Express.js framework, configured development and production environment infrastructure. Implemented routing system and middleware chain, including request parsing, CORS handling, and security protection. Established modular project structure, separating business logic into independent service modules."
          },
          {
            text: "Database Migration",
            description: "Migrated original Python backend data structures to MongoDB database, designed data models more suitable for JavaScript. Implemented database connection pool and query optimization, improving data access efficiency. Developed data migration scripts, ensuring complete migration of historical data."
          },
          {
            text: "Logging System Construction",
            description: "Built multi-level logging system using Winston, supporting error tracking and performance monitoring. Implemented log classification storage and periodic archiving functionality, facilitating system maintenance and problem diagnosis. Integrated request chain tracking, providing complete call chain analysis."
          }
        ]
      },
      {
        title: "Socket.io Service Integration (5.4)",
        items: [
          {
            text: "Real-time Communication Framework",
            description: "Integrated Socket.io to implement WebSocket communication layer, supporting bidirectional real-time communication between server and client. Developed custom event system, handling various real-time events in game. Implemented room broadcasting and private chat functionality, optimizing message delivery efficiency."
          },
          {
            text: "Connection Management System",
            description: "Implemented Socket connection lifecycle management, including connection establishment, heartbeat detection, and disconnection handling. Developed session recovery mechanism, supporting client reconnection and state recovery. Added connection pool management, optimizing performance in high-concurrency scenarios."
          }
        ]
      },
      {
        title: "User System Integration (5.5-5.15)",
        items: [
          {
            text: "Authentication Migration",
            description: "Restructured Python version authentication system to JWT-based authentication mechanism, supporting multi-endpoint login and state synchronization. Implemented session storage, providing better scalability and performance. Developed permission middleware, refining user access control."
          },
          {
            text: "Frontend Integration",
            description: "Restructured frontend login components, adapting to new authentication process and data formats. Implemented login state persistence, providing smoother user experience. Developed login exception handling and prompt system, improving system usability."
          }
        ]
      },
      {
        title: "Room System Connection (5.16-5.19)",
        items: [
          {
            text: "Room Management Migration",
            description: "Migrated Python version room management logic to Node.js environment, restructured room state management mechanism. Implemented Socket.io-based room real-time state synchronization, providing more efficient data transmission. Developed room event handling system, unified management of room lifecycle."
          },
          {
            text: "Room List Service",
            description: "Developed room list cache update mechanism, providing real-time room status queries. Implemented room filtering and sorting functionality, optimizing user search experience. Added room recommendation algorithm, recommending suitable rooms based on user preferences."
          },
          {
            text: "Frontend Component Adaptation",
            description: "Updated room-related frontend components, adapting to new data structures and communication methods. Implemented room state real-time updates and animation effects, enhancing user experience. Optimized room operation response speed, reducing user wait times."
          }
        ]
      },
      {
        title: "Game System Integration (5.20-now)",
        items: [
          {
            text: "AI Substitution System (5.20-6.9)",
            description: "Migrated Python version AI decision system to Node.js environment, implemented dynamic AI player join and exit functionality."
          },
          {
            text: "Role Assignment System (6.10-6.16)",
            description: "Restructured role assignment algorithm with Node.js. Implemented role skill effect processing system, ensuring skill usage accuracy."
          },
          {
            text: "Voting and State System (6.17-now)",
            description: "Integrated Python version voting system and game state management, implemented smoother game flow control. Developed vote result real-time statistics and display functionality, providing more intuitive feedback. Implemented automatic game state progression mechanism, optimizing game pacing."
          }
        ]
      },
      {
        title: "Planned Work",
        items: [
          {
            text: "Complete Game Logic",
            description: "Plan to enhance game core logic, including special role skills and complex scenario handling. Prepare to add more game modes and rule variants, increasing game playability. Design game balance adjustment mechanism, optimizing game experience based on data analysis."
          },
          {
            text: "AI System Upgrade",
            description: "Plan to upgrade AI decision system, introducing Large Language Model to improve AI intelligence. Prepare to develop AI emotion simulation system, making AI behavior more similar to real players. Design AI difficulty dynamic adjustment mechanism, adapting to different player skill levels."
          },
          {
            text: "System Optimization",
            description: "Plan to implement more reliable reconnection mechanism, supporting complete game state recovery. Prepare to optimize server architecture, improving system concurrent processing capability. Design distributed deployment solution, supporting larger scale user access."
          }
        ]
      }
    ]
  }
];

const Timeline = () => {
  const [expandedPhase, setExpandedPhase] = useState(null);
  const [expandedTitle, setExpandedTitle] = useState(null);

  return (
    <div className="max-w-7xl mx-auto p-6">      
      <div className="relative">
        {/* 时间轴线 */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-200" />

        {/* 阶段卡片 */}
        {timelineData.map((phase, phaseIndex) => (
          <motion.div 
            key={phaseIndex} 
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: phaseIndex * 0.2 }}
          >
            {/* 阶段标题卡片 */}
            <div 
              className="relative flex items-center cursor-pointer group"
              onClick={() => setExpandedPhase(expandedPhase === phaseIndex ? null : phaseIndex)}
            >
              {/* 时间点图标 */}
              <motion.div 
                className={`w-16 h-16 rounded-full ${phase.color} flex items-center justify-center text-2xl shadow-lg z-10`}
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {phase.icon}
              </motion.div>
              
              {/* 阶段信息 */}
              <div className="ml-8 bg-white rounded-lg shadow-lg p-6 flex-grow hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{phase.phase}</h2>
                    <p className="text-gray-500">{phase.date}</p>
                  </div>
                  {expandedPhase === phaseIndex ? <ChevronDown className="w-6 h-6" /> : <ChevronRight className="w-6 h-6" />}
                </div>
              </div>
            </div>

            {/* 展开的内容 */}
            {expandedPhase === phaseIndex && (
              <motion.div 
                className="ml-24 mt-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
              >
                {phase.content.map((section, sectionIndex) => (
                  <motion.div 
                    key={sectionIndex} 
                    className="mb-6"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: sectionIndex * 0.1 }}
                  >
                    {/* 子标题 */}
                    <div 
                      className="bg-gray-50 p-4 rounded-lg cursor-pointer flex items-center justify-between hover:bg-gray-100 transition-colors duration-200"
                      onClick={() => setExpandedTitle(expandedTitle === `${phaseIndex}-${sectionIndex}` ? null : `${phaseIndex}-${sectionIndex}`)}
                    >
                      <h3 className="font-semibold text-gray-700">{section.title}</h3>
                      {expandedTitle === `${phaseIndex}-${sectionIndex}` ? <ChevronDown className="w-5 h-5" /> : <ChevronRight className="w-5 h-5" />}
                    </div>

                    {/* 展开的详细内容 */}
                    {expandedTitle === `${phaseIndex}-${sectionIndex}` && (
                      <motion.div 
                        className="mt-4 space-y-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      >
                        {section.items.map((item, itemIndex) => (
                          <motion.div 
                            key={itemIndex} 
                            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow duration-200"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          >
                            <h4 className="font-medium text-lg mb-2 text-gray-800">{item.text}</h4>
                            <p className="text-gray-600 leading-relaxed">{item.description}</p>
                          </motion.div>
                        ))}
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </motion.div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;