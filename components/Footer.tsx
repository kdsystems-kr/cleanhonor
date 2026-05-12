import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Image
                src="/logo.png"
                alt="클린아너"
                width={200}
                height={80}
                className="h-20 w-auto object-contain brightness-0 invert"
              />
            </div>
            <p className="text-sm leading-relaxed">
              정직하고 깨끗한 청소 서비스, 젊은 열정으로 책임집니다.
            </p>
          </div>

          <div>
            <h4 className="text-white mb-4">서비스</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">입주 청소</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">사무실 정기청소</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">상가/매장 청소</a>
              </li>
              <li>
                <a href="#services" className="hover:text-red-400 transition-colors">계단 청소</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">회사</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#features"
                  className="hover:text-red-400 transition-colors"
                >
                  회사 소개
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-red-400 transition-colors"
                >
                  고객 후기
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-red-400 transition-colors"
                >
                  문의하기
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">연락처</h4>
            <ul className="space-y-2 text-sm">
              <li>전화: 02-6269-3651</li>
              {/* <li>이메일: info@cleanhonor.kr</li> */}
              <li>서울특별시 금천구 가산동</li>
              {/* <li>평일 09:00 - 18:00</li> */}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-800 text-center text-sm">
          <p>&copy; 2026 클린아너(Clean Honor). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
