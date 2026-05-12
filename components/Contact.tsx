"use client";

import { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

export function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    serviceType: "입주 청소",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    try {
      await addDoc(collection(db, "inquiries"), {
        ...form,
        createdAt: serverTimestamp(),
      });
      setStatus("success");
      setForm({ name: "", phone: "", serviceType: "입주 청소", message: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-red-600 to-blue-600 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-4 font-medium">지금 바로 문의하세요</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">
            무료 상담 및 견적을 받아보세요. 친절하게 안내해드리겠습니다.
          </p>
        </div>

        <div className="max-w-2xl mx-auto bg-white rounded-2xl p-8">
          {status === "success" ? (
            <div className="text-center py-10">
              <div className="text-5xl mb-4">✅</div>
              <h3 className="text-xl font-medium text-gray-900 mb-2">문의가 접수되었습니다!</h3>
              <p className="text-gray-600 text-sm">빠른 시간 내에 연락드리겠습니다.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors text-sm"
              >
                다시 문의하기
              </button>
            </div>
          ) : (
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-700 mb-2">이름</label>
                  <input
                    type="text"
                    required
                    placeholder="홍길동"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-colors text-gray-900"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 mb-2">연락처</label>
                  <input
                    type="tel"
                    required
                    placeholder="010-1234-5678"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-colors text-gray-900"
                  />
                </div>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">청소 유형</label>
                <select
                  value={form.serviceType}
                  onChange={(e) => setForm({ ...form, serviceType: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-colors text-gray-900"
                >
                  <option>입주 청소</option>
                  <option>사무실 정기청소</option>
                  <option>상가/매장 청소</option>
                  <option>계단 청소</option>
                </select>
              </div>

              <div>
                <label className="block text-gray-700 mb-2">문의 내용</label>
                <textarea
                  rows={4}
                  placeholder="청소가 필요한 공간과 요청사항을 자유롭게 작성해주세요."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-red-600 focus:ring-2 focus:ring-red-200 outline-none transition-colors resize-none text-gray-900"
                />
              </div>

              {status === "error" && (
                <p className="text-red-600 text-sm">전송 중 오류가 발생했습니다. 다시 시도해 주세요.</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? "전송 중..." : "무료 상담 신청하기"}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
