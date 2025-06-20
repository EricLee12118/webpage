import { UserIcon } from 'lucide-react';

export default function TeamMembers() {
  const members = [
    'Li Xinlei',
    'Hu Hongyi',
    'Chen Zixiao',
    'Xin Zongrui'
  ];

  return (
    <section className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">Team Members</h2>
      <ul className="space-y-2">
        {members.map((member, index) => (
          <li key={index} className="flex items-center text-gray-700">
            <UserIcon className="w-5 h-5 mr-2 text-blue-500" />
            {member}
          </li>
        ))}
      </ul>
    </section>
  );
}