import { title } from "@/components/primitives";
import { ReviewCard } from "../../components/review-card";

export default function ReviewPage() {
  return (
    <div className="mr-20">
      <div className="flex justify-between align-center">
        <h1 className="text-5xl font-semibold">Star wars: hop in</h1>
        <h1 className="text-5xl font-medium text-purple-800">9/10</h1>
      </div>
      <div style={{display:'flex', flexDirection:'column', gap:'2rem',marginTop:'2rem', marginBottom:'2rem'}}>
        {[1, 2, 4, 5].map((e) => (
          <ReviewCard />
        ))}
      </div>
    </div>
  );
}
