"use client";
import Hero from "@/components/articulos/Hero";
import { StoryblokComponent } from "@storyblok/react";

export default async function ContentStoryblok({ content }: { content: any }) {
  return (
    <div>
      {/* {content.Body.content.map((blok: any) => (
        <StoryblokComponent blok={blok} key={blok._uid} />
      ))} */}
      {content.Body?.content.map((nestedBlok:any) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
}
