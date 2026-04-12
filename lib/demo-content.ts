// Demo Content for Dr. Vance Premium Plastic Surgery Website
// All content is placeholder and should be replaced with real data

export const siteConfig = {
  name: 'Dr. Alexander Vance',
  title: 'Premium Plastic Surgery',
  tagline: 'Where Art Meets Precision',
  location: 'London, UK',
  address: '123 Harley Street, London W1G 7JU',
  phone: '+44 20 7123 4567',
  email: 'consultations@drvance.co.uk',
  consultationFee: '£150',
  consultationNote: 'Redeemable against any procedure',
}

export const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Procedures', href: '#procedures' },
  { label: 'Results', href: '#results' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' },
]

export const heroContent = {
  headline: 'Dr. Alexander Vance',
  subheadline: 'Premium Plastic Surgery in London',
  tagline: 'Where art meets precision. Transforming lives through expert cosmetic surgery with natural, refined results.',
  cta: 'Book Private Consultation',
}

export const aboutContent = {
  headline: 'Expertise You Can Trust',
  bio: [
    'Dr. Alexander Vance is a board-certified plastic surgeon with over 15 years of experience in aesthetic and reconstructive surgery. Trained at some of the world\'s most prestigious medical institutions, he brings a unique combination of surgical precision and artistic vision to every procedure.',
    'His philosophy centres on understanding each patient\'s individual goals and creating natural-looking results that enhance their unique beauty. Dr. Vance is known for his meticulous attention to detail and commitment to patient safety.',
    'Based on Harley Street in the heart of London, Dr. Vance serves patients from across the UK and internationally, providing a discreet, personalised experience from consultation through recovery.',
  ],
  highlights: [
    '15+ years of surgical experience',
    'Over 3,000 successful procedures',
    'Internationally trained specialist',
    'Personalised approach to every patient',
  ],
}

export const procedures = [
  {
    id: 'rhinoplasty',
    name: 'Rhinoplasty',
    description: 'Expertly sculpted nasal refinement that harmonises with your facial features while maintaining natural aesthetics.',
    icon: 'nose',
  },
  {
    id: 'facelift',
    name: 'Facelift',
    description: 'Advanced facial rejuvenation techniques that restore youthful contours and firmness without an overdone appearance.',
    icon: 'face',
  },
  {
    id: 'breast-augmentation',
    name: 'Breast Augmentation',
    description: 'Customised enhancement using the latest techniques and premium implants for beautiful, proportionate results.',
    icon: 'breast',
  },
  {
    id: 'liposuction',
    name: 'Liposuction',
    description: 'Precise body contouring that removes stubborn fat deposits and sculpts elegant, natural body proportions.',
    icon: 'body',
  },
]

export const beforeAfterCases = [
  {
    id: 1,
    procedure: 'Rhinoplasty',
    age: 34,
    description: 'Refined nasal bridge and tip for improved facial harmony',
    beforeImage: '/placeholder-before-1.jpg',
    afterImage: '/placeholder-after-1.jpg',
  },
  {
    id: 2,
    procedure: 'Facelift',
    age: 52,
    description: 'Natural rejuvenation with restored jawline definition',
    beforeImage: '/placeholder-before-2.jpg',
    afterImage: '/placeholder-after-2.jpg',
  },
  {
    id: 3,
    procedure: 'Breast Augmentation',
    age: 28,
    description: 'Balanced enhancement with natural-looking results',
    beforeImage: '/placeholder-before-3.jpg',
    afterImage: '/placeholder-after-3.jpg',
  },
  {
    id: 4,
    procedure: 'Liposuction',
    age: 41,
    description: 'Sculpted abdomen and flanks for refined contours',
    beforeImage: '/placeholder-before-4.jpg',
    afterImage: '/placeholder-after-4.jpg',
  },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sarah M.',
    procedure: 'Rhinoplasty',
    rating: 5,
    text: 'Dr. Vance exceeded all my expectations. From the first consultation to my final follow-up, I felt completely at ease. The results are so natural that even my closest friends can\'t tell I\'ve had work done.',
  },
  {
    id: 2,
    name: 'James T.',
    procedure: 'Facelift',
    rating: 5,
    text: 'After years of considering surgery, I finally took the step with Dr. Vance. His expertise and artistic eye gave me results that look refreshed, not overdone. I look like myself, just ten years younger.',
  },
  {
    id: 3,
    name: 'Emma L.',
    procedure: 'Breast Augmentation',
    rating: 5,
    text: 'The entire experience was first-class. Dr. Vance listened to exactly what I wanted and delivered results that look completely natural. The aftercare was exceptional.',
  },
  {
    id: 4,
    name: 'Michael R.',
    procedure: 'Liposuction',
    rating: 5,
    text: 'I had been struggling with stubborn fat for years despite diet and exercise. Dr. Vance\'s work has completely transformed my confidence. Professional, discreet, and outstanding results.',
  },
]

export const processSteps = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'A private, in-depth discussion to understand your goals, assess your suitability, and answer all your questions in a comfortable setting.',
  },
  {
    step: 2,
    title: 'Personalised Plan',
    description: 'Dr. Vance creates a customised treatment plan tailored to your unique anatomy and aesthetic goals, with detailed visual simulations.',
  },
  {
    step: 3,
    title: 'Surgery Day',
    description: 'Your procedure is performed in a state-of-the-art facility with the highest standards of safety, care, and precision.',
  },
  {
    step: 4,
    title: 'Recovery & Follow-up',
    description: 'Comprehensive aftercare with regular check-ups to monitor your healing and ensure optimal results throughout your recovery journey.',
  },
]

export const pricingData = [
  {
    id: 'consultation',
    name: 'Private Consultation',
    price: '£150',
    note: 'Redeemable against any procedure',
    features: [
      'One-on-one with Dr. Vance',
      'Detailed assessment',
      'Visual simulations',
      'Personalised recommendations',
    ],
    highlighted: false,
  },
  {
    id: 'rhinoplasty',
    name: 'Rhinoplasty',
    price: '£5,500 - £8,000',
    note: 'Final price confirmed at consultation',
    features: [
      'Comprehensive pre-op assessment',
      'Surgery and anaesthesia',
      'Overnight stay if required',
      '12 months follow-up care',
    ],
    highlighted: true,
  },
  {
    id: 'facelift',
    name: 'Facelift',
    price: '£8,000 - £12,000',
    note: 'Final price confirmed at consultation',
    features: [
      'Full facial analysis',
      'Advanced surgical techniques',
      'Overnight stay included',
      '12 months follow-up care',
    ],
    highlighted: false,
  },
  {
    id: 'breast-augmentation',
    name: 'Breast Augmentation',
    price: '£6,000 - £9,000',
    note: 'Includes premium implants',
    features: [
      '3D imaging consultation',
      'Premium implant selection',
      'Overnight stay included',
      '12 months follow-up care',
    ],
    highlighted: false,
  },
  {
    id: 'liposuction',
    name: 'Liposuction',
    price: '£3,500 - £6,000',
    note: 'Per treatment area',
    features: [
      'Body contouring assessment',
      'Advanced technique',
      'Compression garments',
      '12 months follow-up care',
    ],
    highlighted: false,
  },
]

export const faqs = [
  {
    question: 'What happens during the initial consultation?',
    answer: 'Your consultation is a private, unhurried appointment where Dr. Vance will discuss your goals, examine the area of concern, explain your options, and answer any questions. You\'ll receive a detailed treatment plan and quote with no obligation.',
  },
  {
    question: 'How long is the recovery period?',
    answer: 'Recovery varies by procedure. Most patients return to light activities within 1-2 weeks. Full recovery typically takes 4-6 weeks, though you\'ll see progressive improvements over several months. Dr. Vance provides detailed aftercare guidance.',
  },
  {
    question: 'What results can I expect?',
    answer: 'Dr. Vance specialises in natural-looking results that enhance your features without appearing overdone. During consultation, he\'ll show you visual simulations so you can see potential outcomes before making any decisions.',
  },
  {
    question: 'Is the procedure safe?',
    answer: 'Patient safety is our absolute priority. All procedures are performed in accredited facilities with full surgical teams. Dr. Vance\'s extensive training and experience, combined with rigorous safety protocols, minimise any risks.',
  },
  {
    question: 'Do you offer financing options?',
    answer: 'Yes, we offer flexible payment plans through our finance partners. This allows you to spread the cost over 12-60 months with competitive interest rates. Details are provided during your consultation.',
  },
  {
    question: 'How do I schedule my appointment?',
    answer: 'Simply click the "Book Private Consultation" button or contact our team directly. We\'ll arrange a convenient time for your consultation at our Harley Street clinic. Virtual consultations are also available.',
  },
]

export const credentials = [
  {
    name: 'General Medical Council (GMC)',
    abbreviation: 'GMC',
    description: 'Registered medical practitioner',
  },
  {
    name: 'British Association of Aesthetic Plastic Surgeons',
    abbreviation: 'BAAPS',
    description: 'Full member',
  },
  {
    name: 'British Association of Plastic, Reconstructive and Aesthetic Surgeons',
    abbreviation: 'BAPRAS',
    description: 'Full member',
  },
]

export const footerContent = {
  tagline: 'Exceptional results. Exceptional care.',
  address: '123 Harley Street, London W1G 7JU',
  phone: '+44 20 7123 4567',
  email: 'consultations@drvance.co.uk',
  hours: 'Mon - Fri: 9:00 AM - 6:00 PM',
  copyright: `© ${new Date().getFullYear()} Dr. Alexander Vance. All rights reserved.`,
  links: {
    privacy: '/privacy-policy',
    terms: '/terms-of-service',
  },
  social: [
    { name: 'Instagram', href: '#' },
    { name: 'Facebook', href: '#' },
    { name: 'LinkedIn', href: '#' },
  ],
}

export const ctaContent = {
  headline: 'Begin Your Transformation',
  subheadline: 'Take the first step towards the results you\'ve always wanted. Schedule your private consultation with Dr. Vance today.',
  buttonText: 'Book Private Consultation',
}

export const contactForm = {
  fields: {
    name: { label: 'Full Name', placeholder: 'Enter your full name', required: true },
    email: { label: 'Email Address', placeholder: 'Enter your email', required: true },
    phone: { label: 'Phone Number', placeholder: '+44 ...', required: true },
    message: { label: 'Message (Optional)', placeholder: 'Tell us about your goals...', required: false },
  },
  gdprText: 'I consent to having my data processed in accordance with the Privacy Policy. My information will only be used to respond to my enquiry.',
  submitText: 'Request Consultation',
  successMessage: 'Thank you for your enquiry. Our team will contact you within 24 hours to arrange your consultation.',
}
