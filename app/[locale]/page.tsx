import { getDictionary } from '@/i18n';
import { Locale } from '@/i18n.config';

interface Props {
  params: { locale: Locale };
}

export default async function Home({ params: { locale } }: Props) {
  const { page } = await getDictionary(locale);

  return (
    <section className="py-24">
      <div className="container">
        <h1 className="text-3xl font-bold">{page.home.title}</h1>
        <p className="text-gray-300">{page.home.description}</p>
      </div>
    </section>
  );
}
