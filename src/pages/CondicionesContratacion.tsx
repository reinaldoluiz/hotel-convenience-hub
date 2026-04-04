import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CondicionesContratacion = () => (
  <div className="min-h-screen">
    <Header />
    <main className="container max-w-3xl py-16 md:py-24 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">Condiciones de Contratación</h1>

      <p className="text-muted-foreground leading-relaxed">
        Las presentes Condiciones de Contratación regulan la relación comercial entre el titular del sitio web y
        los hoteles, cadenas hoteleras o profesionales del sector que contraten los servicios de CheckBOX Vending.
        El acceso a los servicios implica la aceptación de estas condiciones.
      </p>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">1. Identificación del prestador</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 leading-relaxed">
          <li><strong>Titular:</strong> [NOMBRE COMPLETO O RAZÓN SOCIAL]</li>
          <li><strong>NIF/CIF:</strong> [NIF/CIF]</li>
          <li><strong>Domicilio:</strong> [DIRECCIÓN COMPLETA]</li>
          <li><strong>Email:</strong> [EMAIL]</li>
          <li><strong>Teléfono:</strong> [TELÉFONO]</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">2. Objeto del servicio</h2>
        <p className="text-muted-foreground leading-relaxed">
          CheckBOX Vending ofrece un servicio de vending inteligente diseñado para el sector hotelero, que incluye
          la instalación, gestión y mantenimiento de máquinas de vending automatizadas en las instalaciones del
          hotel contratante. El alcance concreto del servicio será definido en el acuerdo o propuesta comercial
          correspondiente.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">3. Ámbito de aplicación</h2>
        <p className="text-muted-foreground leading-relaxed">
          Estas condiciones aplican a todas las contrataciones realizadas entre CheckBOX Vending y sus clientes
          profesionales (B2B). No se dirigen a consumidores finales. Las partes podrán acordar condiciones
          particulares que prevalecerán sobre las presentes en caso de discrepancia.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">4. Proceso de contratación</h2>
        <p className="text-muted-foreground leading-relaxed">
          El proceso de contratación se inicia con una solicitud de información o de piloto a través del sitio web,
          correo electrónico u otro canal de contacto. Tras la evaluación del proyecto, CheckBOX Vending remitirá
          una propuesta comercial detallada. La contratación se formalizará mediante la aceptación por escrito de
          la propuesta o la firma de un contrato específico entre las partes.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">5. Precios y forma de pago</h2>
        <p className="text-muted-foreground leading-relaxed">
          Los precios de los servicios serán los indicados en la propuesta comercial correspondiente. Salvo
          indicación expresa en contrario, los precios publicados en el sitio web tienen carácter orientativo y no
          incluyen impuestos aplicables. Las condiciones de pago se establecerán en el acuerdo o contrato suscrito
          entre las partes.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">6. Duración y resolución</h2>
        <p className="text-muted-foreground leading-relaxed">
          La duración del servicio se establecerá en la propuesta comercial o contrato suscrito. En caso de
          programa piloto, se definirá un periodo de prueba con condiciones específicas. Cualquiera de las partes
          podrá resolver el contrato en los términos previstos en el acuerdo, respetando los plazos de preaviso
          establecidos.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">7. Obligaciones de las partes</h2>
        <p className="text-muted-foreground leading-relaxed">
          <strong>CheckBOX Vending</strong> se compromete a instalar, mantener y gestionar las máquinas de vending
          conforme a lo acordado, garantizando su correcto funcionamiento y el abastecimiento de productos.
        </p>
        <p className="text-muted-foreground leading-relaxed">
          <strong>El hotel contratante</strong> se compromete a facilitar el acceso a las instalaciones, proporcionar
          la conexión eléctrica necesaria y colaborar en la correcta implantación del servicio según las condiciones
          acordadas.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">8. Responsabilidad</h2>
        <p className="text-muted-foreground leading-relaxed">
          CheckBOX Vending no será responsable de los daños derivados de un uso indebido de las máquinas por parte
          de los huéspedes o del personal del hotel, ni de interrupciones del servicio causadas por circunstancias
          ajenas a su control (fuerza mayor, cortes de suministro, etc.). La responsabilidad de cada parte se
          limitará a lo establecido en el contrato suscrito.
        </p>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">9. Confidencialidad</h2>
        <p className="text-muted-foreground leading-relaxed">
          Ambas partes se comprometen a mantener la confidencialidad de la información comercial, técnica o
          estratégica intercambiada durante la relación contractual, no pudiendo divulgarla a terceros sin
          consentimiento previo por escrito.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">10. Protección de datos</h2>
        <p className="text-muted-foreground leading-relaxed">
          El tratamiento de datos personales derivado de la relación contractual se regirá por lo establecido en la{" "}
          <a href="/politica-de-privacidad" className="text-primary hover:underline">Política de Privacidad</a> del
          sitio web y la normativa vigente en materia de protección de datos.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">11. Modificaciones</h2>
        <p className="text-muted-foreground leading-relaxed">
          El titular se reserva el derecho de modificar las presentes Condiciones de Contratación en cualquier
          momento. Las modificaciones no afectarán a los contratos ya formalizados, salvo acuerdo expreso entre las
          partes.
        </p>
      </section>

      {/* 12 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">12. Legislación aplicable y jurisdicción</h2>
        <p className="text-muted-foreground leading-relaxed">
          Las presentes condiciones se rigen por la legislación española. Para la resolución de cualquier
          controversia, las partes se someten a los juzgados y tribunales del domicilio del titular, renunciando
          expresamente a cualquier otro fuero que pudiera corresponderles.
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default CondicionesContratacion;
