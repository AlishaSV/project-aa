type TUsersGridHeaderProps = {
  headerItems: string[];
};

export const UsersGridHeader = ({ headerItems }: TUsersGridHeaderProps) => {
  return (
    <thead>
      <tr>
        {headerItems.map((item) => {
          return <th key={item}>{item}</th>;
        })}
      </tr>
    </thead>
  );
};
