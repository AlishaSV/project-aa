import { UserProfile } from '@/components/userProfile';

export default function Page({ params }: { params: { id: string } }) {
  return <UserProfile id={params.id} />;
}
