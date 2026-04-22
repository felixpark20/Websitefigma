import { ArticleCard } from "./ArticleCard";

interface Report {
  id: number;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  pdfUrl: string;
  pdfName?: string;
  views?: number;
}

interface ReportsProps {
  reports: Report[];
  onReportClick: (report: Report) => void;
}

export function Reports({ reports, onReportClick }: ReportsProps) {
  return (
    <div className="min-h-screen bg-slate-50">
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-slate-900">Reports</h1>
          <p className="text-slate-600">In-depth analysis and comprehensive reports</p>
        </div>

        {reports.length === 0 ? (
          <div className="bg-white rounded-lg shadow-sm p-12 text-center">
            <h3 className="mb-2 text-slate-900">No reports yet</h3>
            <p className="text-slate-600">
              Reports will appear here once published
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reports.map((report) => (
              <ArticleCard
                key={report.id}
                article={report}
                onClick={() => onReportClick(report)}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
