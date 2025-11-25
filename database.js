import * as SQLite from 'expo-sqlite';

// Abre (ou cria) o banco local
const db = SQLite.openDatabaseSync('cadastros.db');

export async function initDB() {
  await db.execAsync(`
    CREATE TABLE IF NOT EXISTS petShop (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      nome TEXT NOT NULL,
      telefone TEXT NOT NULL,
      pet TEXT NOT NULL
    );
  `);
};

export async function adicionarPets(nome, telefone, pet) {
  await db.runAsync(
    'INSERT INTO petShop (nome, telefone, pet) VALUES (?, ?, ?);',
    [nome, telefone, pet]
  );
};

export async function listarPets() {
  const petShop = await db.getAllAsync('SELECT * FROM petShop;');
  return petShop;
};

export async function deletarPets(id) {
  await db.runAsync('DELETE FROM petShop WHERE id = ?;', [id]);
};
