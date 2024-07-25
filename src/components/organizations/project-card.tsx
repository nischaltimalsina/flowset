"use client"
import { formatDistanceToNow } from "date-fns"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import { Footer } from "./footer"
import { Skeleton } from "../ui"

interface ProjectCardProps {
  id: string
  title: string
  authorName: string
  authorId: string
  createdAt: number
  imageUrl: string
  orgId: string
  isFavorite: boolean
}
export const ProjectCard = ({
  id,
  title,
  authorId,
  authorName,
  createdAt,
  imageUrl,
  //   orgId,
  isFavorite,
}: ProjectCardProps) => {
  const userId = "fromauth"
  const authorLabel = userId === authorId ? "You" : authorName
  const createdAtLabel = formatDistanceToNow(createdAt, { addSuffix: true })

  return (
    <Link href={`/board/${id}`}>
      <div className="group flex aspect-[5/3] flex-col justify-between overflow-hidden rounded-lg border">
        <div className="relative flex-1 bg-amber-50">
          <Image src={imageUrl} alt={title} fill className="object-fit" />
          <Overlay />
          {/* <Actions id={id} title={title} side="right">
            <button className="absolute right-1 top-1 px-3 py-2 opacity-0 outline-none transition-opacity group-hover:opacity-100">
              <MoreHorizontal className="text-white opacity-75 transition-opacity hover:opacity-100" />
            </button>
          </Actions> */}
        </div>
        <Footer
          isFavorite={isFavorite}
          title={title}
          authorLabel={authorLabel}
          createdAtLabel={createdAtLabel}
          //   onClick={toggleFavorite}
          //   disabled={pendingFavorite || pendingUnfavorite}
          disabled={false}
        />
      </div>
    </Link>
  )
}
export const Overlay = () => {
  return (
    <div className="h-full w-full bg-black opacity-0 transition-opacity group-hover:opacity-50" />
  )
}

ProjectCard.Skeleton = function ProjectCardSkeleton() {
  return (
    <div className="aspect-[100/127] overflow-hidden rounded-lg">
      <Skeleton className="h-full w-full" />
    </div>
  )
}
