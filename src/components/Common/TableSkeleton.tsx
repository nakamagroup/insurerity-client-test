import React from 'react';

import { ITableSkeleton } from '../../interfaces/common';

const TableSkeleton = ({ numRows }: ITableSkeleton) => (
  <div role="status" className="space-y-6 animate-pulse">
    <div className="flex items-center space-x-2 w-full">
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5"></div>
      <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5"></div>
    </div>
    {Array.from(Array(numRows), el => (
      <div key={el} className="flex items-center space-x-2 w-full">
        <div className="h-3.5 bg-gray-200 rounded-full dark:bg-gray-700 w-1/5"></div>
        <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-1/5"></div>
        <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-1/5"></div>
        <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-1/5"></div>
        <div className="h-3.5 bg-gray-300 rounded-full dark:bg-gray-600 w-1/5"></div>
      </div>
    ))}
    <span className="sr-only">Loading...</span>
  </div>
);

export default TableSkeleton;
