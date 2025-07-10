import UserInput from "@/components/deep-research/UserInput";
import Image from "next/image";

export default function Home() {
  return (
    
      <main className="min-h-screen flex flex-col items-center justify-start gap-8 py-16">
        <div className="flex flex-col items-center gap-4">
<h1 className="text-8xl font-dancing-script font-bold italic bg-gradient-to-r from-primary to-primary/50 bg-clip-text text-transparent">Deep Research</h1>
<p className="text-gray-600 text-center">Enter a topic and answer a few questions to generate a comprehensive research report.</p>
        </div>
        <UserInput />
      </main>
      
  );
}
