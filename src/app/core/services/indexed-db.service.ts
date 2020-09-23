import { Injectable } from '@angular/core';
import { openDB, DBSchema, IDBPDatabase } from 'idb';
import { ReporterDB } from '../models/ReporterDB';

@Injectable({
  providedIn: 'root'
})
export class IndexedDBService {

  private db: IDBPDatabase<ReporterDB>;

  constructor() {
    this.connectToDb();
  }


  async connectToDb() {
    this.db = await openDB<ReporterDB>('reporter-db', 1, {
      upgrade(db) {
        db.createObjectStore('report-store');
      },
    });
  }


  addReport(obj: string) {
    return this.db.put('report-store', obj, 'reports');
  }

  deleteReport(key: string) {
    return this.db.delete('report-store', key);
  }
}

