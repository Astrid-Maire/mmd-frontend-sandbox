import Button from "@/components/Button";
import If from "@/components/if";

export default function Home() {
  return (
    <div>
      <If condition>
        <Button />
      </If>
    </div>
  );
}
