import { useState, FormEvent } from 'react';
import { motion } from 'motion/react';
import { JoinFormData } from '../types';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

export default function JoinForm() {
  const [formData, setFormData] = useState<JoinFormData>({
    fullName: '',
    channelName: '',
    youtubeLink: '',
    subscribers: '',
    email: '',
    country: ''
  });
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [error, setError] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const validateField = (key: string, value: string) => {
    if (!value) {
      if (key === 'country') return 'Please select your country from the list.';
      return 'This field is required.';
    }
    
    if (key === 'fullName' && value.trim().length < 2) {
      return 'Please enter your full name (at least 2 characters).';
    }
    
    if (key === 'channelName' && value.trim().length < 2) {
      return 'Channel name must be at least 2 characters long.';
    }
    
    if (key === 'email') {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) {
        return 'Please enter a valid email address (e.g., name@example.com).';
      }
    }
    
    if (key === 'youtubeLink') {
      if (!value.startsWith('http://') && !value.startsWith('https://')) {
        return 'Link must start with http:// or https://';
      }
      try {
        const url = new URL(value);
        if (!url.hostname.includes('youtube.com') && !url.hostname.includes('youtu.be')) {
          return 'Link must be a valid YouTube domain (youtube.com or youtu.be).';
        }
        if (url.pathname === '/' || url.pathname === '') {
          return 'Please provide a link to your specific channel or video, not just the homepage.';
        }
      } catch {
        return 'The link format is invalid. Please copy and paste the exact URL.';
      }
    }
    
    if (key === 'subscribers') {
      const num = parseInt(value, 10);
      if (isNaN(num) || num < 0) {
        return 'Please enter a valid positive number for subscribers.';
      }
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
      
      const message = `New Creator Application!
      
      --- Application Details ---
      Name: ${formData.fullName}
      Channel: ${formData.channelName}
      Link: ${formData.youtubeLink}
      Subscribers: ${formData.subscribers}
      Email: ${formData.email}
      Country: ${formData.country}`;
      
      const whatsappUrl = `https://wa.me/8801927694437?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');

      setSubmitted(true);
      setFormData({ fullName: '', channelName: '', youtubeLink: '', subscribers: '', email: '', country: '' });
    }
  };

  if (submitted) {
    return (
      <section id="join-form" className="py-20 px-6 max-w-2xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white p-12 rounded-3xl shadow-xl border border-zinc-100"
        >
          <h2 className="text-3xl font-bold mb-4 text-emerald-600">Application Submitted!</h2>
          <p className="text-zinc-600 mb-8">We have received your application. Our team will review it and get back to you soon.</p>
          <a 
            href="https://wa.me/8801927694437" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-semibold px-8 py-4 rounded-2xl hover:bg-green-600 transition-all"
          >
            Chat on WhatsApp
          </a>
        </motion.div>
      </section>
    );
  }

  const inputFields = [
    { type: 'text', placeholder: 'Full Name', key: 'fullName' },
    { type: 'text', placeholder: 'Channel Name', key: 'channelName' },
    { type: 'url', placeholder: 'YouTube Channel Link', key: 'youtubeLink' },
    { type: 'number', placeholder: 'Subscribers', key: 'subscribers' },
    { type: 'email', placeholder: 'Email', key: 'email' },
    { type: 'select', placeholder: 'Select Country', key: 'country' },
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
    <section id="join-form" className="py-20 px-6 max-w-2xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-blue-600"
      >
        Creator Join Form
      </motion.h2>
      {error && <p className="text-red-500 text-center mb-6">{error}</p>}
      <motion.form 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="space-y-6" 
        onSubmit={handleSubmit}
      >
        {inputFields.map((field, index) => (
          <motion.div
            key={field.key}
            variants={itemVariants}
          >
            {field.type === 'select' ? (
              <select
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                className={`w-full p-4 border-2 rounded-2xl bg-white focus:border-purple-500 transition-colors ${fieldErrors[field.key] ? 'border-red-500' : 'border-zinc-200'}`}
              >
                <option value="">{field.placeholder}</option>
                {countries.map(country => (
                  <option key={country} value={country}>{country}</option>
                ))}
              </select>
            ) : (
              <input
                type={field.type}
                placeholder={field.placeholder}
                value={formData[field.key as keyof typeof formData]}
                onChange={(e) => handleInputChange(field.key, e.target.value)}
                className={`w-full p-4 border-2 rounded-2xl focus:border-purple-500 transition-colors ${fieldErrors[field.key] ? 'border-red-500' : 'border-zinc-200'}`}
              />
            )}
            {fieldErrors[field.key] && <p className="text-red-500 text-sm mt-1">{fieldErrors[field.key]}</p>}
          </motion.div>
        ))}
        <motion.button
          type="submit"
          variants={itemVariants}
          whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold p-4 rounded-2xl transition-all"
        >
          🚀 Submit Application
        </motion.button>
      </motion.form>
    </section>
  );
}
