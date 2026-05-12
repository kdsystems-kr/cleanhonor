import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative pt-24 pb-12 md:pt-32 md:pb-20 min-h-150 flex items-center"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-bold">
            <span className="block text-white">정직한 청소</span>
            <span className="block text-red-400">클린아너</span>
          </h1>
          <p className="text-lg text-white/80 mb-8 leading-relaxed break-keep">
            어떤 청소든 맡겨주세요. <br />
            젊고 열정적인 전문가들이 정직하고 깨끗하게 책임지겠습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors gap-2"
            >
              무료 상담 신청
              <ArrowRight size={20} />
            </a>
            <a
              href="#services"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white/20 transition-colors"
            >
              서비스 보기
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
