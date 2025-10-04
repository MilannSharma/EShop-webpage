'use server';

import { generateTextilePattern } from '@/ai/flows/generate-textile-patterns';

type FormState = {
  imageUrl: string | null;
  error: string | null;
};

export async function generatePatternAction(
  prevState: FormState,
  formData: FormData
): Promise<FormState> {
  const description = formData.get('description');
  if (typeof description !== 'string' || description.length === 0) {
    return {
      imageUrl: null,
      error: 'Please provide a description for the pattern.',
    };
  }

  try {
    const result = await generateTextilePattern({ description });
    if (result.imageUrl) {
      return {
        imageUrl: result.imageUrl,
        error: null,
      };
    }
    return {
      imageUrl: null,
      error: 'Failed to generate pattern. The AI could not produce an image.',
    };
  } catch (e: any) {
    console.error(e);
    return {
      imageUrl: null,
      error: e.message || 'An unknown error occurred while generating the pattern.',
    };
  }
}
