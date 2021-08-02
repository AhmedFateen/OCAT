import React, { useEffect, useMemo, useState } from 'react';
import { Table } from 'react-bootstrap';
import { useTable } from 'react-table';
import { AssessmentService } from '../../services/AssessmentService';
export const AssessmentList = () => {

  const [ assessments, setAssessments ] = useState([]);

  // fetch all assessments using the AssessmentService.getList function from OCAT/client/services/AssessmentService.js
  useEffect(() => {
    AssessmentService.getList()
      .then(result => { setAssessments(result); });
  }, []);

  const columns = useMemo(
    () => [
      {
        Header: `ID`,
        accessor: `id`,
      },
      {
        Header: `Score`,
        accessor: `score`,
      },

      {
        Header: `Risk Level`,
        accessor: `risk_level`,
      },
      {
        Header: `Cat Name`,
        accessor: `cat_name`,
      },
      {
        Header: `Cat Date of Birth`,
        accessor: `cat_date_of_birth`,
      },
      {
        Header: `Created at`,
        accessor: `created_at`,
      },
      {
        Header: `Deleted at`,
        accessor: `deleted_at`,
      },
    ],
    [],
  );

  const { getTableBodyProps, getTableProps, headerGroups, prepareRow, rows } = useTable({
    columns,
    data: assessments,
  });
  return (
    <div>

      <Table striped {...getTableProps()}>
        <thead>
          {headerGroups.map(headerGroup =>
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column =>
                <th {...column.getHeaderProps()}>{column.render(`Header`)}</th>)}
            </tr>)}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => <td {...cell.getCellProps()}>{cell.render(`Cell`)}</td>)}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>

  );
};
