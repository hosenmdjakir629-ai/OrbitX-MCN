import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { JoinFormData } from '../types';
import { User, Youtube, Mail, Globe, Hash, Briefcase, ArrowRight, AlertCircle } from 'lucide-react';

export default function JoinForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<JoinFormData>({
    fullName: '',
    channelName: '',
    youtubeLink: '',
    subscribers: '',
    email: '',
    country: '',
    contentNiche: ''
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState('');

  const validateField = (key: string, value: string) => {
    if (!value) {
      if (key === 'country') return 'Please select your country.';
      if (key === 'contentNiche') return 'Please select your niche.';
      return 'This field is required.';
    }
    
    if (key === 'fullName' && value.trim().length < 2) return 'Full name is too short.';
    if (key === 'channelName' && value.trim().length < 2) return 'Channel name is too short.';
    
    if (key === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) return 'Invalid email address.';
    }
    
    if (key === 'youtubeLink') {
      if (!value.startsWith('http')) return 'Link must start with https://';
      try {
        const url = new URL(value);
        if (!url.hostname.includes('youtube.com') && !url.hostname.includes('youtu.be')) return 'Must be a YouTube link.';
      } catch {
        return 'Invalid URL format.';
      }
    }
    
    if (key === 'subscribers') {
      const num = parseInt(value, 10);
      if (isNaN(num) || num < 0) return 'Must be a positive number.';
    }
    
    return '';
  };

  const handleInputChange = (key: string, value: string) => {
    setFormData(prev => ({ ...prev, [key]: value }));
    setFieldErrors(prev => ({ ...prev, [key]: validateField(key, value) }));
  };

  const validate = () => {
    const errors: Record<string, string> = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key as keyof JoinFormData]);
      if (error) errors[key] = error;
    });
    return errors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError('Please fix the errors in the form.');
    } else {
      setFieldErrors({});
      setError('');
      navigate('/payment', { state: { applicantData: formData } });
    }
  };

  const niches = [
    'Gaming', 'Beauty & Fashion', 'Tech & Gadgets', 'Education', 'Entertainment', 
    'Lifestyle', 'Vlogging', 'Music', 'News & Politics', 'Comedy', 
    'Food & Cooking', 'Travel', 'Health & Fitness', 'Business & Finance', 'Other'
  ];

  const countries = [
    'Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria',
    'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia',
    'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cabo Verde', 'Cambodia',
    'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica',
    'Croatia', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt',
    'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 'Fiji', 'Finland', 'France', 'Gabon',
    'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', 'Guinea-Bissau', 'Guyana', 'Haiti',
    'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan',
    'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', 'Korea, North', 'Korea, South', 'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia',
    'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia',
    'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', 'Mexico', 'Micronesia', 'Moldova', 'Monaco',
    'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', 'Nauru', 'Nepal', 'Netherlands', 'New Zealand',
    'Nicaragua', 'Niger', 'Nigeria', 'North Macedonia', 'Norway', 'Oman', 'Pakistan', 'Palau', 'Panama', 'Papua New Guinea',
    'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis',
    'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', 'Sao Tome and Principe', 'Saudi Arabia', 'Senegal',
    'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', 'Somalia', 'South Africa',
    'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand',
    'Timor-Leste', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine',
    'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Vanuatu', 'Vatican City', 'Venezuela',
    'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe'
  ];

  return (
    <section id="join-form" className="py-24 px-6 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(236,72,153,0.05)_0%,transparent_50%)]" />
      
      <div className="max-w-4xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orbit-pink font-bold text-sm uppercase tracking-[0.2em] mb-4"
          >
            Application
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-display font-bold text-white mb-6"
          >
            Start your <span className="text-gradient-colorful italic font-serif">journey</span> today.
          </motion.h2>
          <p className="text-zinc-500">Complete the form below to apply for the OrbitX MCN network.</p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-colorful p-8 md:p-12 rounded-[40px] border-white/5 shadow-2xl"
        >
          {error && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8 p-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-400 text-sm flex items-center gap-3"
            >
              <AlertCircle size={18} />
              {error}
            </motion.div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                { key: 'fullName', label: 'Full Name', icon: User, type: 'text', placeholder: 'John Doe' },
                { key: 'channelName', label: 'Channel Name', icon: Youtube, type: 'text', placeholder: 'My Awesome Channel' },
                { key: 'youtubeLink', label: 'YouTube Link', icon: Youtube, type: 'url', placeholder: 'https://youtube.com/@channel' },
                { key: 'subscribers', label: 'Subscribers', icon: Hash, type: 'number', placeholder: '1000' },
                { key: 'email', label: 'Email Address', icon: Mail, type: 'email', placeholder: 'john@example.com' },
              ].map((field) => (
                <div key={field.key} className="space-y-2">
                  <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">{field.label}</label>
                  <div className="relative group">
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-orbit-pink transition-colors">
                      <field.icon size={18} />
                    </div>
                    <input
                      type={field.type}
                      placeholder={field.placeholder}
                      value={formData[field.key as keyof typeof formData]}
                      onChange={(e) => handleInputChange(field.key, e.target.value)}
                      className={`w-full bg-white/5 border-2 rounded-2xl py-4 pl-12 pr-4 text-white placeholder:text-zinc-600 focus:outline-none focus:border-orbit-pink transition-all ${fieldErrors[field.key] ? 'border-red-500/50' : 'border-white/5'}`}
                    />
                  </div>
                  {fieldErrors[field.key] && <p className="text-[10px] text-red-400 font-bold ml-1">{fieldErrors[field.key]}</p>}
                </div>
              ))}

              <div className="space-y-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Country</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-orbit-pink transition-colors">
                    <Globe size={18} />
                  </div>
                  <select
                    value={formData.country}
                    onChange={(e) => handleInputChange('country', e.target.value)}
                    className={`w-full bg-white/5 border-2 rounded-2xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-orbit-pink transition-all ${fieldErrors.country ? 'border-red-500/50' : 'border-white/5'}`}
                  >
                    <option value="" className="bg-orbit-black">Select Country</option>
                    {countries.map(c => <option key={c} value={c} className="bg-orbit-black">{c}</option>)}
                  </select>
                </div>
                {fieldErrors.country && <p className="text-[10px] text-red-400 font-bold ml-1">{fieldErrors.country}</p>}
              </div>

              <div className="space-y-2 md:col-span-2">
                <label className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest ml-1">Primary Content Niche</label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-orbit-pink transition-colors">
                    <Briefcase size={18} />
                  </div>
                  <select
                    value={formData.contentNiche}
                    onChange={(e) => handleInputChange('contentNiche', e.target.value)}
                    className={`w-full bg-white/5 border-2 rounded-2xl py-4 pl-12 pr-4 text-white appearance-none focus:outline-none focus:border-orbit-pink transition-all ${fieldErrors.contentNiche ? 'border-red-500/50' : 'border-white/5'}`}
                  >
                    <option value="" className="bg-orbit-black">Select Niche</option>
                    {niches.map(n => <option key={n} value={n} className="bg-orbit-black">{n}</option>)}
                  </select>
                </div>
                {fieldErrors.contentNiche && <p className="text-[10px] text-red-400 font-bold ml-1">{fieldErrors.contentNiche}</p>}
              </div>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="w-full bg-gradient-to-r from-orbit-pink via-orbit-purple to-orbit-blue text-white font-bold py-5 rounded-2xl shadow-xl shadow-orbit-pink/20 flex items-center justify-center gap-3 group"
            >
              Submit Application <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
