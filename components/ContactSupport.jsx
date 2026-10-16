'use client'

import { useState } from 'react'
import Link from 'next/link'

/* Bantuan Close: bertanya bisa berdua atau sendiri dulu. Kanal resmi klien (chat,
   surel, telepon, jam layanan) belum ada di brief, jadi tidak ada nomor atau alamat
   karangan di sini — yang ditawarkan konsep ini adalah cara bertanyanya. */
const SEBAGAI = ['Berdua', 'Sendiri dulu']

export default function ContactSupport() {
  const [sebagai, setSebagai] = useState(SEBAGAI[0])
  const [terkirim, setTerkirim] = useState(false)

  return (
    <section id="kontak" aria-labelledby="kontak-judul" className="relative overflow-hidden bg-deep py-16 md:py-28">
      <div aria-hidden="true" className="tide-glow absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-6 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="micro mb-5 text-tide">Bantuan</p>
          <h2 id="kontak-judul" className="text-[2.1rem] leading-[1.12] md:text-[2.9rem]">Tanyakan berdua, atau sendiri dulu</h2>
          <p className="mt-5 max-w-md leading-relaxed text-haze">
            Kadang yang dibutuhkan bukan barang, melainkan seseorang yang bisa ditanya tanpa dihakimi. Kami menjawab
            tanpa menawarkan produk sebagai jawabannya.
          </p>
          <Link href="/percakapan" className="micro mt-8 inline-flex items-center justify-center rounded-full border border-tide/50 px-6 py-3.5 text-tide transition-colors hover:bg-tide hover:text-deep">
            Atau mulai dari dek percakapan
          </Link>
        </div>

        <div className="card-soft p-6 sm:p-8">
          {terkirim ? (
            <div role="status" className="py-4">
              <p className="micro text-tide">Tercatat</p>
              <p className="mt-3 font-[family-name:var(--font-display)] text-3xl text-mist">Terima kasih sudah bertanya.</p>
              <p className="mt-3 text-sm leading-relaxed text-haze">
                Ini purwarupa desain untuk kontes, jadi pertanyaan {sebagai === 'Berdua' ? 'kalian' : 'Anda'} tidak terkirim
                ke mana pun.
              </p>
              <button type="button" onClick={() => setTerkirim(false)} className="micro mt-6 border-b border-tide/50 pb-1 text-tide hover:border-tide">
                Tulis pertanyaan lain
              </button>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault()
                setTerkirim(true)
              }}
              className="space-y-6"
            >
              <fieldset>
                <legend className="micro mb-3 text-haze">Bertanya sebagai</legend>
                <div className="flex flex-wrap gap-2">
                  {SEBAGAI.map((x) => (
                    <label
                      key={x}
                      className={`micro cursor-pointer rounded-full border px-5 py-3 transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-tide ${
                        sebagai === x ? 'border-tide bg-tide text-deep' : 'border-mist/20 text-mist hover:border-tide/60'
                      }`}
                    >
                      <input type="radio" name="sebagai" value={x} checked={sebagai === x} onChange={() => setSebagai(x)} className="sr-only" />
                      {x}
                    </label>
                  ))}
                </div>
              </fieldset>
              <div>
                <label htmlFor="tanya-close" className="micro mb-2.5 block text-haze">
                  Pertanyaan
                </label>
                <textarea
                  id="tanya-close"
                  name="tanya"
                  required
                  rows={4}
                  placeholder={sebagai === 'Berdua' ? 'Mis. kami belum pernah membicarakan ini — mulai dari mana?' : 'Mis. bagaimana cara membuka obrolan soal ini dengan pasangan?'}
                  className="w-full resize-y rounded-2xl border border-mist/15 bg-deep px-4 py-3 text-sm text-mist placeholder:text-haze focus:border-tide focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="surel-close" className="micro mb-2.5 block text-haze">
                  Surel untuk balasan <span className="normal-case tracking-normal">(boleh dikosongkan)</span>
                </label>
                <input
                  id="surel-close"
                  name="surel"
                  type="email"
                  autoComplete="email"
                  className="w-full rounded-full border border-mist/15 bg-deep px-5 py-3 text-sm text-mist focus:border-tide focus:outline-none"
                />
              </div>
              <button type="submit" className="micro w-full rounded-full bg-tide py-4 text-deep transition-colors duration-300 hover:bg-mist">
                Kirim pertanyaan
              </button>
              <p className="text-xs leading-relaxed text-haze">Purwarupa desain — formulir ini tidak mengirim data.</p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
