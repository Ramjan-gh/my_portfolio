import express, {type Request, type Response } from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Initialize Supabase with Types
const supabase = createClient(
  process.env.SUPABASE_URL as string, 
  process.env.SUPABASE_KEY as string
);

// Define a Type for your Hero Data
interface HeroSettings {
  id: number;
  name: string;
  greeting: string;
  subtitle: string;
  services_description: string;
}

app.get('/api/hero', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('hero_settings')
    .select('*')
    .single();

  if (error) return res.status(400).json(error);
  res.json(data as HeroSettings);
});

app.get('/api/expertise', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('expertise')
    .select('*');

  if (error) return res.status(400).json(error);
  res.json(data);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`TypeScript Backend running on port ${PORT}`));