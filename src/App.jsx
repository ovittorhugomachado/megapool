import { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Calendar, Clock, MapPin, Star, Sparkles } from 'lucide-react'
import eventImage from './assets/KVALTERADO-02.png'
import galaxiaLogo from './assets/galaxia-logo.png'
import limaoLogo from './assets/limao-logo.png'
import magicGamesLogo from './assets/magic-games-logo.png'
import apoioLogo from './assets/apoio-logo.png'
import './App.css'

function App() {
  const [hoveredLote, setHoveredLote] = useState(null)

  const lotes = [
    {
      id: 1,
      nome: "MEET AND GREET",
      descricao: "Encontro especial com o Gato",
      data: "02 de Outubro",
      corSolida: "#F6E835",
      url: "https://www.sympla.com.br/evento/meet-and-greet-gato-galactico-mega-pool/3140678",
      especial: true
    },
    {
      id: 2,
      nome: "1º Lote",
      descricao: "Primeiro Lote Promocional",
      corSolida: "#EC2272",
      url: "https://www.sympla.com.br/evento/gato-galactico-mega-pool-lote-1/3140924?referrer=www.google.com"
    },
    {
      id: 3,
      nome: "2º Lote",
      descricao: "EM BREVE",
      corSolida: "#51B748",
      url: "https://www.sympla.com.br/lote2",
      emBreve: true
    },
    {
      id: 4,
      nome: "3º Lote",
      descricao: "EM BREVE",
      corSolida: "#F9A61A",
      url: "https://www.sympla.com.br/lote3",
      emBreve: true
    }
  ]

  const handleLoteClick = (url) => {
    window.open(url, '_blank')
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#30466E' }}>
      {/* Efeitos de fundo */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Conteúdo principal */}
      <div className="relative z-10">
        {/* Header com imagem do evento */}
        <header className="w-full">
          <div className="container mx-auto px-4 py-8">
            <div className="flex justify-center">
              <img
                src={eventImage}
                alt="Gato Galáctico Megapool"
                className="w-full max-w-4xl rounded-2xl shadow-2xl border-4 border-white/20 hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </header>

        {/* Seção de informações do evento */}
        <section className="container mx-auto px-4 py-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ color: '#F6E835' }}>
              GATO GALÁCTICO
            </h1>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
              MEGAPOOL
            </h2>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Calendar className="w-8 h-8 text-pink-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Data</h3>
                <p className="text-gray-300">01 OUT a 16 NOV</p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <Clock className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Horários</h3>
                <p className="text-gray-300 text-sm">
                  SEG a SÁB: 10h às 22h<br />
                  DOM e FER: 12h às 22h
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">Local</h3>
                <p className="text-gray-300 text-sm">T-REX POOL<br />Piso Térreo do Shopping D</p>
              </div>
            </div>
          </div>

          {/* Seção de ingressos */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4 flex items-center justify-center gap-3">
              <Sparkles className="text-yellow-400" />
              Escolha seu Lote
              <Sparkles className="text-yellow-400" />
            </h2>
            <p className="text-gray-300 text-lg">Garante já o seu ingresso para a aventura galáctica!</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {lotes.map((lote) => (
              <div
                key={lote.id}
                className="relative group"
                onMouseEnter={() => setHoveredLote(lote.id)}
                onMouseLeave={() => setHoveredLote(null)}
              >
                <div
                  className="relative rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 transform hover:scale-105"
                  style={{ backgroundColor: lote.corSolida }}
                >
                  <div className="text-center">
                    {lote.especial ? (
                      <Sparkles className="w-8 h-8 text-white mx-auto mb-4" />
                    ) : (
                      <Star className="w-8 h-8 text-white mx-auto mb-4" />
                    )}
                    <h3 className="text-2xl font-bold mb-2 text-white">{lote.nome}</h3>
                    <p className="text-white/90 mb-2">{lote.descricao}</p>
                    {lote.data && (
                      <p className="text-white font-semibold mb-4">{lote.data}</p>
                    )}
                    {!lote.data && !lote.emBreve && <div className="mb-4"></div>}

                    <Button
                      onClick={() => handleLoteClick(lote.url)}
                      disabled={lote.emBreve}
                      className={`w-full hover:scale-105 transition-all duration-300 bg-white/20 hover:bg-white/30 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl border-0 ${lote.emBreve ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    >
                      {lote.emBreve ? 'Em Breve' : 'Comprar Agora'}
                    </Button>
                  </div>

                  {hoveredLote === lote.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Informações adicionais */}
          <div className="text-center mt-16">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4">Informações Importantes</h3>
              <p className="text-gray-300 mb-4">
                Ingressos disponíveis no local ou através do site oficial
              </p>
              {/* <p className="text-lg font-semibold text-cyan-400">
                www.sympla.com.br
              </p> */}
              <a
                className="text-lg font-semibold text-cyan-400"
                href="https://www.sympla.com.br/"
                target='_blank'
                alt="Sympla"
              >
                www.sympla.com.br
              </a>
            </div>
          </div>

        </section>

        {/* Seção de Logos das Empresas */}
        <section className="bg-white py-12 mt-16">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

              {/* Logo Galaxia + Organização */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <img
                  src={galaxiaLogo}
                  alt="Galaxia"
                  className="h-8 md:h-10 object-contain"
                />
                <div className="text-center md:text-right">
                  <p className="text-black font-bold text-lg mb-2">ORGANIZAÇÃO:</p>
                </div>
                <img
                  src={limaoLogo}
                  alt="Limão ou Limonada"
                  className="h-16 md:h-20 object-contain"
                />
              </div>

              {/* Realização */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-center md:text-right">
                  <p className="text-black font-bold text-lg mb-2">REALIZAÇÃO:</p>
                </div>
                <img
                  src={magicGamesLogo}
                  alt="Magic Games"
                  className="h-16 md:h-20 object-contain"
                />
              </div>

              {/* Apoio Especial */}
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="text-center md:text-right">
                  <p className="text-black font-bold text-lg mb-2">APOIO ESPECIAL:</p>
                </div>
                <img
                  src={apoioLogo}
                  alt="Apoio Especial"
                  className="h-16 md:h-20 object-contain"
                />
              </div>

            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default App
