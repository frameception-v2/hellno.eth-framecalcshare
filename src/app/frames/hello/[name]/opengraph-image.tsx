import { ImageResponse } from "next/og";
import { PROJECT_TITLE, PROJECT_DESCRIPTION, PROJECT_COLORS } from "~/lib/constants";

export const runtime = "edge";

export const alt = `${PROJECT_TITLE} - ${PROJECT_DESCRIPTION}`;
export const size = {
  width: 1200,
  height: 630, // Standard OG image size
};

export const contentType = "image/png";

interface Props {
  params: Promise<{
    name: string;
  }>;
}

export default async function Image({ params }: Props) {
  const { name } = await params;

  return new ImageResponse(
    (
      <div tw="h-full w-full flex flex-col items-center justify-center relative"
        style={{
          backgroundColor: PROJECT_COLORS.background,
          backgroundImage: 'radial-gradient(circle at 25% 60%, rgba(125,60,255,0.15), transparent 40%)',
        }}
      >
        {/* Gradient overlay */}
        <div tw="absolute inset-0 bg-gradient-to-b from-purple-900/10 to-transparent" />
        
        {/* Main content */}
        <div tw="flex flex-col items-center text-center p-12">
          <h1 tw="text-7xl font-bold mb-6" style={{ color: PROJECT_COLORS.primary }}>
            Hello, {name}!
          </h1>
          <h2 tw="text-4xl font-semibold mb-4 text-gray-800">
            Welcome to {PROJECT_TITLE}
          </h2>
          <p tw="text-2xl text-gray-600 max-w-2xl">
            {PROJECT_DESCRIPTION}
          </p>
        </div>

        {/* Decorative elements */}
        <div tw="absolute bottom-8 right-8 flex items-center">
          <div tw="w-12 h-12 rounded-full" style={{ backgroundColor: PROJECT_COLORS.secondary }} />
          <div tw="w-12 h-12 rounded-full ml-4" style={{ backgroundColor: PROJECT_COLORS.primary }} />
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
