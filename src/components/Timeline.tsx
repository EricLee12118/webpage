import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

// 完整的项目时间线数据
const timelineData = [
  {
    phase: "项目框架与游戏设计",
    date: "2024.3.1 - 2024.3.15",
    color: "bg-blue-500",
    icon: "🎮",
    content: [
      {
        title: "游戏核心机制设计 (3.1-3.7)",
        items: [
          {
            text: "狼人杀游戏规则分析",
            description: "深入研究经典狼人杀游戏规则，包括角色设定、游戏流程和胜负判定条件。分析不同角色的技能特点和平衡性，设计适合在线游戏的规则变体。基于玩家体验和游戏节奏，确定了基础游戏配置和角色比例。"
          },
          {
            text: "多人在线功能规划",
            description: "设计基于房间的多人游戏系统，支持多个游戏房间同时运行和状态管理。规划实时通信机制，确保游戏状态的及时同步和玩家操作的实时响应。设计断线重连机制，保证游戏进程的连续性和数据一致性。"
          },
          {
            text: "AI玩家系统设计",
            description: "设计AI玩家的行为模式和决策系统，包括角色特征、投票策略和技能使用逻辑。规划AI玩家的交互方式，使其能够自然地参与游戏并做出合理的决策。设计AI难度等级系统，提供不同级别的游戏体验。"
          }
        ]
      },
      {
        title: "技术架构设计 (3.8-3.14)",
        items: [
          {
            text: "前端架构规划",
            description: "选择Next.js作为前端框架，利用其SSR特性提升首屏加载性能和SEO效果。设计基于组件的UI架构，实现代码的模块化和可重用性。规划状态管理策略，确保复杂游戏状态的有效管理。"
          },
          {
            text: "后端架构规划",
            description: "初期选择Python作为后端语言，设计基于WebSocket的实时通信架构。规划数据模型和业务逻辑层，确保游戏状态的准确管理和同步。设计权限控制和安全机制，保护游戏数据和用户信息。"
          },
          {
            text: "数据流设计",
            description: "设计前后端数据交互格式，确定Socket.io事件类型和数据结构。规划状态同步策略，处理网络延迟和断线情况下的数据一致性。设计数据持久化方案，支持游戏记录和用户数据的存储。"
          }
        ]
      },
      {
        title: "UI界面设计 (3.15)",
        items: [
          {
            text: "主页面设计",
            description: "设计响应式的主页面布局，包含游戏大厅、个人信息和功能入口等区域。规划房间列表展示方式，支持房间筛选和快速加入功能。设计用户信息展示和操作界面，提供良好的交互体验。"
          },
          {
            text: "房间系统界面",
            description: "设计游戏房间的界面布局，包括玩家列表、准备状态和房间设置等功能区域。规划聊天系统的UI设计，支持游戏内交流和信息显示。设计房主特殊功能区域，方便房间管理和游戏控制。"
          },
          {
            text: "游戏界面设计",
            description: "设计游戏进行时的主界面，包括玩家状态、游戏阶段和操作面板等区域。规划角色技能使用界面，确保操作的便捷性和清晰度。设计投票系统界面，支持多种投票方式和结果显示。"
          },
          {
            text: "交互流程设计",
            description: "设计用户操作流程，确保各个功能之间的自然过渡和连贯性。规划提示和反馈机制，帮助用户理解游戏状态和操作结果。设计动画和过渡效果，提升游戏的视觉体验和沉浸感。"
          }
        ]
      }
    ]
  },
  {
    phase: "Next.js前端开发",
    date: "2024.3.17 - 2024.3.20",
    color: "bg-green-500",
    icon: "💻",
    content: [
      {
        title: "主页面开发 (3.17)",
        items: [
          {
            text: "项目基础搭建",
            description: "使用create-next-app初始化项目,配置TypeScript和Tailwind CSS环境。建立了基于App Router的项目结构,包括页面路由和布局组件的规划。实现了环境变量配置和开发环境的热重载功能。"
          },
          {
            text: "导航组件开发",
            description: "在/components/Navbar.tsx中实现了响应式导航栏,支持用户登录状态显示和页面导航。集成了用户头像和下拉菜单功能,提供快捷操作入口。添加了移动端适配的汉堡菜单和展开效果。"
          },
          {
            text: "房间列表组件",
            description: "在/components/RoomList.tsx中开发了房间列表显示组件,支持分页和动态加载。实现了房间状态标识和快速加入功能,包括房间人数和游戏状态的实时显示。添加了房间搜索和筛选功能,优化用户查找体验。"
          },
          {
            text: "创建房间功能",
            description: "开发了房间创建表单组件,支持自定义房间名称和游戏设置。实现了房间参数的验证和提交功能,包括错误提示和反馈机制。添加了快速创建和高级设置两种模式,满足不同用户需求。"
          }
        ]
      },
      {
        title: "房间准备页面 (3.19)",
        items: [
          {
            text: "玩家列表管理",
            description: "在/components/game_ready/PlayerList.tsx中实现了玩家列表组件,显示玩家状态和准备情况。开发了玩家加入/退出的动画效果,提升视觉体验。实现了房主标识和踢人功能,加强房间管理。"
          },
          {
            text: "聊天系统实现",
            description: "在/components/game_ready/ChatArea.tsx中开发了房间内聊天系统,支持实时消息发送和历史记录显示。实现了消息类型区分和样式优化,包括系统消息和用户消息的不同展示。添加了表情包支持和消息提醒功能。"
          },
          {
            text: "房间设置面板",
            description: "开发了/components/game_ready/RoomSettings.tsx组件,允许房主调整游戏参数和规则。实现了角色配置和人数设置功能,包括实时预览和验证。添加了预设配置功能,方便快速设置游戏规则。"
          },
          {
            text: "准备状态控制",
            description: "在/components/game_ready/PlayerControls.tsx中实现了玩家准备状态管理。开发了准备/取消准备的动画效果和状态同步。实现了全员准备检测和游戏开始倒计时功能。"
          }
        ]
      },
      {
        title: "游戏页面 (3.20)",
        items: [
          {
            text: "游戏主界面构建",
            description: "在/components/GameRoom.tsx中开发了游戏主界面框架,整合了所有游戏相关组件。实现了不同游戏阶段的界面切换和动画过渡效果。设计了响应式布局,适配不同屏幕尺寸。"
          },
          {
            text: "角色信息展示",
            description: "开发了角色信息显示组件,包括身份描述和技能说明。实现了角色技能使用界面和操作提示。添加了角色特殊状态的视觉效果和提示信息。"
          },
          {
            text: "投票系统界面",
            description: "在/components/GameRoom_UI.tsx中实现了投票系统的交互界面,支持多种投票方式。开发了投票动画和结果展示效果,增强游戏体验。实现了投票倒计时和实时统计功能。"
          },
          {
            text: "游戏状态管理",
            description: "使用React Context实现了游戏状态的全局管理,确保组件间的状态同步。开发了游戏阶段切换的动画效果和提示系统。实现了游戏进程的可视化展示和回合记录。"
          }
        ]
      }
    ]
  },
  {
    phase: "Python后端开发",
    date: "2024.4.5 - 2024.5.11",
    color: "bg-yellow-500",
    icon: "🐍",
    content: [
      {
        title: "登录模块开发 (4.5-4.8)",
        items: [
          {
            text: "用户认证系统",
            description: "使用Python FastAPI框架搭建认证服务,实现了基于JWT的用户认证机制。设计了用户数据模型和数据库结构,包括用户基本信息、游戏统计和权限管理。实现了密码加密存储和Token管理,确保用户数据安全。"
          },
          {
            text: "会话管理系统",
            description: "开发了基于Redis的会话存储系统,实现用户登录状态的分布式管理。设计了会话过期和自动续期机制,解决了多设备登录和登录状态同步问题。实现了会话劫持防护和异常登录检测功能。"
          },
          {
            text: "用户数据服务",
            description: "实现了用户数据的CRUD接口,支持用户信息的查询和更新操作。开发了用户游戏记录统计功能,包括胜率、场次等数据的实时更新。添加了用户头像上传和管理功能,支持个性化设置。"
          }
        ]
      },
      {
        title: "房间系统实现 (4.9-4.11)",
        items: [
          {
            text: "房间状态管理",
            description: "设计并实现了房间状态机,管理房间的创建、运行、结束等生命周期。开发了房间数据的内存缓存系统,提高房间信息访问效率。实现了房间自动清理机制,处理异常断开和空房间情况。"
          },
          {
            text: "玩家管理系统",
            description: "实现了房间内玩家的实时状态管理,包括准备状态、角色分配和游戏状态。开发了玩家进出房间的事件处理系统,确保房间状态的实时同步。添加了房主转移和踢人功能的权限控制。"
          },
          {
            text: "房间配置服务",
            description: "开发了房间设置的配置系统,支持自定义游戏规则和参数设置。实现了配置验证和动态更新机制,确保游戏规则的一致性。添加了配置模板功能,支持快速创建特定类型的游戏房间。"
          }
        ]
      },
      {
        title: "游戏核心功能开发 (4.12-4.16)",
        items: [
          {
            text: "角色分配系统",
            description: "实现了基于权重的角色随机分配算法,确保游戏角色分配的平衡性。开发了角色技能效果处理系统,支持不同角色的特殊能力实现。设计了角色信息的加密传输机制,防止作弊行为。"
          },
          {
            text: "AI决策摸你",
            description: "开发了基于规则的AI决策系统,模拟不同角色的游戏行为和策略。实现了AI玩家的概率投票机制,增加游戏的不确定性和趣味性。"
          },
          {
            text: "游戏状态同步",
            description: "设计了游戏状态的实时同步机制,确保所有玩家看到一致的游戏信息。实现了游戏事件的广播系统,处理各类游戏动作的同步和展示。"
          }
        ]
      },
      {
        title: "通信系统实现 (4.17-4.23)",
        items: [
          {
            text: "WebSocket服务",
            description: "使用Python WebSocket库实现了实时通信服务,支持游戏状态的双向数据传输。开发了消息队列系统,处理高并发场景下的消息传递和顺序保证。实现了心跳检测机制,及时发现并处理断开连接的情况。"
          },
          {
            text: "消息广播系统",
            description: "设计了多层级的消息广播机制,支持全局、房间和个人三个层级的消息发送。实现了消息优先级队列,确保重要消息的及时送达。开发了消息压缩和批量发送功能,优化网络传输效率。"
          },
          {
            text: "错误处理机制",
            description: "实现了全局的错误捕获和处理系统,包括网络异常、游戏逻辑错误等情况的处理。开发了错误日志记录和分析功能,帮助快速定位和解决问题。添加了自动恢复机制,提高系统的可靠性。"
          }
        ]
      },
      {
        title: "游戏逻辑实现 (4.24-5.10)",
        items: [
          {
            text: "投票系统",
            description: "实现了多轮投票的处理逻辑,支持白天投票和狼人夜晚投票。开发了投票结果的统计和判定系统,处理平票和特殊情况。添加了投票有效性验证,防止异常投票行为。"
          },
          {
            text: "胜负判定",
            description: "设计了复杂的胜负判定逻辑,考虑多种游戏结束条件。实现了特殊角色的胜利条件判定,支持个人和阵营胜利的判定。开发了结果广播和统计系统,记录游戏结果。"
          },
          {
            text: "游戏流程控制",
            description: "实现了完整的游戏流程控制系统,管理日夜交替和回合进行。开发了角色行动顺序的控制机制,确保游戏进程的有序进行。添加了超时处理和自动进程推进功能。"
          }
        ]
      },
      {
        title: "Bug修复和优化 (5.11)",
        items: [
          {
            text: "逻辑错误修复",
            description: "修复了角色技能使用时的状态同步问题,确保技能效果的准确性。解决了多人同时操作导致的竞态条件问题,提高系统稳定性。修复了投票系统中的计票错误和显示异常。"
          },
          {
            text: "性能优化",
            description: "优化了房间状态更新的性能,减少不必要的数据传输和处理。改进了AI决策的计算效率,降低服务器负载。优化了数据库访问模式,提高查询效率。"
          },
          {
            text: "异常处理完善",
            description: "增强了网络异常情况下的数据一致性保证,完善了断线重连机制。改进了错误提示信息,提供更清晰的问题描述和解决建议。添加了更多的日志记录点,方便问题追踪。"
          }
        ]
      }
    ]
  },
  {
    phase: "Node.js迁移与整合",
    date: "2024.5.3 - 2024.6.17",
    color: "bg-purple-500",
    icon: "⚡",
    content: [
      {
        title: "Node.js服务器搭建 (5.3)",
        items: [
          {
            text: "服务器框架搭建",
            description: "使用Express.js框架搭建了新的服务器架构，配置了开发和生产环境的基础设施。实现了路由系统和中间件链，包括请求解析、跨域处理和安全防护。建立了模块化的项目结构，将业务逻辑分离为独立的服务模块。"
          },
          {
            text: "数据库迁移",
            description: "将原Python后端的数据结构迁移到MongoDB数据库，设计了更适合JavaScript的数据模型。实现了数据库连接池和查询优化，提高数据访问效率。开发了数据迁移脚本，确保历史数据的完整迁移。"
          },
          {
            text: "日志系统构建",
            description: "使用Winston搭建了多级别的日志系统，支持错误追踪和性能监控。实现了日志分类存储和定期归档功能，方便系统维护和问题诊断。集成了请求链路追踪，提供完整的调用链分析。"
          }
        ]
      },
      {
        title: "Socket.io服务整合 (5.4)",
        items: [
          {
            text: "实时通信框架",
            description: "整合Socket.io实现了WebSocket通信层，支持服务器和客户端的双向实时通信。开发了自定义的事件系统，处理游戏中的各类实时事件。实现了房间广播和私聊功能，优化消息传递效率。"
          },
          {
            text: "连接管理系统",
            description: "实现了Socket连接的生命周期管理，包括连接建立、心跳检测和断开处理。开发了会话恢复机制，支持客户端断线重连和状态恢复。添加了连接池管理，优化高并发场景下的性能。"
          },
        ]
      },
      {
        title: "用户系统整合 (5.5-5.15)",
        items: [
          {
            text: "身份认证迁移",
            description: "将Python版本的认证系统重构为JWT基础的认证机制，支持多端登录和状态同步。实现会话存储，提供更好的扩展性和性能。开发了权限中间件，细化了用户权限控制。"
          },
          {
            text: "前端整合",
            description: "重构了前端登录组件，适配新的认证流程和数据格式。实现了登录状态的持久化存储，提供更流畅的用户体验。开发了登录异常处理和提示系统，提高系统可用性。"
          }
        ]
      },
      {
        title: "房间系统联通 (5.16-5.19)",
        items: [
          {
            text: "房间管理迁移",
            description: "将Python版本的房间管理逻辑迁移到Node.js环境，重构了房间状态管理机制。实现了基于Socket.io的房间实时状态同步，提供更高效的数据传输。开发了房间事件处理系统，统一管理房间生命周期。"
          },
          {
            text: "房间列表服务",
            description: "开发了房间列表的缓存更新机制，提供实时的房间状态查询。实现了房间过滤和排序功能，优化用户查找体验。添加了房间推荐算法，根据用户偏好推荐合适的房间。"
          },
          {
            text: "前端组件适配",
            description: "更新了房间相关的前端组件，适配新的数据结构和通信方式。实现了房间状态的实时更新和动画效果，提升用户体验。优化了房间操作的响应速度，减少用户等待时间。"
          }
        ]
      },
      {
        title: "游戏系统整合 (5.20-6.17)",
        items: [
          {
            text: "AI补位系统 (5.20-6.9)",
            description: "将Python版本的AI决策系统迁移到Node.js环境，实现了AI玩家的动态加入和退出。"
          },
          {
            text: "角色分配系统 (6.10-6.16)",
            description: "用node.js重构了角色分配算法。实现了角色技能的效果处理系统，确保技能使用的准确性。"
          },
          {
            text: "投票和状态系统 (6.17)",
            description: "整合了Python版本的投票系统和游戏状态管理，实现了更流畅的游戏流程控制。开发了投票结果的实时统计和展示功能，提供更直观的反馈。实现了游戏状态的自动推进机制，优化游戏节奏。"
          }
        ]
      },
      {
        title: "计划中的工作",
        items: [
          {
            text: "完整游戏逻辑",
            description: "计划完善游戏核心逻辑，包括特殊角色技能和复杂场景的处理。准备添加更多的游戏模式和规则变体，增加游戏可玩性。设计游戏平衡性调整机制，根据数据分析优化游戏体验。"
          },
          {
            text: "AI系统升级",
            description: "计划升级AI决策系统，引入机器学习算法提升AI智能水平。准备开发AI情绪模拟系统，使AI行为更接近真实玩家。设计AI难度动态调整机制，适应不同玩家水平。"
          },
          {
            text: "系统优化",
            description: "计划实现更可靠的断线重连机制，支持游戏状态的完整恢复。准备优化服务器架构，提升系统并发处理能力。设计分布式部署方案，支持更大规模的用户访问。"
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
      <h1 className="text-3xl font-bold text-center mb-12">狼人杀游戏开发时间线</h1>
      
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