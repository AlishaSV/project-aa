import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetRolesQuery } from '@/components/rolesGrid/graphql/GetRoles.gql';
import { useRouter } from 'next/navigation';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'title',
    headerName: 'Role',
    width: 100,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 150,
  },
];

export const RolesGrid = () => {
  const { data, loading } = useGetRolesQuery();
  const router = useRouter();

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      <DataGrid
        rows={data?.getRoles?.roles ?? []}
        columns={columns}
        onRowClick={(row) => {
          router.push(`role/${row?.id}`);
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        checkboxSelection
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};
