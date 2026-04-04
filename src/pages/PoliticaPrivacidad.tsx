import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PoliticaPrivacidad = () => (
  <div className="min-h-screen">
    <Header />
    <main className="container max-w-3xl py-16 md:py-24 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">Política de Privacidad</h1>

      <p className="text-muted-foreground leading-relaxed">
        La presente Política de Privacidad informa a los usuarios sobre el tratamiento de datos personales que se
        realiza a través de este sitio web, de conformidad con el Reglamento (UE) 2016/679 General de Protección de
        Datos (RGPD) y la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de
        los derechos digitales (LOPDGDD).
      </p>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">1. Responsable del tratamiento</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 leading-relaxed">
          <li><strong>Responsable:</strong> [NOMBRE COMPLETO O RAZÓN SOCIAL]</li>
          <li><strong>NIF/CIF:</strong> [NIF/CIF]</li>
          <li><strong>Dirección:</strong> [DIRECCIÓN COMPLETA]</li>
          <li><strong>Email:</strong> [EMAIL]</li>
          <li><strong>Teléfono:</strong> [TELÉFONO]</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">2. Finalidad del tratamiento</h2>
        <p className="text-muted-foreground leading-relaxed">
          Los datos personales recabados a través de formularios, correo electrónico u otros canales del sitio web
          serán tratados con las siguientes finalidades:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 leading-relaxed">
          <li>Atender solicitudes de información sobre los servicios de CheckBOX Vending.</li>
          <li>Gestionar comunicaciones comerciales o precontractuales relacionadas con CheckBOX Vending.</li>
          <li>Gestionar solicitudes de demo, piloto o contacto profesional.</li>
          <li>Mejorar la atención a clientes potenciales y el servicio ofrecido.</li>
        </ul>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">3. Base jurídica</h2>
        <p className="text-muted-foreground leading-relaxed">
          El tratamiento de los datos se fundamenta en las siguientes bases legales:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 leading-relaxed">
          <li>El consentimiento del usuario, otorgado al enviar sus datos a través de los formularios o canales de
            contacto del sitio web.</li>
          <li>La ejecución o aplicación de medidas precontractuales a petición del interesado.</li>
          <li>El cumplimiento de obligaciones legales, cuando corresponda.</li>
        </ul>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">4. Categorías de datos tratados</h2>
        <p className="text-muted-foreground leading-relaxed">
          Los datos personales que podrán ser tratados incluyen:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 leading-relaxed">
          <li>Nombre y apellidos</li>
          <li>Empresa u hotel</li>
          <li>Cargo profesional</li>
          <li>Correo electrónico</li>
          <li>Teléfono</li>
          <li>Contenido del mensaje</li>
          <li>Cualquier otro dato facilitado voluntariamente por el usuario</li>
        </ul>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">5. Conservación de los datos</h2>
        <p className="text-muted-foreground leading-relaxed">
          Los datos personales se conservarán durante el tiempo necesario para atender la solicitud del usuario,
          mantener la relación precontractual o contractual, o cumplir con las obligaciones legales aplicables. Una
          vez cumplida la finalidad, los datos serán bloqueados o eliminados conforme a la normativa vigente.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">6. Destinatarios</h2>
        <p className="text-muted-foreground leading-relaxed">
          Los datos personales no serán cedidos a terceros, salvo obligación legal o cuando sea estrictamente
          necesario para la prestación de servicios relacionados con el alojamiento web, correo electrónico o
          herramientas tecnológicas utilizadas por el titular, en cuyo caso existirá un contrato de encargado de
          tratamiento que garantice la protección de los datos.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">7. Transferencias internacionales</h2>
        <p className="text-muted-foreground leading-relaxed">
          En caso de que algún proveedor tecnológico se encuentre ubicado fuera del Espacio Económico Europeo (EEE),
          se adoptarán las garantías adecuadas conforme a la normativa aplicable, como cláusulas contractuales tipo o
          decisiones de adecuación de la Comisión Europea.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">8. Derechos del usuario</h2>
        <p className="text-muted-foreground leading-relaxed">
          El usuario tiene derecho a:
        </p>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 leading-relaxed">
          <li><strong>Acceso:</strong> conocer qué datos personales se están tratando.</li>
          <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos o incompletos.</li>
          <li><strong>Supresión:</strong> solicitar la eliminación de los datos cuando ya no sean necesarios.</li>
          <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos en determinadas circunstancias.</li>
          <li><strong>Limitación:</strong> solicitar la limitación del tratamiento en los supuestos previstos.</li>
          <li><strong>Portabilidad:</strong> recibir los datos en un formato estructurado y de uso común.</li>
          <li><strong>Retirada del consentimiento:</strong> retirar el consentimiento en cualquier momento, sin que
            ello afecte a la licitud del tratamiento previo.</li>
        </ul>
      </section>

      {/* 9 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">9. Cómo ejercer los derechos</h2>
        <p className="text-muted-foreground leading-relaxed">
          Los derechos podrán ejercerse mediante comunicación escrita dirigida a <strong>[EMAIL]</strong>,
          acompañando copia de un documento identificativo válido (DNI, NIE o pasaporte). El responsable atenderá la
          solicitud en el plazo máximo de un mes desde su recepción.
        </p>
      </section>

      {/* 10 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">10. Reclamación ante la AEPD</h2>
        <p className="text-muted-foreground leading-relaxed">
          Si el usuario considera que sus derechos no han sido debidamente atendidos, tiene derecho a presentar una
          reclamación ante la Agencia Española de Protección de Datos (AEPD), con sede en C/ Jorge Juan, 6, 28001
          Madrid, o a través de su sede electrónica:{" "}
          <a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer"
            className="text-primary hover:underline">www.aepd.es</a>.
        </p>
      </section>

      {/* 11 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">11. Seguridad de los datos</h2>
        <p className="text-muted-foreground leading-relaxed">
          El responsable del tratamiento ha adoptado las medidas técnicas y organizativas necesarias para garantizar
          la seguridad de los datos personales y evitar su alteración, pérdida, acceso no autorizado o tratamiento
          indebido, teniendo en cuenta el estado de la tecnología, la naturaleza de los datos y los riesgos
          derivados del tratamiento.
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default PoliticaPrivacidad;
