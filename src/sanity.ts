import { createClient } from 'next-sanity';

const config = {
  projectId: 'j76ock21', // you can find this in sanity.json
  dataset: 'production', // or the name of your dataset
  apiVersion: "2023-12-09",
  useCdn: false, // `false` if you want to ensure fresh data
};

export const sanityClient = createClient(config);

