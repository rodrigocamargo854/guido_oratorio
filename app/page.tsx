'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import {
  CheckCircle, HandHeart, Butterfly, HandsPraying, UsersThree, Heartbeat,
  Sun, Waves, Cross, WhatsappLogoIcon, CalendarCheckIcon,
} from '@phosphor-icons/react'

const C = {
  verde: '#3F4F3C',
  verdeEscuro: '#3a4a37',
  verdeClaro: '#5a7056',
  bege: '#E8DCC5',
  begeEscuro: '#c8b99a',
  azul: '#2E6F95',
  azulClaro: '#1F9494 ',
  branco: '#FFFFFF',
}

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible')
      }),
      { threshold: 0.12 }
    )
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
      .forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

function Chip({ children, variant = 'verde' }: { children: React.ReactNode; variant?: 'verde' | 'azul' | 'bege' }) {
  const styles = {
    verde: { background: 'rgba(63,79,60,0.12)', color: C.verde },
    azul: { background: 'rgba(46,111,149,0.12)', color: C.azulClaro },
    bege: { background: 'rgba(232,220,197,0.15)', color: C.bege },
  }
  return (
    <span style={{
      ...styles[variant],
      display: 'inline-block',
      fontSize: 10,
      fontWeight: 700,
      letterSpacing: '0.25em',
      textTransform: 'uppercase' as const,
      padding: '6px 14px',
      borderRadius: 100,
      marginBottom: 16,
      fontFamily: "'Montserrat', sans-serif",
    }}>
      {children}
    </span>
  )
}

function SectionTitle({ children, color = C.verde }: { children: React.ReactNode; color?: string }) {
  return (
    <h2 style={{
      fontFamily: "'Bebas Neue', sans-serif",
      fontSize: 'clamp(2.2rem, 10vw, 4rem)',
      letterSpacing: '0.03em',
      lineHeight: 1,
      marginBottom: 16,
      color,
    }}>
      {children}
    </h2>
  )
}

function ImgPlaceholder({ label, aspect = '3/4', icon = '📷' }: { label: string; aspect?: string; icon?: string }) {
  return (
    <div style={{
      width: '100%',
      aspectRatio: aspect,
      background: 'rgba(255,255,255,0.05)',
      border: '1.5px dashed rgba(255,255,255,0.18)',
      borderRadius: 16,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      color: 'rgba(255,255,255,0.22)',
      fontSize: 11,
      letterSpacing: '0.12em',
      textTransform: 'uppercase' as const,
      fontFamily: "'Montserrat', sans-serif",
    }}>
      <span style={{ fontSize: 28, opacity: 0.35 }}>{icon}</span>
      {label}
    </div>
  )
}

export default function Home() {
  useReveal()

  const valores = [
    { num: '01', nome: '-', desc: '....', icon: <CheckCircle size={20} weight="duotone" /> },
    { num: '02', nome: '-', desc: '....', icon: <UsersThree size={20} weight="duotone" /> },
    { num: '03', nome: '- ', desc: '....', icon: <Butterfly size={20} weight="duotone" /> },
    { num: '04', nome: '-', desc: '....', icon: <HandsPraying size={20} weight="duotone" /> },
    { num: '05', nome: '--  ', desc: '....', icon: <HandHeart size={20} weight="duotone" /> },
    { num: '06', nome: '-', desc: '....', icon: <Heartbeat size={20} weight="duotone" /> },
    { num: '07', nome: '-', desc: '....', icon: <HandHeart size={20} weight="duotone" /> },
  ]

  const simbolos = [
    { icon: <Sun size={28} weight="duotone" color="#f5a623" />, titulo: 'texto', cor: '#f5a623', desc: 'Deus Pai — criador de todas as coisas, que sustenta e renova a vida a cada amanhecer.' },
    { icon: <Cross size={28} weight="duotone" color={C.verde} />, titulo: ' texto ', cor: C.verde, desc: 'Jesus Cristo — centro de nossas vidas, que abriu os braços para abraçar toda a humanidade.' },
    { icon: <Waves size={28} weight="duotone" color={C.azul} />, titulo: ' texto', cor: C.azul, desc: 'O Espírito Santo em movimento — dinamismo que traz vida, renovação e impulso missionário.' },
  ]

  return (
    <>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:ital,wght@0,300;0,400;0,600;0,700;0,900;1,300;1,400&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { font-family: 'Montserrat', sans-serif; background: ${C.verdeEscuro}; overflow-x: hidden; }

        .reveal { opacity: 0; transform: translateY(50px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left { opacity: 0; transform: translateX(-50px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-left.visible { opacity: 1; transform: translateX(0); }
        .reveal-right { opacity: 0; transform: translateX(50px); transition: opacity 0.8s ease, transform 0.8s ease; }
        .reveal-right.visible { opacity: 1; transform: translateX(0); }
        .d1 { transition-delay: 0.1s; }
        .d2 { transition-delay: 0.2s; }
        .d3 { transition-delay: 0.3s; }
        .d4 { transition-delay: 0.4s; }
        .d5 { transition-delay: 0.5s; }

        @keyframes fadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.88); } to { opacity: 1; transform: scale(1); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes pulse { 0%,100%{opacity:0.3;transform:scale(1)} 50%{opacity:1;transform:scale(1.3)} }

        .hero-eyebrow { animation: fadeDown 0.8s ease forwards; }
        .hero-logo-wrap { animation: scaleIn 1s ease 0.2s both; }
        .hero-h1 { animation: fadeUp 1s ease 0.4s both; }
        .hero-tagline { animation: fadeUp 1s ease 0.6s both; }
        .hero-btns { animation: fadeUp 1s ease 0.8s both; }
        .scroll-dots { animation: fadeUp 1s ease 1s both; }

        .dot { animation: pulse 1.6s ease infinite; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
      `}</style>

      <main>

    
        <section style={{ minHeight: '100svh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', paddingBottom: 60, overflow: 'hidden' }}>

          {/* FUNDO — coloque a imagem em public/hero.jpg e descomente */}
          {/* <Image src="/hero.jpg" alt="Hero" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority /> */}
          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(180deg, ${C.verdeEscuro} 0%, #1a2518 100%)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ImgPlaceholder label="foto de fundo do hero" aspect="auto" icon="🏄" />
          </div>

          <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(to bottom, rgba(42,53,40,0.3) 0%, rgba(42,53,40,0.5) 40%, rgba(42,53,40,0.95) 75%, rgba(42,53,40,1) 100%)` }} />

          <div style={{ position: 'absolute', width: 400, height: 400, top: -100, left: -100, borderRadius: '50%', background: 'radial-gradient(circle, rgba(46,111,149,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
          <div style={{ position: 'absolute', width: 300, height: 300, bottom: 100, right: -80, borderRadius: '50%', background: 'radial-gradient(circle, rgba(46,111,149,0.1) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 24px', width: '100%' }}>

            <p className="hero-eyebrow" style={{ display: 'inline-block', fontSize: 10, fontWeight: 700, letterSpacing: '0.3em', textTransform: 'uppercase', color: C.branco, marginBottom: 16,  marginTop:16,background: 'rgba(46,111,149,0.15)', padding: '6px 16px', borderRadius: 100, border: `1px solid rgba(46,111,149,0.3)`, fontFamily: "'Montserrat', sans-serif" }}>
              Paróquia Catedral São Paulo Apóstolo · Diocese de Blumenau
            </p>

            <div className="hero-logo-wrap" style={{ marginBottom: 20 }}>
              <Image src="/logo.png" alt="Logo Guido Schäffer" width={320} height={90} style={{ objectFit: 'contain', margin: '0 auto', display: 'block' }} />
            </div>

            <h1 className="hero-h1" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(3.5rem, 16vw, 8rem)', lineHeight: 0.88, letterSpacing: '0.02em', color: C.branco, marginBottom: 20 }}>
              Mais que<br />um encontro.<br />
              <span style={{ color: C.azulClaro }}>Uma missão.</span>
            </h1>

            <p className="hero-tagline" style={{ fontSize: 'clamp(13px, 3.5vw, 16px)', color: 'rgba(232,220,197,0.9)', fontWeight: 300, fontStyle: 'italic', marginBottom: 36, fontFamily: "'Montserrat', sans-serif" }}>
              Santidade como aventura que exige coragem e radicalidade.
            </p>

            <div className="hero-btns" style={{ display: 'flex', flexDirection: 'column', gap: 12, maxWidth: 320, margin: '0 auto' }}>
              <a href="#forms" style={{ background: C.azulClaro, color: C.branco, padding: '18px 24px', borderRadius: 14, fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', textAlign: 'center', boxShadow: '0 8px 32px rgba(46,111,149,0.5)', fontFamily: "'Montserrat', sans-serif", display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                <CalendarCheckIcon size={18} weight="bold" /> Confirme sua presença
              </a>
              <a href="#guido" style={{ background: 'transparent', color: 'rgba(232,220,197,0.7)', padding: '16px 24px', borderRadius: 14, fontWeight: 600, fontSize: 13, letterSpacing: '0.06em', textDecoration: 'none', textAlign: 'center', border: '1.5px solid rgba(232,220,197,0.2)', fontFamily: "'Montserrat', sans-serif" }}>
                Conheça o Guido →
              </a>
            </div>
          </div>

          <div className="scroll-dots" style={{ position: 'absolute', bottom: 20, left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: 6, zIndex: 3 }}>
            {[0,1,2].map(i => (
              <div key={i} className="dot" style={{ width: 5, height: 5, borderRadius: '50%', background: 'rgba(232,220,197,0.4)', animationDelay: `${i * 0.2}s` }} />
            ))}
          </div>
        </section>


        <section style={{ background: C.verdeEscuro, padding: '64px 28px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', top: -60, left: '50%', transform: 'translateX(-50%)', width: 280, height: 120, borderRadius: '50%', background: 'rgba(46,111,149,0.1)', pointerEvents: 'none' }} />
          <blockquote className="reveal" style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: 'clamp(2rem, 8vw, 3.5rem)', color: C.bege, lineHeight: 1.1, letterSpacing: '0.03em', position: 'relative', zIndex: 1, marginBottom: 16 }}>
            "Ser santo é possível.<br />É possível ser jovem,<br /><span style={{ color: C.azulClaro }}>alegre e missionário."</span>
          </blockquote>
          <cite className="reveal d2" style={{ fontSize: 11, color: 'rgba(232,220,197,0.35)', letterSpacing: '0.2em', textTransform: 'uppercase', fontStyle: 'normal', fontFamily: "'Montserrat', sans-serif" }}>
            Projeto Pastoral · Oratório Guido Schäffer
          </cite>
        </section>

        <section id="guido" style={{ background: C.bege, padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }} className="reveal">
            <Chip variant="verde">Nosso jovem balizarte</Chip>
            <SectionTitle color={C.verde}>Conheça<br />Guido Schäffer</SectionTitle>
            <p style={{ fontSize: 14, fontWeight: 300, lineHeight: 1.75, color: '#6a5a45', maxWidth: 340, margin: '0 auto', fontFamily: "'Montserrat', sans-serif" }}>
              Médico, surfista, carioca e profundamente apaixonado por Deus e pela vida. Guido mostra que é possível ser jovem, alegre e completamente entregue a Deus.
            </p>
          </div>

          {/* FOTO GUIDO — coloque em public/guido.jpg e descomente */}
          <div className="reveal d2" style={{ maxWidth: 360, margin: '0 auto 32px', borderRadius: 20, overflow: 'hidden', boxShadow: '0 16px 48px rgba(63,79,60,0.2)' }}>
            <Image src="/guido1.jpg" alt="Guido Schäffer" width={360} height={480} style={{ width: '100%', height: 'auto', display: 'block' }} />
          </div>

          <div style={{ textAlign: 'center' }} className="reveal d3">
            <a href="#" style={{ background: C.verde, color: C.bege, padding: '16px 28px', borderRadius: 12, fontWeight: 700, fontSize: 13, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-block', fontFamily: "'Montserrat', sans-serif" }}>
              Ver site do Guido →
            </a>
          </div>
        </section>

        <section id="forms" style={{ background: C.azulClaro, padding: '72px 24px', position: 'relative', overflow: 'hidden' }}>
          <div style={{ position: 'absolute', bottom: -100, right: -60, width: 280, height: 280, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

          <div style={{ textAlign: 'center', marginBottom: 32, position: 'relative', zIndex: 1 }} className="reveal">
            <Chip variant="bege">Próximo encontro</Chip>
            <SectionTitle color={C.branco}>Confirme sua<br />presença</SectionTitle>
            <p style={{ fontSize: 14, fontWeight: 300, color: 'rgba(232,220,197,0.6)', maxWidth: 300, margin: '0 auto', fontFamily: "'Montserrat', sans-serif" }}>
              {/* SUBSTITUIR — descrição do encontro, data, local */}
              SUBSTITUIR — data e local do encontro
            </p>
          </div>

          {/* FORMULÁRIO — substitua pelo iframe do Google Forms */}
          {/* <iframe src="URL_DO_GOOGLE_FORMS" width="100%" height="600" style={{ border: 'none', borderRadius: 20 }} /> */}
          <div className="reveal d2" style={{ background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)', borderRadius: 20, padding: '28px 20px', maxWidth: 420, margin: '0 auto', position: 'relative', zIndex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24, paddingBottom: 16, borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontFamily: "'Bebas Neue', sans-serif", fontSize: '1.5rem', color: C.branco, letterSpacing: '0.05em' }}>Link Inscrição</h3>
              <span style={{ background: 'rgba(232,220,197,0.15)', color: C.bege, fontSize: 10, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '4px 10px', borderRadius: 100, fontFamily: "'Montserrat', sans-serif" }}>
                {/* SUBSTITUIR pelo número do encontro */}
                Encontro #01
              </span>
            </div>
 
             <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px dashed rgba(255,255,255,0.15)', borderRadius: 12, padding: '40px 20px', textAlign: 'center', color: 'rgba(255,255,255,0.25)', fontSize: 11, letterSpacing: '0.15em', textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif" }}>
              <span style={{ fontSize: 28, display: 'block', marginBottom: 10, opacity: 0.3 }}>📋</span>
              iframe do Google Forms aqui
            </div>
          </div>
        </section>

 
        <section style={{ background: C.verdeEscuro, padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }} className="reveal">
            <Chip variant="bege">Objetivo</Chip>
            <SectionTitle color={C.bege}>Propósito<br />dos Encontros</SectionTitle>
          </div>

          <div style={{ maxWidth: 420, margin: '0 auto' }}>
            {valores.map((v, i) => (
              <div key={i} className={`reveal d${Math.min(i + 1, 5)}`} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '18px 20px', borderBottom: i < valores.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                <span style={{ color: C.azulClaro, opacity: 0.8, flexShrink: 0 }}>{v.icon}</span>
                <div>
                  <h3 style={{ fontSize: 15, fontWeight: 700, color: C.bege, marginBottom: 2, fontFamily: "'Montserrat', sans-serif" }}>{v.nome}</h3>
                  <p style={{ fontSize: 12, color: 'rgba(232,220,197,0.7)', fontWeight: 300, fontFamily: "'Montserrat', sans-serif" }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section style={{ background: C.bege, padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 36 }} className="reveal">
            <Chip variant="verde">O que nos representa</Chip>
            <SectionTitle color={C.verde}>Texto</SectionTitle>
            <p style={{ fontSize: 14, fontWeight: 300, color: '#7a6a55', maxWidth: 320, margin: '0 auto', fontFamily: "'Montserrat', sans-serif" }}>
              Três elementos que expressam a Santíssima Trindade e o espírito de Guido.
            </p>
          </div>

          <div style={{ maxWidth: 420, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {simbolos.map((s, i) => (
              <div key={i} className={i === 0 ? 'reveal-left' : i === 2 ? 'reveal-right' : `reveal d${i + 1}`} style={{ background: C.branco, borderRadius: 16, overflow: 'hidden', boxShadow: '0 4px 20px rgba(63,79,60,0.08)', display: 'flex' }}>
                <div style={{ width: 6, flexShrink: 0, background: s.cor }} />
                <div style={{ padding: '20px 18px', flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{ display: 'flex', alignItems: 'center' }}>{s.icon}</span>
                    <span style={{ fontSize: 13, fontWeight: 700, color: C.verde, textTransform: 'uppercase', letterSpacing: '0.08em', fontFamily: "'Montserrat', sans-serif" }}>{s.titulo}</span>
                  </div>
                  <p style={{ fontSize: 13, color: '#7a6a55', lineHeight: 1.65, fontWeight: 300, fontFamily: "'Montserrat', sans-serif" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ══════════════════════════════════════
            S7 — GALERIA
        ══════════════════════════════════════ */}
        <section style={{ background: C.verde, padding: '72px 24px' }}>
          <div style={{ textAlign: 'center', marginBottom: 32 }} className="reveal">
            <Chip variant="bege">Nossa comunidade</Chip>
            <SectionTitle color={C.bege}>Momentos do<br />Oratório</SectionTitle>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10, maxWidth: 420, margin: '0 auto' }}>
            <div className="reveal" style={{ gridColumn: '1 / -1', borderRadius: 12, overflow: 'hidden' }}>
              {/* <Image src="/galeria-1.jpg" alt="Oratório" width={400} height={225} style={{ width: '100%', height: 'auto', display: 'block' }} /> */}
              <ImgPlaceholder label="foto principal do grupo" aspect="16/9" />
            </div>
            <div className="reveal d1" style={{ borderRadius: 12, overflow: 'hidden' }}>
              {/* <Image src="/galeria-2.jpg" alt="Oratório" width={200} height={200} style={{ width: '100%', height: 'auto', display: 'block' }} /> */}
              <ImgPlaceholder label="foto 2" aspect="1" />
            </div>
            <div className="reveal d2" style={{ borderRadius: 12, overflow: 'hidden' }}>
              {/* <Image src="/galeria-3.jpg" alt="Oratório" width={200} height={200} style={{ width: '100%', height: 'auto', display: 'block' }} /> */}
              <ImgPlaceholder label="foto 3" aspect="1" />
            </div>
          </div>
        </section>

        <footer style={{ background: '#0d0d0d', padding: '40px 24px', textAlign: 'center' }}>
          <Image src="/logo.png" alt="Logo" width={120} height={40} style={{ margin: '0 auto 20px', display: 'block', objectFit: 'contain' }} />
          <p style={{ fontSize: 11, color: 'rgba(255,255,255,0.2)', letterSpacing: '0.1em', lineHeight: 2, fontFamily: "'Montserrat', sans-serif" }}>
            Oratório <span style={{ color: C.azulClaro }}>Guido Schäffer</span><br />
             Catedral São Paulo Apóstolo<br />
            Diocese de Blumenau<br />
            <span style={{ color: C.azulClaro }}>Adolescentes com propósito</span>
          </p>
        </footer>

      </main>

      {/* WhatsApp flutuante */}
      <a
        href="https://wa.me/SEUNUMERO"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 999,
          background: '#25D366',
          color: '#fff',
          width: 56,
          height: 56,
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
          transition: 'transform 0.2s ease',
        }}
        onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.1)')}
        onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
      >
        <WhatsappLogoIcon size={30} weight="fill" />
      </a>
    </>
  )
}
