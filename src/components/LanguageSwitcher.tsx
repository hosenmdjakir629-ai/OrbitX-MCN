import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'bn', name: 'Bengali' },
  { code: 'hi', name: 'Hindi' },
  { code: 'ur', name: 'Urdu' },
  { code: 'ja', name: 'Japanese' },
  { code: 'zh', name: 'Chinese' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="fixed top-4 right-4 z-50">
      <select
        value={i18n.language}
        onChange={(e) => i18n.changeLanguage(e.target.value)}
        className="glass-colorful border border-white/10 rounded-lg p-2 text-sm text-white shadow-lg outline-none focus:border-orbit-pink transition-all cursor-pointer"
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code} className="bg-zinc-900 text-white">
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
