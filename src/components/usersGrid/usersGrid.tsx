'use client';

import { useGetAllUsersQuery } from '@/components/usersGrid/graphql/GetAllUsers.gql';
import { DataGrid, GridColDef, GridRowId } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@mui/material';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  {
    field: 'email',
    headerName: 'Email',
    type: 'string',
    width: 200,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 200,
  },
];

export const UsersGrid = () => {
  const { data, loading } = useGetAllUsersQuery();
  const router = useRouter();
  const [selectedRow, setSelectedRow] = useState<GridRowId[]>([]);

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, '_blank');
    // if (newWindow) newWindow.opener = null;
  };

  return loading ? (
    <div>Loading</div>
  ) : (
    <div>
      {selectedRow.length > 0 ? (
        <div>
          <Button
            onClick={() => {
              for (const id of selectedRow) {
                setTimeout(function () {
                  openInNewTab(`user/${id}`);
                }, 500);
              }
              setSelectedRow([]);
            }}
          >{`Open All ${selectedRow.length}`}</Button>
        </div>
      ) : null}

      <DataGrid
        rows={data?.getAllUsers.users ?? []}
        columns={columns}
        onRowClick={(row) => {
          router.push(`user/${row?.id}`);
        }}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        checkboxSelection
        onRowSelectionModelChange={(rows) => {
          setSelectedRow(rows);
        }}
        pageSizeOptions={[5, 10]}
      />
    </div>
  );
};
