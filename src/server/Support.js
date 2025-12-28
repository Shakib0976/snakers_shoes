const { Headphones, Truck, RefreshCcw, Shield, FileText, HelpCircle, Globe } = require("lucide-react");

export const supportStats = [
    { icon: <Headphones className="w-6 h-6" />, value: "24/7", label: "Customer Support" },
    { icon: <Truck className="w-6 h-6" />, value: "3-5 Days", label: "Avg. Delivery" },
    { icon: <RefreshCcw className="w-6 h-6" />, value: "30 Days", label: "Easy Returns" },
    { icon: <Shield className="w-6 h-6" />, value: "2 Years", label: "Warranty" },
  ];

 export const faqCategories = [
    { id: 'ordering', title: 'Ordering & Payment', icon: <FileText className="w-5 h-5" /> },
    { id: 'shipping', title: 'Shipping & Delivery', icon: <Truck className="w-5 h-5" /> },
    { id: 'returns', title: 'Returns & Exchanges', icon: <RefreshCcw className="w-5 h-5" /> },
    { id: 'products', title: 'Products & Sizing', icon: <HelpCircle className="w-5 h-5" /> },
    { id: 'account', title: 'Account & Security', icon: <Shield className="w-5 h-5" /> },
    { id: 'international', title: 'International', icon: <Globe className="w-5 h-5" /> },
  ];

 export const faqs = [
    {
      id: 1,
      category: 'ordering',
      question: 'How can I track my order?',
      answer: 'Once your order ships, you\'ll receive a tracking number via email. You can also track your order by logging into your account and visiting the "Order History" section. Real-time updates are available for all shipments.'
    },
    {
      id: 2,
      category: 'ordering',
      question: 'What payment methods do you accept?',
      answer: 'We accept Visa, MasterCard, American Express, PayPal, Apple Pay, Google Pay, and Shop Pay. All payments are processed securely through encrypted channels.'
    },
    {
      id: 3,
      category: 'shipping',
      question: 'How long does shipping take?',
      answer: 'Standard shipping takes 3-5 business days. Express shipping delivers in 1-2 business days. International shipping varies by destination (7-14 business days). You\'ll receive shipping confirmation within 24 hours of placing your order.'
    },
    {
      id: 4,
      category: 'returns',
      question: 'What is your return policy?',
      answer: 'We offer a 30-day return policy. Items must be unworn, in original condition with tags attached. Returns are free for domestic orders. Refunds are processed within 5-7 business days after we receive your return.'
    },
    {
      id: 5,
      category: 'products',
      question: 'How do I find the right size?',
      answer: 'Use our interactive size guide available on each product page. Measure your foot length and compare with our sizing chart. Most sneakers run true to size, but check individual product reviews for specific sizing recommendations.'
    },
    {
      id: 6,
      category: 'products',
      question: 'How do I care for my sneakers?',
      answer: 'For leather sneakers, use a soft brush and mild cleaner. For fabric sneakers, spot clean with a damp cloth. Avoid machine washing. Use protective sprays for suede. Store in a cool, dry place away from direct sunlight.'
    },
    {
      id: 7,
      category: 'account',
      question: 'How do I reset my password?',
      answer: 'Click "Forgot Password" on the login page. Enter your email address and we\'ll send you a password reset link. The link expires in 24 hours. If you don\'t receive the email, check your spam folder or contact support.'
    },
    {
      id: 8,
      category: 'international',
      question: 'Do you ship internationally?',
      answer: 'Yes! We ship to over 50 countries worldwide. International shipping costs and delivery times vary by location. All prices are displayed in your local currency at checkout. Customs duties may apply depending on your country.'
    },
  ];

  export const popularArticles = [
    { title: 'Sneaker Sizing Guide', views: '15.2k', category: 'Products' },
    { title: 'How to Clean White Sneakers', views: '12.8k', category: 'Care' },
    { title: 'Return & Exchange Process', views: '9.4k', category: 'Returns' },
    { title: 'Shipping Methods Explained', views: '8.7k', category: 'Shipping' },
    { title: 'Payment Security FAQ', views: '7.3k', category: 'Security' },
  ];