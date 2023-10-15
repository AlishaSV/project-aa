type TUserListItemProps = {
  id: string;
  email: string;
  fullName: string;
};

export const UserListItem = ({ id, email, fullName }: TUserListItemProps) => {
  return (
    <div>
      <span>{id}:</span>
      <span>{email}:</span>
      <span>{fullName}</span>
    </div>
  );
};
