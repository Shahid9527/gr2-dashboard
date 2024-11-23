import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  color: string;
  navigateTo: string;
}

const Card: React.FC<CardProps> = ({ title, color, navigateTo }) => (
  <Link href={navigateTo}>
    <div
      style={{ backgroundColor: color }}
      className="cursor-pointer p-4 rounded-lg text-white shadow-md hover:shadow-xl transition-transform duration-300 transform hover:scale-105 min-h-[200px] flex flex-col justify-center"
    >
      <h3 className="text-center text-2xl font-bold">{title}</h3>
    </div>
  </Link>
);

export default Card;
