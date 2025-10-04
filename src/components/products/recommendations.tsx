import { getProductRecommendations } from '@/ai/flows/get-product-recommendations';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface RecommendationsProps {
    currentProduct: string;
}

export default async function Recommendations({ currentProduct }: RecommendationsProps) {
  // In a real app, this would come from the user's actual session history
  const browsingHistory = ['Silk Scarf', 'Cotton Fabric', currentProduct];
  
  const { recommendations } = await getProductRecommendations({ browsingHistory });

  if (!recommendations || recommendations.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Suggested for You</CardTitle>
      </CardHeader>
      <CardContent>
        <ul className="list-disc list-inside space-y-2 text-foreground/80">
          {recommendations.slice(0, 5).map((rec, index) => (
            <li key={index}>{rec}</li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
