import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaCookies = () => (
  <div className="min-h-screen">
    <Header />
    <main className="container max-w-3xl py-16 md:py-24 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">Política de Cookies</h1>

      <p className="text-muted-foreground leading-relaxed">
        En cumplimiento de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y de
        Comercio Electrónico (LSSI-CE), y del Reglamento (UE) 2016/679 (RGPD), le informamos sobre el uso de
        cookies en este sitio web.
      </p>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">1. ¿Qué son las cookies?</h2>
        <p className="text-muted-foreground leading-relaxed">
          Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un
          sitio web. Permiten al sitio recordar información sobre la visita, como preferencias de idioma,
          configuraciones o datos de sesión, facilitando una mejor experiencia de navegación.
        </p>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">2. Tipos de cookies utilizadas</h2>
        <p className="text-muted-foreground leading-relaxed">
          Este sitio web puede utilizar los siguientes tipos de cookies:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-2 leading-relaxed">
          <li>
            <strong>Cookies técnicas o necesarias:</strong> permiten la navegación por el sitio web y el uso de sus
            funciones básicas. Sin ellas, el sitio no podría funcionar correctamente.
          </li>
          <li>
            <strong>Cookies analíticas:</strong> recopilan información sobre el uso del sitio web de forma anónima o
            agregada, con el fin de medir y mejorar su rendimiento. Ejemplo: Google Analytics.
          </li>
          <li>
            <strong>Cookies de preferencias:</strong> permiten recordar las opciones seleccionadas por el usuario,
            como el idioma o la región.
          </li>
          <li>
            <strong>Cookies de marketing o publicitarias:</strong> se utilizan para mostrar anuncios relevantes
            al usuario y medir la eficacia de campañas publicitarias. Actualmente, este sitio web no utiliza cookies
            de marketing.
          </li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">3. Cookies de terceros</h2>
        <p className="text-muted-foreground leading-relaxed">
          Es posible que, al utilizar servicios de terceros integrados en el sitio web (como herramientas analíticas
          o formularios), estos terceros instalen sus propias cookies en el dispositivo del usuario. El titular del
          sitio web no tiene control sobre dichas cookies. Se recomienda consultar las políticas de privacidad de
          cada proveedor externo.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">4. Gestión y configuración de cookies</h2>
        <p className="text-muted-foreground leading-relaxed">
          El usuario puede configurar su navegador para aceptar, rechazar o eliminar cookies. A continuación, se
          facilitan enlaces a las instrucciones de los navegadores más comunes:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 leading-relaxed">
          <li>
            <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer"
              className="text-primary hover:underline">Google Chrome</a>
          </li>
          <li>
            <a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias"
              target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Mozilla Firefox</a>
          </li>
          <li>
            <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank"
              rel="noopener noreferrer" className="text-primary hover:underline">Safari</a>
          </li>
          <li>
            <a href="https://support.microsoft.com/es-es/microsoft-edge/eliminar-cookies-en-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09"
              target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Microsoft Edge</a>
          </li>
        </ul>
        <p className="text-muted-foreground leading-relaxed">
          Tenga en cuenta que la desactivación de cookies puede afectar al funcionamiento de algunas áreas del
          sitio web.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">5. Consentimiento</h2>
        <p className="text-muted-foreground leading-relaxed">
          Al acceder al sitio web por primera vez, se mostrará un banner informativo sobre el uso de cookies,
          ofreciendo al usuario la posibilidad de aceptar, rechazar o configurar sus preferencias. El consentimiento
          del usuario se considera otorgado cuando acepta expresamente el uso de cookies.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">6. Actualización de la política</h2>
        <p className="text-muted-foreground leading-relaxed">
          La presente Política de Cookies puede ser actualizada en cualquier momento para adaptarla a novedades
          legislativas o cambios en el sitio web. Se recomienda revisarla periódicamente. La fecha de la última
          actualización se indicará al final de este documento.
        </p>
        <p className="text-sm text-muted-foreground mt-4">
          <strong>Última actualización:</strong> [FECHA]
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default PoliticaCookies;
