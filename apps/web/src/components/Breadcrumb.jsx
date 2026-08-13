
import React from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils.js';

const Breadcrumb = ({ items, className }) => {
  if (!items || items.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className={cn("breadcrumb-nav", className)}>
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <React.Fragment key={index}>
            {isLast ? (
              <span className="breadcrumb-active" aria-current="page">
                {item.label}
              </span>
            ) : (
              <>
                <Link to={item.path} className="breadcrumb-link">
                  {item.label}
                </Link>
                <span className="breadcrumb-separator" aria-hidden="true">
                  &gt;
                </span>
              </>
            )}
          </React.Fragment>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
