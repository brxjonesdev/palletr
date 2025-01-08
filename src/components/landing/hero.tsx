'use client';
import { Palette } from 'lucide-react';
import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="w-full py-10  font-nunito">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 items-center lg:grid-cols-2">
          <div className="flex gap-4 flex-col items-center lg:items-start">
            <div className="flex gap-4 flex-col">
              <h1 className="text-5xl md:text-7xl max-w-lg tracking-tighter lg:text-left font-bold text-center">
                Create stunning palettes effortlessly.
              </h1>
              <p className="text-xl leading-relaxed tracking-tight text-muted-foreground max-w-md lg:text-left text-center font-medium">
                Hues is your ultimate tool for designing, exploring, and sharing
                color palettes. From custom gradients to ShadCN themes, we make
                it simple to bring your creative visions to life.
              </p>
            </div>
            <div className="flex flex-col gap-4 w-full max-w-md">
              <Link href="palette/generate">
              <Button
                size="lg"
                className="gap-4 text-md font-semibold w-full font-nunito"

              >
                Make a Palette <Palette className="w-4 h-4" />
              </Button>
              </Link>
            </div>
          </div>
          <div className="bg-muted rounded-md aspect-square m-6 lg:m-0"></div>
        </div>
      </div>
    </div>
  );
}