
import PatternForm from "./pattern-form";

export default function PatternGeneratorPage() {
  return (
    <div className="text-center">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
        AI Textile Pattern Generator
      </h1>
      <p className="mt-4 text-lg text-muted-foreground max-w-4xl mx-auto">
        Bring your ideas to life! Describe a textile pattern you'd like to see, and our AI will generate a unique design for you.
      </p>
      <div className="mt-8">
        <PatternForm />
      </div>
    </div>
  );
}
