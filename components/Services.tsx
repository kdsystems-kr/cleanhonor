export function Services() {
  const services = [
    {
      img: "/service1.png",
      title: "입주 청소",
      description: "새집 입주 전후, 이사 청소를 완벽하게 처리해드립니다.",
    },
    {
      img: "/service2.png",
      title: "사무실 정기청소",
      description:
        "쾌적한 업무환경을 위한 전문적인 사무공간 정기 청소 서비스입니다.",
    },
    {
      img: "/service3.png",
      title: "상가/매장 청소",
      description: "카페, 음식점, 매장 등 상업 공간의 위생을 책임집니다.",
    },
    {
      img: "/service4.png",
      title: "계단 청소",
      description: "건물 계단 및 공용 공간을 깨끗하게 유지해드립니다.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            <span className="text-gray-900">어떤 청소든 </span>
            <span className="text-red-600">맡겨주세요</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            주거공간부터 상업공간까지, 모든 유형의 청소를 전문적으로 처리합니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={service.img}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="mb-2 font-bold lg:text-2xl ">{service.title}</h3>
                <p className="text-gray-600 text-sm lg:text-md leading-relaxed break-keep">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
