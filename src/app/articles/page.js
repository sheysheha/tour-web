import fs from 'fs';
import path from 'path';
import Image from 'next/image';
import Link from 'next/link';

export default function DestinationsPage() {
  const filePath = path.join(process.cwd(), 'src/data/articles/index.json');
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const articles = JSON.parse(fileData);

  return (
    <div className="max-w-7xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <Link href={`/articles/${article.slug}`} key={article.slug}>
          <div className="rounded-xl shadow-md overflow-hidden hover:shadow-xl transition group cursor-pointer">
            <Image
              src={article.image}
              alt={article.title}
              width={800}
              height={500}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
            />
            <div className="p-4 bg-white">
              <h2 className="text-xl font-semibold">{article.title}</h2>
              <p className="text-gray-600 text-sm mt-1">{article.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
