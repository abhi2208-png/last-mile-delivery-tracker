export const DATABASE_URL = process.env.DATABASE_URL ?? "postgresql://postgres:prostgres@localhost:5432/lastmile_delivery?schema=public";
export const JWT_SECRET = process.env.JWT_SECRET ?? "your_super_secret_key";
export const PORT = Number(process.env.PORT ?? 5000);