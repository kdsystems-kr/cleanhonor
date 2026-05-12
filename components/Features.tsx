import { Users, Shield, Heart, Award } from "lucide-react";

export function Features() {
  const features = [
    {
      icon: Users,
      title: "젊고 열정적인 팀",
      description: "20~30대 젊은 전문가들이 에너지 넘치는 서비스를 제공합니다.",
      stat: "평균 연령 28세",
    },
    {
      icon: Shield,
      title: "정직한 가격",
      description: "숨은 비용 없이 투명하고 합리적인 가격으로 서비스합니다.",
      stat: "100% 투명 견적",
    },
    {
      icon: Heart,
      title: "고객 만족 우선",
      description: "만족하실 때까지 책임지고 완벽하게 마무리합니다.",
      stat: "재방문율 95%",
    },
    {
      icon: Award,
      title: "전문성과 경험",
      description: "체계적인 교육과 풍부한 경험으로 최상의 결과를 보장합니다.",
      stat: "3000+ 완료",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            <span className="text-gray-900">왜 </span>
            <span className="text-blue-600">클린아너</span>
            <span className="text-gray-900">인가요?</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            다른 청소업체와 차별화된 클린아너만의 강점입니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-lg mb-6">
                <feature.icon size={32} className="text-red-600" />
              </div>
              <h3 className="mb-3 font-medium break-keep">{feature.title}</h3>
              <p className="text-gray-600 mb-4 leading-relaxed break-keep">
                {feature.description}
              </p>
              {/* <div className="inline-block px-4 py-2 bg-blue-600 text-white rounded-full">
                {feature.stat}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
