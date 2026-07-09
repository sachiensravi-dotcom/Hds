import { useRef } from "react";

export default function TiltCard({
  children,
  max = 8,
  scale = 1.02,
  className = "",
  ...props
}: {
  children: React.ReactNode;
  max?: number;
  scale?: number;
  className?: string;
  [key: string]: any;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateX = ((midY - y) / midY) * max;
    const rotateY = ((x - midX) / midX) * max;
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    card.style.transition = "transform 0.05s ease-out";
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (card) {
      card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) scale(1)";
      card.style.transition = "transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)";
    }
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
      style={{ transformStyle: "preserve-3d" }}
      {...props}
    >
      {children}
    </div>
  );
}
