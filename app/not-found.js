import Link from 'next/link'
import Jarak from '@/components/Jarak'

export const metadata = {
  title: { absolute: 'Halaman tidak ditemukan — Positive Crave' },
  robots: { index: false, follow: true },
}

/* 404 versi Close: dua garis yang belum bertemu. */
export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-deep pt-32 pb-24 md:pt-40 md:pb-32">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6">
        <Jarak jarak={5} className="h-10 w-32 text-tide" />
        <p className="micro mt-8 text-tide">404</p>
        <h1 className="mt-4 text-[2.6rem] leading-[1.05] md:text-[3.4rem]">Halaman ini belum ketemu.</h1>
        <p className="mt-5 max-w-lg leading-relaxed text-haze">
          Alamatnya mungkin salah ketik, atau halamannya sudah dipindah. Mulai lagi dari percakapan — biasanya memang dari
          situ.
        </p>
        <div className="mt-9 flex flex-wrap gap-4">
          <Link href="/percakapan" className="micro inline-flex items-center justify-center rounded-full bg-tide px-7 py-4 text-deep transition-colors hover:bg-mist">
            Buka Dek Percakapan
          </Link>
          <Link href="/koleksi" className="micro inline-flex items-center justify-center rounded-full border border-mist/25 px-7 py-4 text-mist transition-colors hover:border-tide">
            Lihat Koleksi
          </Link>
        </div>
      </div>
    </section>
  )
}
