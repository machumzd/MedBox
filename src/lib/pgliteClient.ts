'use client';
import { PGlite } from '@electric-sql/pglite';

let db: PGlite | null = null;

export async function getDb() {
  if (db) return db;

  db = new PGlite('idb://my-pgdata');

  await db.exec(`
    CREATE TABLE IF NOT EXISTS patients (
      id SERIAL PRIMARY KEY,
      name TEXT,
      age INTEGER,
      gender TEXT
    );
  `);

  return db;
}
