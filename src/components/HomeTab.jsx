import { portfolioData } from '../data/portfolioData';
import { BookOpenText, Library, Layers, Quote } from 'lucide-react';

export default function HomeTab({ setActiveTab }) {
  const { student, overview } = portfolioData;

  return (
    <div className="max-w-6xl mx-auto space-y-12 animate-fade-in pb-10">
      
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-3xl border border-slate-700 bg-gradient-to-br from-academic-navy via-slate-800 to-academic-hero-blue p-8 text-white shadow-2xl md:p-12">
        <div className="pointer-events-none absolute inset-y-0 right-0 w-full opacity-[0.08] md:w-1/2">
          <div className="absolute right-10 top-10 h-64 w-48 rounded-t-full border border-academic-cyan" />
          <div className="absolute right-24 top-24 h-64 w-48 rounded-t-full border border-academic-blue-light" />
          <Quote className="absolute bottom-8 right-14 text-academic-cyan" size={120} strokeWidth={1} />
        </div>

        <div className="relative z-10 grid items-center gap-8 lg:grid-cols-[minmax(0,1.65fr)_minmax(280px,0.9fr)]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-block rounded-full border border-blue-400/30 bg-blue-500/20 px-4 py-1.5 text-sm font-semibold tracking-wide text-blue-300">
              Báo cáo Cuối kỳ
            </div>

            <h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl">
              Digital Technology & <br />
              <span className="bg-gradient-to-r from-academic-blue-light to-academic-cyan bg-clip-text text-transparent">
                AI Learning Portfolio
              </span>
            </h1>

            <p className="mb-6 text-lg font-light text-slate-300 md:text-xl">
              Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo
            </p>

            <div className="mb-8 max-w-2xl rounded-2xl border border-white/10 bg-white/10 p-6 backdrop-blur-sm">
              <p className="mb-5 leading-relaxed text-slate-200">{student.bio}</p>

              <div className="flex flex-wrap gap-2">
                {student.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="rounded-md border border-slate-700 bg-slate-800/80 px-3 py-1 text-xs font-medium text-blue-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:gap-4">
              <button
                onClick={() => setActiveTab('projects')}
                className="flex items-center justify-center gap-2 rounded-lg bg-academic-blue px-6 py-3 font-medium text-white shadow-lg shadow-blue-950/30 transition-all hover:bg-blue-500"
              >
                <Layers size={18} /> Xem bài tập
              </button>

              <button
                onClick={() => setActiveTab('evidence')}
                className="flex items-center justify-center gap-2 rounded-lg border border-white/30 bg-white/10 px-6 py-3 font-medium text-white backdrop-blur-sm transition-all hover:bg-white/20"
              >
                <Library size={18} /> Minh chứng
              </button>
            </div>
          </div>

          <aside className="relative mx-auto w-full max-w-sm rounded-[24px] border border-white/10 bg-slate-900/70 p-5 shadow-2xl shadow-blue-950/40 backdrop-blur-md">
            <Quote
              className="absolute right-2 top-2 text-academic-cyan/30"
              size={58}
              strokeWidth={1.5}
            />

            <div className="pointer-events-none absolute bottom-10 right-8 h-24 w-24 rounded-full bg-academic-cyan/20 blur-sm" />

            <div className="relative">
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-blue-300">
                Student Profile
              </p>

              <div className="mb-5 rounded-[22px] border border-white/10 bg-white/10 p-3 shadow-lg shadow-blue-950/30">
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src="/avatar.jpg"
                    alt="Nguyễn Chi Mai"
                    className="h-72 w-full object-cover"
                  />

                  <span className="absolute bottom-3 left-3 rounded-lg bg-slate-950/85 px-3 py-2 text-xs font-bold text-blue-200 shadow-sm backdrop-blur-sm">
                    Nguyễn Chi Mai
                  </span>
                </div>
              </div>

              <p className="mb-1 text-sm font-semibold text-slate-300">
                {student.id} · ULIS - VNU
              </p>

              <p className="text-sm font-semibold leading-relaxed text-white">
                {student.major}
              </p>

              <p className="mt-1 text-xs leading-relaxed text-slate-400">
                {student.university}
              </p>
            </div>
          </aside>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {[
          { label: 'Bài học', value: '07', desc: 'Chủ đề lý thuyết' },
          { label: 'Sản phẩm', value: '06', desc: 'Bài tập thực hành' },
          { label: 'Kỹ năng số', value: '06+', desc: 'Nhóm năng lực lõi' },
          { label: 'Mức điểm kỳ vọng', value: '10', desc: 'Xuất sắc' },
        ].map((stat, i) => (
          <div key={i} className="bg-white p-6 rounded-2xl shadow-sm border border-academic-border flex flex-col items-center text-center">
            <h3 className="text-4xl font-black text-academic-hero-blue mb-1">{stat.value}</h3>
            <p className="font-bold text-academic-ink text-sm">{stat.label}</p>
            <p className="text-xs text-academic-muted mt-1">{stat.desc}</p>
          </div>
        ))}
      </div>

      {/* Course Overview Section */}
      <div>
        <div className="flex items-center gap-3 mb-6">
          <BookOpenText className="text-academic-blue" size={28} />
          <h2 className="text-2xl md:text-3xl font-bold text-academic-ink">Tổng quan Năng lực Học phần</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {overview.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.id} className="bg-white p-6 rounded-xl border border-academic-border shadow-sm hover:shadow-md transition-shadow group flex items-start gap-4">
                <div className="p-3 bg-blue-50 text-academic-blue rounded-lg group-hover:bg-academic-blue group-hover:text-white transition-colors">
                  <Icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-academic-ink mb-1 leading-tight">{item.title}</h3>
                  <p className="text-sm text-academic-muted leading-snug">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  );
}
