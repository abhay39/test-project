"use client";

import React from 'react';

interface PartProps {
  color: string;
  className?: string;
}

export const HeadBase = ({ color, className }: PartProps) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M100 45C72.3858 45 50 67.3858 50 95C50 122.614 72.3858 145 100 145C127.614 145 150 122.614 150 95C150 67.3858 127.614 45 100 45Z" fill={color} />
  </svg>
);

export const HairSpiky = ({ color, className }: PartProps) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40 65C40 30 65 5 100 5C135 5 160 30 160 65C160 70 155 75 150 70C140 60 135 40 100 40C65 40 60 60 50 70C45 75 40 70 40 65Z" fill={color} />
    <path d="M100 5L110 -10L125 8M100 5L90 -10L75 8M100 5L100 -15L115 0" fill={color} />
    <path d="M70 20C80 15 120 15 130 20" stroke="white" strokeWidth="3" opacity="0.2" strokeLinecap="round" />
  </svg>
);

export const HairBob = ({ color, className }: PartProps) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Background hair */}
    <path d="M40 60C40 20 65 5 100 5C135 5 160 20 160 60V100C160 110 150 120 140 115C135 110 135 100 135 90H65C65 100 65 110 60 115C50 120 40 110 40 100V60Z" fill={color} />
    
    {/* Front fringe/bangs */}
    <path d="M40 60C45 30 65 15 100 15C135 15 155 30 160 60C140 55 120 50 100 50C80 50 60 55 40 60Z" fill={color} />
    <path d="M40 60C60 55 80 50 100 50C120 50 140 55 160 60" stroke="black" strokeWidth="1" opacity="0.1" />
    
    {/* Highlights */}
    <path d="M65 30C80 20 120 20 135 30" stroke="white" strokeWidth="4" opacity="0.15" strokeLinecap="round" />
  </svg>
);

export const EyeClassic = ({ color, className }: PartProps) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="75" cy="90" rx="15" ry="20" fill="white" />
    <ellipse cx="75" cy="93" rx="8" ry="12" fill={color} />
    <circle cx="78" cy="87" r="4" fill="white" opacity="0.8" />
    <ellipse cx="125" cy="90" rx="15" ry="20" fill="white" />
    <ellipse cx="125" cy="93" rx="8" ry="12" fill={color} />
    <circle cx="128" cy="87" r="4" fill="white" opacity="0.8" />
  </svg>
);

export const EyeFemale = ({ color, className }: PartProps) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="75" cy="90" rx="18" ry="22" fill="white" />
    <ellipse cx="75" cy="93" rx="10" ry="14" fill={color} />
    <circle cx="79" cy="87" r="5" fill="white" opacity="0.8" />
    <path d="M55 85C50 80 55 75 60 75" stroke="black" strokeWidth="2" strokeLinecap="round" />
    <ellipse cx="125" cy="90" rx="18" ry="22" fill="white" />
    <ellipse cx="125" cy="93" rx="10" ry="14" fill={color} />
    <circle cx="129" cy="87" r="5" fill="white" opacity="0.8" />
    <path d="M145 85C150 80 145 75 140 75" stroke="black" strokeWidth="2" strokeLinecap="round" />
  </svg>
);
