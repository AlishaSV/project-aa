import { RoleProfile } from '@/components/roleProfile';

export default function Page({ params }: { params: { id: string } }) {
  return <RoleProfile id={params.id} />;
}
