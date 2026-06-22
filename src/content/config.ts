import { defineCollection, z } from 'astro:content';

const films = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    director: z.string(),
    duration: z.number(),
    ageMin: z.number(),
    synopsis: z.string(),
    status: z.enum(['en_salle', 'bientot', 'archive']),
    releaseDate: z.string().optional(),
    coupDeCoeur: z.boolean().default(false),
    poster: z.string(),
    allocineUrl: z.string().optional(),
    trailerUrl: z.string().optional(),
    seancesUrl: z.string().optional(),
  }),
});

const settings = defineCollection({
  type: 'data',
  schema: z.record(z.any()),
});

export const collections = { films, settings };
