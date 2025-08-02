import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import ImageCarousel from '@/app/components/imageCarousel';

// Helper function to load articles data
const loadArticles = () => {
    const filePath = path.join(process.cwd(), 'src/data/articles/index.json');
    const fileData = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(fileData);
};

export async function generateStaticParams() {
    const articles = loadArticles();

    return articles.map((article) => ({
        slug: article.slug
    }));
}

export default function ArticlePage({ params }) {
    const { slug } = params;
    const articles = loadArticles();
    const article = articles.find((item) => item.slug === slug);

    if (!article) {
        return notFound();
    }

    const marketingPoints = [
        {
            icon: "🏆",
            title: "Expert-Curated Experience",
            description: "Handpicked by travel professionals with 15+ years of industry expertise"
        },
        {
            icon: "⚡",
            title: "Instant Booking Confirmation",
            description: "Secure your spot in minutes with our streamlined booking process"
        },
        {
            icon: "🎯",
            title: "Personalized Itinerary",
            description: "Tailored recommendations based on your preferences and travel style"
        },
        {
            icon: "🌟",
            title: "24/7 Premium Support",
            description: "Round-the-clock assistance from our dedicated travel concierge team"
        }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 ">
            {/* Hero Section */}
            <div className="relative overflow-hidden ">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-600/20"></div>
                <article className="relative px-4 py-12">
                    <header className="text-center mb-12">
                        {/* <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full text-sm font-medium text-blue-800 mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
              Premium Destination
            </div> */}

                        <h1 className="text-5xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-cyan-800 bg-clip-text text-transparent mb-6 leading-tight">
                            {article.title}
                        </h1>

                        {/* <div className="relative mb-12 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
             {article.images?.map((src, index) => (
                <div key={index} className="relative group rounded-2xl overflow-hidden shadow-xl">
                  <Image
                    src={src}
                    alt={`${article.title} image ${index + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-80 object-cover rounded-2xl"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                </div>
              ))}
            </div> */}
                        <div className="grid md:grid-cols-4 gap-4 items-start">
                            {/* Carousel */}
                            <div className='col-span-3'>
                                <ImageCarousel images={article.images} title={article.title} />
                                <div className="bg-white/90 mt-3 backdrop-blur-sm p-3 rounded-2xl shadow-xl border border-white/20 text-gray-700 text-md leading-relaxed">
                                    {article.content?.map((paragraph, index) => (
                                        <p key={index} className="mb-2">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className='bg-cyan-500 col-span-1 h-full'>
                                <section className="max-w-4xl mx-auto mb-16">
                        <div className="bg-gradient-to-r from-slate-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white text-center relative overflow-hidden">
                            <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjZmZmZmZmIiBzdHJva2Utd2lkdGg9IjEiIG9wYWNpdHk9IjAuMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNncmlkKSIvPjwvc3ZnPg==')] opacity-20"></div>
                            <div className="relative z-10">
                                <h2 className="text-4xl font-bold mb-4">Ready to Make This Dream a Reality?</h2>
                                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
                                    Get a personalized quote and expert recommendations tailored specifically for your perfect getaway
                                </p>

                                <div className="flex  gap-3 flex-col">
                                    <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-2 py-2 rounded-full font-bold text-md hover:from-blue-600 hover:to-cyan-700 transform hover:scale-105 transition-all duration-200 shadow-xl flex items-center gap-1">
                                        <span>📞</span>
                                        Get Free Consultation
                                    </button>

                                    <button className="bg-white/20 backdrop-blur-sm text-white border-2 border-white/30 px-3 py-2 rounded-full font-bold text-md hover:bg-white/30 transition-all duration-200 flex items-center gap-2">
                                        <span>💬</span>
                                        Inquire Now
                                    </button>
                                </div>

                                <div className="mt-8 flex items-center justify-center gap-8 text-sm opacity-80">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                        Free Quote
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                        No Obligation
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 bg-green-400 rounded-full"></span>
                                        Expert Advice
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
add this to favourites book with us advertisements of our tour company 
                            </div>
                            



                        </div>

                    </header>

                    {/* Article Content */}
                    {/* <section className="max-w-4xl mx-auto mb-16">
                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/20">
                            <p className="text-xl text-gray-700 leading-relaxed mb-8 first-letter:text-5xl first-letter:font-bold first-letter:text-blue-600 first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                                {article.description}
                            </p>

                         
                            <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6 text-white text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2">Ready to Explore?</h3>
                                <p className="mb-4 opacity-90">Join thousands of satisfied travelers who chose us for their dream vacation</p>
                                <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg">
                                    Start Planning Now →
                                </button>
                            </div>
                        </div>
                    </section> */}

                    {/* Marketing Points Section */}
                    <section className="max-w-6xl mx-auto mb-16">
                        <div className="text-center mb-12">
                            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Premium Experience?</h2>
                            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Discover what sets us apart from ordinary travel experiences</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {marketingPoints.map((point, index) => (
                                <div key={index} className="group">
                                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300 h-full">
                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                                            {point.icon}
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{point.title}</h3>
                                        <p className="text-gray-600 leading-relaxed mb-4">{point.description}</p>
                                        <button className="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200 flex items-center gap-2 group">
                                            Learn More
                                            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Inquiry Section */}
                    

                    {/* Article Meta Information */}
                    <footer className="max-w-4xl mx-auto">
                        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
                            <div className="flex flex-wrap gap-6 justify-center items-center text-sm">
                                {article.region && (
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-gray-900">📍 Region:</span>
                                        <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-cyan-100 text-blue-800 rounded-full font-medium">
                                            {article.region}
                                        </span>
                                    </div>
                                )}

                                {article.tags && article.tags.length > 0 && (
                                    <div className="flex items-center gap-2">
                                        <span className="font-semibold text-gray-900">🏷️ Tags:</span>
                                        <div className="flex flex-wrap gap-2">
                                            {article.tags.map((tag, index) => (
                                                <span
                                                    key={index}
                                                    className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full hover:bg-gradient-to-r hover:from-blue-100 hover:to-cyan-100 hover:text-blue-800 transition-all duration-200 cursor-pointer"
                                                >
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </footer>
                </article>
            </div>
        </div>
    );
}