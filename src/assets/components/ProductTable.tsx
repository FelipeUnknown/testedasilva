import React from 'react';
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from '@tanstack/react-table';

interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
}

const mockProducts: Product[] = [
  { id: 'PROD001', name: 'Smartphone XYZ', price: 999.99, category: 'Electronics' },
  { id: 'PROD002', name: 'Notebook Pro', price: 1499.00, category: 'Electronics' },
  { id: 'PROD003', name: 'Mouse Sem Fio', price: 49.50, category: 'Accessories' },
  { id: 'PROD004', name: 'Teclado Mecânico', price: 120.00, category: 'Accessories' },
  { id: 'PROD005', name: 'Monitor UltraWide', price: 799.00, category: 'Electronics' },
];

function ProductTable() {
    const columnHelper = createColumnHelper<Product>();
    const columns = React.useMemo(
    () => [
      columnHelper.accessor('id', {
        header: () => 'Identificador do Produto',
        cell: info => info.getValue(),
        // CORREÇÃO AQUI
        footer: info => info.column.id,
      }),
      columnHelper.accessor('name', {
        header: () => 'Nome do Produto',
        cell: info => info.getValue(),
        // CORREÇÃO AQUI
        footer: info => info.column.id,
      }),
      columnHelper.accessor('price', {
        header: () => 'Preço',
        cell: info => `$${info.getValue().toFixed(2)}`,
        // CORREÇÃO AQUI
        footer: info => info.column.id,
      }),
      columnHelper.accessor('category', {
        header: () => 'Categoria',
        cell: info => info.getValue(),
        // CORREÇÃO AQUI
        footer: info => info.column.id,
      }),
    ],
    [columnHelper]);
    const table = useReactTable({
    data: mockProducts,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

   return (
    <div style={{ padding: '20px' }}>
      <h1>Lista de Produtos</h1>
      <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th
                  key={header.id}
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                    textAlign: 'left',
                    backgroundColor: '#f2f2f2',
                  }}
                >
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.header, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td
                  key={cell.id}
                  style={{
                    border: '1px solid #ddd',
                    padding: '8px',
                  }}
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
        <tfoot>
          {table.getFooterGroups().map(footerGroup => (
            <tr key={footerGroup.id}>
              {footerGroup.headers.map(header => (
                <th key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : flexRender(header.column.columnDef.footer, header.getContext())}
                </th>
              ))}
            </tr>
          ))}
        </tfoot>
      </table>
    </div>
  );
}

export default ProductTable;