import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Términos y Condiciones | Reescribiendo la Narrativa",
  description:
    "Leé los términos y condiciones de uso de la plataforma Reescribiendo la Narrativa.",
};

export default function TerminosYCondiciones() {
  return (
    <section className="bg-[url('/img/bg-fondo_tyc.webp')] w-full bg-cover bg-center min-h-screen pt-16">
      <Card className="max-w-7xl pt-16 mx-auto border-none py-16 px-6 bg-transparent">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-4">
            Términos y Condiciones de Uso
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 leading-relaxed ">
          <h2 className="text-xl text-blue-500 font-semibold mt-8">
            Descripción
          </h2>
          <p>
            Los siguientes Términos y Condiciones regulan el uso de la
            plataforma <strong>Reescribiendo la Narrativa</strong>, un sitio web
            dedicado a combatir la desinformación y empoderar a la juventud
            nicaragüense migrante en Costa Rica, capacitándola en el uso del
            periodismo como herramienta de cambio.
          </p>

          <p>
            El registro y uso de la plataforma por parte de los usuarios implica
            la aceptación absoluta de los presentes Términos y Condiciones y de
            la <strong>Política de Privacidad</strong>.
          </p>

          <h2 className="text-xl text-blue-500 font-semibold mt-8">
            Usuarios, Obligaciones y Condiciones
          </h2>
          <p>
            El Usuario que desee publicar un artículo deberá enviar su propuesta
            por correo electrónico, respetando estos Términos y Condiciones de
            uso. Las infracciones, por acción u omisión, darán derecho al
            administrador a no publicar los artículos enviados.
          </p>
          <p>
            El Usuario entiende y acepta que el material o contenido que
            proponga o publique podría ser utilizado por otros usuarios del
            sitio web y/o por terceros ajenos, sin que el administrador sea
            responsable por tales usos.
          </p>
          <p>
            El Usuario se compromete a usar el sitio web de forma correcta y
            lícita. El administrador podrá retirar o no publicar contenido que
            considere ofensivo, ilegal, violatorio de derechos de terceros,
            contrario a la moral y buenas costumbres, o que amenace la seguridad
            de otros usuarios. El criterio de publicación queda sujeto a los
            administradores, quienes podrán solicitar modificaciones al autor o
            autora para su validación previa.
          </p>
          <p>
            La adecuada utilización de los recursos de Internet es, sin
            excepción, responsabilidad exclusiva del Usuario.
          </p>

          <h2 className="text-xl text-blue-500 font-semibold mt-8">
            Actividades Prohibidas
          </h2>
          <p>
            Quedan expresamente prohibidas las siguientes actividades al momento
            de redactar o enviar artículos, sin perjuicio de las prohibiciones
            generales anteriormente mencionadas:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Hostigar, acosar, amenazar, acechar o realizar actos de vandalismo
              hacia otros usuarios.
            </li>
            <li>Infringir los derechos a la intimidad de otros usuarios.</li>
            <li>
              Solicitar información personal identificable de otros usuarios con
              el propósito de hostigar, atacar o violar su privacidad.
            </li>
            <li>
              Publicar, de manera intencionada o con conocimiento, injurias o
              calumnias.
            </li>
            <li>
              Publicar contenido falso o inexacto con intención de engañar.
            </li>
            <li>
              Usurpar la identidad de otro usuario o representar falsamente una
              afiliación con individuos o entidades.
            </li>
            <li>
              Promover, defender o mostrar pornografía, obscenidad, vulgaridad,
              blasfemia, odio, fanatismo, racismo o violencia.
            </li>
          </ul>
          <p>
            En caso de sufrir alguna de estas situaciones, el usuario podrá
            comunicarse con el Administrador a través de{" "}
            <strong>Reescribiendo la Narrativa</strong>.
          </p>

          <h2 className="text-xl text-blue-500 font-semibold mt-8">
            Ley Aplicable y Jurisdicción
          </h2>
          <p>
            Los presentes Términos y Condiciones se rigen por las leyes de la
            República Argentina. El Administrador y el Usuario se someten a la
            jurisdicción de los Tribunales Nacionales en lo Contencioso
            Administrativo con asiento en la Ciudad Autónoma de Buenos Aires.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
