import { TextInput } from "@repo/ui/text-input";

export default function Home() {
  return (
    <div style={{
      height: "100vh",
      width: "100vw",
      background: "black",
      display: "flex",
      justifyContent: "center",
      justifyItems: "center"
    }}>
      <div style={{
        display: "flex",
        justifyContent: "center",
        flexDirection: "column"
      }}>
        <TextInput placeholder="room name"></TextInput>
        <button>Join</button>
      </div>
    </div>
  );
}
