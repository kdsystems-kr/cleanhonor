import { Star } from 'lucide-react';

export function Testimonials() {
  const testimonials = [
    {
      name: '김지은',
      role: '강남구 아파트',
      content: '이사 청소를 맡겼는데 정말 깔끔하게 해주셨어요. 젊은 분들이라 빠르고 꼼꼼하게 작업해주셔서 만족스러웠습니다.',
      rating: 5,
    },
    {
      name: '박민수',
      role: '서초구 사무실',
      content: '사무실 정기 청소를 맡기고 있는데 매번 같은 분들이 오셔서 좋고, 가격도 합리적입니다. 추천해요!',
      rating: 5,
    },
    {
      name: '이서연',
      role: '송파구 카페',
      content: '카페 오픈 전 청소를 의뢰했는데 기대 이상으로 깨끗하게 해주셨어요. 정직한 업체라는 느낌이 들었습니다.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-medium">
            <span className="text-gray-900">고객님들의 </span>
            <span className="text-red-600">생생한 후기</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            클린아너를 이용하신 고객님들의 진솔한 이야기를 들어보세요.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-gray-50 hover:shadow-xl transition-shadow"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={20} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="font-bold text-blue-600">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
