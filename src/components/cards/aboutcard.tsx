import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function AboutCard() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Card>
        <CardHeader>
          <CardTitle>Skatehive Docs</CardTitle>
          <CardDescription>Ask SpAIke Jonze anything about skatehive</CardDescription>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground/90 leading-normal prose">
          <p className="mb-3 font-semibold">Big Opinions:</p>
          <ul className="flex flex-col mb-2">
            <li>→ Speed to learning and experimenting AI SDK</li>
            <li>→ App Router, Server Actions, React Server Components</li>
            <li>→ No auth, storage or sharing</li>
            <li></li>
          </ul>
          <p><Link href="https://skatehive.app" className="underline">Fork the repo and get hacking</Link> </p>
        </CardContent>
      </Card>
    </div>
  )
}
