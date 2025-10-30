import React from 'react';
import { Skeleton, CardSkeleton } from './skeleton';

interface LoadingWrapperProps {
  isLoading: boolean;
  children: React.ReactNode;
  skeleton?: React.ReactNode;
  className?: string;
}

export function LoadingWrapper({ 
  isLoading, 
  children, 
  skeleton,
  className = '' 
}: LoadingWrapperProps) {
  if (isLoading) {
    return (
      <div className={className}>
        {skeleton || <CardSkeleton />}
      </div>
    );
  }

  return <>{children}</>;
}

// Card Grid Loading Wrapper
interface CardGridLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  cardCount?: number;
  className?: string;
}

export function CardGridLoading({ 
  isLoading, 
  children, 
  cardCount = 3,
  className = '' 
}: CardGridLoadingProps) {
  if (isLoading) {
    return (
      <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ${className}`}>
        {Array.from({ length: cardCount }).map((_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  return <>{children}</>;
}

// Image Loading Wrapper
interface ImageLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  width?: number;
  height?: number;
  className?: string;
}

export function ImageLoading({ 
  isLoading, 
  children, 
  width = 300,
  height = 200,
  className = '' 
}: ImageLoadingProps) {
  if (isLoading) {
    return (
      <div className={className}>
        <Skeleton width={width} height={height} />
      </div>
    );
  }

  return <>{children}</>;
}

// Page Loading Wrapper
interface PageLoadingProps {
  isLoading: boolean;
  children: React.ReactNode;
  showNavbar?: boolean;
  showFooter?: boolean;
}

export function PageLoading({ 
  isLoading, 
  children, 
  showNavbar = true,
  showFooter = true 
}: PageLoadingProps) {
  if (isLoading) {
    return (
      <div className="min-h-screen bg-black">
        {showNavbar && (
          <div className="fixed top-0 left-0 right-0 z-50 bg-black w-full">
            <div className="container max-w-7xl mx-auto flex items-center justify-between py-3">
              <Skeleton height={48} width={120} />
              <div className="hidden lg:flex items-center gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <Skeleton key={i} height={20} width={80} />
                ))}
              </div>
              <Skeleton height={40} width={100} />
            </div>
          </div>
        )}
        
        <div className="pt-16 sm:pt-20 lg:pt-24 p-4 sm:p-6 lg:p-8">
          <div className="container max-w-7xl mx-auto space-y-8">
            <Skeleton height={60} width="60%" className="mx-auto" />
            <Skeleton height={200} width="100%" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <CardSkeleton key={i} />
              ))}
            </div>
          </div>
        </div>

        {showFooter && (
          <div className="bg-black text-white py-8 sm:py-12 lg:py-16 w-full">
            <div className="container max-w-7xl mx-auto">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                <Skeleton height={80} width={200} />
                <div className="space-y-3">
                  <Skeleton height={24} width={120} />
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Skeleton key={i} height={16} width={100} />
                  ))}
                </div>
                <div className="space-y-3">
                  <Skeleton height={24} width={100} />
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Skeleton key={i} height={16} width={120} />
                  ))}
                </div>
                <div className="space-y-3">
                  <Skeleton height={24} width={100} />
                  {Array.from({ length: 7 }).map((_, i) => (
                    <Skeleton key={i} height={16} width={140} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  return <>{children}</>;
}
