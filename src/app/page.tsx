'use client';

import Timeline from '@/components/Timeline';
import ProgressChart from '@/components/ProgressChart';
import Introduction from '@/components/Introduction';
import TeamMembers from '@/components/TeamMembers';
import Countdown from '@/components/Countdown';

export default function Home() {
  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-8 px-4">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold text-center">
            Multiplayer Online Werewolf Game Development
          </h1>
          <div className="mt-4 text-center">
            <p className="text-lg">Time Remaining Until Project Deadline:</p>
            <Countdown targetDate="2025-07-06" />
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8">
          <div className="space-y-6">
            <Introduction />
            <TeamMembers />
            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-2xl font-bold text-blue-600 mb-4">
                Project Progress
              </h2>
              <ProgressChart />
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-bold text-blue-600 mb-6">
              Project Timeline
            </h2>
            <Timeline />
          </div>
        </div>
      </main>

      <footer className="bg-gray-800 text-white py-4 text-center">
        <p>&copy; 2025 HKU Werewolf Game Development Team</p>
      </footer>
    </div>
  );
}