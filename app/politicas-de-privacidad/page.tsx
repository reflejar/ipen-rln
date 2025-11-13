import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export const metadata = {
  title: "Política de Privacidad | Reescribiendo la Narrativa",
  description:
    "Leé la política de privacidad de Reescribiendo la Narrativa y conocé cómo se manejan los datos personales.",
};

export default function PoliticaDePrivacidad() {
  return (
    <section className="bg-[url('/img/bg-fondo_tyc.webp')] w-full bg-cover bg-center min-h-screen pt-16">
      <Card className="max-w-7xl pt-16 mx-auto border-none py-16 px-6 bg-transparent">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center mb-4">
            Política de Privacidad
          </CardTitle>
        </CardHeader>

        <CardContent className="space-y-6 leading-relaxed">
          <h2 className="text-xl text-blue-500 font-semibold mt-8">
            1. Objeto de la Política de Privacidad
          </h2>
          <p>
            Iniciativa Puentes por los Estudiantes de Nicaragua (en adelante,
            “Ipen” o la “Organización”), con domicilio en la ciudad de San José,
            Costa Rica, tratará los datos personales de sus Peticionarios,
            Trabajadores y Colaboradores conforme a la presente política.
          </p>
          <p>
            En cumplimiento de sus deberes legales, Ipen, como Responsable del
            Tratamiento de los datos personales, informa su Política de
            Privacidad respecto al tratamiento de los datos personales que pueda
            recoger en ejercicio de sus actividades.
          </p>
          <p>
            Ipen se reserva el derecho a efectuar en cualquier momento las
            modificaciones o actualizaciones que considere oportunas a esta
            Política, solicitando las autorizaciones correspondientes cuando los
            cambios impliquen nuevas finalidades o alteren la identidad del
            Responsable.
          </p>

          <h2 className="text-xl text-blue-500 font-semibold mt-8">
            2. Tratamiento de Datos Personales
          </h2>
          <p>
            La recolección y tratamiento de los datos personales por parte de
            Ipen se realizará conforme a la Ley 8968 del año 2011. En el marco
            de su relación con Ipen, podrán solicitarse datos como nombre,
            contacto, historial de peticiones y cierta información demográfica.
            También se almacenará la dirección IP de los Peticionarios.
          </p>
          <p>
            Podrá solicitarse información que permita conocer la posición
            política o inclinación religiosa de los Peticionarios para completar
            encuestas o solicitudes, aunque en ningún caso será obligatorio
            revelar datos sensibles.
          </p>
          <p>
            Ipen recopila y utiliza los datos con el fin de comunicarse con los
            miembros de su red, promover campañas, interactuar con responsables
            políticos y medios, y desarrollar nuevos métodos para el
            fortalecimiento de su misión. Ipen se compromete a observar las
            medidas necesarias para garantizar la confidencialidad, secreto e
            integridad de los datos personales tratados.
          </p>

          <h2 className="text-xl text-blue-500 font-semibold mt-8">
            3. Finalidad del Tratamiento de Datos Personales
          </h2>
          <p>
            Los datos personales se incorporarán a las bases de datos
            correspondientes y podrán ser utilizados con las siguientes
            finalidades:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              Facilitar que los Peticionarios firmen o participen en peticiones
              y encuestas.
            </li>
            <li>
              Verificar la capacidad de los Peticionarios para participar.
            </li>
            <li>
              Brindar los servicios e información solicitados y administrar su
              participación en programas, eventos y actividades.
            </li>
            <li>
              Enviar información sobre el trabajo y campañas de Ipen a través de
              correo electrónico, teléfono o redes sociales.
            </li>
            <li>
              Crear campañas y acciones de comunicación relacionadas con las
              iniciativas de la organización.
            </li>
            <li>
              Comprobar la identidad de los Peticionarios y gestionar su
              registro.
            </li>
            <li>
              Administrar y mejorar el sitio web mediante el análisis del uso y
              tráfico.
            </li>
            <li>
              Cumplir obligaciones legales, prevenir fraudes y garantizar la
              seguridad de la información.
            </li>
          </ul>
          <p>
            El tratamiento de datos personales de Trabajadores y Colaboradores
            incluirá la ejecución de contratos, gestión de información laboral y
            control de acceso a instalaciones, entre otros fines legítimos.
          </p>

          <h2 className="text-xl text-blue-500 font-semibold mt-8">
            4. Derechos de los Titulares de Datos Personales
          </h2>
          <p>
            Los titulares de los datos personales podrán ejercer los siguientes
            derechos:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Conocer, actualizar y rectificar sus datos personales.</li>
            <li>Solicitar prueba de la autorización otorgada.</li>
            <li>Ser informados sobre el tratamiento de sus datos.</li>
            <li>
              Presentar quejas ante la autoridad competente por infracciones a
              la normativa.
            </li>
            <li>
              Revocar la autorización y solicitar la eliminación de sus datos.
            </li>
          </ul>

          <h2 className="text-xl text-blue-500 font-semibold mt-8">
            5. Información sobre el Ejercicio de Derechos
          </h2>
          <p>
            Ipen ha designado al área de Comunicaciones como responsable del
            trámite de solicitudes o reclamos relacionados con la protección de
            datos personales. Los titulares podrán ejercer sus derechos enviando
            un correo electrónico a{" "}
            <a
              href="mailto:contacto@ipuentes.org"
              className="text-blue-500 underline"
            >
              contacto@ipuentes.org
            </a>{" "}
            con la referencia “Protección de Datos de Carácter Personal”.
          </p>
          <p>
            La comunicación deberá incluir: nombre, apellidos, número de cédula
            o documento válido y la descripción de la solicitud.
          </p>

          <h3 className="text-lg font-semibold mt-6">Consultas</h3>
          <p>
            Las consultas serán atendidas en un máximo de diez (10) días hábiles
            desde su recepción. Este plazo podrá ampliarse por cinco (5) días
            hábiles adicionales, notificando al Titular los motivos de la
            demora.
          </p>

          <h3 className="text-lg font-semibold mt-6">Reclamos</h3>
          <p>
            Los reclamos serán resueltos en un plazo máximo de quince (15) días
            hábiles contados a partir de su recepción completa. En caso de que
            el reclamo esté incompleto, Ipen notificará al Titular dentro de los
            cinco (5) días hábiles siguientes para que subsane las fallas dentro
            de los dos (2) meses siguientes.
          </p>
          <p>
            Si no se completa la información en ese plazo, se considerará
            desistida la reclamación. El término podrá extenderse hasta ocho (8)
            días hábiles adicionales si es necesario, informando los motivos al
            Titular.
          </p>
        </CardContent>
      </Card>
    </section>
  );
}
