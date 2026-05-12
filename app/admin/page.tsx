"use client";

import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  type User,
} from "firebase/auth";
import { collection, getDocs, orderBy, query, deleteDoc, doc } from "firebase/firestore";
import { auth, db } from "@/lib/firebase";

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  message: string;
  createdAt: { seconds: number } | null;
}

export default function AdminPage() {
  const [user, setUser] = useState<User | null>(null);
  const [authLoading, setAuthLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [pw, setPw] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);

  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [dataLoading, setDataLoading] = useState(false);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setAuthLoading(false);
    });
    return unsub;
  }, []);

  useEffect(() => {
    if (!user) return;
    const fetch = async () => {
      setDataLoading(true);
      const q = query(collection(db, "inquiries"), orderBy("createdAt", "desc"));
      const snap = await getDocs(q);
      setInquiries(snap.docs.map((d) => ({ id: d.id, ...d.data() } as Inquiry)));
      setDataLoading(false);
    };
    fetch();
  }, [user]);

  const handleLogin = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoginLoading(true);
    setLoginError("");
    try {
      await signInWithEmailAndPassword(auth, email, pw);
    } catch {
      setLoginError("이메일 또는 비밀번호가 올바르지 않습니다.");
    } finally {
      setLoginLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm("이 문의를 삭제하시겠습니까?")) return;
    setDeleting(id);
    await deleteDoc(doc(db, "inquiries", id));
    setInquiries((prev) => prev.filter((i) => i.id !== id));
    setDeleting(null);
  };

  const formatDate = (ts: { seconds: number } | null) => {
    if (!ts) return "-";
    return new Date(ts.seconds * 1000).toLocaleString("ko-KR");
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center text-gray-400">
        로딩 중...
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow p-10 w-full max-w-sm">
          <h1 className="text-xl font-bold text-center mb-6">관리자 로그인</h1>
          <form onSubmit={handleLogin} className="space-y-4">
            <input
              type="email"
              placeholder="이메일"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
            />
            <input
              type="password"
              placeholder="비밀번호"
              required
              value={pw}
              onChange={(e) => setPw(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-colors"
            />
            {loginError && <p className="text-red-500 text-sm">{loginError}</p>}
            <button
              type="submit"
              disabled={loginLoading}
              className="w-full py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium disabled:opacity-60"
            >
              {loginLoading ? "로그인 중..." : "로그인"}
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
        <h1 className="text-lg font-bold">클린아너 어드민</h1>
        <div className="flex items-center gap-4">
          <span className="text-sm text-gray-400">{user.email}</span>
          <button
            onClick={() => signOut(auth)}
            className="text-sm text-gray-500 hover:text-red-600 transition-colors"
          >
            로그아웃
          </button>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-medium">문의 목록</h2>
          <span className="text-sm text-gray-500">총 {inquiries.length}건</span>
        </div>

        {dataLoading ? (
          <div className="text-center py-20 text-gray-400">불러오는 중...</div>
        ) : inquiries.length === 0 ? (
          <div className="text-center py-20 text-gray-400">문의가 없습니다.</div>
        ) : (
          <div className="space-y-4">
            {inquiries.map((item) => (
              <div key={item.id} className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-start justify-between gap-4">
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 flex-1 text-sm">
                    <div>
                      <p className="text-gray-400 mb-1">이름</p>
                      <p className="font-medium">{item.name}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">연락처</p>
                      <p className="font-medium">{item.phone}</p>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">서비스</p>
                      <span className="inline-block px-2 py-0.5 bg-red-100 text-red-600 rounded-full text-xs">
                        {item.serviceType}
                      </span>
                    </div>
                    <div>
                      <p className="text-gray-400 mb-1">접수일</p>
                      <p className="text-xs">{formatDate(item.createdAt)}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => handleDelete(item.id)}
                    disabled={deleting === item.id}
                    className="text-xs text-gray-400 hover:text-red-500 transition-colors shrink-0"
                  >
                    {deleting === item.id ? "삭제 중..." : "삭제"}
                  </button>
                </div>
                {item.message && (
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-gray-400 text-xs mb-1">문의 내용</p>
                    <p className="text-sm text-gray-700 leading-relaxed">{item.message}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
