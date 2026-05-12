const items = [
  {
    img: "/as1.png",
    title: "철저한 검수",
    desc: "검수 후 미흡한 부분은 즉시 수정 청소가 진행됩니다.",
  },
  {
    img: "/as2.png",
    title: "고객만족 콜센터",
    desc: "A/S신청 시 담당자가 빠른 연락 드리겠습니다.",
  },
  {
    img: "/as3.png",
    title: "고객 피드백 반영",
    desc: "고객님의 소중한 피드백을 반영합니다.",
  },
];

export function CareService() {
  return (
    <section id="care" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-bold">
            <span className="text-gray-900">클린아너만의 </span>
            <span className="text-blue-600">A/S케어서비스</span>
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto break-keep">
            청소가 끝난 후 미흡한 부분이 발견될 시<br />
            애프터 케어 서비스를 통해 신속하게 재청소를 진행해드립니다. <br />
          </p>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item) => (
            <div key={item.title} className="text-center">
              <div className="rounded-2xl overflow-hidden mb-5 aspect-[4/3]">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="font-medium lg:text-2xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm lg:text-lg leading-relaxed break-keep">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
