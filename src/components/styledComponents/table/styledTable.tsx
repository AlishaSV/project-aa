'use client';

import styled from '@emotion/styled';

export const StyledTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: collapse;
  border: 2px solid #787979;
  max-width: 700px;
`;

export const StyledTableRow = styled.tr`
  &:hover {
    cursor: pointer;
  }
`;

export const StyledTableItem = styled.td`
  text-align: center;
  padding-bottom: 2px;
  border-bottom: 2px #969797 solid;
  border-top: 1.5px #969797 solid;
`;
