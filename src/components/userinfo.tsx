




import { Card } from 'flowbite-react';
import { IUsers } from '../type';

type props = { user: IUsers }
export const UserPage: React.FC<props> = ({ user }) => {
  return (
    <Card className="max-w-sm md:max-w-xl">
      <div className="flex flex-col items-start pb-10">
        <img
          alt="Bonnie image"
          height="96"
          src={user.image}
          width="96"
          className="mb-3 rounded-full shadow-lg"
        />
        <h5 className="my-2 text-xl font-medium text-gray-900 dark:text-white">{user.firstName}</h5>

        <div className='grid md:grid-cols-2  grid-cols-1 border rounded-md p-3 bg-slate-200 space-x-4 space-y-2 w-full'>
          <span className="text-sm text-gray-700 dark:text-gray-400">Gender: {user.gender}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">Age: {user.age}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">BirthDate: {user.birthDate}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">BloodGroup: {user.bloodGroup}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">EyeColor: {user.eyeColor}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">Emeil: {user.emeil}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">HairColor:{user.hair.color}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">HairType:{user.hair.type}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">height: {user.height}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">maidenName: {user.maidenName}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">phone: {user.phone}</span>
          <span className="text-sm text-gray-700 dark:text-gray-400">weight:{user.weight}</span>
        </div>
      </div>
    </Card>
  );
}

