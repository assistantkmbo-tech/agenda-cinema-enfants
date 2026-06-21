import { defineCollection, z } from 'astro:content';

const films = defineCollection({
  type: 'data',
  schema: z.object({
    title: z.string(),
    director: z.string(),
    duration: z.number(),
    ageMin: z.number(),
    synopsis: z.string(),
    status: z.enum(['en_salle', 'bientot']),
    dateLabel: z.string(),
    releaseDate: z.string().optional(),
    coupDeCoeur: z.boolean().default(false),
    poster: z.string(),
    heroImage: z.string().optional(),
    allocineUrl: z.string().optional(),
    trailerUrl: z.string().optional(),
    seancesUrl: z.string().optional(),
    order: z.number().default(0),
  }),
});

export const collections = { films };
