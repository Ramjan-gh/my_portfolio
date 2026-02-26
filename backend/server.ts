import express, { type Request, type Response } from 'express';
import cors from 'cors';
import { createClient } from '@supabase/supabase-js';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

// Middleware
app.use(cors({ origin: "*", methods: ["GET", "POST"] }));
app.use(express.json());

// Initialize Supabase
const supabase = createClient(
  process.env.SUPABASE_URL as string,
  process.env.SUPABASE_KEY as string
);

// --- Types ---

interface Social {
  platform: string;
  url: string;
}

interface HeroSettings {
  id: number;
  name: string;
  greeting: string;
  subtitle: string;
  services_description: string;
  socials?: Social[]; // Nested socials array
}

interface ExpertiseItem {
  id: number;
  name: string;
  icon_name: string;
}

// --- Routes ---

app.get('/', (req: Request, res: Response) => {
  res.send('API is live 🚀');
});

/**
 * Fetches Hero data and Social links in one go
 */
app.get('/api/hero', async (req: Request, res: Response) => {
  try {
    // 1. Fetch Hero Text Content
    const { data: heroData, error: heroError } = await supabase
      .from('hero_settings')
      .select('*')
      .single();  


      console.log("Fetched hero data:", heroData); // Debug log 
    if (heroError) throw heroError;
  

    // 2. Fetch Social Links
    const { data: socials, error: socialError } = await supabase
      .from('social_links')
      .select('platform,url')
      .eq('is_active', true);

      console.log("Fetched socials:", socials); // Debug log

    // 3. Merge Socials into the Hero object
    const response: HeroSettings = {
      ...heroData,
      socials: socials || []
    };


    res.json(response);
  } catch (error: any) {
    console.error("Error fetching hero:", error.message);
    res.status(500).json({ error: error.message });
  }
});

/**
 * Fetches Expertise/Skills for the Branding Bar
 */
app.get('/api/expertise', async (req: Request, res: Response) => {
  const { data, error } = await supabase
    .from('expertise')
    .select('*')
    .order('id', { ascending: true }); // Keep icons in order

  if (error) return res.status(400).json(error);
  res.json(data as ExpertiseItem[]);
});

// Server Initialization
const PORT = process.env.PORT || 5000;
app.listen(Number(PORT), "0.0.0.0", () => {
  console.log(`
  ✅ Server running on http://localhost:${PORT}
  📡 Listening on 0.0.0.0 for external device access
  `);
});