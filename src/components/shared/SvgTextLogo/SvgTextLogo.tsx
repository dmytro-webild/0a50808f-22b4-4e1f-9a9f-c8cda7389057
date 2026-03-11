import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  textClassName?: string;
  fontSize?: number;
  fontWeight?: number | string;
  fill?: string;
  letterSpacing?: number;
}

export const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  textClassName = '',
  fontSize = 32,
  fontWeight = 700,
  fill = 'currentColor',
  letterSpacing = 0,
}) => {
  const textLength = text.length;
  const charWidth = fontSize * 0.6;
  const totalWidth = textLength * charWidth + (textLength - 1) * letterSpacing;
  const height = fontSize * 1.5;
  const padding = 8;
  const svgWidth = totalWidth + padding * 2;
  const svgHeight = height + padding * 2;

  return (
    <svg
      viewBox={`0 0 ${svgWidth} ${svgHeight}`}
      width={svgWidth}
      height={svgHeight}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <text
        x={svgWidth / 2}
        y={svgHeight / 2}
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fill}
        letterSpacing={letterSpacing}
        className={textClassName}
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;