'use server';

/**
 * @fileOverview This file defines a Genkit flow for generating product recommendations
 * based on user browsing history.
 *
 * - getProductRecommendations - A function that returns product recommendations based on the user's browsing history.
 * - GetProductRecommendationsInput - The input type for the getProductRecommendations function.
 * - GetProductRecommendationsOutput - The return type for the getProductRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GetProductRecommendationsInputSchema = z.object({
  browsingHistory: z.array(z.string()).describe('The user browsing history.'),
});
export type GetProductRecommendationsInput = z.infer<
  typeof GetProductRecommendationsInputSchema
>;

const GetProductRecommendationsOutputSchema = z.object({
  recommendations: z
    .array(z.string())
    .describe('The list of recommended products.'),
});
export type GetProductRecommendationsOutput = z.infer<
  typeof GetProductRecommendationsOutputSchema
>;

export async function getProductRecommendations(
  input: GetProductRecommendationsInput
): Promise<GetProductRecommendationsOutput> {
  return getProductRecommendationsFlow(input);
}

const productRecommendationsPrompt = ai.definePrompt({
  name: 'productRecommendationsPrompt',
  input: {schema: GetProductRecommendationsInputSchema},
  output: {schema: GetProductRecommendationsOutputSchema},
  prompt: `You are an e-commerce expert, skilled in product recommendation.
Based on the user's browsing history, suggest relevant products.

Browsing History: {{{browsingHistory}}}

Recommendations:`,
});

const getProductRecommendationsFlow = ai.defineFlow(
  {
    name: 'getProductRecommendationsFlow',
    inputSchema: GetProductRecommendationsInputSchema,
    outputSchema: GetProductRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await productRecommendationsPrompt(input);
    return output!;
  }
);
