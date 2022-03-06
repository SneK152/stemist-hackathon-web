import { animated, useSpring } from "react-spring";
import Event from "../event";

export default function Schedule() {
  return (
    <div className="space-y-4">
      <Event description="desc" name="name" time={new Date()} />
      <Event description="desc" name="name" time={new Date()} />
      <Event description="desc" name="name" time={new Date()} />
    </div>
  );
}
