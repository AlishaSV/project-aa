import Link from 'next/link';
import { UserPlus } from '@phosphor-icons/react';

export const AddNewAdmin = () => {
  return (
    <Link href={'/addNewAdmin'}>
      <UserPlus size={25} color={'#041cd2'} />
    </Link>
  );
};
