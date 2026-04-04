import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AvisoLegal = () => (
  <div className="min-h-screen">
    <Header />
    <main className="container max-w-3xl py-16 md:py-24 space-y-10">
      <h1 className="text-3xl md:text-4xl font-bold text-foreground">Aviso Legal</h1>

      <p className="text-muted-foreground leading-relaxed">
        En cumplimiento de lo establecido en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la
        Información y de Comercio Electrónico (LSSI-CE), se informa a los usuarios del presente sitio web de los
        datos identificativos del titular responsable del mismo.
      </p>

      {/* 1 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">1. Datos identificativos del titular</h2>
        <ul className="list-disc pl-6 text-muted-foreground space-y-1 leading-relaxed">
          <li><strong>Titular:</strong> [NOMBRE COMPLETO O RAZÓN SOCIAL]</li>
          <li><strong>NIF/CIF:</strong> [NIF/CIF]</li>
          <li><strong>Domicilio social o profesional:</strong> [DIRECCIÓN COMPLETA]</li>
          <li><strong>Correo electrónico:</strong> [EMAIL]</li>
          <li><strong>Teléfono:</strong> [TELÉFONO]</li>
          <li><strong>Nombre comercial:</strong> CheckBOX Vending</li>
          <li><strong>Dominio web:</strong> [DOMINIO]</li>
        </ul>
      </section>

      {/* 2 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">2. Objeto del sitio web</h2>
        <p className="text-muted-foreground leading-relaxed">
          El presente sitio web tiene como finalidad ofrecer información corporativa y comercial sobre los servicios
          de CheckBOX Vending, una solución de vending inteligente orientada al sector hotelero. Asimismo, permite
          el contacto profesional con hoteles, cadenas hoteleras y potenciales socios interesados en los servicios
          ofrecidos.
        </p>
      </section>

      {/* 3 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">3. Condiciones de uso</h2>
        <p className="text-muted-foreground leading-relaxed">
          El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena de las presentes
          condiciones. El usuario se compromete a hacer un uso adecuado del sitio, de conformidad con la ley, la
          buena fe y el orden público, y a no emplearlo para realizar actividades ilícitas o contrarias a los
          derechos de terceros. La navegación por el sitio web supone la aceptación íntegra del presente Aviso Legal.
        </p>
      </section>

      {/* 4 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">4. Propiedad intelectual e industrial</h2>
        <p className="text-muted-foreground leading-relaxed">
          Todos los contenidos del sitio web, incluyendo textos, imágenes, logotipos, marcas, estructura, diseños,
          gráficos y demás elementos, están protegidos por las leyes de propiedad intelectual e industrial vigentes
          en España. Queda prohibida su reproducción, distribución, comunicación pública o transformación total o
          parcial sin la autorización expresa del titular, salvo para uso personal y privado.
        </p>
      </section>

      {/* 5 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">5. Responsabilidad</h2>
        <p className="text-muted-foreground leading-relaxed">
          El titular no se hace responsable de los errores u omisiones en los contenidos del sitio web, ni de los
          daños derivados del uso del mismo. Tampoco garantiza la disponibilidad continua e ininterrumpida del sitio
          web, ni se responsabiliza de los daños que puedan derivarse de interferencias, interrupciones, virus
          informáticos, averías o desconexiones en el funcionamiento del sistema. El titular no se responsabiliza del
          uso indebido que terceros puedan hacer de la información publicada.
        </p>
      </section>

      {/* 6 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">6. Enlaces externos</h2>
        <p className="text-muted-foreground leading-relaxed">
          El sitio web puede contener enlaces a páginas de terceros. El titular no asume ninguna responsabilidad
          sobre los contenidos, políticas de privacidad o prácticas de dichos sitios externos. El acceso a través de
          enlaces se realiza bajo la exclusiva responsabilidad del usuario.
        </p>
      </section>

      {/* 7 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">7. Precios e información comercial</h2>
        <p className="text-muted-foreground leading-relaxed">
          Cuando el sitio web haga referencia a precios, tarifas u otras condiciones económicas, dicha información
          tendrá carácter orientativo e informativo, salvo que se indique expresamente lo contrario. En todo caso, se
          indicará de forma clara si los importes incluyen o no los impuestos aplicables. La información comercial no
          constituye una oferta vinculante salvo indicación expresa.
        </p>
      </section>

      {/* 8 */}
      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-foreground">8. Legislación aplicable y jurisdicción</h2>
        <p className="text-muted-foreground leading-relaxed">
          El presente Aviso Legal se rige por la legislación española. Para la resolución de cualquier controversia
          derivada del uso de este sitio web, las partes se someten a los juzgados y tribunales del domicilio del
          titular, salvo que la normativa aplicable establezca otra jurisdicción.
        </p>
      </section>
    </main>
    <Footer />
  </div>
);

export default AvisoLegal;
