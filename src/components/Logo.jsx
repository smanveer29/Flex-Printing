import { HiOutlinePrinter } from 'react-icons/hi';
import { business } from '../data/business';

export default function Logo({ compact = false }) {
  return (
    <a href="#home" className="flex items-center gap-2.5">
      <span className="grid h-9 w-9 place-items-center rounded-md bg-primary text-primary-on shadow-ambient">
        <HiOutlinePrinter className="h-5 w-5" />
      </span>
      <span className="leading-tight">
        <span className="block text-label-sm font-semibold text-ink">{business.nameEn}</span>
        {!compact && (
          <span className="block text-caption text-ink-variant">{business.nameSuffixEn}</span>
        )}
      </span>
    </a>
  );
}
