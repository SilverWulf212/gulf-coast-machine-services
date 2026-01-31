"use client";

import { InputHTMLAttributes, TextareaHTMLAttributes, SelectHTMLAttributes, ReactNode } from "react";

interface BaseInputProps {
  label: string;
  error?: string;
}

interface TextInputProps extends BaseInputProps, InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "email" | "tel" | "password" | "number";
}

interface TextareaProps extends BaseInputProps, TextareaHTMLAttributes<HTMLTextAreaElement> {}

interface SelectInputProps extends BaseInputProps, SelectHTMLAttributes<HTMLSelectElement> {
  children: ReactNode;
}

export function FormInput({
  label,
  error,
  type = "text",
  id,
  required,
  ...props
}: TextInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-mono text-xs text-[var(--cream)]/80 uppercase tracking-wider"
      >
        {label}
        {required && <span className="text-[var(--warning)] ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        required={required}
        className={`input-industrial ${error ? "border-[var(--warning)]" : ""}`}
        {...props}
      />
      {error && (
        <p className="text-[var(--warning)] text-sm">{error}</p>
      )}
    </div>
  );
}

export function FormTextarea({
  label,
  error,
  id,
  required,
  ...props
}: TextareaProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-mono text-xs text-[var(--cream)]/80 uppercase tracking-wider"
      >
        {label}
        {required && <span className="text-[var(--warning)] ml-1">*</span>}
      </label>
      <textarea
        id={id}
        required={required}
        className={`textarea-industrial ${error ? "border-[var(--warning)]" : ""}`}
        {...props}
      />
      {error && (
        <p className="text-[var(--warning)] text-sm">{error}</p>
      )}
    </div>
  );
}

export function FormSelect({
  label,
  error,
  id,
  required,
  children,
  ...props
}: SelectInputProps) {
  return (
    <div className="space-y-2">
      <label
        htmlFor={id}
        className="block text-mono text-xs text-[var(--cream)]/80 uppercase tracking-wider"
      >
        {label}
        {required && <span className="text-[var(--warning)] ml-1">*</span>}
      </label>
      <select
        id={id}
        required={required}
        className={`select-industrial ${error ? "border-[var(--warning)]" : ""}`}
        {...props}
      >
        {children}
      </select>
      {error && (
        <p className="text-[var(--warning)] text-sm">{error}</p>
      )}
    </div>
  );
}
