import React from 'react';
import Link from 'next/link';

interface AppLink {
  name: string;
  url: string;
}

interface AppSidebarProps {
  title?: string;
  apps: AppLink[];
  buttonText?: string;
  buttonUrl?: string;
}

const isExternalLink = (url: string) =>
  url.startsWith('http://') || url.startsWith('https://') || url.startsWith('//');

function AppSidebar({ title = 'Guider för rekommenderade appar:', apps, buttonText, buttonUrl }: AppSidebarProps) {
  const commonClasses = "flex items-center gap-3 py-3 px-4 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] focus-visible:ring-red-500/60 motion-reduce:transition-none group";
  const focusClasses = "focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-[#111] focus-visible:ring-red-500/60";

  return (
    <div className="w-full">
      <h3 className="text-white font-bold text-lg mb-6">{title}</h3>
      <div className="flex flex-col">
        {apps.map((app, i) => {
          const isExternal = isExternalLink(app.url);
          if (isExternal) {
            return (
              <a
                key={i}
                href={app.url}
                target="_blank"
                rel="noopener noreferrer"
                className={commonClasses}
                aria-label={app.name}
              >
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </span>
                <span className="text-white font-bold text-base">{app.name}</span>
              </a>
            );
          }
          return (
            <Link
              key={i}
              href={app.url}
              className={commonClasses}
              aria-label={app.name}
            >
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white text-xs font-bold shrink-0" aria-hidden="true">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
              <span className="text-white font-bold text-base">{app.name}</span>
            </Link>
          );
        })}
      </div>
      {buttonText && buttonUrl && (
        <div className="mt-8">
          {buttonUrl.startsWith('http://') || buttonUrl.startsWith('https://') ? (
            <a
              href={buttonUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors duration-300 ${focusClasses} motion-reduce:transition-none shadow-lg text-base inline-flex items-center justify-center gap-2 w-full`}
              aria-label={buttonText}
            >
              {buttonText}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          ) : (
            <Link
              href={buttonUrl}
              className={`bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-xl text-center transition-colors duration-300 ${focusClasses} motion-reduce:transition-none shadow-lg text-base inline-flex items-center justify-center gap-2 w-full`}
              aria-label={buttonText}
            >
              {buttonText}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          )}
        </div>
      )}
    </div>
  );
}

export default AppSidebar;