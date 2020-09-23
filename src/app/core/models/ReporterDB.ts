import { openDB, DBSchema, IDBPDatabase } from 'idb';

export interface ReporterDB extends DBSchema {
    'report-store': {
      key: string;
      value: string;
    };
  }