CREATE TABLE memory (
  id SERIAL PRIMARY KEY,
  key TEXT,
  value TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);
