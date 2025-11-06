'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function QASoftHomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('inicio')

  // Smooth scrolling function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
      setIsMenuOpen(false)
    }
  }

  // Contact form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    serviceType: 'ciberseguridad'
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Here you would typically send the data to your backend
    alert('Gracias por contactar QATECH. Nuestro equipo técnico se comunicará con usted en las próximas 24 horas.')
    setFormData({ name: '', email: '', company: '', message: '', serviceType: 'ciberseguridad' })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSelectChange = (value: string) => {
    setFormData({
      ...formData,
      serviceType: value
    })
  }

  return (
    <>
      {/* Navigation Header */}
      <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm border-b border-slate-700 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex-shrink-0 flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">QA</span>
              </div>
              <div>
                <div className="text-2xl font-bold text-white">
                  <span className="text-cyan-400">QA</span>TECH
                </div>
                <div className="text-xs text-gray-400 font-medium">Plataforma QASOFT</div>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {['inicio', 'servicios', 'certificaciones', 'monitoreo', 'consultoria', 'casos-exito', 'contacto'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-200 uppercase tracking-wide ${
                      activeSection === section
                        ? 'text-cyan-400 border-b-2 border-cyan-400'
                        : 'text-gray-300 hover:text-cyan-400'
                    }`}
                  >
                    {section === 'inicio' ? 'Inicio' :
                     section === 'servicios' ? 'Servicios' :
                     section === 'certificaciones' ? 'Certificaciones' :
                     section === 'monitoreo' ? 'Monitoreo' :
                     section === 'consultoria' ? 'Consultoría' :
                     section === 'casos-exito' ? 'Casos de Éxito' : 'Contacto'}
                  </button>
                ))}
              </div>
            </div>

            <div className="hidden md:block">
              <Button 
                onClick={() => scrollToSection('contacto')}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium px-6 py-2 rounded-lg uppercase tracking-wide text-sm"
              >
                Soporte 24/7
              </Button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-300 hover:text-cyan-400 focus:outline-none"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center">
                  <span className={`bg-current transition-all h-0.5 w-6 rounded-sm ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
                  <span className={`bg-current transition-all h-0.5 w-6 rounded-sm my-1 ${isMenuOpen ? 'opacity-0' : ''}`} />
                  <span className={`bg-current transition-all h-0.5 w-6 rounded-sm ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-slate-700 py-4">
              <div className="flex flex-col space-y-2">
                {['inicio', 'servicios', 'certificaciones', 'monitoreo', 'consultoria', 'casos-exito', 'contacto'].map((section) => (
                  <button
                    key={section}
                    onClick={() => scrollToSection(section)}
                    className="text-left px-3 py-2 text-sm font-medium text-gray-300 hover:text-cyan-400 uppercase tracking-wide"
                  >
                    {section === 'inicio' ? 'Inicio' :
                     section === 'servicios' ? 'Servicios' :
                     section === 'certificaciones' ? 'Certificaciones' :
                     section === 'monitoreo' ? 'Monitoreo' :
                     section === 'consultoria' ? 'Consultoría' :
                     section === 'casos-exito' ? 'Casos de Éxito' : 'Contacto'}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <section id="inicio" className="pt-20 min-h-screen flex items-center bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMxZTQwYWYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMjAiIGN5PSIyMCIgcj0iMSIvPjwvZz48L2c+PC9zdmc+')] opacity-30"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <div className="mb-6">
                   <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-500/20 mb-4 px-4 py-2 text-sm font-medium uppercase tracking-wider">
                    QATECH — Plataforma QASOFT
                  </Badge>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Tecnología{' '}
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                    bajo control
                  </span>
                </h1>
                
                <div className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed font-medium">
                  <div className="mb-2">Ciberseguridad, certificación y</div>
                  <div>monitoreo continuo para plataformas críticas.</div>
                </div>
                
                <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 mb-8">
                  <p className="text-gray-300 mb-4 font-medium">
                    Auditamos, certificamos y protegemos su infraestructura digital bajo los más altos estándares internacionales:
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Badge variant="outline" className="border-cyan-500/30 text-cyan-400 bg-cyan-500/10">ISO 27001</Badge>
                    <Badge variant="outline" className="border-blue-500/30 text-blue-400 bg-blue-500/10">NIST</Badge>
                    <Badge variant="outline" className="border-green-500/30 text-green-400 bg-green-500/10">Ley 25.326</Badge>
                    <Badge variant="outline" className="border-purple-500/30 text-purple-400 bg-purple-500/10">ENS</Badge>
                     <Badge variant="outline" className="border-orange-500/30 text-orange-400 bg-orange-500/10">IRAM</Badge>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    onClick={() => scrollToSection('servicios')}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Nuestros Servicios
                  </Button>
                  <Button 
                    onClick={() => scrollToSection('contacto')}
                    variant="outline"
                    className="border-2 border-slate-600 text-gray-300 hover:bg-slate-800 hover:text-white px-8 py-4 rounded-lg text-lg font-medium transition-all duration-300"
                  >
                    Contacto Técnico
                  </Button>
                </div>
              </div>
              
              <div className="lg:text-center">
                <div className="relative">
                  <div className="bg-gradient-to-r from-cyan-500/10 to-blue-600/10 rounded-2xl p-8 backdrop-blur-sm border border-slate-700/50">
                    <img 
                      src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/99f1d4fa-5ca8-4fac-a4fd-a7299313356b.png" 
                      alt="Centro de Operaciones de Ciberseguridad QATECH con dashboard de monitoreo SOC en tiempo real"
                      className="w-full h-auto rounded-xl shadow-2xl border border-slate-600/50"
                    />
                  </div>
                  
                  {/* Status Indicators */}
                  <div className="absolute -bottom-4 -right-4 bg-slate-800 border border-slate-600 p-4 rounded-xl shadow-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-300">SOC Activo 24/7</span>
                    </div>
                  </div>
                  
                  <div className="absolute -top-4 -left-4 bg-slate-800 border border-slate-600 p-3 rounded-xl shadow-xl">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">ISO 27001</div>
                      <div className="text-xs text-gray-400">Certificado</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Stats Bar */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Monitoreo SOC</div>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">99.9%</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Uptime SLA</div>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">500+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Auditorías</div>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">ISO+</div>
                <div className="text-sm text-gray-400 uppercase tracking-wide">Certificaciones</div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section - Ciberseguridad */}
        <section id="servicios" className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Ciberseguridad</span>{' '}
                Integral
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Protección avanzada de infraestructuras críticas con auditorías técnicas especializadas 
                y monitoreo de amenazas en tiempo real
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">🛡️</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Pentesting & OWASP</CardTitle>
                  <CardDescription className="text-gray-400">
                    Auditorías éticas de penetración bajo metodologías OWASP y NIST
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                      Pentesting de aplicaciones web
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                      Análisis OWASP Top 10
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                      Red Team Assessment
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-red-500 rounded-full mr-3"></span>
                      Vulnerabilidad Zero-Day
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-cyan-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">🔒</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">SOC & SIEM</CardTitle>
                  <CardDescription className="text-gray-400">
                    Centro de Operaciones de Seguridad con monitoreo 24/7
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                      Implementación SIEM avanzado
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                      Correlación de eventos
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                      Incident Response 24/7
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                      Threat Intelligence
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-cyan-500/50 transition-all duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">🗄️</span>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">Protección de Datos</CardTitle>
                  <CardDescription className="text-gray-400">
                    Cumplimiento Ley 25.326 Argentina y normativas internacionales
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                      Ley 25.326 Argentina
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                      GDPR Compliance
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                      Cifrado avanzado AES-256
                    </li>
                    <li className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-3"></span>
                      Trazabilidad digital
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certificaciones" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Certificación</span>{' '}
                de Plataformas
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Modelos de certificación privada profesional avalados por consultores expertos 
                en estándares internacionales ISO, NIST y ENS
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <img 
                  src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/718d9537-7f2d-45e9-89d0-00c4fa15a732.png" 
                  alt="Dashboard de proceso de certificación QATECH mostrando estándares ISO 27001, NIST y ENS"
                  className="w-full h-auto rounded-xl shadow-2xl border border-slate-600"
                />
              </div>
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Estándares Certificados</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700">
                      <div className="text-2xl font-bold text-blue-400 mb-2">ISO 27001</div>
                      <div className="text-xs text-gray-400">Seguridad Información</div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700">
                      <div className="text-2xl font-bold text-purple-400 mb-2">ISO 22301</div>
                      <div className="text-xs text-gray-400">Continuidad Negocio</div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700">
                      <div className="text-2xl font-bold text-green-400 mb-2">NIST 800-53</div>
                      <div className="text-xs text-gray-400">Controles Seguridad</div>
                    </div>
                    <div className="bg-slate-800 p-4 rounded-lg text-center border border-slate-700">
                      <div className="text-2xl font-bold text-orange-400 mb-2">ENS</div>
                      <div className="text-xs text-gray-400">España</div>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-white mb-2">Auditorías de Conformidad</h4>
                    <p className="text-sm text-gray-400">Evaluación previa a certificación oficial con informes DPIA/EIA</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-white mb-2">Certificados QATECH</h4>
                    <p className="text-sm text-gray-400">Emisión de certificados técnicos de conformidad institucional</p>
                  </div>
                  
                  <div className="bg-slate-800/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-white mb-2">Cumplimiento IRAM</h4>
                    <p className="text-sm text-gray-400">Estándares IRAM Argentina e ISO para entidades empresariales</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Monitoring Section */}
        <section id="monitoreo" className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">Monitoreo</span>{' '}
                Continuo 24/7
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Supervisión constante de procesos críticos, infraestructuras y datos con 
                dashboards en tiempo real y alertas automáticas
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              <Card className="bg-slate-900/50 border-slate-700 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">📊</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Dashboards Tiempo Real</h3>
                  <p className="text-gray-400 text-sm">Grafana, Kibana, Prometheus para visualización avanzada de métricas</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">🚨</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Alertas Automáticas</h3>
                  <p className="text-gray-400 text-sm">Notificaciones inmediatas ante incidentes de seguridad o rendimiento</p>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 text-center">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">📈</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Reportes Automáticos</h3>
                  <p className="text-gray-400 text-sm">Informes semanales y mensuales automatizados para clientes ejecutivos</p>
                </CardContent>
              </Card>
            </div>

            <div className="bg-slate-900/30 rounded-2xl p-8 border border-slate-700">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Métricas Monitoreadas</h3>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-white font-medium">Uptime de Servicios</span>
                      <Badge className="bg-green-500/20 text-green-400">99.9%</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-white font-medium">Latencia de Red</span>
                      <Badge className="bg-blue-500/20 text-blue-400">&lt; 5ms</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-white font-medium">Uso de Recursos</span>
                      <Badge className="bg-yellow-500/20 text-yellow-400">Optimizado</Badge>
                    </div>
                    <div className="flex justify-between items-center p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-white font-medium">Eventos de Seguridad</span>
                      <Badge className="bg-red-500/20 text-red-400">0 Críticos</Badge>
                    </div>
                  </div>
                </div>
                <div>
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1a7014cc-74cf-4dd7-a71d-da8229df86d3.png" 
                    alt="Dashboard de monitoreo en tiempo real con métricas de Grafana y Kibana de QASOFT"
                    className="w-full h-auto rounded-xl shadow-xl border border-slate-600"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Consulting Section */}
        <section id="consultoria" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Consultoría</span>{' '}
                Estratégica
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Diagnóstico integral y asesoramiento especializado para entidades privadas y 
                gubernamentales en seguridad, cumplimiento y resiliencia digital
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-6">Servicios de Consultoría</h3>
                  
                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-6 rounded-xl border border-purple-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">🔍</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Diagnóstico Integral</h4>
                          <p className="text-gray-400 text-sm">
                            Evaluación completa de seguridad, cumplimiento normativo y análisis de brechas 
                            según estándares IRAM, ISO e internacionales
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-blue-500/10 to-cyan-500/10 p-6 rounded-xl border border-blue-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">🏛️</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">Sector Gubernamental</h4>
                          <p className="text-gray-400 text-sm">
                            Asesoramiento especializado para entidades públicas en implementación 
                            de estándares IRAM y cumplimiento normativo internacional
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-green-500/10 to-emerald-500/10 p-6 rounded-xl border border-green-500/20">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
                          <span className="text-white font-bold">🔄</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-white mb-2">BCP / DRP</h4>
                          <p className="text-gray-400 text-sm">
                            Planes de Continuidad Operativa y Recuperación ante Desastres 
                            con metodologías probadas en entornos críticos
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div>
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700">
                  <img 
                    src="https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/f2a83685-0daf-4861-a31c-8776757f4a6a.png" 
                    alt="Consultoría estratégica QATECH para empresas multinacionales con estándares ISO e IRAM"
                    className="w-full h-auto rounded-xl shadow-xl border border-slate-600 mb-6"
                  />
                  
                  <div className="text-center">
                    <h4 className="text-xl font-bold text-white mb-4">Clientes Atendidos</h4>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400 mb-1">80+</div>
                        <div className="text-xs text-gray-400">Corporaciones</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400 mb-1">200+</div>
                        <div className="text-xs text-gray-400">Empresas Privadas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400 mb-1">100%</div>
                        <div className="text-xs text-gray-400">Cumplimiento</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Success Cases Section */}
        <section id="casos-exito" className="py-20 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Casos de <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">Éxito</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proyectos exitosos implementados en gobiernos, instituciones financieras 
                y empresas tecnológicas de Argentina y Latinoamérica
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-slate-900/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">🏛️</span>
                  </div>
                  <CardTitle className="text-white text-center">Corporación Multinacional</CardTitle>
                  <CardDescription className="text-gray-400 text-center">
                    Implementación ISO 27001 + NIST
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Certificación:</span>
                      <span className="text-blue-400 font-medium">ISO 27001:2013</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Plazo:</span>
                      <span className="text-green-400 font-medium">8 meses</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Resultado:</span>
                      <span className="text-yellow-400 font-medium">100% Cumplimiento</span>
                    </div>
                    <div className="pt-3 border-t border-slate-700">
                      <p className="text-gray-400 text-xs">
                        Implementación completa de controles ISO/NIST para corporación 
                        multinacional con más de 15,000 usuarios.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-green-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">🏦</span>
                  </div>
                  <CardTitle className="text-white text-center">Fintech Regional</CardTitle>
                  <CardDescription className="text-gray-400 text-center">
                    SOC + Monitoreo 24/7 + SIEM
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Implementación:</span>
                      <span className="text-cyan-400 font-medium">SIEM Enterprise</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Uptime:</span>
                      <span className="text-green-400 font-medium">99.97%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Incidentes:</span>
                      <span className="text-blue-400 font-medium">0 Críticos</span>
                    </div>
                    <div className="pt-3 border-t border-slate-700">
                      <p className="text-gray-400 text-xs">
                        Centro SOC dedicado para fintech con 500M+ transacciones mensuales 
                        y cumplimiento PCI-DSS.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-900/50 border-slate-700 hover:border-yellow-500/50 transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold">🚀</span>
                  </div>
                  <CardTitle className="text-white text-center">Empresa Tecnológica</CardTitle>
                  <CardDescription className="text-gray-400 text-center">
                    Pentesting + NIST 800-53
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-gray-300">
                    <div className="flex justify-between">
                      <span>Auditoría:</span>
                      <span className="text-red-400 font-medium">OWASP Top 10</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Vulnerabilidades:</span>
                      <span className="text-orange-400 font-medium">23 Resueltas</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Mejora:</span>
                      <span className="text-green-400 font-medium">+85% Seguridad</span>
                    </div>
                    <div className="pt-3 border-t border-slate-700">
                      <p className="text-gray-400 text-xs">
                        Pentesting completo de plataforma SaaS con más de 100K usuarios 
                        activos y certificación NIST.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-500/10 rounded-2xl p-8 border border-yellow-500/20">
                <h3 className="text-2xl font-bold text-white mb-6">Certificados de Calidad</h3>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 items-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-blue-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-blue-400 font-bold text-sm">ISO</span>
                    </div>
                    <div className="text-xs text-gray-400">ISO 27001</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-purple-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-purple-400 font-bold text-sm">NIST</span>
                    </div>
                    <div className="text-xs text-gray-400">800-53</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-green-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-green-400 font-bold text-sm">ENS</span>
                    </div>
                    <div className="text-xs text-gray-400">España</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-orange-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-orange-400 font-bold text-sm">IRAM</span>
                    </div>
                    <div className="text-xs text-gray-400">Argentina</div>
                  </div>
                  <div className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <span className="text-cyan-400 font-bold text-sm">IRAM</span>
                    </div>
                    <div className="text-xs text-gray-400">Argentina</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contacto" className="py-20 bg-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Contacto</span>{' '}
                Técnico
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Conéctese con nuestros especialistas para una consulta técnica personalizada. 
                Soporte profesional 24/7 para infraestructuras críticas.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold text-white mb-8">Información Corporativa</h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-xl text-cyan-400">🏢</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Sede Corporativa</h4>
                      <p className="text-gray-400">
                        Av. Corrientes 1234, Piso 15<br />
                        CABA, Buenos Aires - Argentina<br />
                        CP: C1043AAZ
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-xl text-blue-400">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Soporte Técnico</h4>
                      <p className="text-gray-400">
                        +54 11 4000-5000 (Arg)<br />
                        +1 555-QASOFT (Int)<br />
                        Emergencias SOC: 24/7
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-xl text-green-400">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-1">Contacto Ejecutivo</h4>
                      <p className="text-gray-400">
                        contacto@qatech.com.ar<br />
                        soc@qatech.com.ar<br />
                        certificaciones@qatech.com.ar
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-800/50 border border-slate-700 p-6 rounded-xl">
                  <h4 className="font-semibold text-white mb-4">Atención al Cliente</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Lunes - Viernes:</span>
                      <span className="text-white font-medium">9:00 - 18:00 ART</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Sábados:</span>
                      <span className="text-white font-medium">9:00 - 13:00 ART</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Emergencias SOC:</span>
                      <span className="text-green-400 font-medium">24/7 - 365 días</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">WhatsApp Corporativo:</span>
                      <span className="text-cyan-400 font-medium">+54 9 11 XXXX-XXXX</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-slate-800/30 border border-slate-700 rounded-2xl shadow-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Solicitud de Consulta</h3>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                        Nombre Completo *
                      </label>
                      <Input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-900/50 border-slate-600 text-white placeholder-gray-500 focus:border-cyan-500"
                        placeholder="Ej: Juan Pérez"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                        Email Corporativo *
                      </label>
                      <Input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-900/50 border-slate-600 text-white placeholder-gray-500 focus:border-cyan-500"
                        placeholder="juan@empresa.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Empresa / Institución *
                    </label>
                    <Input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-900/50 border-slate-600 text-white placeholder-gray-500 focus:border-cyan-500"
                      placeholder="Nombre de la organización"
                    />
                  </div>

                  <div>
                    <label htmlFor="serviceType" className="block text-sm font-medium text-gray-300 mb-2">
                      Servicio de Interés *
                    </label>
                    <Select value={formData.serviceType} onValueChange={handleSelectChange}>
                      <SelectTrigger className="w-full bg-slate-900/50 border-slate-600 text-white focus:border-cyan-500">
                        <SelectValue placeholder="Seleccione un servicio" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-900 border-slate-600">
                        <SelectItem value="ciberseguridad" className="text-white">Ciberseguridad Integral</SelectItem>
                        <SelectItem value="certificacion" className="text-white">Certificación ISO/NIST</SelectItem>
                        <SelectItem value="monitoreo" className="text-white">Monitoreo SOC 24/7</SelectItem>
                        <SelectItem value="consultoria" className="text-white">Consultoría Estratégica</SelectItem>
                        <SelectItem value="pentesting" className="text-white">Pentesting & OWASP</SelectItem>
                        <SelectItem value="general" className="text-white">Consulta General</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Descripción del Requerimiento *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-900/50 border-slate-600 text-white placeholder-gray-500 focus:border-cyan-500 resize-none"
                      placeholder="Detalle su requerimiento técnico, infraestructura actual, cantidad de usuarios, normativas aplicables, etc."
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white py-4 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-xl"
                  >
                    Enviar Solicitud de Consulta
                  </Button>
                </form>
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">
                    * Campos obligatorios. Respuesta técnica garantizada en menos de 4 horas hábiles.
                  </p>
                  <p className="text-xs text-gray-600 mt-2">
                    Sus datos están protegidos bajo Ley 25.326 de Protección de Datos Personales.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-black text-gray-400 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">QA</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-white">
                    <span className="text-cyan-400">QA</span>SOFT
                  </div>
                  <div className="text-xs text-gray-500">QATECH</div>
                </div>
              </div>
              <p className="text-gray-500 mb-4 text-sm">
                Líderes en ciberseguridad integral, certificación de plataformas digitales 
                y monitoreo continuo de infraestructuras críticas.
              </p>
              <div className="text-xs text-gray-600">
                <div>Buenos Aires, Argentina</div>
                <div>Soporte técnico 24/7</div>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Ciberseguridad</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Pentesting & OWASP</a></li>
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">SOC & SIEM</a></li>
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Protección de Datos</a></li>
                <li><a href="#servicios" className="hover:text-cyan-400 transition-colors">Auditorías Éticas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Certificaciones</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#certificaciones" className="hover:text-cyan-400 transition-colors">ISO 27001 / 22301</a></li>
                <li><a href="#certificaciones" className="hover:text-cyan-400 transition-colors">NIST 800-53</a></li>
                <li><a href="#certificaciones" className="hover:text-cyan-400 transition-colors">ENS España</a></li>
                <li><a href="#certificaciones" className="hover:text-cyan-400 transition-colors">IRAM Argentina</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">Empresa</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#casos-exito" className="hover:text-cyan-400 transition-colors">Casos de Éxito</a></li>
                <li><a href="#consultoria" className="hover:text-cyan-400 transition-colors">Consultoría</a></li>
                <li><a href="#contacto" className="hover:text-cyan-400 transition-colors">Contacto</a></li>
                <li><a href="#" className="hover:text-cyan-400 transition-colors">Términos de Servicio</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm text-gray-500">
                © 2024 QASOFT - QATECH. Tecnología bajo control. Todos los derechos reservados.
              </p>
              <div className="flex items-center space-x-4 mt-4 md:mt-0">
                <Badge variant="outline" className="border-gray-700 text-gray-500 text-xs">
                  ISO 27001 Certified
                </Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-500 text-xs">
                  NIST Compliant
                </Badge>
                <Badge variant="outline" className="border-gray-700 text-gray-500 text-xs">
                  Argentina
                </Badge>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}