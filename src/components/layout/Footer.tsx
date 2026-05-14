'use client';

import { useLocaleStore } from '@/lib/stores/localeStore';
import { useMessages } from '@/lib/i18n/useMessages';

interface FooterProps {
  lastUpdated?: string;
  lastUpdatedByLocale?: Record<string, string | undefined>;
  defaultLocale?: string;
}

export default function Footer({
  lastUpdated,
  lastUpdatedByLocale,
  defaultLocale = 'en',
}: FooterProps) {
  const locale = useLocaleStore((state) => state.locale);
  const messages = useMessages();

  const resolvedLastUpdated =
    lastUpdatedByLocale?.[locale] ||
    (defaultLocale
      ? lastUpdatedByLocale?.[defaultLocale]
      : undefined) ||
    lastUpdated ||
    new Date().toLocaleDateString(locale || 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

  return (
    <footer className="border-t border-neutral-200/50 bg-neutral-50/50 dark:bg-neutral-900/50 dark:border-neutral-700/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Visitor Map */}
        <div className="flex justify-center mb-6">
          <a
            href="https://mapmyvisitors.com/web/1c4hb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://mapmyvisitors.com/map.png?d=V6d7xbZrKjW8T9aS8Ksy3uBGme-IS2MrT1W1XIX87Eo&cl=ffffff"
              alt="Visitor Map"
              className="w-full max-w-sm rounded-lg shadow-md"
            />
          </a>
        </div>

        {/* Footer Info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-2">
          <p className="text-xs text-neutral-500">
            {messages.footer.lastUpdated}: {resolvedLastUpdated}
          </p>
          <p className="text-xs text-neutral-500">
            © 2026 Liwen Huang
          </p>
        </div>
      </div>
    </footer>
  );
}