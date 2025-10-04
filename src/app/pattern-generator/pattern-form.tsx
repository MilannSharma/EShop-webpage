'use client';

import { useActionState, useTransition } from 'react';
import { generatePatternAction } from './actions';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Wand2 } from 'lucide-react';
import Image from 'next/image';
import { Skeleton } from '@/components/ui/skeleton';

const initialState = {
  imageUrl: null,
  error: null,
};

function SubmitButton() {
    const [isPending] = useTransition(); 
    return (
        <Button type="submit" disabled={isPending} size="lg">
            <Wand2 className="mr-2 h-5 w-5" />
            {isPending ? 'Generating...' : 'Generate Pattern'}
        </Button>
    );
}

export default function PatternForm() {
  const [state, formAction, isPending] = useActionState(generatePatternAction, initialState);

  return (
    <div className="space-y-8">
      <form action={formAction} className="space-y-4">
        <Textarea
          name="description"
          placeholder="e.g., 'A seamless pattern of watercolor lemons and green leaves on a white background, in a vintage botanical style.'"
          rows={4}
          className="text-base"
          required
        />
        <SubmitButton />
      </form>

      {state.error && <p className="text-destructive">{state.error}</p>}
      
      <Card className="aspect-square w-full max-w-2xl mx-auto bg-muted/50 flex items-center justify-center">
        <CardContent className="p-4 w-full h-full">
            { isPending && <Skeleton className="w-full h-full" /> }
            { !isPending && state.imageUrl && (
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-inner">
                <Image 
                    src={state.imageUrl} 
                    alt="Generated textile pattern" 
                    fill 
                    className="object-cover"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 50vw"
                />
              </div>
            )}
            { !isPending && !state.imageUrl && (
                <div className="flex flex-col items-center justify-center h-full text-center text-muted-foreground">
                    <Wand2 className="w-12 h-12 mb-4" />
                    <p>Your generated pattern will appear here.</p>
                </div>
            )}
        </CardContent>
      </Card>
    </div>
  );
}
