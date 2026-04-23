import { Calendar, Eye } from "lucide-react";
import { Badge } from "./ui/badge";

interface CardNews {
  id: number;
  images: string[];
  title: string;
  date: string;
  pdfUrl?: string;
  pdfName?: string;
  views?: number;
}

interface FeaturedPost {
  id: number;
  title: string;
  excerpt?: string;
  category: string;
  date: string;
  image?: string;
  type: "article" | "report";
}

interface TodayCardNewsProps {
  cardNews: CardNews[];
  onCardClick: (card: CardNews) => void;
  featuredPost?: FeaturedPost | null;
  onFeaturedClick?: (post: FeaturedPost) => void;
}

const FALLBACK_COLORS = [
  "#3B82F6", "#10B981", "#8B5CF6", "#F59E0B",
  "#EF4444", "#06B6D4", "#84CC16", "#F97316",
];

export function TodayCardNews({ cardNews, onCardClick, featuredPost, onFeaturedClick }: TodayCardNewsProps) {
  // Get today's date in the same format as card.date (e.g., "Nov 17, 2025")
  const today = new Date().toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // Show today's card news first; fall back to latest 3 if none today
  const todayCards = cardNews.filter(card => card.date === today);
  const displayCards = todayCards.length > 0
    ? todayCards
    : [...cardNews].sort((a, b) => b.id - a.id).slice(0, 3);
  const isToday = todayCards.length > 0;

  if (displayCards.length === 0 && !featuredPost) {
    return null;
  }

  return (
    <section className="h-full">
      <div className="mb-6">
        <h2 className="text-slate-900 mb-2">{isToday ? "Today's Card News" : "Latest Card News"}</h2>
        <p className="text-slate-600">{isToday ? "Latest visual insights from today" : "Most recent visual insights"}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayCards.map((card) => (
          <div
            key={card.id}
            onClick={() => onCardClick(card)}
            className="group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="aspect-square bg-slate-100 overflow-hidden relative">
              <img
                src={(card.images || [])[0]}
                alt={card.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              {(card.images || []).length > 0 && (
                <div className="absolute top-2 right-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                  {(card.images || []).length} pages
                </div>
              )}
              {card.pdfUrl && (
                <div className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-2 py-1 rounded">
                  PDF Available
                </div>
              )}
            </div>
            <div className="p-4">
              <h3 className="text-slate-900 mb-2 line-clamp-2">{card.title}</h3>
              <div className="flex items-center justify-between text-sm text-slate-500">
                <div className="flex items-center gap-1">
                  <Calendar className="w-3 h-3" />
                  <span>Today</span>
                </div>
                {card.views !== undefined && (
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{card.views.toLocaleString()}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {/* Featured Recent Post — fills empty space when fewer than 3 cards */}
        {featuredPost && displayCards.length < 3 && (
          <div
            className={`group cursor-pointer bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 ${displayCards.length === 1 ? "sm:col-span-1 lg:col-span-2" : ""}`}
            onClick={() => onFeaturedClick?.(featuredPost)}
          >
            <div
              className="h-48 overflow-hidden relative"
              style={{ background: featuredPost.image ? undefined : FALLBACK_COLORS[featuredPost.id % FALLBACK_COLORS.length] }}
            >
              {featuredPost.image ? (
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = "none";
                    if (target.parentElement) target.parentElement.style.background = FALLBACK_COLORS[featuredPost.id % FALLBACK_COLORS.length];
                  }}
                />
              ) : null}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                <Badge variant="secondary" className="text-xs mb-1">
                  {featuredPost.type === "report" ? "📊 " : "✍️ "}{featuredPost.category}
                </Badge>
              </div>
            </div>
            <div className="p-4">
              <p className="text-xs text-slate-500 mb-1">Most Recent Post</p>
              <h3 className="text-slate-900 mb-2 line-clamp-2 font-semibold">{featuredPost.title}</h3>
              {featuredPost.excerpt && (
                <p className="text-slate-600 text-sm line-clamp-2 mb-2">{featuredPost.excerpt}</p>
              )}
              <div className="flex items-center gap-1 text-xs text-slate-400">
                <Calendar className="w-3 h-3" />
                <span>{featuredPost.date}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
