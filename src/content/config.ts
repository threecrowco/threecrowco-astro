import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            pubDate: z.date(),
            client: z.string(),
            coverImage: image().refine((img) => img.width >= 600, {
                message: "Cover image must be at least 1080px wide"
            })
        })
});

const servicesCollection = defineCollection({
    type: "content",
    schema: ({ image }) =>
        z.object({
            title: z.string(),
            date: z.date(),
            layout: z.string(),
            image: image().refine((img) => img.width >= 600, {
                message: "Cover image must be at least 600px wide"
            })
        })
});

export const collections = {
    projects: projectsCollection,
    services: servicesCollection
};
