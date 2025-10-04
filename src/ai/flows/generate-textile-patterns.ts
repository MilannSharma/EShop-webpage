'use server';
/**
 * @fileOverview A textile pattern generation AI agent.
 *
 * - generateTextilePattern - A function that handles the textile pattern generation process.
 * - GenerateTextilePatternInput - The input type for the generateTextilePattern function.
 * - GenerateTextilePatternOutput - The return type for the generateTextilePattern function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateTextilePatternInputSchema = z.object({
  description: z.string().describe('The description of the textile pattern to generate.'),
});
export type GenerateTextilePatternInput = z.infer<typeof GenerateTextilePatternInputSchema>;

const GenerateTextilePatternOutputSchema = z.object({
  imageUrl: z.string().describe('The URL of the generated textile pattern image.'),
});
export type GenerateTextilePatternOutput = z.infer<typeof GenerateTextilePatternOutputSchema>;

export async function generateTextilePattern(input: GenerateTextilePatternInput): Promise<GenerateTextilePatternOutput> {
  return generateTextilePatternFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateTextilePatternPrompt',
  input: {schema: GenerateTextilePatternInputSchema},
  output: {schema: GenerateTextilePatternOutputSchema},
  prompt: `You are an AI that generates textile patterns based on a description.

  Description: {{{description}}}
  
  Generate a URL to an image of the textile pattern. The URL should be a data URI that must include a MIME type and use Base64 encoding. Expected format: 'data:<mimetype>;base64,<encoded_data>'.`,
});

const generateTextilePatternFlow = ai.defineFlow(
  {
    name: 'generateTextilePatternFlow',
    inputSchema: GenerateTextilePatternInputSchema,
    outputSchema: GenerateTextilePatternOutputSchema,
  },
  async input => {
    const {media} = await ai.generate({
      model: 'googleai/imagen-4.0-fast-generate-001',
      prompt: `Generate an image of a textile pattern based on the following description: ${input.description}`,
    });
    return {imageUrl: media.url!};
  }
);
