import React from 'react';
import { Check } from 'lucide-react';

export const SelectionCard = ({ checked, title, image, onClick, disabled, type = 'radio' }) => (
  <div
    onClick={() => !disabled && onClick(!checked)}
    className={`relative flex flex-col rounded-xl border-2 overflow-hidden transition-all duration-200 group ${
      disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
    } ${
      checked ? 'border-primary ring-2 ring-primary/20 shadow-md' : 'border-border hover:border-primary/50'
    }`}
  >
    {image && (
      <div className="aspect-[4/3] bg-muted relative overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
      </div>
    )}
    <div className="p-4 flex items-start gap-3 bg-card text-card-foreground flex-grow">
      <div className="mt-0.5 shrink-0">
        {type === 'radio' ? (
          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${checked ? 'border-primary bg-primary text-primary-foreground' : 'border-input bg-background'}`}>
            {checked && <div className="w-2.5 h-2.5 rounded-full bg-current" />}
          </div>
        ) : (
          <div className={`w-5 h-5 rounded border flex items-center justify-center ${checked ? 'border-primary bg-primary text-primary-foreground' : 'border-input bg-background'}`}>
            {checked && <Check className="w-3.5 h-3.5" />}
          </div>
        )}
      </div>
      <span className="font-medium text-sm leading-snug">{title}</span>
    </div>
  </div>
);