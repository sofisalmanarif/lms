import React from "react";

interface TypographyProps {
  children: React.ReactNode;
  className?: string;
}

export function TypographyH1({ children, className = "" }: TypographyProps) {
  return (
    <h1
      className={`scroll-m-20 md:text-5xl text-lg font-extrabold tracking-tight lg:text-6xl ${className}`}
    >
      {children}
    </h1>
  );
}


export function TypographyH2({ children, className = "" }: TypographyProps) {
  return (
    <h2 className={`scroll-m-20  md:text-5xl text-xl  tracking-tight first:mt-0 ${className}`}>
      {children}
    </h2>
  )
}


export function TypographyH3({ children, className = "" }: TypographyProps) {
  return (
    <h3 className={`scroll-m-20 text-2xl font-semibold tracking-tight ${className}`}>
      {children}
    </h3>
  )
}


export function TypographyH4({ children, className = "" }: TypographyProps) {
  return (
    <h4 className={`scroll-m-20 text-xl font-semibold tracking-tight ${className}`}>
      {children}
    </h4>
  )
}


export function TypographyLead({ children, className = "" }: TypographyProps) {
  return (
    <p className={`sm:text-lg text-sm text-muted-foreground ${className}`}>
      {children}
    </p>
  )
}


export function TypographyP({ children, className = "" }: TypographyProps) {
  return (
    <p className={`leading-none [&:not(:first-child)]:mt-6 ${className}`}>
      {children}
    </p>
  )
}

export function TypographyTableH2({ children, className = "" }: TypographyProps) {
  return (
    <h2 className={`sm:text-4xl text-2xl text-primary ${className}`}>
      {children}
    </h2>
  )
}


export function TypographyMuted({ children, className = "" }: TypographyProps) {
  return (
    <p className={`sm:text-xl text-sm text-muted-foreground ${className}`}>{children}</p>
  )
}


export function TypographySmall({ children, className = "" }: TypographyProps) {
  return (
    <small className={`text-xs font-medium leading-none ${className}`}>{children}</small>
  )
}
