export function PaymentFooter() {
    return (
      <footer className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-8 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-right">
            <div>
              <h4 className="font-semibold text-lg mb-2" dir="rtl">
                الدعم الفني
              </h4>
              <p className="text-gray-300 text-sm" dir="rtl">
                متاح 24/7 لخدمتكم
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2" dir="rtl">
                الأمان والحماية
              </h4>
              <p className="text-gray-300 text-sm" dir="rtl">
                جميع المعاملات مشفرة وآمنة
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg mb-2" dir="rtl">
                وسائل الدفع
              </h4>
              <p className="text-gray-300 text-sm" dir="rtl">
                K-Net وجميع البطاقات المصرفية
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-6 pt-6 text-center">
            <p className="text-gray-400 text-sm">© 2024 الهيئة العامة للمعلومات المدنية - دولة الكويت</p>
          </div>
        </div>
      </footer>
    )
  }
  